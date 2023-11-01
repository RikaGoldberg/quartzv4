---
title: Reviewing Ethereum Staking
client: Rika
status: outline
distribution channel: Paragraph
tags:
  - next
---
#next Review forum for anything interesting/relevant https://research.lido.fi/

Fixed intro for each post 
I. Each post should align on the definition of Ethereum and ETH 
II. Identify which stakeholder(s) the post is addressing
**Stats**
III. Market cap of ETH 
IV. Price of ETH

I. Introduction
  A. The Merge was executed - test
  B. What is proof-of-stake
       A. [Most broadly, staking is a cryptoeconomic model that incentivizes the correct behavior of network participants using penalties and rewards in order to strengthen its underlying security](https://blog.chain.link/liquid-staking/
  B. Benefits of proof-of-stake 
       i. Vitalik article (very theoretical, not necessarily grounded in practice?)
         A. See Paragraph post 
       ii. Visa Article https://usa.visa.com/solutions/crypto/the-merge-ethereum.html
          a. The claim is that staking ETH is essential for sustainability, security, and scalability
       a. Sustainability - less electricity usage
       b. Security - more decentralized, in theory, because less capital requirements (stake 32 ETH & don't need expensive hardware) so more people can run propose blocks/run nodes
       c. ==Scalability - Staking doesn't actually bring scalability. Rollups are what scale Ethereum. L1 serves as the settlement layer, which is why it's important for it to be decentralized.== 
         c1. [Ethereum Mainnet provides a hub for optimistic rollups to verify fraud proofs and resolve disputes. Moreover, transactions conducted on the rollup are only final _after_ the rollup block is accepted on Ethereum. Once a rollup transaction is committed to Ethereum’s base layer, it cannot be rolled back (except in the highly unlikely case of a chain reorganization)](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/#settlement)
         c2. [Danksharding is what will make Ethereum reach more TPS (again, on the rollup level)](https://ethereum.org/en/roadmap/danksharding/)
      d. Capital efficiency? Instead of HODLING ETH, use it for passive income. Is there anything like this for traditional investing? Maybe like an ETF? We're so used to banks & regulation providing our money, but then there was the **bank run** on Silicon Valley Bank, and there's inflation...(idk!)
II. Ways to stake ETH
    A. Run a full node (solo staking).
    > [Great resources here](https://ethstaker.cc/resources)
         i. requires 32 ETH 
         ii. you are a node operator, running your own node i.e, running hardware
          a. requires basic hardware setup and understanding of minimal specs. Using a CLI is no longer required..but the medium article makes it sound lil more complicated...==I think setting up an OS and getting it properly configured would be hard==
        iii. requires software setup - run an Ethereum 1 node, an Ethereum 2 node, validator software, and key manager software. https://www.attestant.io/posts/evaluating-staking-services/
         iv. you need to do maintenance on your node - network upgrades or other critical client upgrades 
         v. you need reliable uptime. rewards are proportional to the time your validator is online and properly attesting. 10 mb/s upload and download time is recommended. you get penalized without this.
         vi. you can get slashed even if you're not a malicious actor, by doing common mistakes. Lots of them here https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50
    B. Staking as a service
    >  [[It is possible, and indeed is part of Ethereum 2's design, to ensure that validators can run on low-end hardware and anyone can run a validator at home. That said, being possible does not mean it is desirable: there are significant costs[1](https://www.attestant.io/posts/evaluating-staking-services/#user-content-fn-1) involved with running a validator and, as such, many people will look to a third party to operate some or all of the validator functions](https://www.attestant.io/posts/evaluating-staking-services/) - Jim McDonald]
         i. requires 32 ETH 
         ii. don't need to run your own node, so don't need to upgrade/maintain hardware
         iii. But more trust assumptions & detrimental to network decentralization
    C. Pooled Staking (aka Delegated Staking)
      a. Description
        i. Pooled or delegated staking is not natively supported by the Ethereum protocol, which creates counterparty risk, but many users want to stake <32 ETH so this service was built out for the demand
        ii. [Staking pools are managed by a pool operator with the participation of multiple stakers; typically less than 32 ETH as is a requirement for native staking. Rather than owning your validator, your stake is combined with other users to meet the required 32 ETH deposit. The operator is responsible for activating and deactivating validators in line with deposit and withdrawal activity, and managing the validator infrastructure supporting the pool](https://www.kiln.fi/post/comparing-staking-options-native-pooled-and-liquid-finding-the-right-approach-for-you)
        iii. [This collaborative approach allows individuals to benefit from staking rewards while mitigating the need for owning and operating entire, individual validators. Users effectively own a percentage of the pool based on their contributions.](https://www.kiln.fi/post/comparing-staking-options-native-pooled-and-liquid-finding-the-right-approach-for-you)
        iv. [However, these staked-ETH tokens tend to create cartel-like behaviors where a large amount of staked ETH ends up under the control of a few centralized organizations rather than spread across many independent individuals. This creates conditions for censorship or value extraction. The gold standard for staking should always be individuals running validators on their own hardware whenever possible](https://ethereum.org/en/staking/pools/
      b. Pool Operators
        i.  Rocket Pool 
        ii.  Kiln
 D. Liquid Staking
      i. Pooled staking with a twist! 
      A. Benefits 
        a. unlocks liquidity for staked tokens with composability (a new token is minted e.g. stETH that represents a claim to your staked eth)
        b.  composability (use on defi protocols for lending and such
        c. no minimum eth requirement so extremely accessible to anyone 
        Said differently:
          ii. [The primary difference is that you will receive a transferrable receipt token (liquid staking token) in exchange for your stake. The token represents your stake in the pool, acts as proof of ownership, and allows withdrawal rights. It can be transferred to other wallets, and may be accepted by other services as collateral for further reward generating activities all while you continue to earn staking rewards](https://www.kiln.fi/post/comparing-staking-options-native-pooled-and-liquid-finding-the-right-approach-for-you)
      iii. [‍Liquid staking is often viewed as the riskiest option compared to pooled or native staking, as it introduces further counterparty risk as the receipt tokens are transferable](https://www.kiln.fi/post/comparing-staking-options-native-pooled-and-liquid-finding-the-right-approach-for-you)
    . iv.  [Liquid Staking Metrics](https://defillama.com/lsd)
	     a2. [Staking Metrics - Dune Dashboard](https://dune.com/hildobby/eth2-staking)
		     ==wow, solo staking is only ~1%??==
	   ii. Pool providers
III. Rewards
  A. Solo Staking
     i. [A common misconception is that the gross rewards rate is a given in native staking, whilst the reality is that there is variability in this rate when running an individual validator](https://www.kiln.fi/post/comparing-staking-options-native-pooled-and-liquid-finding-the-right-approach-for-you)
  B. Pooled Staking
     i. [Gross rewards rates of a pool are not guaranteed. The risks and luck associated with different reward types, and the impact of short-term fluctuations that is present with dedicated validators, is somewhat mitigated as rewards are shared out amongst many validators](https://www.kiln.fi/post/comparing-staking-options-native-pooled-and-liquid-finding-the-right-approach-for-you)    
IV. Risks of staking (macro & micro risks)
   A. Macro Risks
   > [Much of the above discussion focuses on risks an LSD pool, such as Lido, pose to the Ethereum protocol and not actually the risk to those holding capital in the pooled system. Thus this appears to suffer from the tragedy of the commons – each individual making a rational decision to stake with the LSD protocol is making a good decision for the user but an increasingly bad decision for the protocol. But, in fact, risk to the Ethereum protocol and risk to capital allocated to the LSD protocol when exceeding consensus thresholds are _tied together_](https://notes.ethereum.org/@djrtwo/risks-of-lsd)
      i. market conditions and behavior has created centralization of nodes, which opens up attack vectors e.g, governance, self-dealing (is this similar to centralization of mining pools - is this relevant for this post?!)
          a. [While PoS removes the computational complexity of PoW and makes it possible for more people to take part in securing the network, a significant chunk of the ETH that goes into staking can still concentrate on the hands of very few validators. This is especially relevant with the case of staking pools, where a few smart contracts or off-chain entities can become concentration points for a large proportion of staked ETH. Therefore, we should not take the transition to PoS as a simple guarantee for more decentralization. ==Rather, we should observe the network metrics to help make sure security and decentralization don’t regress in the long run==](https://usa.visa.com/solutions/crypto/the-merge-ethereum.html)
    ii. [staked-ETH tokens tend to create cartel-like behaviors where a large amount of staked ETH ends up under the control of a few centralized organizations rather than spread across many independent individuals. This creates conditions for censorship or value extraction. The gold standard for staking should always be individuals running validators on their own hardware whenever possible](https://ethereum.org/en/staking/pools/)
       a. [In the extreme, if an LSD protocol exceeds critical consensus thresholds such as 1/3, 1/2, and 2/3, the staking derivative can achieve outsized profits compared to non-pooled capital due to coordinated MEV extraction, block-timing manipulation, and/or censorship – the cartelization of block space. And in this scenario, staked capital becomes discouraged from staking elsewhere due to outsized cartel rewards, self reinforcing the cartel’s hold on staking](https://notes.ethereum.org/@djrtwo/risks-of-lsd)
   B. Micro Risks
       a. Running a node & pooled staking - Hardware risk / smart contract risk / penalties for not knowing what you're doing
       b. DeFi risk (staking with Lido)
       i. impermanent loss? 
       ii. smart contract risk

III. Further Learning
A. Visual Learners: https://www.youtube.com/watch?v=YudpU58uYuM

IV. Things I enjoyed reading this week 
A. Check Substack saved 


### Reasons for staking
- Help to secure the Ethereum network
- Earn passive income (deploy capital and have it make you money - capital efficiency)

### Liquid staking solves problem of financial exclusivity
- Also solves problem of having technical expertise to run your own node, keep it live, and not lose your money. 
- I think any computer would do to run a node but it always has to be on. You get penalized for it going offline. So would probably want another computer. 
- With lido staking, Lido runs nodes and you just get passive income. They take a cut. But it comes at the expense of decentralization

### Lido creates centralization problems
- Lido owns many nodes on Ethereum network, which opens up opportunities for 51percent attacks. LIDO DAO is very powerful??

*This newsletter is for crypto curious, not for experts. To give them practical ways they can participate (and me!) in Ethereum. So I need to get to the chase of here's how you can ... run your own node? Maybe with a raspberry pi? Maybe buy buying staked eth?*

*This newsletter can review Ethereum protocols and products. So review them!*

#### Which products are available for staking your ETH? 
- Lido
- Rocket Pool
- Ethereum itself 

