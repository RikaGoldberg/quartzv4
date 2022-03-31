---
title: "my first impressions of web3"
disableToc: true 
---

#article 
#authors [[moxie marlinspike]]
[anti-crypto](quartz/content/index/anti-crypto.md)
See also [[My first impressions of web3 vitalik response]]

#summary 
Moxie's critique is that 1) no regular person wants to run a server and 2) therefore blockchains are not decentralized. Most dApps he says point to a central server for blockchain data, like Infura. NFTs also point to a URL that is controlled by centralized services like Opensea. He minted a NFT and changed the URL it points to so the image appears different on Opensea and on Rarible. He made his point that there is no central source of truth. He couldn't locate the NFT on the blockchain and Opensea took it down. 

#quotes 
* Also – cards on the table here – I don’t share the same generational excitement for moving all aspects of life into an instrumented economy.

* Even strictly on the technological level, though, I haven’t yet managed to become a believer.

* It’s probably good to have some clarity on why centralized platforms emerged to begin with, and in my mind the explanation is pretty simple:

* **People don’t want to run their own servers, and never will.** The premise for web1 was that everyone on the internet would be both a publisher and consumer of content as well as a publisher and consumer of infrastructure.

* **If something is truly decentralized, it becomes very difficult to change, and often remains stuck in time.** That is a problem for technology, because the rest of the ecosystem is moving very quickly, and if you don’t keep up you will fail. There are entire parallel industries focused on defining and improving methodologies like Agile to try to figure out how to organize enormous groups of people so that they can move as quickly as possible because it is so critical. 

* **When the technology itself is more conducive to stasis than movement, that’s a problem.** A sure recipe for success has been to take a 90’s protocol that was stuck in time, centralize it, and iterate quickly.

* With the shift to mobile, we now live firmly in a world of clients and servers – with the former completely unable to act as the latter – and those questions seem more important to me than ever. Meanwhile, ethereum actually refers to servers as “clients,” so there’s not even a word for an actual untrusted client/server interface that will have to exist somewhere, and no acknowledgement that if successful there will ultimately be billions (!) more clients than servers.

* A server! But, as we know, people don’t want to run their own servers. As it happens, companies have emerged that sell API access to an ethereum node they run as a service, along with providing analytics, enhanced APIs they’ve built on top of the default ethereum APIs, and access to historical transactions. Which sounds… familiar. At this point, there are basically two companies. **Almost all dApps use either Infura or Alchemy in order to interact with the blockchain. In fact, even when you connect a wallet like MetaMask to a dApp, and the dApp interacts with the blockchain via your wallet, MetaMask is just making calls to Infura!**

* These client APIs are not using anything to verify blockchain state or the authenticity of responses. The results aren’t even signed. **An app like Autonomous Art says “hey what’s the output of this view function on this smart contract,” Alchemy or Infura responds with a JSON blob that says “this is the output,” and the app renders it.**



* Partisans of the blockchain might say that it’s okay if these types of centralized platforms emerge, because the state itself is available on the blockchain, so if these platforms misbehave clients can simply move elsewhere. However, I would suggest that this is a very simplistic view of the dynamics that make platforms what they are.

Let me give you an example.

* **Instead of storing the data on-chain, NFTs instead contain a URL that points to the data**. What surprised me about the standards was that there’s no hash commitment for the data located at the URL. **Looking at many of the NFTs on popular marketplaces being sold for tens, hundreds, or millions of dollars, that URL often just points to some VPS running Apache somewhere.** Anyone with access to that machine, anyone who buys that domain name in the future, or anyone who compromises that machine can change the image, title, description, etc for the NFT to whatever they’d like at any time (regardless of whether or not they “own” the token). There’s nothing in the NFT spec that tells you what the image “should” be, or even allows you to confirm whether something is the “correct” image.

* **So as an experiment, I made an NFT that changes based on who is looking at it, since the web server that serves the image can choose to serve different images based on the IP or User Agent of the requester.** 

* **For example, it looked one way on OpenSea, another way on Rarible, but when you buy it and view it from your crypto wallet, it will always display as a large 💩 emoji.**

* What you bid on isn’t what you get. There’s nothing unusual about this NFT, it’s how the NFT specifications are built. Many of the highest priced NFTs could turn into 💩 emoji at any time; I just made it explicit.

* The takedown suggests that I violated some Term Of Service, but after reading the terms, I don’t see any that prohibit an NFT which changes based on where it is being looked at from, and I was openly describing it that way.

* **A crypto wallet like MetaMask, Rainbow, etc is “non-custodial” (the keys are kept client side), but it has the same problem as my dApps above: a wallet has to run on a mobile device or in your browser.** 

* Meanwhile, ethereum and other blockchains have been designed with the idea that it’s a network of peers, but not designed such that it’s really possible for your mobile device or your browser to be one of those peers.



* For instance, MetaMask displays your recent transactions by making an API call to etherscan:

GET https://api.etherscan.io/api?module=account&address=0x0208376c899fdaEbA530570c008C4323803AA9E8&offset=40&order=desc&action=txlist&tag=latest&page=1 HTTP/2.0                                                          


…displays your account balance by making an API call to Infura:

POST https://mainnet.infura.io/v3/d039103314584a379e33c21fbe89b6cb HTTP/2.0

{
    "id": 2628746552039525,
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": [
        "0x0208376c899fdaEbA530570c008C4323803AA9E8",
        "latest"
    ]
}


…displays your NFTs by making an API call to OpenSea:

* **All this means that if your NFT is removed from OpenSea, it also disappears from your wallet**. It doesn’t functionally matter that my NFT is indelibly on the blockchain somewhere, because the wallet (and increasingly everything else in the ecosystem) is **just using the OpenSea API to display NFTs**, which began returning 304 No Content for the query of NFTs owned by my address!

* Given the history of why web1 became web2, what seems strange to me about web3 is that technologies like ethereum have been built with many of the same implicit trappings as web1. To make these technologies usable, the space is consolidating around… platforms. Again. People who will run servers for you, and iterate on the new functionality that emerges. Infura, OpenSea, Coinbase, Etherscan.

*** Likewise, the web3 protocols are slow to evolve.** When building First Derivative, it would have been great to price minting derivatives as a percentage of the underlying’s value. That data isn’t on chain, but it’s in an API that OpenSea will give you. **People are excited about NFT royalties for the way that they can benefit creators, but royalties aren’t specified in ERC-721, and it’s too late to change it, so OpenSea has its own way of configuring royalties that exists in web2 space.** Iterating quickly on centralized platforms is already outpacing the distributed protocols and consolidating control into platforms.

* Given those dynamics, I don’t think it should be a surprise that we’re already at a place where your crypto wallet’s view of your NFTs is OpenSea’s view of your NFTs. I don’t think we should be surprised that OpenSea isn’t a pure “view” that can be replaced, since it has been busy iterating the platform beyond what is possible strictly with the impossible/difficult to change standards.

* I think this is very similar to the situation with email. I can run my own mail server, but it doesn’t functionally matter for privacy, censorship resistance, or control – because GMail is going to be on the other end of every email that I send or receive anyway. Once a distributed ecosystem centralizes around a platform for convenience, it becomes the worst of both worlds: centralized control, but still distributed enough to become mired in time. I can build my own NFT marketplace, but it doesn’t offer any additional control if OpenSea mediates the view of all NFTs in the wallets people use (and every other app in the ecosystem).

* **This isn’t a complaint about OpenSea or an indictment of what they’ve built. Just the opposite, they’re trying to build something that works. I think we should expect this kind of platform consolidation to happen, and given the inevitability, design systems that give us what we want when that’s how things are organized.** My sense and concern, though, is that the web3 community expects some other outcome than what we’re already seeing.

* “It’s early days still” is the most common refrain I see from people in the web3 space when discussing matters like these. In some ways, cryptocurrency’s failure to scale beyond relatively nascent engineering is what makes it possible to consider the days “early,” since objectively it has already been a decade or more.



* However, even if this is just the beginning (and it very well might be!), I’m not sure we should consider that any consolation. I think the opposite might be true; it seems like we should take notice that from the very beginning, these technologies immediately tended towards centralization through platforms in order for them to be realized, that this has ~zero negatively felt effect on the velocity of the ecosystem, and that most participants don’t even know or care it’s happening. This might suggest that decentralization itself is not actually of immediate practical or pressing importance to the majority of people downstream, that the only amount of decentralization people want is the minimum amount required for something to exist, and that if not very consciously accounted for, these forces will push us further from rather than closer to the ideal outcome as the days become less early.

* **When you think about it, OpenSea would actually be much “better” in the immediate sense if all the web3 parts were gone.** It would be faster, cheaper for everyone, and easier to use. For example, to accept a bid on my NFT, I would have had to pay over $80-$150+ just in ethereum transaction fees. That puts an artificial floor on all bids, since otherwise you’d lose money by accepting a bid for less than the gas fees. Payment fees by credit card, which typically feel extortionary, look cheap compared to that. OpenSea could even publish a simple transparency log if people wanted a public record of transactions, offers, bids, etc to verify their accounting.

However, if they had built a platform to buy and sell images that wasn’t nominally based on crypto, I don’t think it would have taken off. Not because it isn’t distributed, because as we’ve seen so much of what’s required to make it work is already not distributed. I don’t think it would have taken off because this is a gold rush. People have made money through cryptocurrency speculation, those people are interested in spending that cryptocurrency in ways that support their investment while offering additional returns, and so that defines the setting for the market of transfer of wealth.

* **The people at the end of the line who are flipping NFTs do not fundamentally care about distributed trust models or payment mechanics, but they care about where the money is**. So the money draws people into OpenSea, they improve the experience by building a platform that iterates on the underlying web3 protocols in web2 space, they eventually offer the ability to “mint” NFTs through OpenSea itself instead of through your own smart contract, and eventually this all opens the door for Coinbase to offer access to the validated NFT market with their own platform via your debit card.

*  That opens the door to Coinbase managing the tokens themselves through dark pools that Coinbase holds, which helpfully eliminates the transaction fees and makes it possible to avoid having to interact with smart contracts at all. Eventually, all the web3 parts are gone, and you have a website for buying and selling JPEGS with your debit card. The project can’t start as a web2 platform because of the market dynamics, but the same market dynamics and the fundamental forces of centralization will likely drive it to end up there.

* At the end of the stack, NFT artists are excited about this kind of progression because it means more speculation/investment in their art, but it also seems like if the point of web3 is to avoid the trappings of web2, **we should be concerned that this is already the natural tendency for these new protocols that are supposed to offer a different future.**

* I think these market forces will likely continue, and in my mind the question of how long it continues is a question of whether the vast amounts of accumulated cryptocurrency are ultimately inside an engine or a leaky bucket. If the money flowing through NFTs ends up channeled back into crypto space, it could continue to accelerate forever (regardless of whether or not it’s just web2x2). If it churns out, then this will be a blip. Personally, I think enough money has been made at this point that there are enough faucets to keep it going, and this won’t just be a blip. If that’s the case, it seems worth thinking about how to avoid web3 being web2x2 (web2 but with even less privacy) with some urgency.

* **I don’t think it’s on a trajectory to deliver us from centralized platforms, I don’t think it will fundamentally change our relationship to technology, and I think the privacy story is already below par for the internet (which is a pretty low bar!), but I also understand why nerds like me are excited to build for i**t. It is, at the very least, something new on the nerd level – and that creates a space for creativity/exploration that is somewhat reminiscent of early internet days. Ironically, part of that creativity probably springs from the constraints that make web3 so clunky. I’m hopeful that the creativity and exploration we’re seeing will have positive outcomes, but I’m not sure if it’s enough to prevent all the same dynamics of the internet from unfolding again.

* **We should accept the premise that people will not run their own servers by designing systems that can distribute trust without having to distribute infrastructure.** **This means architecture that anticipates and accepts the inevitable outcome of relatively centralized client/server relationships, but uses cryptography (rather than infrastructure) to distribute trust**. One of the surprising things to me about web3, despite being built on “crypto,” is how little cryptography seems to be involved!

* **We should try to reduce the burden of building software. At this point, software projects require an enormous amount of human effort**. Even relatively simple apps require a group of people to sit in front of a computer for eight hours a day, every day, forever. This wasn’t always the case, and there was a time when 50 people working on a software project wasn’t considered a “small team.” **As long as software requires such concerted energy and so much highly specialized human focus, I think it will have the tendency to serve the interests of the people sitting in that room every day rather than what we may consider our broader goals.** I think changing our relationship to technology will probably require making software easier to create, but in my lifetime I’ve seen the opposite come to pass. **Unfortunately, I think distributed systems have a tendency to exacerbate this trend by making things more complicated and more difficult, not less complicated and less difficult.**