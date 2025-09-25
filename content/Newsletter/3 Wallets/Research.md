https://www.youtube.com/watch?v=hYbWNGx63cs
- ==Definition of wallet:== The place where you store digital goods and access digital applications -- it's an access point. 
==- "Metamask's path to success is more of an exception than a rule." - Qiao Wang==

https://ethereum.org/wallets
- Wallets help you ==access your digital assets and sign in to applications.==
- Ethereum wallets are applications that give you control over your account.
- Just like your physical wallet, it contains everything you need to prove your identity and handle your assets. Your wallet allows you to sign in to applications, read your balance, send transactions and verify your identity.
- Your wallet is a tool for interacting with your Ethereum account. That means you can swap wallet providers at any time. Many wallets also let you manage several Ethereum accounts from one application.
- Wallet providers don't have custody of your funds. They just provide you a window to see your assets on Ethereum and tools to easily manage them
- An Ethereum account is a pair of keys. One key is used to create the address you can share freely, and the other key you need to keep secret because it's used to sign things. Together, these keys let you hold assets and make transactions.
- A wallet is a tool that lets you interact with your account, using your keys. It allows you to view your account balance, send transactions, and more.

==Good graphic to have handy for later: https://ethereum.org/en/developers/docs/accounts/

**Robinhood self-custody wallet!**
	https://www.coindesk.com/video/how-robinhood-and-arbitrum-hope-to-bring-more-people-on-chain/
	"One thing that AJ, the Offchain Labs CSO, said that particularly resonated is that we shouldn't build out a system that replicates, under the hood and on top of the hood, TradFi.  It would be easy to create a login system with forget your password but it's important to stay true to the ethos of the industry (self custody & sovereignty) and create a hybrid solution."

He also said that yes, crypto is harder to use but it's pretty hard to open a bank account too. Perhaps the bigger issue is that in crypto the stakes are just higher because you have to self-custody funds.

https://en.wikipedia.org/wiki/Cryptocurrency_wallet
- A crypto wallet offers the functionality of encrypting and/or signing information
- A number of technologies known as wallets exist that store the key value pair of private and public key known as wallets

### Seed Phrases
https://blockworks.co/news/what-are-seed-phrases

A seed phrase is different from a private key. A seed phrase is generated before a private key. First, a mnemonic is generated. The software then converts the string of words into a binary seed (ones and zeros) and uses it to produce a private key & then a public key. <----This is the BIP39 standard (originally proposed for [[Bitcoin]] but has become a popular standard across the board).

There are 3 widely-used standards for seed phrases: BIP39, BIP44, and BIP32. 

"They can also use BIP44 and BIP32. These standards work together with BIP39 and specify a tree structure for organizing addresses derived from a seed phrase. This method is often called a hierarchical deterministic structure and allows for the creation of multiple private/public key pairings and child pairings. This structure is important because it adds a layer of privacy and security protection by using a different address for every transaction.

Once users set up their wallet address and child public and private pairings, they don’t need to use the recovery seed phrase for access. Instead, they login to their hardware wallet (cold) or software wallet (hot) with a passcode or pin to automatically sign transactions. This keeps the private keys out of view from the public."

#### Wallet History

https://www.investopedia.com/terms/m/mist-browser.asp#toc-what-was-the-mist-browser

Mist browser was the first GUI for the Ethereum blockchain. Before, users needed to used command line to access the blockchain. Mist browser was legit like a browser, think Internet Explorer, Safari, Chrome. It allowed users to access dApps. Mist also created the first desktop crypto wallet with a GUI.  Went live in 2015. Taken out of circulation in 2019. 

>Mist browser was essentially a wallet, so it was replaced by many other wallets that allow you to access cryptocurrency, blockchains, dApps, and even trade on a cryptocurrency exchange.


### MPC Wallets

https://blockworks.co/news/mpc-wallets-security
MPC wallets are a more recent attempt to secure people’s crypto. Multi-party computation, or MPC, [wallets](https://blockworks.co/tag/wallets) do away with the traditional concept of user-facing private keys entirely, replacing them with a process that involves breaking up a holder’s key into different pieces, called shards. While this purportedly “seedless” approach is a significant departure from traditional key security, some implementations of MPC wallets may still utilize seed phrases as an additional backup or recovery option for added security.

Rohan Agarwal is the CEO and co-founder of Cypherock, a hardware MPC solution. He told Blockworks that certain MPC wallets, especially those relying on software or web apps, trade a high level of security for increased ease of use.
