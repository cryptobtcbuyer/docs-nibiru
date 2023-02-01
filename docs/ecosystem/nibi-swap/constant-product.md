# Constant Product Pools

Constant product pools have swaps dictated by the following constraint equation:  

$$
\phi^2 = r_x r_y = (r_x + \Delta r_x) (r_x + \Delta r_y) , 
$$

where each term is defined as follows.

| Variable | Description  |
| -- | -- | 
| $\phi^2$ | **Swap invariant**, or **liquidity depth**. This quantity is strictly positive. | 
| $r_x$ and $r_y$ | **Reserves** in the $x$ and $y$ assets. In this case, $x$ and $y$ can be any crypto assets. | 
| $\Delta r_x$ and $\Delta r_y$ | Changes (deltas) from the perspective of the AMM in the $x$ and $y$ reserves when a swap is performed. |


If the asset reserse are not modified by liquidity providers, then $\phi$ remains constant and the price changes solely based on trades. This ensures that the price of the asset bought increases while the price of the asset sold decreases. The arbitrage opportunities guarantee that the prices offered by the pools move in conjunction with the rest of the market.

## Providing Liquidity (Joining a Pool)

Pools on Nibi-Swap fascilitate trades between pairs of fungible coins.  Anyone can become a **liquidity provider (LP)** by adding an equivalent value of tokens to the pool. Here, equivalent value means equivalent ratio of the reserves. 

For example, let's say there's a pool with two assets of equal weight. Its reserves are $r_A$ and $r_B$ and its total number of shares are $s_{\text{tot}}$.

$$ \text{pool} = \{ r_A = 200, r_B=40, s_{\text{tot}}=1000 \}$$


In order to add 20 units of `tokenA` to the pool, the same proportion of `tokenB` needs to be added to the reserves as well. Adding 20 to $r_A$ would grow the reserves by 10\%.

Adding liquidity gives an account **LP shares**, also called **LP tokens** or  **pool shares**. The total number of shares must grow by the same proportion as the reserves. We'll call this the **provided liquidity percentage** $\text{pct}_{LP}$. 

$$ 
\text{pct}_{LP} := \frac{\Delta r_a}{ r_a } 
= \frac{ \Delta r_b }{ r_b }
= \frac{ \Delta s_{\text{tot}} }{ s_{\text{tot}} }
$$

$$
\text{LP}(\text{pool}, \text{pct}_{LP}) \to \text{pool}' = \{ r_A , r_B , s_{\text{tot}} \} \cdot (\text{pct}_{LP})
$$

$$
\therefore\quad \text{pool}' = \{ r_A' = 220, r_B'=44, s_{\text{tot}}'=1100 \}
$$

In this example, the liquidity provider receives 100 LP shares, or pool shares, which can be reclaimed for the underlying funds at any point. Pool shares are fungible tokens that quantitatively express how much of a pool's reserves an LP has claim to. They serve a similar purpose to ERC-20 shares of an [ERC-4626 tokenized vault](https://eips.ethereum.org/EIPS/eip-4626). 


::: tip
The on-chain message for providing liquidity is called `MsgJoinPool`, so we sometimes refer to LPing as "joining the pool".
:::

**LPing increases the liquidity depth, or swap invariant**, because it increases the reserves.

$$\begin{aligned}

k & = r_A r_B = 200 * 40 = 8000 \\ 
k_{LP} & = r_A' r_B' = r_A (1 + \text{pct}_{LP}) r_B (1 + \text{pct}_{LP}) = k (1 + \text{pct}_{LP})^2 \\ 
k_{LP} & = k (1  + \text{pct}_{LP})^2 = 9680

\end{aligned}$$



### Swap Fees

Whenever a trade occurs, a small percentage fee is charged to the sender of the transaction. Because each liquidity provider owns shares of the pool, the **swap fee** is given pro-rata to all LPs due to the claimable value of their shares. This is, however, an unrealized gain as the LP shares would still need be burned in exchange for coins to end up in a liquidity provider's account.

<!-- Deposit diagram? TODO
totalShares=1000,  Reserves{200 TokenA, 40 TokenB}, with equal weights k=8000
→  
totalShares=1100, sharesOut=100, Reserves{220 TokenA, 44 TokenB}, k=9,680
-->

::: tip
A Cosmos coin, or `sdk.Coin`, defines a token with a denomination and an amount. IBC vouchers, native staking assets, and LP shares are all Cosmos coins. 
:::

## Weighted Pools

Pools on Nibi-Swap can include more than two assets with differing token weights. From the quantity and normalized weight of each asset, we compute a **swap invariant**, $\phi$.

<div align="center">

|  Variable |  Description | 
| :---: | ---  |
| $\mathcal{W}_n$  | normalized weight of token $n$ |
| $\mathcal{Q}_n$  | quantity of token $n$ in the pool |
| $\phi$  | the swap invariant |

</div>

$$ \prod\limits_{n=1}^t \mathcal{Q}_n^{\mathcal{W}_n} = \phi. $$

For a given pool, the sum of the normalized weights must equal 1. The swap invariant $\phi$ does not change when users swap assets. It only changes when a **liquidity provider (LP)** adds or removes liquidity. Each pool contains `t` tokens. Thus, the number of trading pairs is equal to the number of combinations of size 2:

$$ \binom{t}{2} = \frac{t!}{2!(t - 2)!} .$$

And between each of these pairs exists a spot price.

## Weighted Pool Spot Price

Spot price is the instantaneous price at which a swap occurs. It is computed as the ratio of the token balances normalized by token weight:

<div align="center">

|  Variable |  Description | 
| :---: | ---  |
| $\mathcal{B}_{\text{in}}$  | amount of token in |
| $\mathcal{W}_{\text{in}}$  | weight of token in |
| $\mathcal{B}_{\text{out}}$  | amount of token out |
| $\mathcal{W}_{\text{out}}$  | weight of token out |

</div>

$$
\text{SpotPrice}_{\text{in}\to\text{out}} = \frac{(\mathcal{Q}_{in}/\mathcal{W}_{in})}{(\mathcal{Q}_{out}/\mathcal{W}_{out})} 
$$