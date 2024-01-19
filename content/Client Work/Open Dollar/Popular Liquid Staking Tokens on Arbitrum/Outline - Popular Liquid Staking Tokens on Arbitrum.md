---
title: Popular Liquid Staking Tokens on Arbitrum
published date: 
client: Open Dollar
distribution channel: 
tags:
  - staking
---
[[Draft - Popular Liquid Staking Tokens on Arbitrum]]

I struggled to find charts that show this drop.
I. Discovery Phase
- [[Staking ETH, A lay of the land]]
	- The purpose of liquid staking is to unlock liquidity in staked ETH by creating a financial product: a [derivative](https://www.investopedia.com/articles/optioninvestor/10/derivatives-101.asp). Similar to any other type of derivative traded on traditional financial exchanges, a liquid staking derivative represents some value of the underlying staked ETH.
- Arbitrum Ecosystem: 
	- **Tenderize**
		- https://whitepaper.tenderize.me/introduction/why-tenderize
			- Tenderize Labs believes the Web3 movement is about internet users taking back their well-deserved digital sovereignty. For this to happen, **a ==credibly neutral== layer of the internet** is required. This layer is currently being built on top crypto networks that feature a **decentralized validator set.**
			- [[Credible Neutrality and Foundations]]
				- Credible neutrality is dependability. It means a stakeholder (e.g a user or a developer) can use or build on a protocol with confidence it will [not change against their interests](https://nakamoto.com/credible-neutrality/)
	- https://forum.arbitrum.foundation/t/tenderize-v2-testnet-is-live-liquid-stake-your-grt-and-lpt/19594
		- Tenderize is a fully permissionless liquid staking protocol allowing users to liquid stake GRT and LPT with validator-specific LSTs. Tenderize enables liquid staking without compromising a **decentralized validator set**, delivering a liquid staking experience as **close to native staking** as possible.
	- V2 is live on Goerli testnet - stake GPT, LPT, and MATIC https://twitter.com/tenderize_me/status/1725182618717794770?s=20
		- V2 Testnet: https://cooking.tenderize.me/
		- "Introducing Tenderize V2" https://www.tenderize.me/blog/introducing-tenderize-v2-our-new-look-2
			- "Using a validator-specific LST approach of Tenderize v2, proof-of-stake networks can enjoy liquid staking without compromising validator decentralization or censorship resistance."
			- "Demand for liquid staking is on the rise, but there is a major problem - liquid staking solutions of today actively centralize the network’s underlying validator set. When this happens, the censorship resistance of the network is at risk."
			- "Without censorship resistance, there is no guarantee that a third party won’t modify transactions on the network. The immutable and unstoppable attributes which stem from the decentralized validator set drive demand and value for the network's native asset."
			- "One part of the Tenderize ecosystem is the TenderVaults - a protocol that mints validator-specific ERC20 tokens representing stake and accrued rewards, called tTokens. Instead of funneling stake to a whitelisted set of validators, users select which validator they want to stake to."
- [[Tenderize Connecting Web3 with DeFi]]
- [[Enhanced Liquid Staking is coming to the Graph ecosystem]] 
- **Tenderize is middleware** https://blog.tenderize.me/web-3-infrastructure-the-search-for-a-connected-decentralized-world/
- Tenderize protocol mints **validator specific LSTs** which are swappable through a shared liquidity pool 

II. Discovery Phase II
==**RocketPool**==
Feedback from Tim: Any information on **future developments planned**, where or **how widely these tokens are used and adopted**, brief **histories** of them, their **growth trends**, what’s unique about each
	- Market cap is the most important indicator because it shows how much liquidity there is. 
	- Rocket Pool's network is highly collateralized, so in the event something goes bad there is a lot of collateral from the node operators. If reth holders need to get money back, there's the RPL collateral & the ethereum itself that node operators put up to be a validator. 
	- https://www.youtube.com/watch?v=R19Yl3hjJCA&list=PLO9a_arVaRQkCCzic_PsUfNPbN3FtXjfj&index=7
**See outline for more**
A. Future developments planned
	[[Where we are and what's to come]]
B. [Brief History](https://rocketpool.net/protocol/about)
- The founder David Rugendyke was inspired by Vitalik's [[mauve paper]] written in September 2016. 
- In December 2016 he started working on Rocket Pool
- In May 2017, David wrote the first Medium article about Rocket Pool where he introduced the protocol and the concepts of smart nodes & mini pools. Also, [an alpha version was released]() and a community started to form. 
	- Unique part about Rocket Pool is that unlike centralized pow pools, it uses smart contracts to create a self regulating decentralized network of smart nodes. Users could deposit any amount of Ether to earn interest on their deposit while securing the Ethereum network. 
	- RP was built to be compatible with Casper (a future change to how the Ethereum network reaches consensus) which was still in development at the time. 
	- David built a dummy Casper contract that simulated the inputs/outputs of Casper so that RP could work.  
	- Rocket Pool protocol consists of smart contracts, smart nodes, and mini pools. 
		- Smart contracts assign users into mini pools that are assigned to smart nodes for staking. 
		- All 3 work together to automatically scale and load balance itself across multiple cloud hosting providers
C. Where or how widely reth is used & adopted
	- Aave v3 onboarded rETH (across L2s Optimism, Arbitrum, Polygon)
		- https://governance.aave.com/t/arfc-add-reth-to-aave-v3-arbitrum-liquidity-pool/12810
		- https://x.com/Rocket_Pool/status/1625135866246225921?s=20
Launched on mainnet on Nov. 9 2021
C. Growth trends
    i. https://stake.rocketpool.net/network
       a. Looking at let's say just US, in one year went from 375 to 1301. Europe went from 180 to 961
D. Why do users trust it
	- [Rocket Pool is a first of its kind ETH Proof of Stake Protocol, designed to be community owned, decentralised, trustless and compatible with staking in Ethereum. It was first conceived in late 2016 and has since had over 5 successful public betas with over 100,000 in testneth ETH staked over the life span of ETH development.](https://governance.aave.com/t/arfc-add-reth-to-aave-v3-arbitrum-liquidity-pool/12810)
		- Link to public beta comment: https://docs.rocketpool.net/overview/faq
	- [The core premise behind a protocol is to ensure the network is not beholden to any one party. This is a principle directly linked to Ethereum and ETH itself, and a mindset used at every stage of the process as Rocket Pool has evolved.](https://governance.aave.com/t/arfc-add-reth-to-aave-v3-arbitrum-liquidity-pool/12810)
	
**Resource**: Rocket Pool DeFi Market Rates
https://docs.google.com/document/d/1XiOPWMjG5_BBxF5G5MafZc9Cde24y9jp-iKWKZsJxpk/edit

E. Future developments

**==LIDO==**
Unique features:
- interchain expansion (see https://thedefiant.io/what-is-lido)
	- - For Ethereum (ETH) – stETH
	- For Polygon (MATIC) – stMATIC
	- For Polkadot (DOT) – stDOT
	- For Kusama (KSM) – stKSM
	- For Solana (SOL) – stSOL
- stETH rewards auto compound?! https://docs.lido.fi/guides/lido-tokens-integration-guide
Origin story/founders
	https://www.bitstamp.net/learn/cryptocurrency-guide/what-is-lido-ldo/
	Shapovalov, Lomashuk, CryptoCobain
		> While the prices of ETH and stETH are expected to be closely aligned, the two tokens are not formally “pegged.” This was especially evident during the collapses of both Terra and FTX in 2022 where the price of stETH dropped below ETH. However, in usual market conditions, **arbitrageurs** find small differences in the prices between stETH and ETH and trade between the two. This generates profits for traders while keeping the prices of the two assets relatively stable.
Big ecosystem (widely adopted across ethereum apps): https://docs.lido.fi/guides/lido-tokens-integration-guide/
Benefits:
	https://docs.lido.fi/guides/lido-tokens-integration-guide
	 >-stETH/wstETH is almost as safe as ether, price-wise: barring catastrophic scenarios, its value tends to hold the ETH peg well;
	 
**==Coinbase cbeth==**
https://www.altcoinbuzz.io/cryptocurrency-news/why-coinbase-introduced-the-cbeth-token/ #toread 
>Coinbase has also released a [CBETH white paper](https://www.coinbase.com/cbeth/whitepaper), which explains the necessity for strong competitive liquid staking systems with “differentiated qualities.” Today, the Ethereum liquid staking market is controlled by a single solution that is on the verge of exceeding 33% network penetration. Coinbase also notes the success of USDC, the stablecoin created by the Centre consortium of Coinbase Global and Circle Financial. Furthermore, the exchange believes the trading platform’s trusted reputation will help cbETH expand.


Question: How is value of stETH calculated? (I know reth's value calc)
Doomsday scenario question: LSTs start to drop in value b/c of .... can I easily sell them for ETH? Let's say reth price starts tanking, can i sell back to eth? 

Question: are the validators on  permissionl

**Could use this website APY Vision**: https://app.apy.vision/pools/balancerv2_arbitrum-WETH-rETH-0xade4a71bb62bec25154cfc7e6ff49a513b491e81