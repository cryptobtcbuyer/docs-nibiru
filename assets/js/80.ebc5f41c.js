(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{640:function(t,s,a){"use strict";a.r(s);var e=a(0),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"🔮-price-feed-oracles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔮-price-feed-oracles"}},[t._v("#")]),t._v(" 🔮 Price Feed Oracles")]),t._v(" "),a("p",[t._v("Nibiru’s price feeds are updated the end of every block from messages posted by "),a("code",[t._v("oracle")]),t._v(" accounts. An "),a("code",[t._v("oracle")]),t._v(" is simply a whitelisted address that is able to send a special "),a("code",[t._v("post_price")]),t._v(" message on-chain that includes the asset pair, price, and an expiry time.")]),t._v(" "),a("p",[t._v("This message gets wrapped into a transaction to be included in the current block. At the end of each block, the median of all unexpired, oracle-posted prices is computed for each asset pair and stored by the Nibiru blockchain. Finally, the time-weighted average price (TWAP) is taken to be the “official” price for the pair. This is currently implemented in the "),a("code",[t._v("x/pricefeed")]),t._v(" module.")]),t._v(" "),a("h4",{attrs:{id:"data-sources-for-the-feeds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-sources-for-the-feeds"}},[t._v("#")]),t._v(" Data sources for the feeds")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("AMMs")]),t._v(": Reading prices directly from AMMs will form the backbone of Nibiru’s price feeds. These feeds come from liquid Ethereum markets like Uniswap and SushiSwap and liquid Cosmos chains with spot DEXs such as Osmosis, Juno, and (someday) Nibi-Swap. For spot markets in the Cosmos ecosystem, we’re also onboarding validators that have infrastructure set up on both chains so that we can read prices of liquid pools without latency.")]),t._v(" "),a("li",[a("strong",[t._v("ChainLink")]),t._v(": The BTC, ETH, and ATOM feeds update roughly every 10 minutes. We have feeds set up for ChainLink, but this update time is clearly too slow to use as a standalone oracle.")]),t._v(" "),a("li",[a("strong",[t._v("Pyth Network")]),t._v(": Pyth offers an excellent solution for accurate, sub-second updates on BTC:USD and ETH:USD prices. This will also be one of the data sources. "),a("a",{attrs:{href:"https://pyth.network/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("[Pyth protocol whitepaper]"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://pyth.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("[Pyth network application]"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("strong",[t._v("Centralized exchange REST APIs")]),t._v(": We’re currently setting up feeds from Binance, Kraken, and FTX.")])]),t._v(" "),a("p",[t._v("The Nibiru team sets up several price feeds through whitelisted "),a("code",[t._v("oracle")]),t._v(" accounts. While the initial set of oracles will be maintained by the Nibiru team, additional oracles can also be added via on-chain governance.")]),t._v(" "),a("h4",{attrs:{id:"more-detailed-mathematical-breakdown-of-the-price-feed-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-detailed-mathematical-breakdown-of-the-price-feed-updates"}},[t._v("#")]),t._v(" More detailed mathematical breakdown of the price feed updates")]),t._v(" "),a("p",[t._v("Let’s denote the following variables to go into more detail:")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("t")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("t")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.61508em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("t")])])])])]),t._v(" "),a("td",[t._v("a block timestamp (Unix)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("t")]),a("mi",[t._v("b")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("t_b")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.61508em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.76508em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("b")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])])]),t._v(" "),a("td",[t._v("the current block’s timestamp (Unix)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("T")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("T")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])])]),t._v(" "),a("td",[t._v("the set of all block timestamps (Unix) from the past hour.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("p")]),a("mi",[t._v("t")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("p_t")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("t")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])])]),t._v(" "),a("td",[t._v("the median of all valid, posted prices for the block at timestamp "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("t")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("t")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.61508em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("t")])])])])])])])])]),t._v(" "),a("p",[t._v("The time variables are Unix timestamps and, thus, integers between 0 and ∞.")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("p")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("c")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("e")])],1),a("mo",[t._v("(")]),a("msub",[a("mi",[t._v("t")]),a("mi",[t._v("b")])],1),a("mo",[t._v(")")]),a("mo",[t._v("=")]),a("msub",[a("mi",[t._v("p")]),a("mrow",[a("mi",[t._v("T")]),a("mi",[t._v("W")]),a("mi",[t._v("A")]),a("mi",[t._v("P")])],1)],1),a("mo",[t._v("=")]),a("mfrac",[a("mrow",[a("msub",[a("mo",[t._v("∑")]),a("mrow",[a("mi",[t._v("t")]),a("mo",[t._v("∈")]),a("mrow",[a("mi",[t._v("T")])],1)],1)],1),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("msub",[a("mi",[t._v("p")]),a("mrow",[a("mi",[t._v("t")])],1)],1),a("mo",[t._v("⋅")]),a("mi",[t._v("t")]),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1)],1),a("mrow",[a("msub",[a("mo",[t._v("∑")]),a("mrow",[a("mi",[t._v("t")]),a("mo",[t._v("∈")]),a("mrow",[a("mi",[t._v("T")])],1)],1)],1),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("(")]),a("mi",[t._v("t")]),a("mo",{attrs:{fence:"true"}},[t._v(")")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\text{price}(t_b) = p_{TWAP} = \\dfrac{ \\sum\\limits_{t\\in{T}} \\left( p_{t} \\cdot t \\right) }{ \\sum\\limits_{t\\in{T}} \\left( t \\right) }\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"2.1617110000000004em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"3.8694170000000003em","vertical-align":"-1.707706em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("p")]),a("span",{staticClass:"mord mathrm"},[t._v("r")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm"},[t._v("c")]),a("span",{staticClass:"mord mathrm"},[t._v("e")])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("b")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("W")]),a("span",{staticClass:"mord mathit"},[t._v("A")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.6859999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.894336em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mrel"},[t._v("∈")]),a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])])]),a("span",{staticStyle:{top:"-0.000004999999999977245em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",[a("span",{staticClass:"op-symbol small-op mop"},[t._v("∑")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"minner textstyle cramped"},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[t._v(")")])])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-1.4117060000000001em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.894336em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mrel"},[t._v("∈")]),a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])])]),a("span",{staticStyle:{top:"-0.000004999999999977245em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",[a("span",{staticClass:"op-symbol small-op mop"},[t._v("∑")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"minner textstyle uncramped"},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("t")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("⋅")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[t._v(")")])])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])]),t._v(" "),a("p",[t._v("Later blocks have larger values, so they’re weighted more heavily. This oracle solution allows us to compose feeds from several sources with differing post rates.")]),t._v(" "),a("p",[t._v("Prices posted from different data sources come from different accounts (oracle addresses), but each address may be able to post for multiple pairs. For example, the price posted for BTC price from ChainLink would have an expiry set for about 15 minutes and be over-written by an early update (e.g. after 5 minutes). This same oracle could also be whitelisted to post an ETH price.")]),t._v(" "),a("h4",{attrs:{id:"reasons-for-an-in-house-oracle-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reasons-for-an-in-house-oracle-solution"}},[t._v("#")]),t._v(" Reasons for an in-house Oracle solution")]),t._v(" "),a("p",[a("strong",[t._v("Robustness:")]),t._v(" We don’t want an outage in one chain, application, or feed to affect the utility and user experience of Nibiru. It’s important to remember that Nibiru isn’t simply a perps exchange. The price feeds are also crucial to the FRAX-style mints and redeems of NUSD. These feeds could also apply to a number of future applications.")]),t._v(" "),a("p",[a("strong",[t._v("Different data sources have different time granularity:")]),t._v(" Because the AMM, Pyth Network, and CEX prices would update at the block or sub-second level, we want to account for these updates as separate oracle posts, taking all of them into account for the TWAP but weighing more recent price updates more heavily.")]),t._v(" "),a("p",[a("strong",[t._v("Customizability and adaptability to protect against oracle manipulation:")]),t._v(" One novel improvement we'll include is to factor the size of the reserves into the calculation for the AMM prices. We call this "),a("strong",[t._v("liquidity-weighted average price (LWAP)")]),t._v(".")]),t._v(" "),a("p",[t._v("Let's say you have an asset like ATOM with price feeds on 3 different AMMs. The post price message could include reserve amounts or the dollar value of the reserves as a field, and we could combine each of the posted prices with the liquidity values to get a liquidity weighted price:")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("p")]),a("mi",[t._v("i")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("p_i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])])]),t._v(" "),a("td",[t._v("posted price")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("ℓ")]),a("mi",[t._v("i")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\ell_i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.84444em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("ℓ")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])])]),t._v(" "),a("td",[t._v("liquidity value")])])])])]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("l")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("q")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("u")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("d")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("y")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("W")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("e")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("g")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("h")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("e")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("d")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("P")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("c")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("e")])],1),a("mo",[t._v("=")]),a("mfrac",[a("mrow",[a("msub",[a("mo",[t._v("∑")]),a("mi",[t._v("i")])],1),a("msub",[a("mi",[t._v("p")]),a("mi",[t._v("i")])],1),a("mo",[t._v("⋅")]),a("msub",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("ℓ")]),a("mi",[t._v("i")])],1)],1),a("mrow",[a("msub",[a("mo",[t._v("∑")]),a("mrow",[a("mi",[t._v("i")])],1)],1),a("msub",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("ℓ")]),a("mi",[t._v("i")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v(" \\text{liquidityWeightedPrice} = \\dfrac{ \\sum_i p_i\\cdot\\ell_i }{ \\sum_{i} \\ell_i }\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.44001em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.4260200000000003em","vertical-align":"-0.98601em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("l")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm"},[t._v("q")]),a("span",{staticClass:"mord mathrm"},[t._v("u")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm"},[t._v("d")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm"},[t._v("t")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("y")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("W")]),a("span",{staticClass:"mord mathrm"},[t._v("e")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),a("span",{staticClass:"mord mathrm"},[t._v("h")]),a("span",{staticClass:"mord mathrm"},[t._v("t")]),a("span",{staticClass:"mord mathrm"},[t._v("e")]),a("span",{staticClass:"mord mathrm"},[t._v("d")]),a("span",{staticClass:"mord mathrm"},[t._v("P")]),a("span",{staticClass:"mord mathrm"},[t._v("r")]),a("span",{staticClass:"mord mathrm"},[t._v("i")]),a("span",{staticClass:"mord mathrm"},[t._v("c")]),a("span",{staticClass:"mord mathrm"},[t._v("e")])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mop"},[a("span",{staticClass:"op-symbol small-op mop",staticStyle:{top:"-0.0000050000000000050004em"}},[t._v("∑")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.30001em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("ℓ")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.69001em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mop"},[a("span",{staticClass:"op-symbol small-op mop",staticStyle:{top:"-0.0000050000000000050004em"}},[t._v("∑")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.30001em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("p")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("⋅")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("ℓ")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])]),t._v(" "),a("p",[t._v("This would ensure that the exchanges with the most liquidity would contribute contribute most strongly to the oracle price, helping protect against sudden price movements on markets with low liquidity.")])])}),[],!1,null,null,null);s.default=i.exports}}]);