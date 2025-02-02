---
order: 1
---

# 🤝 Nibi-Perps

![Nibiru Perps Banner](../../img/nibi-perps-banner.png)

**Table of Contents —  Nibi-Perps**

- [🤝 Nibi-Perps](#-nibi-perps)
  - [Overview](#overview)
  - [Mark Price and Index Price](#mark-price-and-index-price)
  - [Leverage and Position Values](#leverage-and-position-values)
  - [Margin and Margin Ratio](#margin-and-margin-ratio)
    - [Cross Margin versus Isolated Margin](#cross-margin-versus-isolated-margin)
  - [Perp AMM Pools](#perp-amm-pools)
  - [Market Specific Parameters](#market-specific-parameters)
    - [Trade Limit Ratio](#trade-limit-ratio)
    - [Fluctuation Limit Ratio](#fluctuation-limit-ratio)
    - [Max Oracle Spread Limit Ratio](#max-oracle-spread-limit-ratio)
  - [Liquidations](#liquidations)
  - [Bad Debt](#bad-debt)
  - [Opening Positions](#opening-positions)
  - [Perp: NIBI Token](#perp-nibi-token)
  - [Perp VIP Trading Program](#perp-vip-trading-program)
  - [What are the risks? How are they addressed?](#what-are-the-risks-how-are-they-addressed)
    - [Ecosystem Fund (EF)](#ecosystem-fund-ef)
    - [Treasury](#treasury)

---

## Overview

Perps are the most popular financial instrument in the modern day crypto markets. Their trading volume across major exchanges reaches trillions of notional USD value each year.

While most perps exchanges are designed with off-chain order books, perp implementations can differ greatly from exchange to exchange. The Nibiru blockchain powers a decentralized and fully on-chain perpetual futures exchange called **NibiPerps**. There are several open problems Nibiru seeks to address with this exchange:

- **Minimize latency during periods of high volatility.**
- **Minimize the imbalance in open interest.**
- **Increase the number of unique traders on the platform.**
- **Reduce the bleeding of the Ecosystem Fund**: One of the top priorities on the Nibiru Perps protocol it to keep the funding rates of the listed perps at parity to all other perpetual futures exchanges while monitoring the opportunity for arbitrageurs.

Nibi-Perps is currently on private testnet.

## Mark Price and Index Price

A perpetual futures contract, or perp, is a special type of futures contracts that doesn’t have an expiry date. The derivative value of a perp position is represented by its **mark price**, and the value of the underlying is represented by its **index price**. Traders can take up to 10x leverage on long or short positions.

Perp positions remain effective until either the trader closes their position or the position goes underwater. This allows traders to speculate on the future price without having to own the underlying asset. More info [here](https://academy.binance.com/en/articles/what-are-perpetual-futures-contracts).

## Leverage and Position Values

**Position Size**

Suppose a trader wanted exposure to 5 ETH through the purchase of a perpetual contract. On Nibi-Perps, going long on 5 ETH means that the trader buys the ETH perp with a **position size** of 5. Position size is computed as the position notional mutliplied by the mark price of the asset.

```go
k = baseReserves * quoteReserves
notionalDelta = margin * leverage // (notionalDelta is negative if short)
baseReservesAfterSwap = k / (quoteReserves + notionalDelta)
position_size = baseReserves - baseReservesAfterSwap
```

**Position Notional Value**

The notional value of the position, or **position notional**, is the total value a position controls in units of the quote asset. Notional value expresses the value a derivatives contract theoretically controls. On Nibiru, it is defined more concretely by

```go
positionNotional = abs(quoteReserves - k / (baseReserves + position_size))
leverage = positionNotional / margin.
```

Let's say that the mark price of ether is $3000 in our previous example. This implies that the trader with a long position of size 5 has a position notional of $15,000. And if the trader has 10x **leverage**, for example, she must have put down $1500 as margin (collateral backing the position).

## Margin and Margin Ratio

**Margin** is the amount of collateral used to back a position. Margin is expressed in units of the quote asset. At genesis, Nibi-Perps uses USDC as the primary quote asset.

The margin ratio is defined by:

```go
marginRatio = (margin + unrealizedPnL) / positionNotional
```

Here, `unrealizedPnL` is computed using either the mark price or the 15 minute TWAP of mark price; the higher of the two values is used when evaluating liquidation conditions.

When the virtual price is not within the spread tolerance to the index price, the margin ratio used is the highest value between a calculation with the index price (oracle based on underlying) and the mark price (derivative price).

Another good way to think about margin ratio is as the inverse of a position's effective leverage. I.e. if a trader puts down $100 as margin with 5x leverage, the notional is $500 and the margin ratio is 20%, which is equivalent to `1 / leverage`.

### Cross Margin versus Isolated Margin

- In a **cross margin** model, collateral is shared between open positions that use the same settlement currency. All open positions then have a combined margin ratio.
- With an **isolated margin** model, the margin assigned to each open position is considered a separate collateral account.

**Current implementation**: Nibi-Perps uses isolated margin on each trading pair. This means that excess collateral on one position is not affected by a deficit on another (and vice versa). Positions are siloed in terms of liquidation risks, so an underwater ETH:USD position won't have any effect on an open ATOM:USD position, for instance.

In future upgrade, we'd like to implement a cross margin model and allow traders to select whether to use cross or isolated margin in the trading app. This way, traders could elect to have profits from one position support losses in another.

## Perp AMM Pools

Positions on Nibiru Perps are priced using constant-product liquidity pools with no real liquidity stored inside. In this model, assets are priced using the constant product model (`x*y=k`) pioneered by Uniswap. Tokens are sent to a clearing house, which stores the collateral in a vault, and perp pools are used for price discovery of the derivatives. This allows for the use of leverage trading and removes the need for liquidity providers, or market makers.

AMM pools enable Nibiru to have **clear pricing rules.** Each perpetual futures contract specifies the base asset’s quantity delivered for a single contract. For instance, OSMO/USDC, UMEE/USDC and ATOM/USDC futures contracts represent only one unit of the base assets OSMO, UMEE, and ATOM, similar to spot markets.

## Market Specific Parameters

::: tip
For the full specification of all parameters involved in Nibi-Perps, see the [`perp` module technical documentation](../../dev/x/perp.md#market-specific-parameters).
:::

### Trade Limit Ratio

Every perp pool has a parameter called the `TradeLimitRatio`, which limits how much of the asset reserves a trader can affect in a single transaction. For example, if a perp pool had 100 BTC and 2,000,000 NUSD, a `TradeLimitRatio` of `0.1` would only allow the trader to deposit or withdraw up to 10 BTC or 200,000 NUSD. This is done to prevent predatory traders from sending other traders' positions underwater.

### Fluctuation Limit Ratio

Similar to the trade limit ratio, every perp pool has a parameter called the `FluctuationLimitRatio`. The fluctuation limit ratio limits inter-block fluctuations of the reserve assets. For example, if a perp pool had 100 BTC and 2,000,000 NUSD at block 1, along with a `FluctuationLimitRatio` of 0.2, then the maximum amount of reserve asset fluctuation that can happen in block 2 is 20 BTC or 400,000 NUSD. This is also to prevent predatory traders from sending other traders' positions underwater.

### Max Oracle Spread Limit Ratio

Every perp pool has a parameter called the `MaxOracleSpreadLimitRatio`. It comes into effect in extreme market conditions, when the mark (spot) price has deviated from the index (oracle) price by too much. Liquidations will start happening based on the index price instead of the mark price.

For example, let's imagine a perp pool of BTC/NUSD and a `MaxOracleSpreadLimitRatio` of `0.1`. One day, the mark price and index price are equal to each other at \$1000 (1000 NUSD per BTC). The next day, if the index price stays constant at \$1000, but the mark price moves to 1100 or 900, then the oracle price is used for determining margin ratio and, thus, liquidations. This is to protect traders in times of extreme market volatility.

## Liquidations

When using leverage on positions, traders naturally become exposed to liquidation risks. For example, when the underlying value of a trader’s perp declines, the derivative asset will approach the value of its margin, putting the exchange at risk. To prevent the position from falling below the value of the margin that backs it, the protocol will proactively liquidate the position. Liquidations are triggered by **liquidations bots** that earn a small percentage of the remaining position.

**`Liquidate`** is a function which closes a position and distributes assets based on a liquidation fee that goes to the liquidator and Ecosystem Fund. Liquidations prevent traders' accounts from falling into negative equity.

A liquidation happens when a trader can no longer meet the margin requirement of their leveraged position. In Nibiru, meeting the margin requirement means maintaining a margin ratio on the position that exceeds the **maintenance margin ratio** (6.25%), which is the minimum margin ratio that a position can have before being liquidated.

When a liquidator address sends a message to liquidate a position, the protocol keeper first computes the margin ratio of the position using the mark price. The notional is taken to be that maximum of the `markSpot` (mark at an instance in time) notional and `markTWAP` notional. Similarly, the unrealized PnL is taken to be the max of the `markSpot` PnL and `markTWAP` PnL. This computation realizes any outstanding funding payments on the position, tells us whether or not the position is underwater, and tells us if the position has "**bad debt**" (margin owed in excess of the collateral backing the position).

If this margin ratio is below the maintenance margin ratio, the liquidation message will close the position. This consists of opening a reverse position with a size equivalent to the one that is currently open, which brings the size to zero. A liquidation fee is taken out of the margin and distributed in some split (currently 50:50) between the **Nibi-Perps Ecosystem Fund (Perp EF)** and the liquidator. If any margin remains in the position after the liquidation fee is taken out, this remaining margin is sent back to the owner of the position. And if bad debt is created by the liquidation fee, it is payed by the Perp EF.

## Bad Debt

Bad debt is when the margin owed exceeds the value of the collateral backing a position. There are two broad types of bad debt: positional bad debt and liquidation bad debt.

**Positional bad debt** accrues when the realized PnL of a position results in a negative margin value. **Liquidation bad debt** accrues when the remaining margin of the position isn't enough to cover the liquidator's service fee.

If a position has some remaining margin after realizing its PnL but not enough to cover the liquidator fee, there is only liquidation bad debt, and all of the remaining margin is used to help cover the liquidator fee.

If instead the remaining margin on a position becomes negative due to the realized PnL, there is both positional and liquidation bad debt because a position with nonpositive value can't possibly cover a liquidation fee.

Whenever a trader owes bad debt, the Perp EF covers the payment.

## Opening Positions

When opening a position, tokens are deposited and locked as **margin**. Under the hood, these tokens are stored with the **clearing house**, which uses AMM pools for price discovery and handles accounting for each position.

The exposure a user gets for opening a position is reflected in the change to the reserves of the corresponding AMM pool, which determines the price of the derivative (position) while enabling the use of leverage. 

The protocol code also manages funding payments and liquidations of positions that have too much debt.

## Perp: NIBI Token

Holders who stake their NIBI tokens can vote on or propose new ideas to improve the perps protocol. A small percentage of the protocol’s NIBI inflation feeds into the Ecosystem Fund. NIBI stakers vote on, among others, exchange improvements, parameter alterations, new feature implementations, chain updates, and alterations to reward mechanisms.

## Perp VIP Trading Program

Stakers of NIBI enjoy a trading fee discount proportional to the amount staked. Stakers also have the ability to vote on exchange improvements, parameter alterations, new feature implementations, chain updates, and inflationary reward mechanisms.

## What are the risks? How are they addressed?

Naturally, risks are inherent with any novel project being built. Nibiru’s ecosystem is built to promote the robust decentralization, permissionless creation of perps. As a result, community members can start trading without the supervision of a central authority, meaning the safety of having a facilitating party will not exist to the same degree. That being said, new market proposals will require governance approval for listing and a listing fee in NIBI tokens.

The permissionless state of market creation can drive the protocol to in-solvency in a black swan event. To mitigate against the risk of one market spilling over to others, Nibiru has **3 layers of backstop** to account for periods of extreme volatility. In ordered priority, these are the **Ecosystem Fund and the Treasury**.

### Ecosystem Fund (EF)

The EF is is seeded at the genesis within an initial supply from the community token allocation. The EF doesn’t accrue inflation but instead increases its reserves from (1) the collection of transaction fees on perpetual swaps, (2) fees from liquidations, and (3) investment of excess capital deployed on the platform.

::: tip
You may see the Ecosystem Fund of Nibi-Perps referred to as the `PerpEF` in the technical documentation.
:::

Using these revenue streams, **the EF steps in to pay funding payments to correct the imbalance paid between long and short traders**. If the mark and index prices differ substantially with a large aggregate position size, the EF may pay too much in funding.

And **when liquidations don't occur on time**, positions can end up with bad debt, which is also **covered by the EF**. For market crashes and other high volatility events, Nibiru’s liquidation parameters have been based on a ladder based framework taking into account the idiosyncrasies of each asset on the platform.

For example, if an asset has only a spot DEX and Nibiru as its liquidity venues, then such asset can be extremely volatile, warranting different liquidation parameters (such as lower max leverage). Whereas if the assets are BTC or ETH, which are traded on multiple venues CEX/DEX, then the parameters for liquidation are standardized to Perpetual/Drift protocol.

### Treasury

The protocol Treasury will be the final backstop to minimize drawdown. This is the last fail safe for the protocol. "NIBI printing" is not a stability mechanism for the perps exchange.
