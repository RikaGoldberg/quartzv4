
Arbitrum is a leading [Layer 2 (L2)](https://ethereum.org/en/layer-2/) network for Ethereum liquid staking tokens (LSTs), a type of [derivative](https://www.investopedia.com/articles/optioninvestor/10/derivatives-101.asp) that unlocks liquidity in a previously illiquid Ethereum staking market. 

==LSTs allow holders to use staked Ethereum across DeFi protocols while still earning yield on the underlying staked ETH. The Ethereum LST market boasts an impressive size of approximately [$28B](https://defillama.com/lsd). 

This post will dive into three popular LSTs on Arbitrum: wstETH, rETH, and cbETH, with a market capitalization on Ethereum of approximately [$22B](https://coinmarketcap.com/currencies/steth/), [$1.4B](https://coinmarketcap.com/currencies/rocket-pool-eth/), and [$500M,](https://coinmarketcap.com/currencies/coinbase-wrapped-staked-eth/) respectively. On Abitrum, their market capitalization stands at approximately [$287M](https://arbiscan.io/token/0x5979d7b546e38e414f7e9822514be443a4800529), [$48M](https://arbiscan.io/token/0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8), and [$11M](https://arbiscan.io/token/0x1debd73e752beaf79865fd6446b0c970eae7732f), respectively.   

  You can expect to learn about their origin stories, characteristics, adoption, and growth trends. 

## Lido and wstETH 

### Origin Story

[Lido](https://lido.fi/), a liquid staking solution was founded by [Konstantin Lomashuk](https://twitter.com/Lomashuk), [Vasiliy Shapovalov](https://twitter.com/_vshapovalov), and [Jordan Fish](https://cointelegraph.com/top-people-in-crypto-and-blockchain-2023/cobie). 

Lomashuk and Shapovalov are staking industry veterans. Before Lido, Lomashuk founded [P2P Validator](https://p2p.org/), a non-custodial staking service provider (now one of the main validators in Lido’s network), where Shapovalov was CTO. Lomashuk was also the CEO and co-founder of [Satoshi Fund](https://cryptofundlist.com/satoshi-fund/), a blockchain investment fund. 

  

Fish, known in the crypto community as “CryptoCobain” or “Cobie”, is a cryptocurrency investor, trader, and influencer. With a background in computer science, he worked in roles from head of technology to head of growth in various cryptocurrency companies. He now co-hosts the crypto podcast [UpOnly: Chats with Crypto Experts](https://podcasts.apple.com/us/podcast/uponly-chats-with-crypto-experts/id1554387610), with Brian Krogsgard. 

  

In December 2020, Lido [launched](https://blog.lido.fi/introducing-lido/) on Ethereum mainnet, only a few weeks after [Phase 0 of Ethereum 2.0](https://consensys.io/knowledge-base/ethereum-2/glossary#phase0) commenced and Ethereum started to transition its consensus mechanism from proof-of-work to proof-of-stake. Although Ethereum is Lido’s primary focus, Lido’s LSTs are also available on Polygon, Polkadot, Kusama, and Solana blockchains. 

  

### Token Characteristics: wstETH

  

Lido’s staked ETH token is stETH, a non-standard ERC20 interest-bearing derivative token.  In order to make stETH compatible across DeFi applications and protocols, it must be [wrapped](https://docs.lido.fi/guides/lido-tokens-integration-guide#wrap--unwrap) into the wstETH token (more on wrapping later in this section). 

  

wstETH (and stETH) uses the [aToken](https://docs.aave.com/developers/tokens/atoken) model, one of two token models adopted by liquid staking tokens (the second type, the cToken model, will be described later in the article). 

  

The aToken model was pioneered by the decentralized lending protocol [Aave](https://aave.com/). Tokens that use this model [rebase](https://coinmarketcap.com/academy/glossary/rebase) daily, meaning that the value of the token in a token holder’s account is adjusted daily to reflect their share of staking rewards minus penalties. 

  

While the rebasable nature of aTokens enhances the UI/UX experience for token holders, it poses compatibility issues with DeFi dApps and protocols that require a constant balance mechanism. 

  

To address compatibility issues, rebasable tokens are [wrapped](https://docs.lido.fi/guides/lido-tokens-integration-guide#wrap--unwrap). This involves locking stETH, Lido’s staked ETH token,  in the wstETH contract, and minting wstETH based on a [share bookkeeping system](https://docs.lido.fi/guides/lido-tokens-integration-guide/#bookkeeping-shares). Unwrapping wstETH involves burning it, and unlocking the corresponding amount of stETH. 

  

### Adoption and Growth Trends: stETH/wstETH

  

Lido is the leading solution for liquid staking on Ethereum, with [$24B in total-value-locked (TVL)](https://dune.com/LidoAnalytical/Lido-Finance-Extended), capturing [74%](https://defillama.com/lsd)  of the market share. With approximately [9M ETH](https://dune.com/LidoAnalytical/Lido-Finance-Extended) deposited on the Lido network, LIDO captures a 31.92% share of deposited ETH ([29M ETH](https://dune.com/LidoAnalytical/Lido-Finance-Extended) in total is deposited on Ethereum).

  

Note:  [Vitalik](https://notes.ethereum.org/@djrtwo/risks-of-lsd) and others in the Ethereum community have heeded capital allocators about the significant risks associated with pooled capital when it exceeds a critical consensus threshold of 33%. 

![](https://lh7-us.googleusercontent.com/2_f7e-8ytcqgGlHkaFjwmHHHJFNtUggDGP2-11k95RzuU63Zoa2rxkfGRNdci73rwPj1EpeCIhIrZSv8gV5KkvyaUYcXtn4cF3HEN-X-ZkrgKK4acTsD_NU-uSjw23lGjhh1esHFQ-s3TlOq6Ryes4U)

  

Source: [Lido Finance Extended](https://dune.com/LidoAnalytical/Lido-Finance-Extended)

  

The supply of stETH continues to grow, propelled by traders seeking a dependable and consistent source of yield. While ETH was once the preferred asset on lending platforms, stETH is now the leader. Its appeal lies in the ability to leverage stETH positions, offering more attractive returns compared to providing liquidity through stETH-ETH pairs on decentralized exchanges (DEXs). 

  

stETH’s dominance in demand over ETH becomes evident in usage statistics following the Terra Luna collapse in May 2022. After the crash, the growth in new addresses utilizing ETH + WETH (wrapped ETH) slowed down. In contrast, demand for stETH + wstETH surged, increasing by 142%.

  

![](https://lh7-us.googleusercontent.com/5ruj8IQeBv7GEK0oNMi8iD20r8U9ZOYEORgaMWJWBrBKDsFLvKrH8WFGoWLm31rB7SKyoRrhuHv5Spe0C-h4O8ClOtn80OqMtaZ4yoREZJ1DvGWAoeZODFJzb2rxK-95-834rAVaLArgYRI-4LQfbFA)

Source: [Glassnode Insights](https://insights.glassnode.com/steths-effect-on-ethereum/)

  

Although the lion’s share of demand for stETH is on Ethereum mainnet, with [97% of stETH collateral locked on the network](https://dune.com/LidoAnalytical/Lido-Finance-Extended), Arbitrum is the clear leader amongst Layer 2 networks, home to approximately 60k in stETH collateral – twice the amount on Optimism.

On Arbitrum, wstETH has found significant adoption on [Aave’s](https://app.aave.com/) lending protocol, with 41% of collateral locked on Aave, followed by [Radiant](http://app-radiant-capital.ipns.localhost:48084/#/markets), [Pendle](https://www.pendle.finance/), [Balancer](https://balancer.fi/), and [Silo.](https://www.silo.finance/) 

  

![](https://lh7-us.googleusercontent.com/PCl7NhYMYxqA5__eXWWG8Ey2yWQMRgDT7jm01TNvhyOF6O2JRTyLqNwcVMXxzw4aZ-O0ijGrl1guM3dv-rSFn5CJlQsrOd0o79oEWTDzEqEuNl-c3Z3UGprJJHv2WiaJxAEWOugX0FJKCSNFd9vtf40)

Source: [Arbitrum ETH-LST Dominance](https://dune.com/whale_hunter/arbitrum-eth-lst-dominance)

## Rocket Pool and rETH

### Origin Story

  

In December 2016, while [Ethereum 2.0](https://ethereum.org/en/roadmap/) was still in development, [David Rugendyke](https://theorg.com/org/rocket-pool/org-chart/david-rugendyke), a computer scientist and cryptocurrency miner, started planting the seeds for Rocket Pool, a decentralized base layer protocol for Ethereum staking. Drawing inspiration from Vitalik’s [Mauve Paper](https://cdn.hackaday.io/files/10879465447136/Mauve%20Paper%20Vitalik.pdf), a paper that introduced Ethereum 2.0, David started to work on building Rocket Pool.  

  

In May 2017, David released an Alpha version of Rocket Pool. Since Ethereum 2.0 was still in development, Rocket Pool Alpha was built on dummy Ethereum 2.0 contracts. In the protocol’s [inaugural Medium article](https://medium.com/rocket-pool/rocket-pool-your-new-casper-friendly-ethereum-pos-pool-in-alpha-75709bd19936), David introduced the three primary components of Rocket Pool: smart contracts, smart nodes, and minipools, writing: “all three integrate with each other to provide a network that can automatically scale and load balance itself across multiple cloud hosting providers in any region of the world.”

  

The RocketPool protocol [launched on Ethereum mainnet](https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-4-2635c44e4f7e) on November 9, 2021, enabling users to participate in Ethereum staking by permissionlessly running an ETH node on Rocket Pool’s network, or by participating in liquid staking with the protocol’s native token, rETH. 

  

### Token Characteristics: rETH

  

Users receive [rETH](https://medium.com/rocket-pool/rocket-pool-2-5-tokenised-staking-48601d52d924) tokens when they deposit ETH into the Rocket Pool protocol. 

  

The value of rETH represents the amount of ETH deposited into the Rocket Pool protocol plus staking rewards minus penalties. Its value is protected against node slashing and downtime by built-in insurance mechanisms in [RPL](https://defillama.com/protocol/rocket-pool), the protocol’s governance token. 

  

rETH is based on the [cToken](https://docs.compound.finance/v2/ctokens/) model, pioneered by [Compound](https://compound.finance/), an algorithmic autonomous interest rate protocol. As a nonrebasable token, its value does not update daily, therefore unlike aTokens (discussed previously), rETH does not need to be wrapped. It is readily compatible to be used across the DeFi ecosystem. 

### Adoption and Growth: rETH

  

With a TVL of [2.85B](https://defillama.com/lsd) on Ethereum mainnet and Ethereum Beacon Chain deposits of [1.1M ETH](https://dune.com/drworm/rocketpool), rETH captures an 8.81% market share in liquid staking, and 3.5% of total staked ETH (ETH deposits on the Beacon chain are approximately [29M](https://dune.com/sm80979300311/ethereum-beacon-chain-deposits)). 

  

Although this is a markedly lower share than Lido’s 74%, rETH stands out with its unique differentiator of a strong focus on decentralization. Rocket Pool impressively has [3,486 node operators and 26,899 mini pools](https://dune.com/drworm/rocketpool) on its network. 

  

Since the [Atlas update](https://docs.rocketpool.net/guides/atlas/whats-new), which scaled Rocket Pool by introducing 8 ETH Low Balance minipools, “LEB8”, reducing the minimum requirement for running a Rocket Pool node from 16 ETH to 8 ETH, the supply of rETH has more than quadrupled. Over the last 12 months, rETH’s supply has increased from approximately 150k to 700k. 

  

![](https://lh7-us.googleusercontent.com/Ellb3vchlZ86-2g5GcGUN1745yEIBCvuy5khLlN4ZxpiQMs9DxzmeDljsryRuEVsX8BLXlTbS01YaL-DPYw3P47oQEL3gWi1RxypEl6Jxki07n1X69sdrKy3QCPiYesUE_F-plS_S2yhUqWbM4Pf8xk)

Source: [rETH supply vs. time](https://dune.com/drworm/rocketpool)

  
  

Interestingly, in the first half of 2023, the supply of rETH grew three times faster than the supply of stETH! 

  

![](https://lh7-us.googleusercontent.com/AmiFUk1pguK92zh95wSB9zcfEzalfYPAHb7YChecsNa1VVC9aNy6zySrLFtnXvUJKqa9bB3m6V3mz42i9L-ZIIJrWgpi5VdTeeyLk2p4EM6VWPOA2Q2Nna0sjncRmxIAKJMamxnnU9wjqYHGrlbBhjc)

Source: [LSTs Circulating Supply](https://insights.glassnode.com/the-week-onchain-week-27-2023/)

  

On Ethereum, the Curve rETH/ETH pool and Balancer rETH/ETH pool provide the [main sources of liquidity backing rETH’s stability](https://hackmd.io/@PrismaRisk/rETH?utm_source=preview-mode&utm_medium=rec#Section-1-Protocol-Fundamentals), which has maintained its strong peg to ETH since withdrawals were enabled on Ethereum with the [Shanghai/Capella](https://ethereum.org/en/staking/withdrawals) upgrade on April 12, 2023. 

  

rETH’s adoption across DeFi is vast, supported by [numerous platforms](https://criffy.com/currencies/rocket-pool-eth) including Sommelier, Merkle, Convex Finance, Beefy, and Gamma, to name a few, with APYs on those platforms ranging from 9-16%. 

  

On Arbitrum, the Balancer rETH/ETH pool and Uniswap rETH/ETH pool serve as the primary sources of liquidity for rETH. Notably, significant token adoption is evident on [Aave](https://app.aave.com/), [Pendle](https://app.sentio.xyz/share/_valciputw8kvg3e?from=%22-6M%22&to=%22now%22), and [Silo](https://silo.observer/silo/arbitrum-original/rETH/tvl) protocols, with rETH TVL of [$3.5M](https://app.aave.com/reserve-overview/?underlyingAsset=0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8&marketName=proto_arbitrum_v3), [$4.8M](https://app.pendle.finance/trade/pools/0x14fbc760efaf36781cb0eb3cb255ad976117b9bd/zap/in?chain=arbitrum), and [$6.2M](https://silo.observer/silo/arbitrum-original/rETH/tvl), respectively. 

  

## Coinbase’s cbETH

### Origin Story

  

[Coinbase](http://www.coinbase.com/), the leading US cryptocurrency exchange founded by [Brian Armstrong](https://www.brianarmstrong.org/) in 2012, introduced its liquid staking token, [cbETH](https://twitter.com/CoinbaseAssets/status/1562476695357358080?s=20&t=HTmlY50oIUhaIh4E7DFCxg) (coinbase wrapped staked ether), on August 25, 2022. Shortly after, on September 15, 2022, Ethereum completed its transition to Ethereum 2.0, known as The Merge, shifting from a proof-of-work to a proof-of-stake algorithm.

  

cbETH is the latest liquid staking token to hit the market. As Coinbase explains in the [cbETH whitepaper](https://www.coinbase.com/cbeth/whitepaper), it launched a liquid staking token out of necessity, referencing the risks to capital allocators of any one LST protocol [exceeding consensus thresholds](https://notes.ethereum.org/@djrtwo/risks-of-lsd). Coinbase highlights its rationale, writing “it is necessary for the liquid staking market to have strong, competing solutions with differentiated qualities.” 

  

cbETH was [first minted](https://www.coinbase.com/cbeth/whitepaper) on June 12 2022 at a 1:1 ratio to staked ETH (since then, this ratio has fluctuated, as explained in the next section).

  

### Token Characteristics: cbETH

  

[cbETH](https://www.coinbase.com/cbeth) which represents staked ether on the Coinbase platform. When users stake ether on Coinbase, they receive cbETH as a nonrebasing (defined previously) liquid derivative of their staked ETH. The token can be used across DeFi protocols without Coinbase’s permission. 

  

Coinbase runs a [provisioned set of validators](https://www.coinbase.com/cbeth/whitepaper). As a centralized provider, it retains custody of the keys that hold staked ether wrapped for cbETH. Additionally, cbETH is solely governed by Coinbase and does not have a DAO (decentralized autonomous organization) or similar governance mechanism. 

  

cbETH, like rETH, is based on the [cToken model](https://docs.compound.finance/v2/ctokens/) which enables users to earn interest based on an exchange rate relative in value to the underlying asset (ETH). Tokens are minted or burned according to a a floating conversion rate, which means that staking post-commission rewards, minus penalties, accrue passively, and the token is not pegged 1:1 to the value of ETH. 

  

Coinbase made a design decision to use the cToken model, versus the aToken model. [The token’s whitepaper](https://www.coinbase.com/cbeth/whitepaper) explains that although aTokens allow for a more elegant UX (the token’s value is maintained with a 1:1 mapping between the wrapped token and the underlying asset), the cToken model is better for utility, efficiency, and composability (since the token is [ERC-20](https://eips.ethereum.org/EIPS/eip-20) compliant and doesn’t need to be wrapped). 

  

### cbETH Adoption and Growth

  

With a TVL of [$542M](https://defillama.com/lsd) and Ethereum Beacon Chain deposits of [198k](https://coinmarketcap.com/currencies/coinbase-wrapped-staked-eth/), cbETH captures a [1.59%](https://defillama.com/lsd) market share in liquid staking tokens, and 0.6% of total staked ETH (ETH deposits on the Beacon chain are approximately [29M](https://dune.com/sm80979300311/ethereum-beacon-chain-deposits)). 

  

​Interestingly, out of the [1.3M](https://etherscan.io/token/0xBe9895146f7AF43049ca1c1AE358B0541Ea49704) cbETH in supply, only [198,000](https://defillama.com/lsd) is deployed in the DeFi ecosystem. While the number of cbETH holders has consistently risen since its inception, reaching around [46,000](https://dune.com/Marcov/coinbase-wrapped-staked-eth) holders today, the minting of cbETH has exhibited volatility.

  

![](https://lh7-us.googleusercontent.com/tNVk1k7f2BeraNEOQvjNnIcINqiHv-HGQru7aN6sxteczprMlAP_EezG72Xz2TmGmLwPzkQCgA502E5tQ2lBKu300J2-GPoVV-QKIut6HQcsVtyPp3O_xoLMFHenoChqdt3u2W11SGi5-GxBZ8p58_k)

Source: [Coinbase-wrapped-staked-eth](https://dune.com/Marcov/coinbase-wrapped-staked-eth)

  

Most cbETH liquidity is on Uniswap and Balancer, where cbETH trades in a [mixed composable stable pool](https://app.balancer.fi/#/arbitrum/pool/0x4a2f6ae7f3e5d715689530873ec35593dc28951b000000000000000000000481) with wstETH and rETH. [Composable stable pools](https://docs.balancer.fi/concepts/pools/composable-stable.html) create deeper liquidity and better prices. The pool helps provide deeper liquidity and minimizes arbitrage opportunities and slippage. 

  

cbETH is used [widely across the DeFi ecosystem](https://criffy.com/currencies/coinbase-wrapped-staked-eth). It can be found on protocols such as Convex Finance, Merkle, Beefy, Sommelier, and others, where yields range from 10 to 15%. 

  

# Conclusion and Future Developments

Lido’s wstETH, Rocket Pool’s rETH, and Coinbase’s cbETH, are the three most popular liquid staking tokens (LSTs) on Arbitrum with a combined market capitalization of approximately $346M. These LSTs contribute unique features to the ecosystem, attracting users and fostering growth.

  

Lido, with a market capitalization on Arbitrum of approximately [$287M](https://arbiscan.io/token/0x5979d7b546e38e414f7e9822514be443a4800529), successfully leveraged its [first-mover advantage](https://medium.com/@konghuawuhu/how-lido-solidifies-its-leading-position-in-the-ethereum-staking-market-dc1b046ad890) to establish a dominant position in the market. 

  

With a core focus on Ethereum, Lido has created a [plan](https://lido.fi/scorecard?ref=blog.defisaver.com) to improve decentralization across its validator set and governance. This plan specifically aims to increase the diversity and size of its node operators, distribute the validator set across more geographies and jurisdictions, increase the robustness of its delegate set, and improve governance safeguards. 

  

Rocket Pool with a market capitalization on Arbitrum of approximately [$48M](https://arbiscan.io/token/0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8), operates with an ethos closely aligned with Ethereum's values, focusing on building a protocol that is non-custodial, permissionless, and trustless. 

  

In Q2 2024, Rocket Pool plans to release its latest upgrade [Saturn](https://medium.com/rocket-pool/rocket-pool-houston-upgrade-fa2de86118ad) which will continue to scale the protocol by further reducing the cost to run a minipool and also by introducing Megapools. Megapools will allow for many validators to be controlled from a single smart contract, greatly reducing setup costs for validators in Rocket Pool’s network. 

  

Coinbase, with a market capitalization on Arbitrum of approximately  [$11M](https://arbiscan.io/token/0x1debd73e752beaf79865fd6446b0c970eae7732f), is the largest centralized cryptocurrency exchange in the United States. 

  

With significant clout and reputation in the industry, Coinbase offers an easy staking experience, attracting new users who are unfamiliar with onchain projects, and offering staking yields for a higher commission. Coinbase, as the largest centralized cryptocurrency exchange in the United States, has significant clout and reputation in the industry, specifically amongst retail and institutional users who prefer having a custodian for their assets. 

  

Arbitrum’s thriving DeFi ecosystem has shown [aggressive growth in users, transactions, and revenue](https://www.coindesk.com/tech/2023/02/20/arbitrums-user-base-is-fastest-growing-among-leading-blockchains-bernstein/), including liquid staking tokens. We have written previously about Arbitrum’s impressive DeFi ecosystem [here](https://mirror.xyz/0x8a81CEeb0a12998616F1aB932cDbc941F0d539E9/7ith-9Eb0kcdH4zjbtNkWQx5Ri_G-7LqH7_mON73DZY).

  

The Open Dollar protocol enables users to use wstETH and rETH as collateral to borrow the protocol’s native stablecoin. We are proud to be building in the Arbitrum ecosystem, supporting these trusted liquid staking tokens, and innovating on the inefficiencies of traditional collateralized debt positions (CDPs). 

  

Written by [Rika Goldberg](https://twitter.com/RikaGoldberg)

**