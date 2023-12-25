---
title: Understanding Liquid Staking Tokens (LSTs) & Collateralized Debt Positions (CDPs)
author: Dimitris Tsapis
---
Source: https://mirror.xyz/0x8a81CEeb0a12998616F1aB932cDbc941F0d539E9/Fw8PtalzhqCLDhgwWgdN7J8XqkyfNewrP3j6qHOS4b4

An introduction to LSTs, CDPs, and the role of Open Dollar in expanding their use cases.

### TL;DR

- LSTs are derivative tokens representing assets locked in staking contracts (e.g. stETH)
    
- CDPs are smart contracts that enable users to lock their assets to borrow liquid assets
    
- Open Dollar enables users to lock LSTs into CDPs to borrow $OD
    

A growing number of financial instruments previously understood only by a few have now become accessible to anyone, anywhere, through DeFi.

Among the countless new segments, lending seems to have attained the strongest product-market fit.

Lending protocols underpin advancements like Liquid Staking Tokens (LSTs) and Collateralized Debt Positions (CDPs). Both concepts have significantly amplified the scope and utility of services available to those who need them.

This article offers a high-level introduction to LSTs, CDPs, and their relationship with one another.

## Liquid Staking Tokens

With [over $22 billion](https://defillama.com/protocols/Liquid%20Staking) in TVL, liquid staking protocols drive DeFi adoption. But how exactly do they work and what makes them so desirable?

### What Are Liquid Staking Tokens (LSTs)?

**Liquid Staking Tokens (LSTs) are derivative tokens issued to wallets that stake cryptocurrencies on a protocol. They act as a ‘receipt’ of the users’ locked funds while improving financial efficiency.**

Traditionally, when users deposit funds on DeFi protocols, their assets become illiquid. They cannot use them unless they claim their assets back. If they choose to withdraw their assets, there’s usually a waiting period.

**LSTs are a tokenized representation of these locked assets.**

When users stake their digital assets on a liquid staking platform, the protocol mints an equivalent number of tokens. These are derivatives that reflect the staked assets. They are called Liquid Staking Tokens (or Liquid Staking Derivatives).

LSTs can be traded, used as collateral, or utilized in various DeFi protocols to earn additional yield. **Users can participate in network security and earn staking rewards without sacrificing liquidity.**

**Example:**

If a user deposits ETH in a staking contract, they might receive an LST like stETH, representing their locked ETH. They can then use this stETH in other DeFi protocols while their original ETH remains staked, earning rewards.

### How do LSTs work?

![](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FsfY4T1hjauR74-p3FnPaF.png&w=3840&q=75)

We can summarize the function of LSTs in a 5-step consecutive process:

1. **Deposit:** Users stake assets in a smart contract on a proof-of-stake blockchain to earn rewards and receive LSTs, with the quantity issued being proportional to the staked amount.
    
2. **DeFi Utility:** LSTs enable seamless interactions in third-party protocols for various activities and yield aggregation, facilitating trade, lending, and earnings compounding.
    
3. **Staking Yield:** LSTs represent the staked asset's value and rewards, accumulating rewards over time for holders to claim or reinvest, with continuous smart contract updates reflecting any value changes.
    
4. **Unstaking:** When users wish to unlock their staked assets, they return the LSTs to the staking contract. The contract then burns the LSTs and releases the corresponding staked assets along with the accumulated rewards.
    
5. **Withdraw:** After redeeming the staked assets, users can either restake them, trade them, or use them in other DeFi protocols based on their preference.
    

### Benefits of LSTs

- LSTs maximize capital efficiency by providing liquidity for staked assets, allowing users to interact with DeFi protocols without unlocking their staked tokens.
    
- Users continue to earn staking rewards while simultaneously leveraging LSTs to earn additional yield.
    

### Risks of LSTs

- LSTs are only as good as their underlying smart contract, which may have vulnerabilities that could lead to the loss of user funds.
    
- The value of LSTs can fluctuate based on market conditions, impacting their value relative to the underlying staked assets.
    

## Collateralized Debt Positions

Collateralized Debt Positions (CDPs), first introduced by MakerDAO, have cemented themselves as the primary lending structure of DeFi.

### What Are Collateralized Debt Positions (CDPs)?

**CDPs are smart contracts that enable users to lock their assets to borrow the protocol’s native (stable)coins.**

The core function of CDPs is to allow users to borrow funds easier, by using their assets as collateral.

The collateral is noticeably higher than the loan given out due to the increased risk of market volatility. New tokens are minted at the time they are borrowed, and are therefore not coming from other depositors.

The process is similar to a gold loan. People can deposit gold as collateral with a financial institution, which then lends them a slightly lower value in fiat currency. The amount borrowed is lower than the collateral to account for fluctuations in gold’s rate.

Just like in the case of a gold loan, the person borrowing retains ownership of the gold and can retrieve it once they repay the borrowed amount along with any incurred interest or fees.

Similarly, in a CDP, the user retains ownership of the locked assets and can retrieve them by repaying the borrowed amount and any associated fees or interest. Of course, the deviance between collateral and loan price is amplified in DeFi, as gold is less volatile than crypto.

Even so, CDPs offer the flexibility to leverage one’s assets for various financial activities while maintaining their exposure to their collateral's potential appreciation in value.

### How Do CDPs Work?

![](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F4J9kGHAHY-q2XZIOi3Kps.png&w=3840&q=75)

The way CDPs work can be condensed into 6 simple steps:

1. **Collateralization:** A user initiates a CDP by locking up assets (a.k.a. tokens) in a smart contract as collateral. These locked assets serve as security for the borrowed funds.
    
2. **Borrowing:** Once the assets are locked, the user can borrow against them. The borrowing limit is determined by the collateral-to-debt ratio set by the protocol, ensuring the loan is overcollateralized to mitigate the risk of market volatility.
    
3. **Interest Accumulation:** The borrowed amount accrues interest over time, typically defined by a stability fee or borrowing rate, which the user will have to pay back along with the borrowed amount.
    
4. **Monitoring and Management:** The user needs to monitor the value of their collateral relative to their debt. If the value of the collateral falls to a level close to the value of the borrowed amount, the user may need to add more collateral or repay part of the debt to avoid liquidation.
    
5. **Liquidation:** If the collateral value falls below a specified liquidation ratio, the protocol automatically liquidates the collateral to cover the debt. This involves selling the collateral to repay the borrowed amount plus any accumulated interest and liquidation penalties.
    
6. **Repayment and Retrieval of Collateral:** To retrieve their collateral, the user must repay the borrowed amount along with any accumulated interest. Once the debt is fully repaid, the smart contract releases the collateral back to the user, and the CDP is closed.
    

**Example** Suppose a user locks up 3 ETH (the collateral) in a CDP to borrow $OD. If the protocol has a collateral-to-debt ratio of 135%, it means the user's collateral must always be worth at least 135% of the borrowed amount. Hence, they can borrow $OD which is valued at 2.7 ETH. If the value of ETH’s price drops and the ratio drops below 135%, the user must either add more ETH to the CDP or repay some of the borrowed DAI to maintain the required ratio and avoid liquidation.

### Benefits of CDPs

- CDPs allow users to leverage their assets to gain exposure to more financial activities.
    
- CDPs provide liquidity to users while allowing them to retain the ownership of their digital assets.
    
- CDPs lower selling pressure and thus mitigate the sale-induced market impact.
    

### Risks of CDPs

- Ownership of a CDP is tied to accounts on the protocol’s front end which can be a potential point of failure.
    
- CDPs are non-transferable. Hence, the only way to exit a CDP is by adding more collateral or repaying the loan — this is not ideal when a transaction goes extremely sideways.
    

## Locking LSTs in CDPs - An introduction to Open Dollar

[Open Dollar](https://www.opendollar.com/) proposes a new approach that takes the best of LSTs and CDPs to create a more flexible borrowing environment. Upon launch, users will be able to lock wstETH, rETH, and cbETH. We’ll be adding additional collateral over time.

After locking these LSTs as collateral, users can mint the protocol’s native stablecoin, $OD. While pegged to the price of USD, $OD is not backed by any fiat currencies. Instead, it is tied to an algorithm that adjusts the redemption rate to [incentivize price stability](https://mirror.xyz/0x8a81CEeb0a12998616F1aB932cDbc941F0d539E9/bpgJSu4JIMS3HYspKahU9CK3o6KwgYk7f-e7kVfrPbE).

**Open Dollar permits users to lock Liquid Staking Tokens (LSTs) in Collateralized Debt Positions (CDPs) through [Non-Fungible Vaults (NFVs)](https://mirror.xyz/0x8a81CEeb0a12998616F1aB932cDbc941F0d539E9/eHkUevK2ssPvwOTweAQBTO5nWxVN_io0FJ8AOPFW7H8).**

### Overcollateralization in Open Dollar

**Each $OD is overcollateralized by 135%**, which is generally lower than most lending protocols.

This collateral-to-debt ratio allows for a more capital-efficient system, enabling users to maximize the utility of their locked assets.

Below is a comparative table:

![](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FNKshk8DbViQKfe7MxVY-e.png&w=3840&q=75)

**Open Dollar's collateralization ratio ensures a balance between maintaining protocol security and offering users more latitude in managing their funds.**

## Non-Fungible Vaults (NFVs)

Building upon the limitations of CDPs where the collateral is tied to an account, Open Dollar innovates by incorporating [Non-Fungible Vaults (NFVs)](https://mirror.xyz/0x8a81CEeb0a12998616F1aB932cDbc941F0d539E9/eHkUevK2ssPvwOTweAQBTO5nWxVN_io0FJ8AOPFW7H8) in the model.

Here, the CDP ownership is tied to transferable Non-Fungible Tokens (NFTs), rather than to protocol accounts.

**Hence, the entire ownership of CDPs can now be traded in the open market.**

This translates to enhanced flexibility and liquidity as users can seamlessly transfer ownership of CDPs, making the process more user-friendly and efficient.

## Summing Up

DeFi continues to innovate as users become more demanding. LSTs and CDPs are at the center of these efforts, providing capital efficiently and paving the way for improved decentralized loans.

LSTs address the liquidity dilemma in staking, allowing users to earn yields on staked assets without sacrificing liquidity.

CDPs promote financial flexibility by enabling users to unlock liquidity while retaining asset ownership.

Open Dollar enables the utilization of LSTs in CDPs through a more moderate over-collateralization requirement via NFVs which further promotes their flexibility.