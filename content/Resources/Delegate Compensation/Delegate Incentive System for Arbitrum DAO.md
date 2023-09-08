#Resource 

Source: https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720

# Request For Comments: Delegate Incentive System for ArbitrumDAO

## [](https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720#introduction-2)Introduction

==Encouraging active and efficient participation in governance is crucial to optimizing Arbitrum’s current structure. Therefore, we propose a discussion about introducing an incentive system for delegates whose role in the Arbitrum ecosystem is vital.

==It is crucial to discuss establishing an incentive system that provides delegates with constant, attractive, and predictable rewards. To scale governance, it is essential to maintain delegate activity, who, through their voting power, guide and define the course of governance.

## [](https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720#challenges-and-issues-with-daos-3)Challenges and Issues with DAOs

One of the current challenges in DAOs is to promote the active participation of community members in governance. For this, a community member must invest time and resources, ==which strengthens governance and prevents possible attacks by malicious actors both [on-chain](https://rekt.news/es/audius-rekt/) and [off-chain 1](https://mirror.xyz/rhizoo.eth/6ggZQ2g5OpUVaAXEwYBldN2gT1CZxfR2D2sL9cn0eJc). Such attacks could be directed at the general protocol, governance resources, or [decisions contrary to the community’s interests](https://tribe.fei.money/t/tip-121-proposal-for-the-future-of-the-tribe-dao/4475/27).

==Not only is participation and its quality crucial, but also diversity in terms of the number of voices present in governance. A frequent and known problem in most governance is the challenge of maintaining these characteristics.==

## [](https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720#current-state-of-arbitrum-governance-4)Current State of Arbitrum Governance

Since its launch in April to the present (4 months), Arbitrum governance has [137,183](https://dune.com/queries/2261038/3705791) delegates (remember that many delegate themselves), of which about [900](https://forum.arbitrum.foundation/t/delegate-statement-template/31/105) have submitted their delegate statement.

==Regarding the voting of delegates in both Snapshot and Tally, we can observe the following numbers:

- [AIP-1](https://forum.arbitrum.foundation/t/aip-1-arbitrum-improvement-proposal-framework/30/1):
    - [Snapshot](https://snapshot.org/#/arbitrumfoundation.eth/proposal/0x3be7368a662d1cf12fa4da768d626edbc013be0dc7b994fef2e24d9a54e4033a): 26,141 voters
    - Tally: not pass
- [AIP-1.05](https://forum.arbitrum.foundation/t/proposal-return-700m-arb-to-the-dao-treasury/13490):
    - [Snapshot](https://snapshot.org/#/arbitrumfoundation.eth/proposal/0x3ae4c725f7cb82d450b6fe8517178b2a0a51d1105beaad0adb421df1bc8f8cc4): 43,392 voters
    - Tally: not pass
- [AIP-1.1](https://forum.arbitrum.foundation/t/proposal-aip-1-1-lockup-budget-transparency/13360/94):
    - [Snapshot:](https://snapshot.org/#/arbitrumfoundation.eth/proposal/0x7203289844e807781e8d2ec110d4b97a79a29944cae06a52dbe315a16381a2ae) 45,230 voters
    - [Tally:](https://www.tally.xyz/gov/arbitrum/proposal/70545629960586317780628692755032548222173912190231545322320044688071893662480) 500 addresses
- [AIP-1.2](https://forum.arbitrum.foundation/t/proposal-aip-1-2-foundation-and-dao-governance/13362/69):
    - [Snapshot:](https://snapshot.org/#/arbitrumfoundation.eth/proposal/0x373dfa89fc9c5ccba8ed83fa3fa4f233edd270075b5f8f4f3902b408318d9d17) 46,269 voters
    - [Tally: 1](https://www.tally.xyz/gov/arbitrum/proposal/77049969659962393408182308518930939247285848107346513112985531885924337078488) 500 addresses
- [AIP-2 2](https://forum.arbitrum.foundation/t/aip-2-activate-support-for-account-abstraction-endpoint-on-one-and-nova/14790/17):
    - [Snapshot:](https://snapshot.org/#/arbitrumfoundation.eth/proposal/0xb0156cfc112bbe4275b0a1d6cacc3970affdad6057047b8cee79ba54d45446aa) 45,999 voters
    - [Tally](https://www.tally.xyz/gov/arbitrum/proposal/71941171835710778457735937894689629320431683601089057868136768380925169329077): 500 addresses
- [Arbitrum DAO Grants - Delegated Domain Allocation by Questbook: 1](https://forum.arbitrum.foundation/t/delegated-domain-allocation-by-questbook-arbitrum-dao-grants/14688)
    - [Snapshot: 1](https://snapshot.org/#/arbitrumfoundation.eth/proposal/0xe07fb357b2b40e042ca58a36a1534afc33a1d313d4781ac433536bc884fc3c65) 51,622 voters
    - [Tally](https://www.tally.xyz/gov/arbitrum/proposal/52789605232046584393223454610845077119190920888046802640362214067679574612119): in voting
- [AIP - 3 [Non-Constitutional] Fund the Grants Framework Proposal Milestone 1](https://forum.arbitrum.foundation/t/aip-3-non-constitutional-fund-the-arbitrum-grants-framework-proposal-milestone-1/14976):
    - [Snapshot](https://snapshot.org/#/arbitrumfoundation.eth/proposal/0xa0e14b85197d73e825ac30f72b7d895d644ed06159a32a578f4efe47a2739b2f):49,531 voters
    - [Tally:](https://www.tally.xyz/gov/arbitrum/proposal/48957903989337452494807960514286334301924688097662612089398341037722439754861) in voting
- [Accelerating Arbitrum - leveraging Camelot as an ecosystem hub to support native builders 1](https://forum.arbitrum.foundation/t/proposal-accelerating-arbitrum-leveraging-camelot-as-an-ecosystem-hub-to-support-native-builders/15116):
    - [Snapshot:](https://snapshot.org/#/arbitrumfoundation.eth/proposal/0x6b001068a3aa7f58e0e334a1f717be2145eb4c7b3f3af479cd827020aa2993a6) 49,504
    - Tally: not available
- [Proposal: Update Security Council Election Start Date to Ensure Time for Security Audit 1](https://forum.arbitrum.foundation/t/proposal-update-security-council-election-start-date-to-ensure-time-for-security-audit/15426):
    - [Snapshot: 2](https://snapshot.org/#/arbitrumfoundation.eth/proposal/0x5e43fdcaa085476a7be4fb638dd57f7b3f6b708fbbbe1380e54da126c7a095d2) 51,495
    - Tally: not available

==There is a significant difference in the number of voters between Snapshot and Tally. This could be due to various reasons, such as a need for more knowledge about on-chain voting, the cost of the vote (although Arbitrum is very cheap), user interface issues, [and airdrop farmers 3](https://twitter.com/Cattin0x/status/1685394750235435008?s=20).

General participation in the forum has also been considered, where the delegates debate and form opinions.

Number of comments per proposal:

- [AIP-1](https://forum.arbitrum.foundation/t/aip-1-arbitrum-improvement-proposal-framework/30/1): 109
- [AIP-1.05](https://forum.arbitrum.foundation/t/proposal-return-700m-arb-to-the-dao-treasury/13490): 54
- [AIP-1.1](https://forum.arbitrum.foundation/t/proposal-aip-1-1-lockup-budget-transparency/13360/94): 89
- [AIP-1.2](https://forum.arbitrum.foundation/t/proposal-aip-1-2-foundation-and-dao-governance/13362/69): 67
- [AIP-2 2](https://forum.arbitrum.foundation/t/aip-2-activate-support-for-account-abstraction-endpoint-on-one-and-nova/14790/17): 19
- [Arbitrum DAO Grants - Delegated Domain Allocation by Questbook: 1](https://forum.arbitrum.foundation/t/delegated-domain-allocation-by-questbook-arbitrum-dao-grants/14688) 61
- [AIP - 3 [Non-Constitutional] Fund the Grants Framework Proposal Milestone 1](https://forum.arbitrum.foundation/t/aip-3-non-constitutional-fund-the-arbitrum-grants-framework-proposal-milestone-1/14976): 51
- [Accelerating Arbitrum - leveraging Camelot as an ecosystem hub to support native builders 1](https://forum.arbitrum.foundation/t/proposal-accelerating-arbitrum-leveraging-camelot-as-an-ecosystem-hub-to-support-native-builders/15116): 280
- [Proposal: Update Security Council Election Start Date to Ensure Time for Security Audit 1](https://forum.arbitrum.foundation/t/proposal-update-security-council-election-start-date-to-ensure-time-for-security-audit/15426): 7

Some considerations about the metrics presented:

- The difference between the number of delegates, Snapshot, and Tally voters could be due to multiple challenging factors.
- The number of comments on the proposals does not necessarily reflect the quality of the comments.
- It is not easy to establish a parameter to determine whether delegates voted with knowledge and awareness of what was being voted on.
- Very few delegates publish the reasoning behind their vote.
- The interpretations of these metrics can be very subjective.

Note: Please let us know if there is any error or omission.

==The start of the Arbitrum DAO has been positive, and it is vital to maintain and increase delegate participation. For this reason, we raise this debate in the forum. A good incentive system for delegates is crucial to maintain and increase their commitment and participation at this early stage. Establishing this base infrastructure in the DAO is critical to Arbitrum success.

## [](https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720#characteristics-that-the-incentive-system-should-have-5)Characteristics that the incentive system should have

==We believe that an incentive system should have the following fundamental principles==:

- ==Transparency==: The incentive system must be transparent and open to all delegates. The selection criteria, rules, and rewards must clearly and effectively communicate.
- ==Fairness==: The incentive system must treat all delegates fairly and equitably, without bias or unjustified preferences. ==Participation, meaningful contributions, and compliance with ethical and conduct rules should be the main criteria for allocating incentives.==
- ==Long-term sustainability:== The proposed economic incentives must be sustainable and viable in the long term. They must establish ==monitoring and evaluation ==mechanisms to ensure that the incentives promote ==commitment, participation, and sustainable community growth==.

An incentive system should include:

- ==Participation rewards: The system should recognize and reward delegates who contribute constructive ideas, meaningful comments, and innovative solutions in decision-making and governance activities. Delegates should receive additional points or tokens based on the quality and impact of their contributions.
- ==Recognition and Visibility: The system should highlight and publicly recognize the most committed and active delegates. Periodically, it should publish a participation and merits report in which the achievements and contributions of the most outstanding delegates will be exposed.
- ==Metrics and monitoring: The system should establish clear and measurable parameters to evaluate the impact of incentives on delegate participation and commitment. Monitor the growth and diversity of the delegate community in terms of new members and active participation.
- ==Continuous improvement: The system should not be rigid; on the contrary, it should be flexible and open to constant improvement: It should evolve over time and according to the needs of Arbitrum DAO and its delegates.
- ==Dispute and slashing: The system must have a dispute and slashing system either to cut incentives to delegates who do not meet the requirements or so that anyone can report a delegate. Note: this is only to slash the incentives.

Implementing a delegate incentive system in ArbitrumDAO can ==boost active participation, commitment, and sustainable community growth==. Following transparency, fairness, and long-term sustainability principles and establishing fair rewards for participation, recognition, visibility, metrics, monitoring, continuous improvement, disputes, and slashing can foster more significant commitment and strengthen governance in Arbitrum.

==It is essential to consider other challenges and considerations, such as the need to attract committed members without relying solely on economic incentives and the importance of maintaining clear and straightforward communication to promote the community effectively. Addressing these considerations comprehensively is crucial to ensure the long-term success of the proposed incentive system.

## [](https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720#conclusions-6)Conclusions

The above serves as a starting point, and we invite the community to debate and improve these incentive programs to meet the needs and goals of ArbitrumDAO. It is vital to confirm the necessary infrastructure to ensure the success of Arbitrum at this early stage.

Other governance such as [MakerDAO](https://mips.makerdao.com/mips/details/MIP113#6-aligned-delegates-ads-), [Aave 1](https://twitter.com/lemiscate/status/1677973118827085825), and [Optimism 1](https://gov.optimism.io/t/retroactive-delegate-rewards-for-season-1-2/3947) have incentive programs. ==We must learn from the mistakes of other governance and establish the best possible system to attract builders, users, protocols, projects, institutions, Etc., to maximize the benefits of the Arbitrum chain==.

It is essential to professionalize and keep our delegates active! If you are in favor or against establishing an incentive system for delegates, express it in the forum. If you have an idea on this topic, comment on this post.

# [](https://forum.arbitrum.foundation/t/rfc-2-delegate-incentive-system-for-arbitrumdao/15720#next-steps-7)Next Steps

[SEED Latam 1](https://twitter.com/SEEDLatam) and [L2 en Español 1](https://twitter.com/Layer2es) are working hard on formulating a concrete proposal to establish a transparent incentive system. However, this RFC can only progress with the participation and contributions of the ArbitrumDAO community and the most outstanding delegates.

It is essential that all members interested in the success and development of the ecosystem actively participate in the forum and provide their opinions and perspectives on an incentive system for the delegates.

The diversity of ideas and viewpoints will enrich the final proposal and ensure that all relevant needs and considerations are considered.

Once enough feedback and contributions from the community have been gathered and analyzed, the proposal will be polished and adjusted to reflect the interests and objectives shared by all participants optimally.

The ultimate goal is to have a well-designed, transparent, and fair incentive system that motivates delegates to participate in Arbitrum’s governance actively and significantly contribute to the growth and success of the ecosystem.

_Check the other RFCs [here 4](https://forum.arbitrum.foundation/t/rfc-0-comprehensive-proposal-for-modifications-in-arbitrumdaos-governance-infrastructure/15719)._