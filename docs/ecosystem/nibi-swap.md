# 💧 Nibi-Swap

Nibi-Swap, Nibiru's Spot DEX. Swap, LP, and earn boosted rewards for longer liquidity locks. {synopsis}

![](../img/nibi-swap-banner.png)

Separate from Nibiru’s perps product, Nibiru includes an automated liquidity protocol (AMM) for spot trading called Nibi-Swap. Nibi-Swap is autonomous, permissionless, blockchain-native, and composable. All of its functionality can be integrated with other applications without intermediaries.

<!-- 
What is a pool? 
How are pools created?

-->

## Swap Invariant 

Pools on Nibi-Swap can include more than two assets with differing token weights. From the quantity and normalized weight of each asset, we compute a **swap invariant**, `k`.

<div align="center">

|  Variable |  Description | 
| :---: | ---  |
| $\mathcal{W}_n$  | normalized weight of token $n$ |
| $\mathcal{Q}_n$  | quantity of token $n$ in the pool |
| $k$  | the swap invariant |

</div>

$$ \prod\limits_{n=1}^t \mathcal{Q}_n^{\mathcal{W}_n} = k. $$

For a given pool, the sum of the normalized weights must equal 1. The swap invariant `k` does not change when users swap assets. It only changes when a **liquidity provider (LP)** adds or removes liquidity. Each pool contains `t` tokens. Thus, the number of trading pairs is equal to the number of combinations of size 2:

$$
\binom{t}{2} = \frac{t!}{2!(t - 2)!} .
$$

And between each of these pairs exists a spot price.

## Spot Price

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

If the asset reserse are not modified by liquidity providers, then `k` remains constant and the price changes solely based on trades since the asset weights also remain constant. This ensures that the price of the asset bought increases while the price of the asset sold decreases. The arbitrage opportunities guarantee that the prices offered by the pools move in conjunction with the rest of the market.

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

## Stableswaps

To synergize with the proliferation of stablecoins and stable pairs in the Cosmos ecosystem, the Nibi-Swap AMM supports **stableswap pools** based on [Curve Finance’s Stableswap curve](https://curve.fi/files/stableswap-paper.pdf). 

The stableswap curve operates like a constant-price curve when a portfolio of assets is balanced and tends toward behaving like a constant-product curve if the tokens lose peg.

$$\begin{aligned}

\text{(constant-price)} \quad& \phi = \sum_{i=1}^n x_i \quad\quad \\
\text{(constant-product)} \quad& \prod x_i = \left( \frac{\phi}{n} \right)^n 

\end{aligned}$$

<div align="center">

|  Variable |  Description | 
| :---: | ---  |
| $\phi$ | Liquidity depth. The  **liquidity depth $\phi$** denotes the sum of all token quantities when they have an equal price. |
| $x_i$  | Reserve amount amount of coin $i$ |
| $n$  | The total number of tokens. The number of elements in the set $\{ x_i \}$.

</div>

<!-- TODO image for constant product curve -->

<!-- TODO image for constant price curve -->

How strongly the stableswap curve behaves like a constant-price curve is expressed by a non-negative quantity called the **"Amplification", $A$**. When $A\to 0$, the curve behaves more like a constant product, and as $A \to \infty$, the curve acts more like a constant-sum.

<img src="../img/amplification-coefficient-stableswap.gif" alt="Shows how a Stable Swap curve changes with different values for the amplification A." title="Shows how a Stable Swap curve changes with different values for the amplification A." >

When changes occur to the reserves of a stableswap pool, we solve for the liquidity depth $\phi$ using the following this constraint equation:

$$
An^n \left( \sum_{i=1}^n x_i \right) + \phi = A\phi n^n + \frac{\phi^{n+1}}{n^n\left( \prod\limits_{i=1}^n x_i \right) } 
$$

This is done iteratively with [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method), which is useful for approximating roots, zeros, or intercepts of real-valued functions. It's particularly useful here because the constraint equation doesn't have a clear analytical solution. The implementation for this is inside the  [`SolveStableswapInvariant` function of dex/types/pool.go](https://github.com/NibiruChain/nibiru/blob/fc2e00ce9fb3193997560f3a966883590cfe4044/x/dex/types/pool.go#L399)