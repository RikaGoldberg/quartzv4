#processed 

Source: [[PAPER The Value of Decentralization Using The Blockchain by Marco Reuters]]

## Summary
In this paper, the researcher proves mathematically that it makes sense for an entrepreneur to decentralize her network, ceding control to users via governance, when the locked-in effects are high. A prime example of a locked-in effect is switching costs. 

In a centralized network, as the network effects grow, and users get locked-in, the entrepreneur rationally wants to exploit users by charging them fees or showing more advertisements. For established centralized networks like GAFA, their network effects are already very strong so they won't decentralize. But for new networks, decentralization makes sense when locked-in effects are high. 

If a network has high locked-in effects, making it hard for users to switch to another network, the entrepreneur should make a credible commitment to users by allowing them to make monetization decisions. That way, users are assured the entrepreneur will not exploit them. 

## Notes
[[Assuming that users are smart, a rational entrepreneur will decentralize a new network that she is building when the locked-in effects for her users are high]]
## Introduction

Vitalik Buterin, co-founder of the Ethereum blockchain, argues that ==decentralization is, among other things, useful for Collusion resistance — it is much harder for participants in decentralized systems to collude to act in ways that benefit them at the expense of other participants, whereas the leaderships of corporations and governments collude in ways that benefit themselves but harm less well-coordinated citizens, customers, employees, and the general public all the time.

With that, I provide an answer to a question that is frequently raised when it comes to the topic of blockchain and cryptocurrencies: ==Why would anybody use it?== As the core friction at play, I assume that ==users of the network are subject to a locked-in effect, for example due to switching costs.3f the frictions that arise due to the potential of exploiting this locked-in effect by the entrepreneur are sufficiently large, I show that an entrepreneur prefers decentralizing her network. As a result, she effectively gives up control of the network and thus generates commitment to not abuse the locked-in effect of the users.

However, ==decentralization also comes at a cost for the entrepreneur: she surrenders the control of the network to the users and, to align incentives, engages in revenue sharing. ==
Therefore, there is a trade-off between the costs of centralization and decentralization. ==I show that if the locked-in effect is small, an entrepreneur should implement her network in a centralized manner. ==On the other hand, ==if the locked-in effect is sufficiently large, an entrepreneur should implement her network in a decentralized
manner.=

Given this result, the list of companies with decentralized counterparts is not surprising. Arguably, users of AWS, Facebook, and other tech companies are subject to
particularly large locked-in effects.

==The entrepreneur is purely interested in generating revenue through monetization, while the users’ utility consists of three parts: First, they derive utility from using the network. Second, they dislike monetization such as advertisements, and third, they benefit from any revenue that is shared with them. I use sub-game perfect equilibria to analyze the game.

==Therefore, an entrepreneur using a centralized implementation of the network is unable to credibly commit to future levels of monetization and revenue sharing. Instead, her choice of monetization and revenue sharing has to be sequentially optimal for every history of the game given the strategy of the users.

==I divide the analysis of the model into three subsections. First, the sub-game of centralized governance. Second, the sub-game of decentralized governance and third,
determining the optimal governance structure for the network.

# Model

==If the entrepreneur chooses decentralized governance, she commits, without loss of generality, to a fixed percentage α of revenue sharing in t = 0 through the tokenomics of the network. She achieves this through the appropriate distribution of the network’s token between herself and the users.

==In every period t = 1, 2, ... the users of the network determine the amount of monetization πt through on-chain governance. Regardless of the mode of governance, each period, users have a binary choice. Newly arriving users can join or not join the network. Existing users can stay in the network or leave the network. Users that decide to leave the network or newly arriving users who decide not to join the network exit the game and realize the value of their outside option.

# Growth

Every period, new potential users become aware of the network. Let μt−1 be the mass of users in the network in period t − 1. Then, in period t there will be a mass
of g(μt−1) − μt−1 ≥ 0 new users who become aware of the network. Each potential new user can join or not join the network. For example, if all new users join, the new measure of users in the network is equal to g(μt−1). If no new user joins, the network remains at μt−1 users. If only some users join, the network will have a size in between these two.

The growth function g is continuously differentiable and the mass of users in period 0 is
set to μ0 = 0. I assume that if the network loses all its users within a period, no new
users will arrive at any point in the future. This assumption rules out cyclical equilibria
in which the entrepreneur continuously ”starts over”. There is complete information and
both the entrepreneur and the users observe the full history of the game.

## Preferences

The entrepreneur is strictly interested in revenue: her utility in a particular period t is equal to her revenue share αt multiplied by the revenue raised by monetization πtϕ(μt): uEt = αtπtϕ(μt). The utility a user receives from participating
in the network has three components: First, a user derives utility V (μt) from using the network. I assume that V is increasing, i.e. there are network effects, it is continuously differentiable and that V (0) = 0. Second, as a result of the monetization of the network, πt, the user’s utility decreases by kπ2t , where k > 0 describes the user’s aversion to monetization. This represents the decrease in utility a user suffers when being forced to watch advertisements, through the sale of his data, or other detrimental effects of monetization. As a third component, a user may potentially receive a share of the revenues that the network generates.

The utility function of a user equals the sum of these three components: ut = V (μt)−kπ2t + (1−αt)μt πtϕ(μt).

## Locked-in effects

A user who newly arrives in the network can decide to join
the network and realize the utility as described above. If the user decides not to join the
network, he realizes an outside option that is normalized to 0. A user who has already
taken part in the network for at least one period can decide to stay in the network, re-
alizing the utility of participating, or leave the network. However, the outside option for
these users is equal to −u < 0. Thus, users that already take part in the network suffer
from a locked-in effect. This assumption represents the idea that users have spent time
interacting with the network, such that its algorithm has adapted to their needs.14 An
equivalent interpretation is that the value of the outside option has remained constant,
but users encounter a switching cost equal to u when leaving the network in favor of the outside option.

Both the entrepreneur and the users maximize the sum of their discounted utilities.
Future utilities are discounted by a common discount factor δ ∈ (0, 1). I divide the analysis into subsections dedicated to the sub-games of centralized and decentralized
governance. Within those sections, I provide a detailed description of the structure of the sub-games of centralized and decentralized governance. Then I derive the sub-game perfect Nash equilibria and discuss their properties. Finally, I determine the optimal decision of the entrepreneur at the start of the game: to implement her network with centralized or decentralized governance.

## Growth vs. exploitation.

To derive the equilibrium of the centralized governance sub-game, it is instructive to consider the entrepreneur’s incentives to grow her network. Every period, new users arrive to potentially join the network. For the network to grow, joining the network has to be weakly beneficial for a newly arriving user. That is, joining the network has to yield at least utility equal to 0. Instead of growing the network, the entrepreneur can exploit the existing users. Given that existing users are locked into the network and have an outside option that is valued at −u < 0, the entrepreneur can potentially achieve a higher level of revenue when focusing on extracting additional revenue from existing users. To quantify the revenue that an entrepreneur generates when she decides to exploit the users in her network, consider some period t. The amount of existing users at the start of the period is equal to μt−1. If she exploits the existing users forever, the present value of the stream of her discounted future revenue equals the point at which the entrepreneur is indifferent between growing the network one last
time and exploiting the existing users in her network will be crucial for the analysis of
the equilibrium. I denote this point of indifference by ¯μ. It is defined as the solution to the following equation: 
1 − δ ψ(¯μ, −(1 − δ)u) = ψ(g(¯μ), δu) + δ
1 − δ ψ(g(¯μ), −(1 − δ)u)

It is exactly at the network size ¯μ where the entrepreneur is indifferent between growing the network one last time and then exploiting the users in the future, and exploiting the users right away. It highlights the trade-off between exploiting the locked-in effect of a smaller mass μt−1 of users starting today, or, growing the network at the cost of providing utility δu to the users to then exploit a larger network with g(μt−1) users starting tomorrow.

The key feature is the idea, that user growth will slow down over time. For example, if the overall pool of potential users is limited and a large amount of users has already
joined the network, user growth necessarily slows down mechanically over time.

## Strategies

#### Definition 1 (Grow-then-exploit strategy) 

The entrepreneur’s strategy has three distinct parts. If g(μt−1) < ¯μ, the entrepreneur will
grow the network again in the next period, as g(μt−1) = μt < ¯μ. Thus, the entrepreneur sets user utility equal to ˆut = 0 and the users are willing to join the network. Note that in
these growth periods, the entrepreneur has basically regained commitment to not abuse
the locked-in effect of the users. The entrepreneur refrains from exploiting the locked-in
effect of the existing users in the network with the aim to grow the network larger.

## Definition 2 (Join-if-compensated strategy) 

==The users’ strategies obey the following rationale: when they newly arrive at the network, they do not suffer from a locked-in effect. They observe the network size and if
g(μt−1) < ¯μ, anticipate that the entrepreneur will grow the network further in the future, such that it is optimal for them to join the network if ˆut ≥ 0. If μt−1 < ¯μ and ¯μ ≤ g(μt−1),
they know that the entrepreneur will grow the network just one last time. As such, they require a level of utility ˆut ≥ δu to join the network. If they are already locked into the
network, they will remain in the network if ˆut ≥ −(1 − δ)u, as this implies that the discounted value of their futu e utility is at least equal to the value of their outside option −u

Naturally, as a next step, I formally establish that these strategies constitute a sub-
game perfect Nash equilibrium:

**Proposition 1** Suppose that the network is sufficiently profitable at size ¯μ to ensure utility level δu to its users, i.e. inequality II.4 is satisfied. ==Then, there is a sub-game
perfect Nash equilibrium in which the entrepreneur plays according to the grow-then-exploit strategy and the users play the join-if-compensated strategy.

==The entrepreneur’s main issue in the network with centralized governance is her lack of commitment to not abusing the locked-in effect of the user.

## II.B Decentralized Governance

The equilibrium highlights that decentralized governance is an effective commitment tool
for the entrepreneur. ==In contrast to centralized governance, the users can be certain that
their locked-in effect will not be exploited by the entrepreneur. 

==Thus, new users will continue to join the network every period. However, for the entrepreneur, this commitment comes at a substantial cost: she shares half the revenues of the network with her users.

Nonetheless, it is necessary for her to share revenue with her users. If she would not share
any revenue, the users would subsequently vote to stop the monetization of the network.
As a result, the entrepreneur would not receive any revenue. ==Therefore, sharing revenue
in a decentralized implementation of the network is necessary, as it aligns the incentives
of the entrepreneur and the incentives of the network’s users.==

==One potential point of contention in decentralized governance could be conflicts of
interest between existing and newly arriving users. The users’ utility function equals V (μt) − kπ2t + 1−α μt πtϕ(μt). The share of revenue that each user gets in the network is 1−αμt .

As such, newly arriving users dilute the revenue shares of existing users in the network.
However, note that the users’ per period utility in the equilibrium equals V (μt) + ϕ(μt)2
8kμ2t.

==Since ϕ(μt)μt is non-decreasing by assumption, the equilibrium utility is increasing in μt. Intuitively speaking, the network effects that accompany the entry of new users sufficiently compensate the dilution of the revenue share of existing users. Thus, there is no incentive for existing users to try to prevent entry from newly arriving users to avoid dilution of their revenue shares.

## Optimal Governance

The two preceding sections have solved the sub-games of centralized and decentralized
governance. But the main question remains: which form of governance the entrepreneur
should choose when she creates her network?

==However, a complete comparison between the entrepreneur’s revenue in centralized and decentralized governance remains. That is, what is the optimal mode of governance for any arbitrary size of the locked-in effect? To answer this question, I start by considering the opposite extreme, namely when the locked-in effect is very small. Then, I move to locked-in effects of arbitrary size.

## II.D Welfare

==Finally, I want to address the welfare implications of the governance decision. In particular: When does decentralization improve welfare?

**Pareto efficiency.** It turns out that the analysis that has been conducted so far
is sufficient to compare the modes of governance in terms of Pareto efficiency.

==First, note that users in the centralized implementation of the network are always indifferent between joining the network and their outside option ex-ante.  Thus, their equilibrium utility is 0.

==In contrast, users receive strictly positive utility in the decentralized implementation of the network. Ergo, users always prefer decentralized governance. For the entrepreneur, proposition 3 has established that she prefers decentralization if and only if the size of
the locked in effect u is larger than the threshold u∗∗. Therefore, the following corollary
can be established:

==**Corollary 2** Decentralized governance of the network is a Pareto improvement over centralized governance if and only if the size of the locked-in effect u is larger than u**

## Discussion

## III.A Airdrops: Decentralizing at a Later Time

The main concern is once again commitment, that is, the entrepreneur is unable to commit that she will
decentralize the network in the future. Instead, it has to be sequentially optimal for her to decentralize the network. Intuitively, there is a tension between delaying decentralization for a while and delaying it for too long, when staying in control and exploiting the users becomes too tempting.

## IV Conclusion

Before concluding, I want to briefly discuss some further points of interest. First, one might wonder if this model implies that an established network such as Google
or Facebook should decentralize their business through a blockchain. Such a conclusion cannot be drawn from this model, as these networks have already established a large
amount of users (e.g. Facebook already has around 3 billion users20). ==As such, the value of extracting additional revenues from existing users that are already locked-in may outweigh the value of commitment that is offered by a decentralized implementation. **In contrast, the model provides insights on the optimal governance of newly founded networks.**

==To summarize, this paper provides an answer to a question that is frequently raised when it comes to the topic of blockchain and cryptocurrencies: Why would anybody use
it? As the main result, I showed that (i) an entrepreneur prefers to decentralize her network and (ii) decentralization is a Pareto improvement, if and only if the locked-in effect is sufficiently large. To broaden our understanding of further implications of decentralization, I believe that further research is needed, especially regarding the economics
of decentralized governance and competition between centralized and decentralized networks.