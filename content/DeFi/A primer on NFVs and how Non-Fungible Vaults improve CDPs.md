---
tags:
  - defi
  - published
---

#### [Read Full Article](https://mirror.xyz/0x8a81CEeb0a12998616F1aB932cDbc941F0d539E9/eHkUevK2ssPvwOTweAQBTO5nWxVN_io0FJ8AOPFW7H8)

Despite going through the coldest of crypto winters, DeFi continues to gain leverage over inefficient Tradfi products. Lending, in particular, has found a strong product-market fit, as it enables users to borrow tokens by locking their assets in [Collateralized Debt Positions](https://www.bitdegree.org/crypto/learn/crypto-terms/what-is-collateralized-debt-position-cdp) (CDPs).

While CDPs create new opportunities to leverage and monetize one’s assets, they’re often inflexible due to infrastructure limitations. Open Dollar resolves these issues by introducing a new way to access and manage collateral. Instead of using their protocol’s account, users can now do it via NFTs.

This article offers a primer on Non-Fungible Vaults (NFVs), describing their benefits over traditional, account-tied CDPs, and the new use cases they unlock for DeFi natives.

### **TLDR;**

- Open Dollar enables users to create CDPs via Non-Fungible Vaults (NFVs).
    
- NFVs tie CDP ownership to transferable NFTs instead of protocol accounts.
    
- NFVs improve upon account-tied CDPs while creating new use cases.
    

## **Account-tied CDPs are inefficient**

Collateralized Debt Positions (CDPs) are becoming increasingly popular. The concept was [first introduced by MakerDAO](https://blog.makerdao.com/introducing-the-new-cdp-portal-for-single-collateral-dai/) in 2018 in order to mint its stablecoin, DAI. From a practical standpoint, interaction with CDPs looks as follows:

![Using a traditional DeFi CDP](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fi94m4mCNpYQT1Xig2DA6c.png&w=3840&q=75)

Using a traditional DeFi CDP

Let’s assume that you’re using Lending protocol X to deposit Y collateral. If you want to borrow against Y or deposit more to avoid liquidating Y, you will always need to use an account tied to your wallet. If you want to withdraw Y, you will first need to pay back the debt in full (including fees that may incur). This, too, happens through your account.

The above example reveals two inefficiencies:

1. **CDP ownership is tied to a single account and is non-transferable.** This makes CDPs illiquid and unusable until withdrawn. To illustrate, that’s like taking out a mortgage on a property that you cannot sell until you pay the debt back in full.
    
2. **Access to CDPs occurs from the protocol’s front end instead of the user’s wallet.** If the front end is buggy or doesn’t work, you cannot retrieve your assets without much more technical knowledge of smart contracts.
    

## **Open Dollar and the introduction of NFVs**

Unlike traditional CDPs, where ownership is tied to an account, Open Dollar uses NFVs, which associate ownership of the collateral to NFTs. By doing so, the debt is locked in the protocol, but its ownership is not.

![](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FPMq2XwwqxGe8F6jhaGDAY.png&w=3840&q=75)

The NFT acts as a “receipt”. Not only does it prove ownership of the collateral and gives access to it, but it is also backed by its value. **In short, it is a derivative of the collateral.**

NFVs act as a building block that expands existing markets and creates opportunities for users. For example, they can sell vaults on NFT marketplaces, transfer them to other wallets, or display them in their portfolio trackers.

NFVs resolve the problems of account-tied CDPs:

1. **Ownership of CDPs becomes transferable and therefore no longer tied to a single account.** The NFT makes the collateral liquid, which improves cost-effectiveness and flexibility.
    
2. **Users no longer need to access the protocol to manage or track their CDP.** They can do so directly from their wallet. It is only when one wishes to interact with the CDP that they need to access the protocol (e.g. borrow against the collateral, deposit more, or withdraw any amount).
    

## **Why NFVs are superior to Account-tied CDPs**

NFVs are not only solving inefficiencies of account-tied CDPs. They also unlock new opportunities:

### **Accessibility**

NFVs are more capital-efficient for users, who can now easily sell their vaults instead of interacting with them. Automations can also sell vaults to arbitrageurs without incurring liquidation penalties.

Example:

- User deposits X wstETH on Open Dollar and receives an NFT.
    
- Next, the user borrows $OD and decides to trade with leverage.
    
- The trade goes poorly and incurs a loss.
    
- At this point, the user can choose to sell the ownership of the vault (the NFT) instead of buying more $OD to unlock the wstETH collateral.
    

Users could also bridge NFTs from one blockchain to another. Cross-chain compatibility of NFTs is not only possible but is also more efficient in certain situations than bridging collateral directly.

### **Composability**

It is easier to batch-transfer NFTs and more straightforward for individuals to transfer ownership of their assets directly from their wallet. As described above, this may come in use if a protocol’s front end fails, as it allows users to trade vaults without having to interact with a protocol’s smart contracts on the back end.

Example: User A wants to transfer his assets to user B. In traditional CDPs, user A would need to access the protocol, pay the required fees to withdraw, and send the funds from his wallet once unlocked.

With NFVs, user A can simply change the owner of his locked collateral by sending the NFT to user B.

### **Management**

The infrastructure for transferring and owning NFTs as a DAO or DeFi protocol is already well-established for other use cases. This new primitive expands it further by improving treasury management, risk management, and performance tracking.

### **Visibility**

Wallet aggregators and portfolio trackers can display users’ NFVs along with their assets directly, instead of trying to calculate their position. Since the NFT is backed by the collateral, its price is dynamic and reprices accordingly. Open Dollar NFVs also take advantage of the display image of NFTs by giving users updated and interactive insights into their vaults.

![The Open Dollar Non-Fungible Vault (NFV)](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FVSwm1qZJTolKtrL9m1XTL.png&w=3840&q=75)

The Open Dollar Non-Fungible Vault (NFV)

### **Security**

NFVs can be used as a protection lever to avoid bad actors. NFTs could be locked into compliance services, escrow services, or others.

## **Summing Up**

Account-tied CDPs suffer from two main inefficiencies that make them problematic. First, they are tied to a single user account and are therefore not transferable. Second, they have a single point of failure, since access is only possible from the protocol’s front end.

To solve these issues, Open Dollar introduces non-fungible vaults (NFVs), which are more flexible and reliable from a user standpoint. By using NFTs as proxies of the locked collateral, vaults become transferable and therefore no longer tied to a single account. Users also no longer need to access the protocol to interact with the CDP. They can simply sell or transfer it directly from their wallet.

NFVs are a better option since they improve upon traditional CDPs in multiple areas, while unlocking multiple new use cases.

## **About Open Dollar**

Open Dollar is a DeFi lending protocol that enables borrowing against liquid staking tokens while earning staking rewards and enabling liquidity via Non-Fungible Vaults (NFVs).

LSTs and other assets can be deposited into NFVs in order to borrow the OD stablecoin with low-interest loans, create leveraged positions, and continue to earn 100% of their staking yield. The OD token is over-collateralized and pegged to $1.00.

Open Dollar’s NFVs are a more capital-efficient alternative to account-tied CDPs, giving depositors the freedom to trade their positions or sell to arbitrageurs on any NFT platform without incurring liquidation penalties.

Open Dollar’s minimized-governance approach ensures the longevity and fairness of the platform. The DAO, powered by the Open Dollar Governance (ODG) token, can vote to add new collateral types but is otherwise limited and cannot mint new OD tokens or change parameters such as fee distribution.