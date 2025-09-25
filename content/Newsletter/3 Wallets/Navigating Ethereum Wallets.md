---
title: Navigating Ethereum Wallets
published date: 4/1/24
client: Rika
status: Published
distribution channel: Paragraph
tags:
  - newsletter
---
**Final Published:** https://paragraph.xyz/@sharingiscaring/navigating-ethereum-wallets

_Greetings, readers! (or_ [_Gm_](https://www.wsj.com/articles/gm-crypto-bitcoin-nfts-twitter-11649261057)_, as we say in crypto). This newsletter provides digestible breakdowns of complex protocols and products in the Ethereum ecosystem. You can expect quality substantive content (no hype pieces, shilling, or paywall) written for crypto-curious readers who are either newer to crypto or seasoned users who value refreshers on the fundamentals. You can learn more about this newsletter in the_ [_introductory post._](https://paragraph.xyz/@sharingiscaring/breaking-down-ethereum-protocols-products)

## Ethereum Wallets

A non-custodial Ethereum wallet is a portal to the Ethereum blockchain. It gives you a window to access your digital assets and sign in to decentralized applications.

Although the focus of this post is on non-custodial wallets, it's important to understand that some wallets are custodial, such as an exchange's wallet. Custodial wallets have their purpose, such as providing an off-ramp to local currency, but they lack in many features of non-custodial wallets.

In contrast to custodial wallets, non-custodial wallets allow you to meaningfully engage with crypto and use decentralized applications (dApps) for activities such as staking (see the [last post](https://paragraph.xyz/@sharingiscaring/staking-eth-a-lay-of-the-land)), borrowing, lending, gaming, social networks, and more.

Very importantly: **non-custodial wallets give you full control over your digital assets**_._ Custodial wallets do not.

In this post, I will explain the basic mechanics of non-custodial wallets before sharing a handful of reputable wallet providers, along with a simple wallet evaluation framework to help you make informed decisions when selecting a wallet.

Hopefully you will come back to this guide throughout the bull market to help you get grounded when the energy may start to feel frenetic.

As always, let's start with a few useful definitions before diving into the meat of the post.

---

## Useful Definitions

Let's align on six important definitions. You may find some of these rudimentary, so feel free to skip to the next section if you're already comfortable with these concepts.

_*Note: all of these definitions are from_ [_Ethereum.org_](http://Ethereum.org)_, a leading educational resource._

---

1. What is **Ethereum**
    
    Ethereum is a public network, a blockchain, and an open-source protocol — operated, governed, managed, and owned by a global community of tens of thousands of developers, node operators, ETH holders, and users.
    

2. What is **Ether** _(a.k.a. ETH)?_
    
    Ether (also known by its ticker symbol ETH) is the native currency transacted on Ethereum. ETH is needed to pay for usage of the Ethereum network (in the form of transaction fees). ETH is also used to secure the network with staking.
    

3. What is an **Ethereum Account**?
    
    An Ethereum account is an entity with an ether (ETH) balance that can send transactions on Ethereum. Accounts can be user-controlled or deployed as smart contracts.
    

4. What is an **Externally-owned account** (EOA)?
    
    One of the two types of accounts on Ethereum. An externally-owned account is controlled by anyone with the private keys.
    

5. What is a **Contract Account**?
    
    One of the two types of accounts on Ethereum. A smart contract account is deployed to the Ethereum network, controlled by code.
    

6. What is a **Non-custodial Wallet**?
    
    A non-custodial wallet gives you full control over your accounts. This means that the wallet provider does not have access to the private keys.
    

---

## Basic Mechanics of an Ethereum Wallet

An Ethereum wallet is software that allows you to interact with your Ethereum account. Wallets use [public key cryptography](https://www.techtarget.com/searchsecurity/definition/public-key), a method of encrypting or signing data with two different keys: a public and a private key so you can sign in to Ethereum applications, read balances, send transactions, and verify your identity. Public key cryptography is an important technology to Internet security broadly, not only to crypto.

When you download a wallet (usually a browser extension) from the Google Play or App Store, the wallet software creates an account first by creating a **private key**. This is a 64-character string (e.g., 233EE78O5...) that should be kept secret. Then, a **public key** is generated from the private key. Finally, a hash of the private and the public key creates an **address**.

![](https://storage.googleapis.com/papyrus_images/e0e3d321782af99e949abf9788afd6e4.png)

**Source**: [Github — Ethereum EVM](https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf)

Many wallet providers allow you to create and manage multiple addresses. Creating a new account is simple, as long as you have your private key.

### Seed Phrases

Taking a step back, before generating a private key, the wallet software creates a seed phrase, a string of 12 or 24 words. A private key is also called a mnemonic.

The string of words in a seed phrase consists of common terms, e.g., tree, table, chair. The wallet software converts this string of words into binary numbers (ones and zeros) and uses it to produce a **private key.** When you change wallet providers, all you have to do is enter your seed phrase into the new wallet to pull up your accounts and have control of them.

Below is an example of a 12-word mnemonic phrase.

![](https://storage.googleapis.com/papyrus_images/946c251710664bc7044877cb9f927abe.png)

**Source:** [Github — Bips Wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md)

### Seed Phrase Standards

[BIP39 (Bitcoin Improvement Proposal 39)](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md) is the standard for seed phrases. It has become popular across many cryptocurrencies, including Bitcoin and Ethereum.

Working in conjunction with BIP39, are two other standards: [BIP32 and BIP44](https://trezor.io/learn/a/what-is-bip44). BIP32 allows one seed phrase to control multiple accounts in Bitcoin, and BIP44 does the same for Ethereum (and other cryptocurrencies).

BIP32 and BIP44 specify a tree structure for organizing addresses. A tree structure is important because it adds a layer of privacy and security protection by enabling different addresses to be used for every transaction.

## Important Features of Wallets

If you've ever researched wallets, then you've encountered a wide array of options.

The next section will introduce you to four reputable wallet providers, each with unique characteristics while sharing a common core of features. Additionally, you'll find a simple evaluation framework that highlights key features of wallets and will help you to make well-informed decisions when selecting a new wallet.

### Metamask

![](https://storage.googleapis.com/papyrus_images/e0c4fc7dfb91fb316affd79b55294d70.png)

Founded by [Dan Finley](https://twitter.com/danfinlay?lang=en) and [Aaron Davis](https://twitter.com/kumavis_), who first met online while contributing to the project VoxelJS, a Minecraft clone, Metamask was incubated in [ConsenSys](https://consensys.io/). ConsenSys is a software technology company founded by [Joseph Lubin](https://twitter.com/ethereumjoseph?lang=en), the co-founder of Ethereum. Similar to many crypto founders, Finley and Davis have a unique origin story, the details of which are outside of the scope of this post, but if you're curious I suggest reading their origin story [here.](https://consensys.io/blog/how-did-metamask-come-to-life-the-origin-story-revealed)

Metamask is one of the earliest players in the Ethereum wallet space, preceded only by [Mist Wallet](https://www.investopedia.com/terms/m/mist-browser.asp) which went live in 2015 and was the first desktop crypto wallet with a GUI (user interface). Mist was taken out of circulation in 2019, with Metamask overtaking Mist, capitalizing on its second-mover advantage, and growing to lead the Ethereum wallet space with [30 million monthly active users](https://blockworks.co/news/metamask-monthly-active-users-blockaid).

Despite Metamask's market leadership, its biggest flaw, that many users, including myself, complain about is that it's "buggy." For example, transactions randomly fail, which can be frustrating and annoying.

**Metamask's Key Differentiator:** In my opinion, not much at this point, but it continues to be the market leader because of its wide distribution and appeal to crypto natives who face high switching costs if they were to use another wallet.

### Rabby Wallet

![](https://storage.googleapis.com/papyrus_images/817ee4bb1ae69fa9f285c99182917ed6.jpg)

Rabby Wallet (@Rabby_io) / X

A few months ago, when I became increasingly frustrated by Metamask's random transaction errors, I discovered Rabby by happenstance while reading this essay by Vitalik Buterin about [crypto and AI](https://vitalik.eth.limo/general/2024/01/30/cryptoai.html).

When I started to research [Rabby](https://rabby.io/), I was surprised that unlike other wallets it doesn't have much marketing or hype around it. After spending some time digging into the wallet, the reason why started to unfold.

In the wallet space, distribution reigns supreme. Wallets with extensive distribution, i.e., a large network of followers and users, tend to succeed, while those lacking distribution, tend to flail. One effective strategy to attain distribution when launching a new product like a wallet is to leverage an already widely distributed product.

Rabby's parent company, [DeBank](https://debank.com/) used this strategy in 2021 when it rolled out Rabby Wallet. DeBank, a renowned provider of on-chain activity data, leveraged its existing brand and user base to give Rabby _a seat at the wallet table_ without overt marketing tactics.

**Rabby Wallet's Key Differentiators**

1. Ease of multi-chain experience — This is a must in the decentralized finance (DeFi) era where users constantly switch between Ethereum chains (e.g., Arbitrum, Optimism, Base, etc.) The Rabby Wallet can automatically detect which chain users are on and switch to that chain so that users don't need to take any manual actions.
    
2. Pre-transaction risk scanning — human-readable information for users about the transaction they are signing and alerting them to potentially malicious contracts (previously, astute users would use tools like [Scope Scan](https://scan.0xscope.com/home?network=eth) to detect malicious contracts).
    

### Coinbase Wallet

![Coinbase Wallet: NFTs & Crypto on the App Store](https://storage.googleapis.com/papyrus_images/9c6fefd0bf23c6cae54478b7db472204.png)

If you have ever bought any cryptocurrency, you may have used [Coinbase](https://www.coinbase.com/). Coinbase is the largest cryptocurrency exchange in the United States and was founded by [Brian Armstrong](https://www.forbes.com/profile/brian-armstrong/?sh=2b0c6f155077) in 2012.

Coinbase is a custodial exchange and wallet, which means that the company controls your private keys, however in 2021, the same year that Coinbase went public with an IPO, they released a new product: a non-custodial wallet. Similar to Metamask and Rabby, [Coinbase Wallet](https://www.coinbase.com/wallet) gives users full control over their private keys as they explore decentralized applications (dApps).

The Coinbase Wallet was an interesting strategic move by Coinbase. Similar to Rabby's story, Coinbase was able to leverage its wide distribution and trusted brand to secure a leading position in the wallet space.

**Key Differentiator:** Trusted brand and reputation, particularly with mainstream crypto users.

### Brume Wallet

![](https://storage.googleapis.com/papyrus_images/6810b980e94b14002274ef52d2ff1aee.png)

Brume Wallet

Brume is a new grassroots wallet. In October of 2023, it raised 1.46 ETH on [Juicebox](https://juicebox.money/@brume), a fundraising platform for Ethereum. Founded by two co-founders, [HazAE41](https://twitter.com/hazae41) and [Bryce Gabari](https://twitter.com/bryce_gabari), Juicebox is a privacy-centric wallet built with [Tor](https://www.torproject.org/), a free and open source software for anonymous communication.

I'm not expecting that most readers will try Brume, but if you are a crypto nerd, like me, then you may enjoy digging into Brume, or at least keeping it on your radar. It will be interesting to keep tabs on the trajectory of this wallet.

**Key Differentiator:** Built-in Tor so users' IP address is not tracked (Traditional wallets send users' IP addresses to 3rd parties e.g., Coingecko and Etherscan).

---

## **Wallet Evaluation Framework**

In this final section, I want to provide you with a wallet evaluation framework that can help you make informed decisions when choosing a wallet provider.

Important factors to consider include whether the wallet is open-source, non-custodial, and permissionless (i.e., no account creation is required), as well as its security track record and public availability of audits or bug bounties. For instance, MetaMask and Rabby are both open-source, non-custodial, and permissionless wallets with publicly available audits and a proven track record, making them reliable choices.

Coinbase Wallet, while also non-custodial, isn't open-source and doesn't have a publicly available audit. Lastly, Brume, though a promising newcomer with privacy-centric features, hasn't been battle-tested yet. Always remember, do your homework before using any new crypto product.

|   |   |   |   |   |
|---|---|---|---|---|
||**MetaMask**|**Rabby Wallet**|**Coinbase Wallet**|**Brume**|
|Open Source|Yes|Yes|No|Yes|
|Non-custodial|Yes|Yes|Yes|Yes|
|Permissionless (no account required)|Yes|Yes|Yes|Yes|
|Publicly Available Audit / Public Bug Bounty|Yes* (Mobile & Snaps product, but not browser extension)|Yes|No|No|
|Battle Tested (live for >1 year)|Yes|Yes|Yes|No|

### Conclusion

As we enter the next bull market cycle, many new crypto products, wallets included, will start to captivate people's attention on the Internet. It will become increasingly more important to be an informed user and understand the basics inner workings of the products that you use.

A wallet is table stakes for accessing the Ethereum ecosystem of decentralized applications. Wallets have come a long way in user experience and design, but as with any nascent industry, there is still a long way to go to make the experience of using crypto as seamless as it is to say use Venmo or Apple Pay.

Being an early adopter will reap benefits down the road, so as I tell my friends and family, it's definitely not too late to start using Ethereum and building your skillset.

Lastly, stay tuned for the topic of the next newsletter: Ethereum social networks.

---

Feel free to reach out to me directly with questions, suggestions, or feedback. You can also drop me a message on [Twitter](https://twitter.com/RikaGoldberg). My DMs are open.

-Rika