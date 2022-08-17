---
title: "🦄 Uniswap Birthday Blog — V0. V0 describes Uniswap’s creation  V1"
date: 2022-08-09
tags:
- seed
---
https://medium.com/uniswap/uniswap-birthday-blog-v0-7a91f3f6a1ba?curius=1599

### Highlights
On November 2, 2018, Uniswap was publicly announced and deployed to the Ethereum mainnet. In an exciting, anxiety-inducing moment I fired off the announcement tweets to my ~200 followers.

For many people, this was the first they heard of the project. For me it was the culmination of over a years worth of work — and a huge amount of help along the way.

In order to expand my skillset, I decided it was time to work on a “real” project. At Karl’s suggestion I decided to implement an automated market maker, as described by Vitalik in this reddit post and this blogpost.

Building the POC was my first step down the rabbit-hole of programmable money. It was the most intriguing thing I had worked on in my life. It didn’t even feel like work.

However an attendee of Karl’s Devcon talk — Pascal Van Hecke — reached out to me. He had been closely following the progress of automated market makers on Ethereum and expressed interest in supporting my efforts. He even gave a grant to fund my next month of research. We began weekly calls to discuss progress.

Uniswap had two major unsolved problems which I set out to tackle with an engineering mindset: It only worked for a single ETH/ERC20 pair It only worked for a single liquidity provider

By this point I was fully captivated by Ethereum’s unbounded potential. These were the properties I cared about: It was censorship resistant. No one could stop it. It was decentralized. No one controlled it. It was permissionless. Anyone could use it. It was secure. Anyone could verify execution.

Yet something felt off in the ether. The major projects on Ethereum embodied some of its properties, but few embraced them fully. Central points of failure, censorable applications, and overly complex architecture. DAPPs were designed entirely around the idea of having a token for use cases that clearly did not need one.

I began thinking about Uniswap not just as a learning tool for myself — but one for others. I could not imagine a world where it competed with “real” projects. You know — the ones that raised between $20,000,000 and $150,000,000 in Summer 2017. But maybe it could serve as an example of an application that truly embodied Ethereum.

By late January 2018, all major smart contract issues had been solved. Exchange contracts could support multiple liquidity providers by using an internal liquidity token to track each LP’s share of generated fees and the underlying collateral.

A factory contract allowed anyone to add support for a token. All tokens were paired with ETH allowing it to be used as an intermediary for anything-to-anything swaps in a single transaction.

Working around his other projects, Callil designed and built a sleek new interface for Uniswap on top of my incredibly shitty React codebase.

Vitalik: Have you considered writing it in Vyper? Also, you should apply for an Ethereum foundation grant.

I explained that I had only just learned Vyper two weeks prior, I had never spoken in public, and that I generally had no idea what I was doing. David assured me it was fine — two weeks building on Vyper was more than enough to speak publicly and authoritatively on it. So I gave my first talk:

I took the same flight back to NY as Dan. We spent the entire time gas-optimizing Uniswap. By the time the plane landed, Uniswap was 30% more efficient. It was now the most gas efficient exchange on Ethereum by a significant margin.

Edcon 2018 was extremely encouraging. The reactions to my Uniswap demo were more than just mild interest. People were legitimately excited by it. They seemed to understand and share the values I intended for it to be an example of. I realized Ethereum’s community went far beyond ICOs. There were people who truly cared about its vision of a permissionless, decentralized financial system.

Richard helped me understand that people not understanding Uniswap it was a me-problem, not a them-problem. Developers were just a small part of a bigger picture. If I wanted people to use my project, I needed to talk about it on their terms, in ways they understood. Uniswap’s biggest outstanding challenge was a social one.


