#Metafactory 
#article 
#authors [[Justin Goro]]
https://medium.com/coinmonks/token-bonding-curves-explained-7a9332198e0e
See also: [[quartz/notes_ignore/MetaFactory Rearchitecting Culture for the Digital Metaverse]]

See [[quartz/notes_ignore/continuous token bonding curve]] for definition

#fleetingnotes 

No need to go through an exchange. Just need a token bonding smart contract with buy and sell functionality. Don't need Uniswap. 

Uniswap's product: socks, was separate from their token, which creates opportunities for speculation. MF's products are also the token, the NFT, so no speculation. Meaning, if you sell the NFT, you also sell the jacket.  

#quotes 
the continuous token bonding curve. **It’s a cleverly designed contract that creates its own market for the token without relying on exchanges.**

A bonding curve contract (bonding contract from now on) is one that issues its own tokens through buy and sell functions. To buy tokens, you send ether to the buy function which calculates the average price of the token in ether terms and issues you with the correct amount. The sell function works in reverse: first you provide the bonding contract with permission to take the amount of tokens you want to sell (ERC20.approve() ) and then you trigger the function to take those tokens from you. The contract will calculate the current average selling price and will send you the correct amount of ether.

Scarcity
The contract places no hard limit on the number of tokens available. Instead there are 2 limiting factors:
the amount of ether in the world. If the price is 1 eth per token then you can’t buy more tokens than there is ether.
The price curve. This is where bonding contracts get interesting.

The actual price per token increases as the number of tokens issued increase. For instance, a very simple version of the contract specifies that the price in eth per token is equal to the number of tokens currently in existence. More specifically, to sell a token, the price is equal to the number of current tokens but to buy the price is equal to the number that will exist after you purchase. For instance, if there are 10 tokens in existence then selling 1 will earn you 10 eth. If you want to buy the 11th token, you’ll pay 11eth for it and so on.

Buying slides you up the price curve and selling slides you back down. In the example above, if there are 9 tokens in existence then we know that buying another token will cost 10eth. However, selling a token into the contract will earn us 9eth. If I sell another token, it will earn me 8eth. I could sell another 3 and be down to 5eth. But then if I buy, it will push the price up to 6eth again. So the price adjusts dynamically.

In reality, a person is not going to sell 1 token at a time. Instead they will sell in batches to save on gas costs.

For illustration, suppose someone bought 1 token and then another person bought 1 token, then a third person bought a token and finally a fourth person bought a token. The contract would have 1+2+3+4= 10eth. Now all 4 people transfer their tokens to you and you want to sell them all at once for the highest price: 4eth. You’d be expecting 16eth in total but the contract only has 10eth to pay.

If you chose option 2, you’d be underpaid. For instance, if you sold 1 at a time, we know you’d get 27 so why should you be penalized for selling them all at once? The correct answer is of course option 3.

Using, calculus, the bonding contract can allow buying and selling of arbitrarily large quantities of tokens without spending more gas AND it ensures that the contract can always meet its ether obligations.

Now that we know how it conceptually works, we’ll explore some of the big implications of the bonding contract that make it so much cooler than a traditional ICO. 
	- If the buy and sell functions follow the same curve then ether can never be withdrawn from the contract. It has to remain 100% fully reserved. This means that project creators have to focus on making their token popular which aligns incentives between creators and users. They can’t launch an exit scam. 
	- Just as so many ICOs promise, the bonding curve actually guarantees that early buyers will be able to sell at a profit, provided more buyers arrive. It naturally rewards early adopters and encourages word of mouth marketing.
	- Token buyers have an instant market, meaning that they don’t have to wait for the project creators to register with all the major exchanges. However, secondary exchanges will still help the ecosystem, especially when a spread between buy and sell functions exist. The price of the token is also 100% transparent at all times.
	- Accountability: Vitalik Buterin has suggested a DAICO as a way for ICOs to be governed according to a DAO which sets burn rates and gives the community the ability to freeze operations. The bonding curve model ensures that a spooked community can instantly hold the developers to account by selling all their tokens, driving the price to zero. At that point, even if there is a spread between buy and sell, the market has effectively dried up for the team.