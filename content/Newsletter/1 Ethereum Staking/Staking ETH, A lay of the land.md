---
title: "Staking ETH: A lay of the land"
client: Rika
published date: 11/05/23
status: Published
tags:
  - staking
  - "#newsletter"
distribution channel: Paragraph
---
Final published: https://paragraph.xyz/@sharingiscaring/staking-eth-a-lay-of-the-land

[[Newsletter/1 Ethereum Staking/Outline]]

# Staking ETH: A lay of the land

## An exploration of why and how to stake ΞTH, along with considerations and risks

- ![User avatar](https://paragraph.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpapyrus_images%2Faed209452feec1d4b7e55a02265ffeb6&w=96&q=75)

### Rika

November 5, 2023


_Greetings, readers! (or_ [_Gm_](https://www.wsj.com/articles/gm-crypto-bitcoin-nfts-twitter-11649261057)_, as we say in crypto). The purpose of this newsletter is to provide digestible breakdowns of complex protocols and products in the Ethereum ecosystem. You can expect quality substantive content (no hype pieces, shilling, or paywall) written for crypto-curious readers who are either newer to crypto or seasoned users who value refreshers on the fundamentals. You can learn more about this newsletter in the_ [_introductory post._](https://paragraph.xyz/@sharingiscaring/breaking-down-ethereum-protocols-products)

[**ΞTH Market Capitalization**](https://coinmarketcap.com/currencies/ethereum/) = $226,848,377,160 (approximately $227B)

[**ΞTH Price**](https://coinmarketcap.com/currencies/ethereum/) = $1,886 (approximately $2k)

## Introduction

Most likely because staking ETH is a cornerstone, and potentially lucrative, component of the Ethereum network, you can find a Godzilla amount of information about it online.

One problem however with information overload is misinformation. The crypto space is plagued with self-serving marketing campaigns that embellish or distort the truth, making it challenging for people to suss out what's real and what's not.

I wrote this post for two reasons:

1. As a (gentle and fun) forcing mechanism for me to think more clearly and deeply about Ethereum staking.
    
2. To **share** what I learned with my newsletter readers.
    

The post is structured as follows:

- the first part will get us aligned on important definitions
    
- then I'll introduce some theory and a background on staking.
    
- then we'll dive into practical ways for how to stake ETH, including risks and considerations.
    
- finally, the recap and conclusion.
    

I hope you have fun reading this post. As always, feel free to reach out to me by replying directly to this email (if you are a subscriber), commenting on this post, or sending me a message on [Twitter](https://twitter.com/RikaGoldberg). My DMs are open.

---

## Useful definitions

Let's align on six important definitions. You may find some of these rudimentary, so feel free to skip to the next section if you're already comfortable with these concepts.

_*Note: all of these definitions are from_ [_Ethereum.org_](http://ethereum.org/)_, a leading educational resource._

1. _What is_ **_Ethereum_**_?_
    
    - Ethereum is a public network, a blockchain, and an open-source protocol -- operated, governed, managed, and owned by a global community of tens of thousands of developers, node operators, ETH holders, and users.
        
2. _What is_ **_Ether_** _(a.k.a. ETH)?_
    
    - Ether (also known by its ticker symbol ETH) is the native currency transacted on Ethereum. ETH is needed to pay for usage of the Ethereum network (in the form of transaction fees). ETH is also used to secure the network with staking.
        
3. What is a **consensus mechanism**?
    
    - The term consensus mechanism refers to the entire stack of protocols, incentives, and ideas that allow a network of nodes to agree on the state of a blockchain.
        
4. What is **proof-of-stake**?
    
    - A type of consensus mechanism that derives its crypto-economic security from a set of rewards and penalties applied to capital locked by stakers. This incentive structure encourages individual stakers to operate honest validators, punishes those who don't, and creates an extremely high cost to attack the network.
        
5. What is a **validator**?
    
    - Node operators can add a validator to their consensus clients by depositing 32 ETH in the deposit contract. The validator client comes bundled with the consensus client and can be added to a node at any time. The validator handles attestations and block proposals. They enable a node to accrue rewards or lose ETH via penalties or slashing. Running the validator software also makes a node eligible to be selected to propose a new block.
        
6. What is **proof-of-work**?
    
    - Proof-of-work is a type of consensus mechanism that derives its crypto-economic security from "mining", the act of nodes running GPUs or ASICs hardware to solve cryptographic puzzles, validating transactions, and adding blocks to the chain. Ethereum has deprecated proof-of-work and now uses proof-of-stake consensus instead.
        

## Theory and background on staking ΞTH

[Staking](https://ethereum.org/en/staking/) is a native feature of the Ethereum blockchain, and it is one of the most important contributions that an Ethereum user can make to the network. Because Ethereum is a decentralized and community-driven network, owned and managed by its users, anyone who owns ETH can actively contribute to the network's security.

### The Merge

The ability to stake ETH was added as a native feature to the Ethereum blockchain on September 15, 2022, during a technical upgrade known as [The Merge](https://ethereum.org/en/roadmap/merge/#what-is-the-merge). It was a momentous event that celebrated one of Ethereum's most profound technical advancements, the merging of Ethereum's original execution layer (Mainnet) with its new proof-of-stake consensus layer, the Beacon Chain.

Proof-of-stake's predecessor, [proof-of-work](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/), was used since Ethereum's [genesis](https://ethereum.org/en/history/#frontier) in 2015. For years, however, Ethereum developers were developing and testing proof-of-stake, to ensure the highest level of security and efficiency before it was finally integrated into the Ethereum network in The Merge upgrade.

**Proof-of-stake is a superior consensus mechanism to proof-of-stake**, for the following reasons:

- Proof-of-work burns an [insanely large amount of electricity](https://www.theverge.com/2019/7/4/20682109/bitcoin-energy-consumption-annual-calculation-cambridge-index-cbeci-country-comparison).
    
- Proof-of-work is much [cheaper for a malicious actor to attack](https://vitalik.ca/general/2020/11/06/pos2020.html) than proof-of-stake.
    
    - In a proof-of-work system, the primary financial hurdle for individuals is the acquisition of hardware for mining. Most miners on Ethereum use [GPUs](https://www.arm.com/glossary/gpus), which are significantly less expensive than [ASICs](https://www.arm.com/glossary/asic) and can be rented cheaply.
        
    - On the other hand, the primary cost to participate as a validator in a proof-of-stake system is capital. Validators must deposit 32 ETH.
        
        - Vitalik (the founder of Ethereum) explains this in greater detail with a small theoretical calculation. If you're interested, you can see how he crunches the numbers, along with the full rationale, in his essay [Why Proof-of-Stake](https://vitalik.ca/general/2020/11/06/pos2020.html).
            
- Attacks on a proof-of-work network are very difficult to recover from. Attacks on a proof-of-stake network are much easier to recover from.
    
    - In a **proof-of-work** network, a 51% miner cartel can keep attacking the chain, with a type of attack called [spawn camping](https://ethereum.stackexchange.com/questions/16480/what-is-a-51-spawn-camp-attack-and-is-it-any-different-from-a-normal-51-att), **making the chain permanently useless**, and causing honest miners to drop out. To recover, the community can choose to implement a hard fork, but miners on the attacked chain will be "bricked", rendering them useless.
        
    - On the other hand, a **proof-of-stake** system has a **built-in slashing mechanism** where only the bad actor, and no one else on the network, has their stake destroyed. And for harder-to-detect attacks such as a 51% coalition censoring nodes on the network, the community can coordinate a minority user-activated soft that destroys the attacker's stake.
        

## The different ways to stake ΞTH

There are four ways to stake ETH. Each method requires a different level of technical expertise and carries its own set of risks.

These four methods are:

- **1) Solo staking**, where you deposit a minimum of 32 ETH and run a validator node on a home computer
    
- **2) Staking-as-a-service**, where you deposit a minimum of 32 ETH and a 3rd party runs a validator node for you
    
- **3)** **Pooled staking**, where you deposit any amount of ETH, a 3rd party runs a validator node for you, and you receive a receipt token
    
- **4)** **Liquid staking**, where you deposit any amount of ETH, a 3rd party runs a validator node for you, and you receive a receipt token, which can be used across [DeFi](https://ethereum.org/en/defi/) (decentralized finance) protocols.
    

### 1. Solo staking

Solo staking is the gold standard because it yields maximal decentralization for the Ethereum network. And decentralization is a core pillar of Ethereum, not just a nice-to-have feature.

In an ideal world, every node on the Ethereum network would be a solo staker, but the reality is that only approximately [1% of nodes](https://dune.com/hildobby/eth2-staking) on Ethereum are solo stakers (the green section in the visual below represents the share of solo stakers compared to other types of staking).

![](https://storage.googleapis.com/papyrus_images/72649c6caa585a46816e2c5b0cbf6419.png)

Eth staked by category. [Dune dashboard](https://dune.com/hildobby/eth2-staking) by @hildobby.

Only ~1% of stakers solo stake because compared to the other methods, it is the most technically challenging, requiring a user to set up and manage a validator node.

**Solo staking requirements:**

- Basic hardware setup and an understanding of minimal specs
    
- Basic software setup: run a node on Ethereum 1, another node on Ethereum 2, validator software, and key manager software
    
- Node maintenance: network upgrades or other critical client upgrades
    
- Reliable uptime: >10 mb/s upload and download time. (Rewards are proportional to the time your validator node is online and properly attesting)
    
- 32 ETH deposit
    

**Solo staking risks:**

- Your ETH is at stake
    
- There are financial penalties for your node going offline
    
- Behavior that is deemed harmful to the network, even if not intentionally malicious, results in financial penalties    

Solo stakers are prone to making [common mistakes](https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50) that will get their validator node slashed, resulting in financial penalties.

### 2. Staking-as-a-service

> It is possible, and indeed is part of Ethereum 2's design, to ensure that validators can run on low-end hardware and anyone can run a validator at home. That said, being possible does not mean it is desirable: there are significant costs involved with running a validator and, as such, many people will look to a third party to operate some or all of the validator functions.
> 
> - [Jim McDonald](https://www.attestant.io/posts/evaluating-staking-services/), co-founder of Attestant, a staking-as-a-service provider
>     

Staking-as-a-Service exists to alleviate the hassle of setting up and maintaining a validator node. In exchange for a fee, individuals or organizations can rely on a third party to handle the complexities of being a validator.

Although using a Staking-as-a-Service provider is convenient, there are inevitable trust assumptions, therefore it's crucial to choose a reputable service provider. In addition to reputation, other [important considerations](https://ethereum.org/en/staking/saas/) need to be thought through, as outlined below.

**Staking-as-a-service considerations:**

- Is essential code 100% open source?
    
- Was essential code audited and the results made available to the public?
    
- Was a public bug bounty performed on essential code?
    
- Has the code been available and used by the public for >1 year?
    
- Is the service permissionless for users to sign up?
    
- Is there diversity in execution clients used?
    
- Is there diversity in consensus clients used?
    
- Do users have self-custody of validator credentials, signing, and withdrawal keys?
    

**A sample of Staking-as-a-service Providers:** [Kiln](https://www.kiln.fi/), [Attestant](https://www.attestant.io/), [Stakefish](https://stake.fish/). More can be found on Ethereum.org's website [here](https://ethereum.org/en/staking/saas/).

**Staking-as-a-service risks:**

- Counterparty risk of using a service provider
    
- Use of your signing keys is entrusted to someone else who could behave maliciously
    

### 3. Pooled staking

Unlike solo staking and staking-as-a-service, pooled staking doesn't require a user to have a minimum of 32 ETH to stake. Rather, pooled staking uses a collaborative approach where users' funds are combined in the pool to meet the 32 ETH minimum deposit.

The pool operator manages the validator node infrastructure. They are responsible for activating and deactivating validators according to deposit and withdrawal activity in the relevant pool.

Users benefit by using a staking pool because they earn staking rewards without having to own or operate a validator node. Individuals effectively own a percentage of the pool based on their contributions, which, again, can be _any amount_ of ETH, not necessarily a minimum of 32 ETH.

**Pooled staking considerations:**

- Is essential code 100% open source?
    
- Was essential code audited and the results made available to the public?
    
- Was a public bug bounty performed on essential code?
    
- Has the code been available and used by the public for >1 year?
    
- Is the service trustless in that no one holds custody of users' keys or reward distributions?
    
- Is the service permissionless for anyone to sign up as a node operator?
    
- Is there diversity in execution clients used?
    
- Is there diversity in consensus clients used?
    

**A sample of Staking pool operators:** [Rocket Pool](https://rocketpool.net/), [Stakewise](https://stakewise.io/), [Bedrock](https://bedrock.rockx.com/). More can be found on Ethereum.org's website [here](https://ethereum.org/en/staking/pools/).

**_Pooled Staking is not natively supported by Ethereum, which adds a new layer of risk, as outlined below._**

**Pooled staking Risks:**

- Counterparty risk of using a pool operator
    
- Smart contract risk of pool contract
    
- Execution risk of using a pool operator
    

### 4. Liquid staking

Liquid staking is staking with a [DeFi](https://ethereum.org/en/defi/) (decentralized finance) twist.

**The purpose of liquid staking is to unlock liquidity in staked ETH by creating a financial product: a [derivative](https://www.investopedia.com/articles/optioninvestor/10/derivatives-101.asp). Similar to derivatives traded on traditional financial exchanges, a liquid staking derivative represents some value of the underlying staked ETH.**

Many staking pool operators offer liquid staking derivatives. This means when a user deposits some amount of ETH into the pool, they receive a transferable receipt token (i.e., liquid staking token) that represents their share in the pool. This token allows withdrawal rights and, unlike other types of staking, it can be transferred to other wallets.

Furthermore, a liquid staking token can be used across DeFi protocols and applications, for swapping, borrowing, and lending. It can act as collateral, generating further income, while earning staking rewards.

However, as with all DeFi products, liquid staking tokens carry significant risks.

Liquid staking is considered the riskiest type of staking, compared to solo staking, staking-as-a-service, and pooled staking, because it introduces further counterparty risk as the liquid staking tokens are transferable.

Liquid staking tokens tend to create cartel-like behaviors where a large amount of staked ETH ends up in the control of a few centralized organizations, creating conditions for censorship or value extraction.

**A sample of liquid staking providers:** [Rocket Pool, Stakewise](https://rocket%20pool%2C%20stakewise%2C/), [Lido](https://lido.fi/). More can be found on [Ethereum.org](http://ethereum.org/)'s website [here](https://ethereum.org/en/staking/pools/).

---

Vitalik wrote a post titled [The Risks of LSD](https://notes.ethereum.org/@djrtwo/risks-of-lsd), heeding capital allocators about the significant risks associated with pooled capital when it exceeds critical consensus thresholds. He notes that these risks are inherent, therefore the community needs to keep a close eye on the numbers. **He writes that capital allocators should not allocate to LSD protocols exceeding 25% of total staked Ether due to the inherent and extreme risks associated.**

A worrying statistic, and one that the Ethereum community is rightfully enraged about, is liquid-staking-provider, [LIDO](https://lido.fi/), whose current market share is at ~31%, as seen in [this Dune dashboard](https://dune.com/hildobby/eth2-staking).

![](https://storage.googleapis.com/papyrus_images/ab5747af092c550e3d5c1afdfe1f7167.png)

[Lido Staking](https://dune.com/hildobby/eth2-staking) Market share by @hildobby

## Recap and conclusion

To recap, there are four methods to stake ETH:

1. **Solo staking**, where you set up and maintain a validator node. Requires a deposit of 32 ETH. Although this is the most technically challenging method, **it is the gold standard** because it is maximally decentralized for the Ethereum network. If you find it fun to tinker and be technical, then learning how to solo stake may be the best method for you. Plus, there are no middlemen so you keep 100% of the rewards that your node earns.
    
2. **Staking-as-a-service,** where you use a third party to set up and maintain a validator node. Requires a deposit of 32 ETH. In exchange for alleviating the hassle of running infrastructure, you pay the service provider a fee, and sometimes a portion of the rewards your node earns. This method, although convenient, introduces trust assumptions and is potentially detrimental to network decentralization.
    
3. **Pooled staking**, where you use a pool operator and participate with multiple stakers to pool funds. A deposit of 32 ETH is not required. You can deposit any amount of ETH. Rewards are proportional to your ownership share in the pool. The operator is responsible for activating and deactivating validators in line with deposit and withdrawal activity, and managing the validator infrastructure supporting the pool. Pooled staking, although convenient, is not natively supported by the Ethereum protocol, and it introduces counterparty risk.
    
4. **Liquid staking,** where, similar to pooled staking, you receive a transferable receipt token that represents your share in the pool, acts as proof of ownership, and allows withdrawal rights. The additional functionality of this token, which differs from pooled staking, is that you can use this token across DeFi protocols as collateral for borrowing and lending. Liquid staking, although convenient, and potentially lucrative, introduces counterparty risk, and is considered the riskiest type of staking. It is also the biggest threat to Ethereum's decentralization.
    

Ideally, every node on Ethereum's network is a solo staker, running on a home computer. However, the reality is much different, likely due to market forces, human psychology, and behavioral economics. Only approximately 1% of nodes on the Ethereum network are solo stakers, with most individuals and organizations choosing to participate in staking through liquid staking, the riskiest type of staking, and also the biggest threat to Ethereum's decentralization.

If you are curious about solo staking, [Ethereum.org](http://ethereum.org/) built a great [comprehensive portal](https://%20https//ethereum.org/en/staking/solo/#get-started-on-the-staking-launchpad) to help you get your hands dirty _in a safe way_. Remember to always practice on Testnet, with fake ETH, before depositing real money into Mainnet.

---

As always, feel free to reach out to me with questions, suggestions, or feedback, by replying directly to this email (if you are a subscriber), commenting on this post, or sending me a message on [Twitter](https://twitter.com/RikaGoldberg). My DMs are open.

-Rika