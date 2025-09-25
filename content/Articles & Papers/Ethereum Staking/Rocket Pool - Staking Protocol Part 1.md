Source: https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd

Welcome to the Rocket Pool Staking Protocol Explainer series! This is part of a four-part guide that covers all aspects of Rocket Pool, a decentralised, trustless and community owned staking protocol designed for Ethereum.

Our goal is to help all Ethereum users gain a better understanding of Rocket Pool. If you’re brand new to Ethereum staking, an experienced staker or even a high level staking as a service (SaaS) provider; this series will provide valuable insights into how you can use Rocket Pool.

Rocket Pool has received multiple audits from the industry’s best, **Sigma Prime** and **ConsenSys Diligence**. Part 4 of this series will go over the audit results and details of Rocket Pool’s ongoing development.

## Rocket Pool Liquid Staking Protocol Series

- Part 1 — Overview and Users of the protocol
- [Part 2 — The Protocol and Oracle Node DAO’s](https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-2-e0d346911fe1)
- [Part 3 — RPL & Tokenomics](https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-3-3029afb57d4c)
- [Part 4 — Launch Details, oDAO Members and more](https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-4-2635c44e4f7e)

For this introduction, we’ll give a high level overview of Rocket Pool and how to stake.

Being a community owned staking protocol, we cater to all aspects of collective ownership. This includes ETH bulls using our simple [staking token rETH,](https://medium.com/rocket-pool/rocket-pool-2-5-tokenised-staking-48601d52d924) to smart contract dApps, wallet providers, DEXs or you amazing staking node operators, be it hobbyist or professional. There’s room for everyone!

# Protocol Overview

Rocket Pool is the base layer protocol for decentralised and trustless Ethereum staking.

Designed to support stakers of all shapes and sizes, Rocket Pool was built with the intent to allow anyone to trustlessly stake ETH to a network of decentralised node operators with full autonomy underpinned by RPL token collateral.

> The core premise behind a protocol is to ensure the network is not beholden to any one party. This is a principle directly linked to Ethereum itself, and a mindset used at every stage of the process as we continue to upgrade the protocol.

Rocket Pool strives to embody the core ethos of Ethereum and DeFi, specifically the non-custodial, trustless nature that allows self-sovereignty to truly thrive.

This is why creating the protocol layer for Ethereum staking is so important, especially with the vast majority of players either not having the technical skills to run a node, or the financial capacity to own 32 ETH.

![](https://miro.medium.com/v2/resize:fit:1400/0*_sJ3t7opc0wDcDDI.png)

[A 10,000 foot view of the components which make up the Rocket Pool Staking Protocol — Click for full size](https://www.rocketpool.net/images/rp-infographic-staking-protocol.png)

## **Protocol vs Staking as a Service**

Protocols support a wide array of actors, including service providers.

Web3 is full of highly knowledgeable Staking as a Service providers (SaaS), helping the world better access the proof of stake (PoS) landscape with projects like Ethereum. They support everything from institutional capital, to hedge funds, family offices and everything in between.

Rocket Pool was designed to support those providers, meaning ETH staked through SaaS solutions can be put to use through Rocket Pool, rather than having to spin up bespoke staking solutions to deal with each client.

ETH holders can choose between paying a service provider or being paid to be an operator. With Rocket Pool, service providers maximize their return by being paid to run a node, both in **ETH and RPL**. The protocol allows teams to run their own infrastructure, and use Rocket Pool to trustlessly stake ETH in batches of 16 ETH — allowing them to put their capital to work further and earn a larger share of returns.

This design means Coinbase or any other large entity could use Rocket Pool the same as a DeFi power user. Simply show up with 16 ETH and you’re treated the same as any other node operator. Rocket Pool’s democratized staking system **doesn’t favor any one party** as ETH staked through Rocket Pool always directly supports the network.

> Rocket Pool’s staked ETH wrapper, rETH, is the purest in DeFi. We foresee a vibrant ecosystem of integrations ranging from lending markets to run validators more efficiently to composability for productivity.

In short, rETH is a natural building block for Etherum, and the most trust-minimised form of staked ETH.

# Protocol Users

Rocket Pool is designed to cater to two main user groups; those that wish to participate in tokenised liquid staking using rETH and those that wish to stake ETH and run a node.

## rETH Tokenised Liquid Staking

In exchange for depositing ETH to Rocket Pool, users receive rETH in return. rETH is fully composable in the wider DeFi landscape, while accruing value from ETH earned through staking.

![](https://miro.medium.com/v2/resize:fit:1400/1*9xqyD0jgovV2z2YZIPUHhA.png)

Visual description of ETH <> rETH swaps

Depositing ETH and receiving rETH can be done in a single transaction by a variety of different user groups, be it individuals, dApps, exchanges, wallets or just about anyone looking to use the protocol or build on top of it. It is an easy and permissionless way to engage in staking without needing to run any staking infrastructure or even have **32 ETH**, with Rocket Pool you can stake as little as **0.01 ETH** this way.

[

## Rocket Pool 2.5 — Tokenised Liquid Staking

### Hello Rocket Poolers! We’re excited today to reveal some big improvements to Rocket Pool, a decentralised staking…

medium.com



](https://medium.com/rocket-pool/rocket-pool-2-5-tokenised-staking-48601d52d924?source=post_page-----8be4859e5fbd--------------------------------)

When you stake ETH and receive rETH, it will automatically begin accruing staking rewards based on performance of the entire decentralised network of node operators operating in Rocket Pool. This means rETH grows in value over time, while holders can utilise that collateral to leverage the wider DeFi landscape while helping to secure the Ethereum network.

rETH’s value is protected against node slashing and downtime by several built in insurance mechanisms, with node operators staking RPL on nodes as collateral for any penalties they incur. More details on these mechanics will be included in Part 3 of this series, RPL & Tokenomics.

If you have rETH, you’ll also be able to trade this back to Rocket Pool for ETH plus rewards at any time if liquidity in the deposit pool will cover the amount. Or swap on any supported decentralised provider such as 1inch at the prevailing market price. No need to wait a few years for Ethereum withdrawals to have liquidity or get your staking rewards. Awesome!

## Node Staking

From hobbyist node operators to full on SaaS professionals, Rocket Pool allows you to earn a greater ROI staking inside the protocol vs outside of it.

![](https://miro.medium.com/v2/resize:fit:1400/1*s4w9ebSoIp-yI4IX6CPxwg.png)

Overview of Rocket Pool node staking process

If you want to run a node in Rocket Pool, you are not charged any fees as you are providing a valuable service for the protocol. What service is that you ask?

> With Rocket Pool, running a node only requires a minimum of 16 ETH per validator vs 32 ETH outside of the protocol.

Once you deposit 16 ETH, the protocol will assign you 16 ETH from users who are depositing ETH and receiving rETH. **So as a node operator you are staking your own 16 ETH and 16 ETH on behalf of the protocol.**

Rocket Pool has a flat commission rate of **15%** which allows the node operator to earn a percentage of the rewards earned on that 16 ETH assigned by the protocol. This means that node operators earn rewards on their own 16 ETH deposit plus a commission from the network for staking its ETH.

> Rocket Pool is designed to reward node operators for providing valuable insurance in the case they are heavily penalised or slashed.

When depositing ETH, node operators must also deposit a minimum amount of RPL to act as collateral in the case they incur any of these penalties. Should a penalty occur and the user finishes staking with < 16 ETH, the collateral is sold for ETH at auction and the proceeds from this sale are given back to the protocol to compensate for the missing ETH.

When a node operator provides an amount of RPL as collateral as an insurance promise, they are rewarded with RPL rewards respective to the amount of collateral they provide. The minimum collateral required is currently 10% of the node operators ETH value and capped at a maximum of 150%.

> This means a good node operator can earn rewards on their own ETH, a commission in ETH and RPL rewards. Not a bad pay day if you know your way around a node or two!

# Trustless Staking

With all this talk about token staking and node staking, I bet you’re wondering who holds the keys to all these deposits by these different users.

With smart contract support integrated into Ethereum’s PoS system, Rocket Pool is able to provide the only fully noncustodial, trustless, and permissionless staking protocol.

# About Rocket Pool

[Rocket Pool](https://rocketpool.net/) is Ethereum’s most decentralised liquid staking protocol. Its 2,000+ worldwide node operators have staked over 295,000 ETH representing over 2% of all Ethereum staked.

Liquid stakers can participate by depositing as little as 0.01 ETH to receive the rETH liquid staking token. Rocket Pool is a fully non-custodial solution, and its node operators are economically-aligned to perform well for stakers.

Joining as a node operator is fully permissionless and requires just 16 ETH (instead 32). A boosted ROI is provided from both operator commission plus RPL rewards. For more information check out our [node operator guide](https://rocketpool.net/node-operators).

The Rocket Pool team have been in the staking space since its inception in 2016, which gives them a pedigree and track record without peer.


