# Funding Payments

Perpetual contracts rely on a scheduled payment between longs and shorts known as **funding payments**. Funding payments are meant to converge the price between the derivative contract (mark price) and its underlying (index price). 


Funding payments on Nibi-Perps occur every half-hour. This setup is analogous to a traditional future that expires once a day. If a perp trades consistently at 2% above its underlying index price, the funding payments would amount to 2% of the position size after a full day.

If the funding rate is positive, mark price is greater than index price and longs pay shorts. Nibi-Perps automatically deducts the funding payment amount from the margin of the long positions.

Here, position size refers to amount of base asset represented by the derivative. I.e., a BTC:USD perp with 7 BTC of exposure would have a position size of 7.

<!-- This document doesn’t attempt to describe funding payments and why they’re important for perps. The necessary background information can be found here. -->

## Price Divergence

When the mark price deviates from the index price, there is a **price divergence** calculated as 

$$ 
D := \frac{\Delta P}{P_{\text{index}}}
= \frac{ P_{\text{mark} } - P_{ \text{index}} }{ P_{\text{index}} }
$$

where $D$ is the price divergence (unitless), $P_m$ is the mark price (units of USDC/base), and $P_{\text{index}}$ is the index price (units of USDC/base). When people refer to the “funding rate”, they are referring to the price divergence.

We call the term, $\Delta P = P_{\text{mark}} - P_{\text{index}}$, the **premium**.

## Funding Payment

The funding payment a trader pays (or receives) is directly proportional to the price divergence and their position size at the time the funding payment is calculated (once every 30 minutes on the Nibiru Chain).

<div align="center">

| Variable | Description | 
| --- | --- | 
| $F_{\text{pay}}$ | funding payment in quote units (e.g. USD) | 
| $S$ | Size of all perp positions in base units | 
| $n$ | Payment frequency. The number of daily payments. | 

</div>

$$\begin{aligned}

& F_{\text{pay}} := S \cdot P_{\text{index}} \cdot 
  \left( F_{\text{rate}} \right) \\ 
&\quad\quad := 
  S * P_{\text{index}} * \frac{D}{n}

\end{aligned}$$

Given that the Nibiru has 30 minute funding intervals, there are n=48 payments per day.


<!-- Given that the Nibiru has 30 minute funding intervals, [there are n=48 payments per day.](https://www.notion.so/Funding-rate-frequency-8d5084ee07714ef5a953759e49f3cf36) 
TODO Grab any additional info from the notion link above.
-->

Substituting in $D = \frac{ \Delta P }{ P_{\text{index}} }$ and re-arranging terms, we get

$$ F_{\text{pay}} = S * \frac{\Delta P}{n}  $$

The term $\dfrac{\Delta P}{n}$ is called the **premium fraction**.  

## It's better to store premium fraction than price divergence.

Recall from our funding payment equations above that the funding payment is proportional to the index price *at the time of the funding rate interval*.

$$
F_{\text{pay}} = S*\frac{P_{\text{index}} *D}{n} = S * \frac{\Delta P}{n}
$$

Over several funding intervals, there will be new prices at which we compute the funding rate that needs to be applied to each position. There are two main approaches for performing this computation.

1. **Naive Approach**: One way to account for each of these payments is to store a history of the index price and divergence at each funding time. The unrealized payments could then be calculated and applied to the positiion the next time it undergoes a size change.

2. **Cumulative Approach**: Instead of keeping track of $D$ and $P_{\text{index}}$ separately, it’s more efficient to combine them together and store them as $\dfrac{D*P_{\text{index}}}{n} = \dfrac{\Delta P}{n}$. Then, we only need to store the term $\dfrac{\Delta P}{n}$ on-chain and multiply by $S$ when calculating the unrealized funding payment for a position.

Nibiru uses the cumulative approach and realizes funding payments lazily.

## Lazily Realized Funding Payments

A funding payment, $F_{\text{pay}}$ , occurs at a funding time $t$. The **net funding** for the exchange is then $F_{\text{pay},\text{EX}}$ 

$$
F_{\text{pay},\text{EX}} = \sum_{u\in\text{Users}} F_{\text{pay}}(u) = \sum_{u\in\text{Users}} S(u) * \frac{\Delta P}{n}
$$

Or more correctly accounting for time, we’d write

$$
F_{\text{pay},\text{EX}}(t) = \sum_{u\in\text{Users}} F_{\text{pay}}(u, t) 
$$

At the end of a funding rate interval, the premium fraction,  $\dfrac{\Delta P (t)}{n}$, is recomputed using the current mark and index TWAPs. Summing premium fractions over multiple funding intervals produces a **cumulative premium fraction (CPF)**. 

Nibiru stores the latest cumulative premium fraction on-chain to determine how much a trader should pay (or receive) in funding. 

$$
\text{cumulativePremiumFraction} = \sum_{t\in T} \frac{\Delta P (t)}{n} = \text{exchangeCPF}
$$

Every position keeps track of what the most recent CPF value when undergoing a state change. A state change for a position refers to the execution of any perp module message such as `MsgOpenPosition`, `MsgClosePosition`, `MsgAddMargin`, `MsgRemoveMargin`, or `MsgLiquidate`. 

The next time that position changes, the difference between the exchange’s latest CPF and the position’s CPF is the **unrealized premium fraction** that needs to be accounted for on the trader’s position. This value is equivalent to the percentage of the trader’s size that needs to be payed or received in funding.

$$
\text{unrealizedPremiumFraction = exchangeCPF - positionCPF}
$$

This method of allowing positions to backpay for missed funding payments is often referred to as “call by need” or “lazy evaluation” in the computing world. 

**Q: Why are funding payments realized lazily?** 

Funding payments are realized lazily to prevent a performance bottleneck. Realizing all funding payments at each funding interval would mean iterating over all of the positions for each market at each funding interval. As the number of positions and markets grows on Nibi-Perps, this computation becomes impractical. 

---

## Perpetual Funding Rates on dYdX

The key difference between Nibi-Perps and dYdX funding rates is that Nibiru uses $F_{\text{rate}} = \dfrac{D}{n}$. 

$$ \begin{aligned}

&(\text{Nibiru})\quad
&F_{\text{rate}} 
&= \frac{D}{n} \\
& & \\
&(\text{dYdX})\quad
&F_{\text{rate}} 
&= \frac{D}{n} + (I_{\text{rate}}*P_{\text{index}})  

\end{aligned}$$

The resulting funding payment on dYdX is

$$\begin{aligned}

F_\text{pay} 

&= S \cdot P_{\text{index}} \cdot 
\left(F_{\text{rate}}\right) \\

&= S \cdot P_{\text{index}} \cdot  
\left(\dfrac{P_{\text{mark}} - P_{\text{index}}}
{P_{\text{index}} \cdot n} + I_{\text{rate}}\right).

\end{aligned}$$

- $I_{\text{rate}}$ : base interest rate of 0.00125% = 0.125bps = 0.125e-4
- Source: [Perpetual Funding Rate - help.dydx.exchange](https://help.dydx.exchange/en/articles/4797443-perpetual-funding-rate)z

## References

- [The Cartoon Guide to Perps. Paradigm Research.](https://research.paradigm.xyz/cartoon-guide-to-perps)
- [Perpetual Funding Rate. help.dydx.exchange](https://help.dydx.exchange/en/articles/4797443-perpetual-funding-rate)
- [Funding on FTX Perps. help.ftx.com](https://help.ftx.com/hc/en-us/articles/360027946571-Funding)
- [Funding Payments on Perpetual Protocol. support.perp.com](https://support.perp.com/hc/en-us/articles/5257580412569-Funding-Payments)



