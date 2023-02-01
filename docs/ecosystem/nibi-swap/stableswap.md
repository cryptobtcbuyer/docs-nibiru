---
order: 2
---

# Stableswaps

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

## Amplification

How strongly the stableswap curve behaves like a constant-price curve is expressed by a non-negative quantity called the **"Amplification", $A$**. When $A\to 0$, the curve behaves more like a constant product, and as $A \to \infty$, the curve acts more like a constant-sum.

<img src="../../img/amplification-coefficient-stableswap.gif" alt="Shows how a Stable Swap curve changes with different values for the amplification A." title="Shows how a Stable Swap curve changes with different values for the amplification A." >

When changes occur to the reserves of a stableswap pool, we solve for the liquidity depth $\phi$ using the following this constraint equation:

$$
An^n \left( \sum_{i=1}^n x_i \right) + \phi = A\phi n^n + \frac{\phi^{n+1}}{n^n\left( \prod\limits_{i=1}^n x_i \right) } 
$$

This is done iteratively with [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method), which is useful for approximating roots, zeros, or intercepts of real-valued functions. It's particularly useful here because the constraint equation doesn't have a clear analytical solution. The implementation for this is inside the  [`SolveStableswapInvariant` function of dex/types/pool.go](https://github.com/NibiruChain/nibiru/blob/fc2e00ce9fb3193997560f3a966883590cfe4044/x/dex/types/pool.go#L399)