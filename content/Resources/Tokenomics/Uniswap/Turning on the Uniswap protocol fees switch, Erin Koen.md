Source: https://erin-koen.medium.com/turning-on-the-uniswap-protocol-fee-switch-3642a042d1ba

### Summary
Deciding whether the Uniswap protocol should collect a fee is a contentious topic. Turning on the fee switch would direct some LP fees to the DAO. Erin's concern was around the design - the practical way in which this would happen. He raises a good point about an influx of governance proposals to collect fees. But also would LPs get pissed if their economics is toyed with? 

### Notes

As I write here: [[Whereas businesses are meant to be maximally extractive, protocols should be minimally extractive]], protocols should in theory not collect fees because they should be minimally extractive. Its the businesses on top of the protocol who should collect fees. And now potentially the DAO!

### Quotes
Charging a protocol-level fee would directly impact liquidity provider economics. What effects would that have? Purposefully excluded from the proposal were questions about what the protocol DAO should do with its new revenue stream.

“Turning on the fee switch” is phrase has been kicking around since Uniswap’s first deployment, and while the idea is simple in theory — the protocol should get paid a little for each trade it facilitates — in implementation it’s more complex than just pressing a button

Liquidity Providers deposit both tokens from the pair into the pool contract, allowing Swappers to exchange tokens from one side of the pair for tokens of the other. The Swapper pays the fee (in the token they’re selling) for the privilege, and the pool contract is smart enough to divvy the fee up pro rata between all liquidity providers who helped to make the trade happen.

Fees accrue in both of a pool’s tokens (assuming that there are trades in both directions) and are held separately from the liquidity provided to the pool. A Liquidity Provider can claim the fees they’re owed whenever they’d like, and send them wherever they like.

This design is what makes Leighton’s experiment so powerful. Pressing the fee switch button (I guess it is actually that easy) does one thing and one thing only. It changes the breakdown of fees in a particular liquidity pool. Any fees generated for the Protocol will remain totally inaccessible to the DAO without further work or votes. This is what allows us to witness the first-order effects of the fee switch (will Liquidity Providers flee en masse? Will spreads widen beyond repair?) without having to worry about most of the second order effects (What are we going to do with all this money????).

# **Looking Forward**

How do you collect fees from dozens, hundreds or eventually thousands of pools in a scalable manner? Each pool has its own distinct function to call. Assuming that fees would ideally be collected on a regular basis leads to the conclusion the current architecture would require numerous and frequent governance votes to collect fees, which would likely lead to extreme voter fatigue and eventually apathy

Where do the fees go? The `collectProtocol` function allows the caller to specify an address that will receive the collected balances. History has shown that sticking them in the Timelock and letting Governance decide how to spend them is suboptimal. How would these funds be managed transparently and trustlessly?