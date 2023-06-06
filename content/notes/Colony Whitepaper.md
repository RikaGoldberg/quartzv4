---
title: "Colony Whitepaper"
date: 2022-11-18
tags:
- inbox
---

https://colony.io/whitepaper.pdf

Why I want to read it: 
Explains theory of the firm and how Internet Orgs. reduce transaction costs. 

In other words, Internet Orgs. are the evolution of the firm. 

## Highlights

Automating business rule enforcement makes organizational models which previously involved high coordination costs, such as Holacracy, more feasible.

By reducing the trust needed for people to collaboratively manage shared funds and enforce standards of conduct, it becomes possible to coordinate the entirety of an organization’s operations via market-style interactions, rather than through the internal processes of a firm.

We anticipate the Colony protocol will be used to build economic incentives and decision-making mechanisms for platforms whose content or value proposition is created by users without top down decision-making of any kind. Examples may include a photo-sharing app which meritocratically divides revenue between users, a driver-run P2P ridesharing service, crowdsourced claims handling in an insurance dApp, or a merchants’ guild in a virtual world.

In many cases off-chain functionality, such as messaging or other forms of signalling, will be essential for the proper functioning of the organization. However, as that communication is not consensus-relevant, it does not need to happen on-chain, so the specifics of how it might occur are not treated here

Companies exist to coordinate the production of goods and services. Transaction Cost Economics (TCE) theory, popularised by Ronald Coase’s ‘Theory of the Firm’ [1], postulates that companies form, employ people, and invest in capital because there is a threshold at which it is more efficient to control the factors of production directly than to coordinate production via the market mechanism, once transaction costs are accounted for. 

TCE theory states that firms are more efficient than the market mechanism at coordinating production due to imperfect information and bounded rationality.

Given perfect information, companies would not be necessary, as market forces would provide the necessary mechanisms to incentivise and coordinate production — everyone would know the exact value of their and other’s contributions. As this is not the case in traditional markets, these knowledge and trust barriers are overcome by due diligence and contracts, and require a legal system to provide recourse when things go wrong. These processes are expensive, and so traditional firms often find that replacing free-market bargaining with command-and-control hierarchy makes them more efficient and competitive.

As new technologies have improved the diversity and flow of information, new organizations are emerging which are able to merge the efficient decision-making of a market with the shared valuecapture of a traditional firm. Gig economy platforms (e.g. Uber, Airbnb), market networks (e.g. eBay, Amazon Marketplace), and cryptocurrencies (e.g. Bitcoin, Ethereum) have demonstrated that if the product is sufficiently well defined, and the supply sufficiently large, fungible, or diverse, then it is possible to dramatically reduce the transaction costs of the market mechanism by making search and information discovery easy, bargaining straightforward, and having policing and enforcement provided essentially for free by the platform. This has enabled these new platforms to be orders of magnitude more efficient than had they attempted to coordinate equivalent supply within the hard boundaries of a firm.

Internet Organizations must thus assume the lowest common denominator: that every member is rationally self interested and focussed entirely on maximising personal utility and profit, and given incentives accordingly. This gets to the heart of Colony: a protocol seeking to facilitate the same kind of meritocratic division of labour and authority that the idealised model of the corporate hierarchy should, except from the bottom up, and less prone to error. Decentralised, self-organising companies, where decision-making power derives from a fairly-assessed contribution of value.

Work therefore, is where we start. A colony member is compensated for the value they create for the colony, in the form of ETH, any ERC20-compatible token, or [Web3 reputation](/notes/Web3%20reputation.md), a non-fungible, time-decaying measure of aggregate past contributions.

When a colony member gets paid in the colony’s internal token, they also receive Reputation for the Skills they used, and in the Domain in which the value was created. Reputation is used to quantify the historical contributions of members to a colony, and to make sure they are fairly rewarded. By earning Reputation in a Skill (e.g. Javascript) and a Domain (e.g. BigCo Client Project), the recipient earns proportional influence in decisions pertaining to those skills and domains. [Web3 reputation](/notes/Web3%20reputation.md) is not transferable between accounts, and slowly decays over time. This decay ensures that any reputation a member has is as a result of recent behaviour deemed beneficial to the colony (and thus a function of the judgment of the current membership). As the calculations involved are too compdlex to carry out on the Ethereum blockchain, updates to a member’s reputation are calculated off-chain, with an on-chain reporting mechanism secured by economics and game theory (See Section 5).

Colonies may be voluntary, non-profit, or for profit. A revenue-generating colony may elect to pay out a portion of its revenue to its members. When the colony pays out rewards, the amount a member receives is a function of their combined token and reputation holdings; this ensures those who have contributed the most gain the greatest benefit. Members maximise rewards by contributing to a colony over its whole lifetime (thus maintaining high levels of reputation) rather than sitting on early accumulations of tokens.


