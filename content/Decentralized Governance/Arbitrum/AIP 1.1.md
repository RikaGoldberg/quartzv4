Source: 
https://forum.arbitrum.foundation/t/proposal-aip-1-1-lockup-budget-transparency/13360

## Abstract

_**tl;dr:** T==his proposal proposes (1) a lockup, (2) a budget and (3) transparency reporting regarding the 7.5% of the $ARB tokens distributed to the Foundation’s “Administrative Budget Wallet”._==

The Administrative Budget Wallet will be used for covering ongoing administrative and operational costs of The Arbitrum Foundation, payment of service providers, and for the purpose of fostering the growth and development of the Arbitrum ecosystem. In respect to the 7.5% that has been distributed to the Administrative Budget Wallet, a transparency report regarding the 0.5% that has already been transferred is available [here 280](https://docs.arbitrum.foundation/foundational-documents/transparency-report-initial-foundation-setup).

The remaining 7% of tokens will not be used until the approval of a budget, such as the one proposed in this AIP. The proposed budget is in-line with the Foundation’s strategic needs to represent and service the DAO and the allocation is smaller than initial allocations to peer foundations. This AIP proposes placing the 7% outstanding distribution in a smart contract-controlled lockup – linearly unlocking over 4 years – alongside transparency report structures to allow the DAO to periodically monitor expenditures and other activities of the Foundation.

The Administrative Budget Wallet will be used in pursuit of the Foundation’s mission statement as set out in the [bylaws 53](https://drive.google.com/file/d/1TOLXm_NOUwxUaYLqrORubt8a47GvlmS-/view), which includes financing technical improvements and operations of the Arbitrum network, fostering ecosystem growth through grants to align with partner projects and educational initiatives with in-person and online events.

## [](https://forum.arbitrum.foundation/t/proposal-aip-1-1-lockup-budget-transparency/13360#motivation-5)Motivation

On March 16, 2023, the Arbitrum networks (Arbitrum One and Arbitrum Nova) were decentralized and given to the newly formed Arbitrum DAO. Included in this transition were:

- Control of the upgradeability and technical future of the chains
- Control over the DAO treasury
- Control over net fee revenue - i.e. the net difference between fees collected by on-chain operations and L1 fees paid by the Sequencer
- All Arbitrum social media platforms and accounts
- Ability to elect and, if deemed appropriate, remove the Security Council and Directors

Full responsibility of the chain’s technology, future, and fee revenue were given to the DAO directly. With the DAO assuming those rights and controls, the DAO also assumed the responsibility to fund the ongoing operations of the chains and the costs of running critical chain infrastructure, including RPCs, the Sequencer, and third-party vendors and service contracts.

While there are many activities that the DAO can do directly on-chain, several of its responsibilities require a representative that can engage, maintain and enter new agreements with service providers to run infrastructure that’s critical for the ecosystem (e.g. servers, RPCs, block explorers, data feeds and analytics platforms, and tooling), and ensure that both the chain and the ecosystem have the support they need to continue to thrive. In order to ensure a smooth transition to the DAO without any interruption of services, it was necessary to create an organization that would be ready to service the DAO immediately from launch.

The Arbitrum Foundation was created to fill this need, with its mission and scope outlined across the [Foundation Bylaws 53](https://drive.google.com/file/d/1TOLXm_NOUwxUaYLqrORubt8a47GvlmS-/view). Prior to the launching of the DAO, The Arbitrum Foundation assumed responsibilities for funding and running chain infrastructure. However, in an arrangement that appears to be unique amongst Arbitrum’s peers, the Foundation does not receive or control the net revenue from transaction fees as this is given directly to the DAO treasury.

The DAO is also tasked with fostering and developing the Arbitrum ecosystem, where the DAO may seek to partner with companies or organizations that either cannot or will not publicly negotiate collaborations or partnerships due to confidentiality and other operational requirements. Often, large enterprises negotiate partnership opportunities in private without public processes, where these relationships can only be disclosed _after_ they are agreed upon. Having a well-funded Foundation empowered to represent the DAO in this arena, alongside peer foundations, is in the best interests of the DAO to further develop the growth of the Arbitrum ecosystem.

## [](https://forum.arbitrum.foundation/t/proposal-aip-1-1-lockup-budget-transparency/13360#rationale-6)Rationale

While the need for the Foundation to exist and represent the DAO is well-motivated, it became clear through community discourse around AIP-1 that it was important to have additional insight and restrictions on the Foundation’s initial funding. This AIP-1.1 proposes a detailed set of controls and initiatives to achieve that goal.

**1. Smart Contract Lockup**

The remaining 7% of ARB tokens in the “Administrative Budget Wallet” will be subject to a four year lockup schedule, unlocking on a continuous linear time basis commencing from the date of the Snapshot approval of AIP-1.1 by the DAO (i.e., a total of 175m $ARB released over each year for 4 years). The lockup will be enforced on-chain through a smart contract which will designate a multisig wallet controlled by The Arbitrum Foundation as the beneficiary. The lockup contract will be configured in a manner that allows the DAO to adjust future funding and/or modify the unlock schedule.

**2. Operating Budget**

Below is a proposed annual operational budget for the first year of the Foundation. While the operational costs are denominated in USD, the expectation is that approximately half will be paid in USD and half will be paid in locked $ARB tokens.

As this will be the first year of the Foundation’s operation and as the Foundation is still young at the time of this AIP, it goes without saying that these are estimates with the expectation that this will be an upper bound on the operational costs for the first 12 months. The transparency reports described in the next section will be an opportunity to track the actual expenses against the budgeted categories and keep the community informed.

|Operating Budget||
|---|---|
||**Cost ($USD)**|
|General and Administrative|$16,000,000|
|R&D|$9,000,000|
|Technical Infrastructure|$5,000,000|
|Events, Marketing & Communications|$6,000,000|
|**Total - Next Twelve Months**|**$36,000,000**|
||**(50% $USD/50% $ARB)**|

*The General and Administrative line-item includes personnel, contractors, legal, insurance and other operational costs. As of the date of this AIP, the Foundation currently has five full-time contributors, 8 contractors, and the Security Council engaged to support the Arbitrum ecosystem. The Foundation’s budget anticipates the need to hire an additional 15 full-time contributors across technical, growth and community functions over the course of this year.

This operating budget presents best-faith estimates of the Foundation’s anticipated budgetary needs which may be subject to change.

**3. Ecosystem Growth Initiatives**

Any additional funds released in compliance with the lock-up schedule above will be made available, but not necessarily deployed, to opportunistically pursue ecosystem growth opportunities and strategic partnerships on behalf of the DAO. The expectation is that the vast majority of ecosystem growth funds will be paid in tokens, and thus will not require the Foundation to sell any tokens. Wherever reasonable, the Foundation will include additional lockups and/or vesting when making distributions in tokens.

The Mission Statement in the Foundation’s [bylaws 53](https://drive.google.com/file/d/1TOLXm_NOUwxUaYLqrORubt8a47GvlmS-/view) highlights the varied nature of the opportunities the Foundation intends to pursue, and a set of KPIs that can track all of these opportunities being developed. The basis of those KPIs will stem from a focus on onboarding and growing both the developer and user base of the Arbitrum ecosystem, attracting best-in-class infrastructure providers to the network, expanding across various industries, use-cases and scope of projects that engage with Arbitrum technology. The ultimate goal of the Foundation is to continue to foster the development of the technology and expand the Arbitrum ecosystem globally.

In addition to the Foundation’s processes for selecting grants, it is important to note that the DAO maintains control over the 3.527 billion $ARB and has the ability to distribute any additional grants as it sees fit. Additionally, should the DAO choose, it has the ability to trigger the inflation of the total supply of $ARB which will supplement the on-chain DAO treasury with 2% growth of the total supply of $ARB each year.

**4. Transparency Reports**

The Foundation understands and agrees that the community should have oversight across how these funds are being utilized to gain comfort that spending is in the interest of the community. In furtherance of this goal, the Foundation is committed to providing a comprehensive annual report and a semi-annual progress update. This will provide the community with a better understanding of the Foundation’s expenditures, balance sheet and its pursuit of ecosystem growth opportunities alongside partnership developments, as well as the various internal and external committees and stakeholders that are involved in the decision making process.

The Foundation is continuing to build out its internal personnel to service grant requests and has already engaged a DAO service provider to assist with the administrative components of servicing grants. The Foundation is also talking with a number of different external service providers to assist in both the review and diligence processes.

The financial element of these transparency reports will include a breakdown of operational costs incurred while running the Foundation, including infrastructure spending for the Arbitrum chains, events, community building efforts, grants, etc.

In addition to the aforementioned reports, the Foundation is providing an initial transparency report alongside this AIP covering all major actions and decisions the Foundation made during set-up, including the costs incurred up until now, which can be found [here](https://docs.arbitrum.foundation/foundational-documents/transparency-report-initial-foundation-setup)

**Steps to Implement**

1. Foundation to deploy smart contract vesting wallet in the specified configuration and transfer 700 million $ARB to it.
2. Foundation to implement all processes described in this AIP.

**Timeline**

This AIP-1.1 shall be posted on the DAO forum and will have at least a 72-hour period for DAO comments and input. After the end of the 72-hour period and appropriate updates incorporating DAO feedback, this AIP-1.1 will be posted for vote on Snapshot for an additional 7 days.