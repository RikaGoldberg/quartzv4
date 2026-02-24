---
title: A New Approach to Reward DAO Delegates
published date: 9/19/23
distribution channel: Mirror
client: Tally
status: Published
tags:
  - published
  - governance
---
#### [Read Full Article](https://tally.mirror.xyz/P5WzF4C407UXDtroRFDCgM-60CP8424pYqbdZkKCASE)
## Introduction

[[Arbitrum]] governance is heating up!

On the heels of the [pluralistic grants funding framework](https://forum.arbitrum.foundation/t/grants-funding-framework-discussion-how-to-excel-at-being-a-dao/13818)comes another decentralized governance experiment: **an incentive (a.k.a. compensation) system for delegates.**

[Cattin](https://twitter.com/Cattin0x), a representative of [SEED Latam](https://twitter.com/SEEDLatam), an [[Arbitrum]] delegate, was the first to put pen to paper in early August, writing a [thoughtful post](https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720) in the governance forum about the need for a delegate incentive system.

Since that post, I went down the rabbit hole of DAO delegate compensation, researching how several well-known DAOs ([MakerDAO](https://deepdao.io/organization/c41f87df-35a6-4a37-82c4-62cd5a3a8c08/organization_data/finance), [Optimism](https://deepdao.io/organization/10edb97a-9dba-448a-88b1-ca263a7c75ad/organization_data/finance), and [Hop](https://deepdao.io/organization/f50de02c-382c-4527-b462-eaf4ac538c18/organization_data/finance)) designed their delegate incentive systems. I also jumped on a few calls with Arbitrum delegates, exchanged DMs with the team who facilitated MakerDAO’s incentive system, and shared my learnings in public ([here](https://x.com/RikaGoldberg/status/1696889943283335171?s=20), [here](https://x.com/RikaGoldberg/status/1699804920273092696?s=20), and [here](https://x.com/RikaGoldberg/status/1701599379667517701?s=20)).

Everyone whom I spoke to was extremely gracious with their time, offering important insights about predecessor delegate compensation systems, but many also exuded a _not insignificant_ amount of hesitancy and caution.

A few individuals even stated that they don't believe delegates should receive any compensation at all!

Initially, I was taken aback by this sentiment because not paying people for their work seems inherently exploitative. However, as I continued to delve deeper into this topic while writing this article, I began to perceive their concern in a more nuanced light. I started to wonder if their sentiment stems from a fear, specifically, a fear of replicating the wild inefficiencies and bureaucracy of real-world governance systems, where bills are [endlessly debated](https://en.wikipedia.org/wiki/Filibuster) and [senators often evade their responsibilities](https://x.com/RikaGoldberg/status/1702375707026796945?s=20).

Perhaps it's time to give earnest consideration to the skeptics' perspective and contemplate a fresh approach to designing and implementing a delegate incentive system for [[Arbitrum]]m DAO.

In this post, you can anticipate gaining insights into the existing DAO delegate incentive systems – understanding their successes and shortcomings. Additionally, I will explore an innovative, unconventional approach for shaping a system tailored to the needs of Arbitrum DAO. This system will go beyond mere participation and communication tracking.

## DAO delegate incentive systems today

Existing DAO delegate incentive systems occasionally exacerbate real-world issues rather than resolve them. When these systems primarily incentivize delegate participation and communication, neglecting the crucial aspect of executing towards the protocol's strategic objectives, delegates can inadvertently transform into corporate bureaucrats.

It’s reminiscent of the theme of the classic movie, [Office Space](https://en.wikipedia.org/wiki/Office_Space).

![Bill Lumbergh from Office Space](https://tally.mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FpHxG6L2iOsy5Kupv9fbGM.png&w=3840&q=75)

Bill Lumbergh from Office Space

MakerDAO, Optimism, and Hop all incorporate a substantial amount of procedural and digital documentation within their delegate incentive systems. This isn't inherently negative; indeed, a certain level of [formal structure](https://tally.mirror.xyz/H_G5KF8CByhQO4jO88RrP2jBHbnyS6M2iAYDaxi2ubI) is indispensable in DAOs. However, governance teams must deliberate on the fundamental purpose of this structure. In essence, they should consider what behaviors the system incentivizes and whether those behaviors truly serve the protocol’s objectives.

Let’s look into how MakerDAO, Optimism, and Hop reward their delegates.

## MakerDAO’s delegate incentive system

MakerDAO’s [delegate incentive system](https://mips.makerdao.com/mips/details/MIP61#motivation), aligned with its overarching governance framework exhibits robustness and a meticulous emphasis on process.

A dedicated council, called [GovAlpha](https://expenses.makerdao.network/core-unit/GOV), is tasked with monitoring delegate participation. This involves quantifying their voting frequency and evaluating the regularity with which they communicate their voting rationale through write-ups. To accomplish this, the council employs a sophisticated math formula in conjunction with customized software to perform these calculations on a monthly basis.

## Optimism’s delegate incentive system

Optimism's [delegate incentive system](https://gov.optimism.io/t/retroactive-delegate-rewards-for-season-1-2/3947) offers a more streamlined approach compared to MakerDAO. With each season, The Optimism Foundation retroactively rewards delegates for their participation in key votes and activities, a determination made by the Foundation itself.

For instance, in [Season 3](https://gov.optimism.io/t/retroactive-delegate-rewards-season-3/5871), The Foundation designated specific votes and activities that would qualify delegates for compensation. These included participation in the Agora test vote, voting during the Reflection period, engagement in badgeholder elections, and the nomination of a final project for retroactive public goods funding.

## Hop’s delegate incentive system

Hop’s [delegate incentive system](https://forum.hop.exchange/t/hip-4-amendment-hop-delegate-incentivization-trial/559) is more similar to MakerDAO than it is to Optimism, also measuring participation across votes with a math intensive formula and predefined parameters. However, what sets Hop apart from both MakerDAO and Optimism is that delegates self-report their participation, eliminating the need for a committee tasked with monitoring delegate activity.

# A different approach to DAO delegate incentive systems

As mentioned in the introduction, the future of DAO delegate compensation is probably not to reward delegates exclusively based on participation and communication. As [Ben O’Neill](https://twitter.com/benhoneill) points out in [his reply](https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720/5) to Cattin’s forum post, the delegate incentive system in Arbitrum shouldn’t exclusively incentivize the creation of thought leadership. Instead, it should focus on rewarding behaviors that advance the protocol.

An alternative approach would be to incentivize execution of Arbitrum’s strategic priorities, aiming to truly engage delegates. Arbitrum has a community of intelligent and capable delegates, each with diverse expertise and interests spanning many domains. To address the pressing issue of low delegate engagement, it is crucial to create opportunities for delegates to work on solving real problems for the protocol, not just voting and engaging in discussions.

For delegates to be engaged, they need to work on initiatives aligned with their skills and interests. The effectiveness of their contributions should be assessed through relevant key performance indicators (KPIs).

To gauge the landscape of delegate interests and expertise, we can turn to [delegate platform statements](https://forum.arbitrum.foundation/t/delegate-statement-template/31/999) on the governance forum. In particular, the question posed to all delegates seeking candidacy, 'What area are you most interested in contributing to?' provides valuable insights.

Community member [inkymaze](https://twitter.com/inkymaze) already did some of this work and [posted](https://forum.arbitrum.foundation/t/proposal-arbitrum-grants-dao/15273/2) that he identified two main themes after reading several hundred delegate platform statements. The themes are:

1. growth to [attract](https://forum.arbitrum.foundation/t/delegate-statement-template/31/965) [builders](https://forum.arbitrum.foundation/t/delegate-statement-template/31/981), onboard new [users](https://forum.arbitrum.foundation/t/delegate-statement-template/31/866), be [efficient](https://forum.arbitrum.foundation/t/delegate-statement-template/31/921), and [sustainable](https://forum.arbitrum.foundation/t/delegate-statement-template/31/1003)
    
2. decentralization for [fairness](https://forum.arbitrum.foundation/t/delegate-statement-template/31/895), [transparency](https://forum.arbitrum.foundation/t/delegate-statement-template/31/230), to foster [education](https://forum.arbitrum.foundation/t/delegate-statement-template/31/974) and [avoid conflicts of interest](https://forum.arbitrum.foundation/t/delegate-statement-template/31/993)
    

Arbitrum can further refine its strategic priorities by following Ben’s [recommendation](https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720/6) to  have the community outline its top strategic needs and then subsequently invite interested delegates to run in an election, forming groups of multiple delegates working together to execute these needs. Success would be determined by the effectiveness of the delegates in meeting KPIs related to strategic needs, in addition to their engagement in forums and consistent voting patterns.

The community doesn’t need to start from scratch to identify strategic priorities. It can use the results from the [Jokerace contest](https://jokerace.xyz/contest/arbitrumone/0xbf47BDA4b172daf321148197700cBED04dbe0D58) and the [Mural workspace](https://app.mural.co/t/pluralitylabs2610/m/pluralitylabs2610/1694447908930/0b2d494ad21ba813ac587962790f39384088fa19?sender=54ac213e-6148-41aa-9c6b-5a5d000f1947) from the [bi-weekly governance workshops](https://forum.arbitrum.foundation/t/bi-weekly-grants-governance-workshop-09-12-2023/16294). As well as the [four domains](https://forum.arbitrum.foundation/t/arbitrum-dao-grants-domain-allocator-nominations/15759) that Questbooks identified for grant funding: gaming, developer tooling on NOVA, new protocol ideas, and education, community, and growth. Delegates can self-select into one of the four domains, building on the skills and interests they shared in their delegate statement.

# Conclusion

In order to evolve DAO delegate compensation, a new system should incentivize delegates to engage both with the protocol and with other delegates in order to better the protocol, helping it achieve its strategic needs.

A delegate incentive system for Arbitrum should not exclusively track participation and communication because those metrics don’t necessarily lead to protocol growth or decentralization: two important values for Arbitrum. Although delegates will become more informed and thoughtful about how they vote, they will also be faced with an abundance of paperwork and project management work. Governance will also need to create a committee for tracking delegate activity, adding a layer of bureaucracy.

A potential approach could involve implementing a low-lift tracking system for delegate participation and communication, recognizing these as fundamental responsibilities. Some delegates may choose to exclusively focus on these aspects, while others may opt to delve deeper into addressing the protocol's strategic needs. A foundational [nominal compensation level](https://gov.optimism.io/t/retroactive-delegate-rewards-season-3/5871) could be established to reward delegates engaging with the protocol through basic participation and communication. Meanwhile, those delegates dedicated to advancing strategic needs could receive exponentially higher rewards contingent upon their ability to meet Key Performance Indicators (KPIs) effectively.

**Note**: _The latest proposal for a delegate incentive system, as of the time of publishing, can be found [here on Arbitrum’s governance forum](http:)._

### Resources

[[Delegate Compensation is an important topic that already has a few case studies]]

[[Delegate Incentive System for Arbitrum DAO]]

[[Designing an incentive system for Arbitrum delegates comes on the heels of an ongoing initiative to design a grants program]].

[[As Arbitrum's governance scales, delegate activity needs to be maintained by incentivizing them with constant, predictable, and attractive rewards]]

[[Delegates in a DAO are in charge of funding public goods and protocol maintenance and upgrades]]

[[Arbitrum can learn from MakerDAO's delegate compensation program, an early and robust, albeit imperfect program]]

[[Optimism pays a relatively small amount for retroactive delegate rewards based on a very simple framework]]

[[Arbitrum needs to ask itself a set of questions as it designs the incentive system]]

