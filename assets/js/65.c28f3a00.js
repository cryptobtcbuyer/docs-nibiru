(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{622:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript-sdk-nibijs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-sdk-nibijs"}},[t._v("#")]),t._v(" TypeScript SDK — nibijs")]),t._v(" "),a("p",{attrs:{synopsis:""}},[t._v("The official TypeScript SDK for the Nibiru blockchain")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/NibiruChain/ts-sdk/main/img/nibijs.png",width:"100%"}})]),t._v(" "),a("p",{attrs:{align:"center"}}),t._v(" "),a("div",{staticStyle:{display:"flex","flex-direction":"row",gap:"4px"}},[a("a",{attrs:{target:"_blank",href:"https://www.npmjs.com/package/@nibiruchain/nibijs"}},[a("img",{staticStyle:{height:"20px"},attrs:{src:"https://img.shields.io/npm/v/@nibiruchain/nibijs.svg?color=AE8CCD"}})]),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://github.com/NibiruChain/ts-sdk/actions/workflows/tests.yaml"}},[a("img",{staticStyle:{height:"20px"},attrs:{src:"https://github.com/NibiruChain/ts-sdk/actions/workflows/tests.yaml/badge.svg"}})]),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://www.npmjs.com/package/@nibiruchain/nibijs"}},[a("img",{staticStyle:{height:"20px"},attrs:{src:"https://img.shields.io/npm/dm/@nibiruchain/nibijs.svg?color=FFF3CD"}})]),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://github.com/NibiruChain/ts-sdk/blob/main/LICENSE"}},[a("img",{staticStyle:{height:"20px"},attrs:{src:"https://img.shields.io/npm/l/express.svg?color=050505"}})]),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://discord.gg/sgPw8ZYfpQ"}},[a("img",{staticStyle:{height:"20px"},attrs:{src:"https://dcbadge.vercel.app/api/server/sgPw8ZYfpQ?style=flat"}})])]),t._v(" "),a("p",[t._v("The NibiJS ("),a("code",[t._v("@nibiruchain/nibijs")]),t._v(") package makes it possible to interact with Nibiru from a Node.js or browser environment. "),a("code",[t._v("nibijs")]),t._v(" provides simple abstractions for core data structures, serialization, key management, API requests, and the submission of transactions.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("nibijs")]),t._v(" source code can be found in the "),a("a",{attrs:{href:"https://github.com/NibiruChain/ts-sdk/blob/main/packages",target:"_blank",rel:"noopener noreferrer"}},[t._v('"packages" directory'),a("OutboundLink")],1),t._v(".  The types and classes generated from Nibiru's "),a("code",[t._v(".proto")]),t._v(" files are inside a separate "),a("code",[t._v("npm")]),t._v(" package called "),a("code",[t._v("@nibiruchain/protojs")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#typescript-sdk--nibijs"}},[t._v("TypeScript SDK — nibijs")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#installation"}},[t._v("Installation")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#usage"}},[t._v("Usage")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#codebase-structure"}},[t._v("Codebase structure")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#development-quick-start"}},[t._v("Development Quick Start")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#-license"}},[t._v("🔓 License")])])])])]),t._v(" "),a("p",[t._v("To learn more about Nibiru, see "),a("a",{attrs:{href:"https://docs.nibiru.fi",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs.nibiru.fi"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@nibiruchain/nibijs",target:"_blank",rel:"noopener noreferrer"}},[t._v("@nibiruchain/nibijs"),a("OutboundLink")],1),t._v(" is available on the npm registry.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"eWFybiBhZGQgQG5pYmlydWNoYWluL25pYmlqcyAKIyBucG0gaW5zdGFsbCBAbmliaXJ1Y2hhaW4vbmliaWpzICMgYW5vdGhlciBvcHRpb24gCg=="}}),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("The entrypoint for "),a("code",[t._v("nibijs")]),t._v(" is the "),a("code",[t._v("Sdk")]),t._v(" object, which is meant to mimic the root of a command line interface. It can be used for both queries and transactions.")]),t._v(" "),a("h4",{attrs:{id:"example-querying-the-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-querying-the-chain"}},[t._v("#")]),t._v(" Example: Querying the chain")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgVGVzdG5ldCwgbmV3U2RrIH0gZnJvbSAmcXVvdDtAbmliaXJ1Y2hhaW4vbmliaWpzJnF1b3Q7CmNvbnN0IHNkayA9IG5ld1NkayhUZXN0bmV0LCBteU1uZW1vbmljKQoKY29uc3QgYmFsYW5jZXMgPSBhd2FpdCBzZGsucXVlcnkuYmFuay5hbGxCYWxhbmNlcyhhZGRyZXNzKQpjb25zb2xlLmxvZygmcXVvdDtiYWxhbmNlczogJW8mcXVvdDssIGJhbGFuY2VzKQoKY29uc3QgYWxsUG9vbHMgPSBhd2FpdCBzZGsucXVlcnkudnBvb2wuYWxsUG9vbHMoKQpjb25zb2xlLmxvZygmcXVvdDthbGxQb29sczogJW8mcXVvdDssIGFsbFBvb2xzKQoKY29uc3QgYmxvY2tIZWlnaHQgPSAxCmNvbnN0IGJsb2NrID0gc2RrLnRtQ2xpZW50LmJsb2NrKGJsb2NrSGVpZ2h0KQo="}}),t._v(" "),a("h4",{attrs:{id:"example-sending-funds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-sending-funds"}},[t._v("#")]),t._v(" Example: Sending funds")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgVGVzdG5ldCwgbmV3U2RrLCBuZXdDb2lucywgQ29pbiB9IGZyb20gJnF1b3Q7QG5pYmlydWNoYWluL25pYmlqcyZxdW90Owpjb25zdCBzZGsgPSBuZXdTZGsoVGVzdG5ldCwgbXlNbmVtb25pYykKY29uc3QgdG9rZW5zOiBDb2luW10gPSBuZXdDb2lucyg1LCAmcXVvdDt1bmliaSZxdW90OykKY29uc3QgdG9BZGRyOiBzdHJpbmcgPSAmcXVvdDsuLi4mcXVvdDsgLy8gYmVjaDMyIGFkZHJlc3Mgb2YgdGhlIHJlY2VpdmluZyBwYXJ0eQpsZXQgdHhSZXNwID0gc2RrLnR4LnNlbmRUb2tlbnModG9BZGRyLCB0b2tlbnMpCg=="}}),t._v(" "),a("h4",{attrs:{id:"example-transaction-with-arbitrary-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-transaction-with-arbitrary-messages"}},[t._v("#")]),t._v(" Example: Transaction with arbitrary messages")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgVGVzdG5ldCwgbmV3U2RrLCBuZXdDb2lucywgQ29pbiwgRGVsaXZlclR4UmVzcG9uc2UgfSBmcm9tICZxdW90O0BuaWJpcnVjaGFpbi9uaWJpanMmcXVvdDsKaW1wb3J0IHsgTXNnIH0gZnJvbSAmcXVvdDtAbmliaXJ1Y2hhaW4vbmliaWpzL21zZyZxdW90OwoKY29uc3Qgc2RrID0gbmV3U2RrKFRlc3RuZXQsIG15TW5lbW9uaWMpCmxldCBtc2dzOiBUeE1lc3NhZ2VbXSA9IFsKICBNc2cucGVycC5vcGVuUG9zaXRpb24oewogICAgdG9rZW5QYWlyOiBwYWlyLAogICAgYmFzZUFzc2V0QW1vdW50TGltaXQ6IDAsCiAgICBsZXZlcmFnZTogMSwKICAgIHF1b3RlQXNzZXRBbW91bnQ6IDEwLAogICAgc2VuZGVyOiBmcm9tQWRkciwKICAgIGdvTG9uZzogdHJ1ZSwKICB9KSwKICBNc2cucGVycC5hZGRNYXJnaW4oewogICAgc2VuZGVyOiBmcm9tQWRkciwKICAgIHRva2VuUGFpcjogcGFpciwKICAgIG1hcmdpbjogbmV3Q29pbigmcXVvdDsyMCZxdW90OywgJnF1b3Q7dW51c2QmcXVvdDspLAogIH0pLApdCmxldCB0eFJlc3A6IERlbGl2ZXJUeFJlc3BvbnNlID0gYXdhaXQgc2RrLnR4LnNpZ25BbmRCcm9hZGNhc3QoLi4ubXNncykK"}}),t._v(" "),a("h2",{attrs:{id:"codebase-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codebase-structure"}},[t._v("#")]),t._v(" Codebase structure")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Directories of "),a("code",[t._v("@nibiruchain/nibijs")])]),t._v(" "),a("th",[t._v("Purpose/Utility")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("common")])]),t._v(" "),a("td",[t._v("home to several commonly needed types, constants and configurations such as Network.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("msg")])]),t._v(" "),a("td",[t._v("Implements functions for creating messages ("),a("code",[t._v("Msg")]),t._v("s). These are objects that trigger state-transitions and get wrapped into transactions.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("query")])]),t._v(" "),a("td",[t._v("For querying state via the consensus engine of a full-node and the application blockchain interface (ABCI).")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx")])]),t._v(" "),a("td",[t._v("For signing and to submitting transactions given a set of "),a("code",[t._v("Msg")]),t._v(" objects.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wallet")])]),t._v(" "),a("td",[t._v("A simple wrapper around the Keplr wallet. This module will grow as support is added for other wallets (like MetaMask).")])])])]),t._v(" "),a("p",[a("code",[t._v("@nibiruchain/protojs")]),t._v(" provides types generated from the protocol buffers of the Cosmos-SDK, Tendermint Core, and Nibiru Chain. For most use cases, it won't be necessary to interact with this layer.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"development-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-quick-start"}},[t._v("#")]),t._v(" Development Quick Start")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("First install yarn.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bnBtIGluc3RhbGwgLWcgeWFybgo="}})],1),t._v(" "),a("li",[a("p",[t._v("Then, install package dependencies. At the root of the repository, run")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"eWFybiAK"}})],1),t._v(" "),a("li",[a("p",[t._v("Lastly, compile the code in each package.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"eWFybiBidWlsZAo="}})],1)]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/NibiruChain/ts-sdk/blob/main/HACKING.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("HACKING.md"),a("OutboundLink")],1),t._v(" for the full development guide.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"🔓-license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔓-license"}},[t._v("#")]),t._v(" 🔓 License")]),t._v(" "),a("p",[t._v("This software is licensed under the MIT license. See "),a("a",{attrs:{href:"https://github.com/NibiruChain/ts-sdk/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("LICENSE"),a("OutboundLink")],1),t._v(" for full disclosure.")]),t._v(" "),a("p",[t._v("© 2022 Nibi, Inc.")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{staticStyle:{width:"200px"},attrs:{src:"https://raw.githubusercontent.com/NibiruChain/ts-sdk/main/img/nibi-logo-onwhite.png"}})])],1)}),[],!1,null,null,null);e.default=i.exports}}]);