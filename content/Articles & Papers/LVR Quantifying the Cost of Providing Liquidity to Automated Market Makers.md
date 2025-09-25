Source: https://a16zcrypto.com/posts/article/lvr-quantifying-the-cost-of-providing-liquidity-to-automated-market-makers/

There are two types of participants in an automated market maker (AMM): traders, who exchange one of the AMM’s tokens for another (as a running example, say ETH and USDC); and ==liquidity providers (LPs), who provide tokens to the AMM in the first place, generally in exchange for a share of the trading fees.

==When does it make economic sense to participate as an LP?== When does the benefit exceed the cost? The benefit side of this comparison is easy to understand: revenue from shared trading fees, plus in some cases additional token rewards. ==This post summarizes a new way to think about the cost side, which centers around a quantity that we call LVR (“loss versus rebalancing,” pronounced “lever”).== We’ll say more about LVR and its implications for LPs and AMM designers below, but first let’s review how AMMs behave as market prices evolve.

### Arbitrage and adverse selection in AMMs

==Liquidity providers in automated market makers suffer losses from [adverse selection](https://en.wikipedia.org/wiki/Adverse_selection), which is part of the price of doing business as an LP.== ==By virtue of offering to take either side (buy or sell)== of a trade at a given price, every LP in an AMM runs the risk of taking the wrong side of a trade by a trader with better or more recent information about a token’s market price. For example, if the price of ETH on the open market suddenly increases, a speedy arbitrageur may buy ETH from an AMM (at a stale, lower price) and resell it on a centralized exchange like Binance (at the new, higher market price), pocketing a profit. ==Because there are only two types of participants in an AMM, profit to traders must correspond to losses to LPs.==

To reason about the cost of liquidity provision, and thereby inform both LP participation decisions and AMM design, let’s start with the simpler question of assessing the past. Suppose we just finished supplying liquidity to an ETH-USDC AMM. In hindsight, was this a good idea? Suppose we deposited 1 ETH and 1000 USDC into the AMM, and upon withdrawal received 0.5 ETH and 2000 USDC. (In most AMMs, what you get back may differ from what you put in, depending on how the market price of the AMM’s tokens have moved in the meantime.) Suppose further that it was a really good month for ETH, with the market price jumping from $1000 to $4000 over the course of the month. In this case, the decision to provide liquidity would have doubled your money from a $2000-value portfolio on deposit to a $4000-value one upon withdrawal.

This may seem like a great move, but this is sloppy thinking. ==Providing liquidity to the AMM involved holding some amount of ETH for the month. Given that the price of ETH quadrupled during the month, pretty much _any_ strategy that involved holding some ETH would look pretty great in hindsight.==

==The sharper and more important question is: how did the specific strategy of AMM liquidity provision compare to all the other ways that you could have “gone long ETH”?== Equivalently, how does the decision look after setting aside the profits (or loss) resulting purely from the evolution of the price of ETH?

==The simplest way to bet on an increasing ETH price is to — wait for it — buy some ETH and hold it.== And in our running example, that strategy would have resulted in an end-of-month portfolio (still 1 ETH and USDC 1000, but now with an ETH price of $4000) worth $5000, a full $1000 more than what was withdrawn from the AMM. ==This gap of $1000 is an example of what is often referred to as “impermanent loss” or “divergence loss.”==

### The problem with impermanent loss

While impermanent loss does at least compare LP profits to what could have been made under a reference strategy, it fails to isolate the adverse selection costs faced by AMM LPs. To see this, let’s change our running example so that the price of ETH is $1000 at both the beginning and the end of the month. ==In this case, in most AMMs, you’ll get back the same mix of tokens as in your initial deposit (holding, in effect), which means that the impermanent loss will be zero. ==This is true whether the ETH price stayed constant all month or jumped around before returning to $1000.

The independence of impermanent loss on the price trajectory (other than its initial and final values) should strike you as fishy. For example, we’ve already discussed arbitrage on AMMs, whereby traders profit at the expense of LPs. It would seem, then, that LP costs should be increasing in the number of opportunities for AMM arbitrage. And the frequency of such opportunities is very different if the price stays the same (no arbitrage) versus if it jumps around a lot (lots of arbitrage).

### Introducing LVR

We propose a new way to think about the costs suffered by the LPs of an AMM, which centers around a quantity that we call LVR (“loss versus rebalancing,” pronounced “lever”). LVR can be interpreted in several different ways (which is generally a good sign for a definition). The one we highlight here is as an alternative to impermanent loss that uses a more appropriate and nuanced reference approach, rebalancing. (Another interpretation of LVR is as the loss to an LP after appropriately hedging its market exposure to the price of ETH. Still another is as the best-case profits that could be made by arbitrageurs.)

Rebalancing is AMM-specific, so let’s introduce it in the canonical special case of the constant-product market maker (CPMM) that was made famous by Uniswap (v1 and v2). The special case of a two-token CPMM — also known as an “x*y=k” curve — maintains reserves of two tokens, say x units of ETH and y units of USDC. The spot price — the price of an infinitesimal trade — is defined as y/x, which has the effect of equalizing the market value of the two reserves. (In this sense, such an AMM effectively carries out a rebalancing strategy.) In practice, this spot price is defined implicitly by allowing only trades that leave that product x*y of the two token quantities invariant.

LVR can be defined on a trade-by-trade basis, so let’s look at a single trade. Consider a CPMM with 1 ETH and 1000 USDC, and suppose that the market price of ETH jumps suddenly from $1000 to $4000. We expect some arbitrageur to buy 0.5 ETH from the CPMM at an effective per-ETH price of 2000 USDC, thereby keeping x*y constant while moving the spot price to 2000/0.5=4000 USDC/ETH (and equalizing the market value of the two reserves at $2000).

Here’s the reference rebalancing, starting from the same initial portfolio of 1 ETH and 1000 USDC: copy the CPMM’s trade (meaning sell 0.5 ETH, just like the CPMM) but _execute it at the current market price of $4000_ (e.g., on Binance). Because this alternative strategy results in a portfolio worth $1000 more than that of the CPMM ($5000 vs. $4000), we say that the LVR of this trade is $1000.

Continuing the example, suppose the price of ETH suddenly jumps back down to $1000. The CPMM will return (post-arbitrage) right back to its original state of 1 ETH and 1000 USDC, in effect buying back the same 0.5 ETH for the same per-ETH price of 2000 USDC. The rebalancing reference strategy copies the trade (buying 0.5 ETH) but executes it at the market price ($1000). The market value of the rebalancing strategy’s portfolio is now $1500 more than that of the CPMM ($3500 vs. $2000), with the second trade contributing an additional $500 to the cumulative LVR.

This calculation is intuitively satisfying: unlike impermanent loss, LVR depends on the price trajectory (LVR is 0 if the price stays constant but not if it jumps up and then back down) and accumulates trade-by-trade (as every trade might be on the wrong side, leading to additional adverse selection costs).

### LVR: A general definition

After seeing the preceding example, the general definition of LVR should not surprise you: given an arbitrary sequence of trades on an arbitrary AMM, the LVR of the sequence is the sum of the losses incurred by executing the trades via the AMM rather than on the open market. Each term of this sum is of the form _a(p – q)_, where _a_ denotes the quantity of ETH sold in the trade (e.g., in our first and second trades above, 0.5 and -0.5), _p_ denotes the market price at that time (above, 4000 and 1000), and _q_ denotes the per-unit price of the AMM trade (above, 2000 and 2000).

A variant of the definition is to rebalance periodically (e.g., hourly or daily) rather than trade-by-trade, in effect batching transactions and copying the net trade of each batch. This variant can simplify the empirical analysis of LVR, and is arguably more natural in the hedging interpretation of LVR mentioned above.

### Reasoning about the past …

LVR isolates the adverse selection costs borne by an LP. Was a decision to provide liquidity a good idea in hindsight? To first order, this question boils down to whether the fees collected exceeded the LVR suffered, and thus is typically easy to answer using publicly available data (e.g., the on-chain record of an AMM’s trades and historical price data on Binance).

### … and about the future

To reason about future rather than past LP decisions, we cannot rely directly on data and must adopt some mathematical model of how prices might evolve. (Remember that LVR depends crucially on the price trajectory.) We could use a variety of different models, but perhaps the most natural starting point is the standard [Black-Scholes model](https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model) from finance, with the price of ETH evolving continuously according to a geometric Brownian motion (with respect to a suitable martingale measure).

If you’re unfamiliar with this model, the key thing to know is that it has essentially only one important parameter, the price volatility σ. If σ=0 the price stays constant, while if σ is large, the price jumps around wildly. If you’re thinking of returns as a random walk, σ can be loosely interpreted as the typical length of a step.

LVR can be characterized in this model precisely. Because LVR accumulates trade-by-trade, and because this is a continuous-time model with trades happening all the time, LVR accumulates as an integral of the instantaneous LVR. Instantaneous LVR turns out to scale quadratically with σ and the current market price, and linearly with the marginal liquidity of the AMM at that price.

This mathematical characterization may sound slightly intimidating, but many of the common AMMs are so simple that LVR is given by an elementary closed-form formula.

For example, with a CPMM, the instantaneous LVR, when normalized by the CPMM’s market value, turns out to be exactly σ²/8. Plugging in numbers, if a Uniswap v2 ETH-USDC pool has a daily volatility of 5%, then according to our model LPs lose 3.125 bps to LVR every day (for a roughly 11% loss annually). Will fee revenue compensate for this loss? The answer depends on the trading fees and trading volume. For example, if this AMM charges a fixed 30 bps trading fee, then LPs will break even provided the daily volume is roughly 10.4% of the AMM’s assets. Had the daily volatility been 10%, the required volume would have been four times as high. (Remember that LVR scales quadratically with σ.)

### Implications for AMM designers

LVR is important not only for potential liquidity providers but also for AMM designers. An AMM can be successful only if it has happy LPs, which means that fee revenues need to scale with LVR.

One implication of our work is that, because LVR depends on volatility and fee revenue on trading volume, AMMs should consider dynamic fees that adjust with volume, volatility, or empirically observed LVR. A second is that AMM designers should investigate methods for minimizing LVR (and hence the LP incentives required), for example by incorporating a high-quality pricing oracle to quote closer-to-market prices. Next-generation AMMs are already exploring these and related ideas, and we can’t wait to see how it plays out.

***

For deeper technical analysis and discussion of LVR, please see our original paper, “[Automated Market Making and Loss-Versus-Rebalancing](https://arxiv.org/abs/2208.06046).” And [here](https://www.youtube.com/watch?v=q5vyJJb-Uyw&list=PLEGCF-WLh2RK2Cym4ZeEWDOSlmirXWtZO&index=33) is Tim Roughgarden giving a talk on LVR at [SBC’22](https://a16zcrypto.com/sbc-22-science-of-blockchain-conference-field-notes/).

***

[Jason Milionis](https://jasonmili.github.io/) is a Ph.D. student in the Computer Science Department at Columbia University, where he is advised by Christos Papadimitriou and Tim Roughgarden. He is broadly interested in Game Theory, especially in conjunction with Machine Learning, and Decentralized Finance (DeFi).

[Ciamac Moallemi](https://moallemi.com/ciamac/) is the William von Mueffling Professor of Business in the [Decision, Risk, and Operations Division](https://www.gsb.columbia.edu/faculty-research/divisions/decision-risk-operations) of the [Graduate School of Business](http://www.gsb.columbia.edu/) at [Columbia University](http://www.columbia.edu/).

[Tim Roughgarden](http://timroughgarden.org/) is a Professor of Computer Science and a member of the Data Science Institute at Columbia University, and Head of Research at [a16z crypto](https://a16zcrypto.com/).

[Anthony Lee Zhang](https://anthonyleezhang.github.io/) is an assistant professor of finance at the University of Chicago Booth School of Business. His research covers topics such as banking and financial intermediation, household finance, money markets, housing markets, and crypto/DeFi.

Editor: Tim Sullivan [@tim_org](https://twitter.com/Tim_Org)