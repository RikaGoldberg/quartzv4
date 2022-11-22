---
title: "Key Components of Automated Makers"
date: 2022-11-07
tags:
- seed
---

![](/images/Pasted%20image%2020221107101215.png)

## Highlights

An _arbitrageur_ is a particular type of trader. Arbitrageurs profit from price mismatches across different markets, buy buying a token at a cheaper price on one market and selling it at a higher price on another market.

Arbitrageurs play a crucial role in AMMs, since their trades drive token price towards their true market value.

There are four types of tokens found in AMM protocols: 

1. Risk Assets - Assets that are traded through the AMM (e.g, ETH, DOT, BTC). These are typically assets that originate outside the protocol, which liquidity providers bring in to pools.
2. Base Assets - A type of standard token that a protocol may require in all of its pools. Not all protocols use base assets, but some do. E.G., Bancor uses its native Bancor Network Token (BNT) as the base asset. This makes it so the Liquidity Provider only needs to contribute the risk asset, while also strengthening the value of the BNT token . Uniswap V1instead used ETH as the base asset for its pools. In the next version of Uniswap, it was possible for pools to contain two ERC20 tokens without using ETH as a base asset.
3. Pool Shares - also known as pool tokens, LP token, LP shares, etc. Pool shares serve as proof of ownership of a portion of the pool. These shares also represent the amount of the fee revenues for which the LP is eligible. At any point in time, the LP can decide burn (destroy) their pool shares to withdraw their liquidity from the pool.
4. Protocol Tokens -  protocol tokens or governance tokens represent voting rights and serve as a democratic instrument in the system.  Governance tokens can have an economic value themselves and are often traded on markets, which makes them attractive and further encourages participation in the ecosystem.

Automated Market Makers attract users by offering rewards and incentives.

- **Liquidity rewards** are assigned to LPs for locking up their funds in a pool. The most common type of liquidity rewards are **pool fees** and **interest from staking**.
	-  The pool shares that an LP owns entitle the LP to a percentage of the pool’s trading fees, proportional to the percentage of shares the LP owns.
	- In addition, some AMMs offer the option for users to stake their funds, earning interest on the tokens provided as time goes on. The idea of staking is similar to a savings account or certificate of deposit in a traditional bank - interest is earned in exchange for keeping funds in the pool for a certain period of time.

AMM's, of course, have risks. 

There are both implicit and explicit costs for interacting with an AMM.

**_Explicit costs_ are designed to be part of the system.**   
- Liquidity withdrawal penalties are used to discourage people from withdrawing their assets,since such withdrawals negatively impact the system. While such a penalty discourages exit, it could also create a barrier for entry as a Liquidity Provider may not know when they will need to withdraw their assets.
- A swap fee is charged to an individual trader on each exchange they make in the liquidity pool. This serves as compensation for those who have provided liquidity.
- Gas fees  are the reward given to nodes for validating transactions on the blockchain. The gas fee can vary considerably, since it is determined by the supply and demand for verifications. A wise trader considers the gas fee before implementing a trade.
**_Implicit costs_ emerge through market activities.**
- _Slippage_ refers to the difference between a trader's requested price and the actual price at which the trade is executed. Slippage occurs due to the actual mechanics of AMMs, which we will discuss in detail later
	-  Traders prefer to have less of it.
	- Smaller pools will have more of it.
	-  Smaller trades will have less of it.
	![](/images/Pasted%20image%2020221107105304.png)
	(Slippage: As a trader makes larger trades, they will get fewer tokens out than they might expect.)
- Impermanent Loss (also known as divergent loss)
	- This cost often surprises liquidity providers
	- Impermanent loss is the difference between the amount a Liquidity Provider earns  from providing liquidity to a pool, versus to what the value of the same assets would have been if simply kept in their wallet
- Security Risks
	- Like anything else on the Internet, there exists a possibility that data will be hacked, breached, or compromised. Unlike traditional banks, users of Automatic Market Makers may not be able to receive compensation for funds lost due to security issues.
	- Although the loss of funds due to a hack typically occurs in one large event rather than on each trade, it is still a potential cost that users need to take into account.

## Study Group Highlights

Source: https://te-academy.notion.site/Session-6-7-b1b4d3b77eea4cc8a9a2db55b17493e7

Automated Market Maker(AMM) is a type of decentralized exchange which is based on a mathematical formula of price assets. It allows digital assets to be traded without any permissions and automatically by using liquidity pools instead of any traditional buyers and sellers which uses an order book that was used in traditional exchange, here assets are priced according to a pricing algorithm.

For example, Uniswap uses p * q = k, where p is the amount of one token in the liquidity pool, and q is the amount of the other. Here “k” is a fixed constant which means the pool’s total liquidity always has to remain the same.

