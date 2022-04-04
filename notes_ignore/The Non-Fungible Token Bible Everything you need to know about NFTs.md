#article 
#authors [[devin finzer]]
#institutions [[opensea]]
https://opensea.io/blog/guides/non-fungible-tokens/

#notes 

[[content/content/Takens Theorem is a good Twitter account to follow for crypto data visuals]]

[[content/content/It is a myth that scarcity is the only thing that drives demand for NFTs]]

#quotes 
Non-fungible tokens (NFTs) are unique, digital items with blockchain-managed ownership. Examples include collectibles, game items, digital art, event tickets, domain names, and even ownership records for physical assets.

The NFT ecosystem is a tight-knit group of incredible innovators: everyone from enthusiasts to developers to gamers to entrepreneurs to artists. 

By representing non-fungible tokens on public blockchains, developers can build common, reusable, inheritable standards relevant to all non-fungible tokens. These include such basic primitives as ownership, transfer, and simple access control. Additional standards (specifications for how to display an NFT, for example) can be layered on top for rich display inside of applications

Composables, led by the ERC-998 standard, provide a template by which NFTs can own both non-fungible and fungible assets. There have only been several composable NFTs deployed on mainnet, but we think there are incredibly exciting opportunities to put them to use!

…a cryptokitty may own a scratching post and a feeding dish; the dish may contain some amount of fungible “chow” tokens. If I sell the cryptokitty, I sell all of the belongings of the cryptokitty.

The first Ethereum-based NFT experiment was CryptoPunks, which consisted of 10,000 unique collectible punks, each of which has a set of unique characteristics. Built by Larva Labs, CryptoPunks featured an on-chain marketplace that could be used with wallets like MetaMask, lowering the barrier to entry to interact with NFTs

“Generation 0” cats were auctioned off in a declining-price Dutch auction, and new cats could also be sold on a secondary market.

Speculative mechanics
The breeding and trading mechanics of CryptoKitties led to a clear path to profit: buy up a couple of cats, breed them to make a rarer cat, flip the cat, repeat (or simply buy up a rare cat and hope that someone will come along and buy it). This fueled the growth of a breeder community: users who were dedicated to breeding and flipping rare cats. As long as a new set of users come in and play the games, prices would rise.

Viral story
Another piece of CryptoKitties’ success was the story. CryptoKitties were adorable, shareable, and fun — and the idea of buying a $1,000 digital cat was so absurd that it made a great news story. Additionally, the smart contract’s overeager users “broke Ethereum”, which made for a story in and of itself. Since Ethereum can only process a limited number of transactions at a time (about 15 transactions/second), higher throughput on the network led to a growing pending transaction pool and increased gas prices.

These factors led to the “CryptoKitty bubble”: new demand entering the CryptoKitty world, prices rising, and rising prices bringing in new demand. Of course, all bubbles must eventually pop. In early December, average kitty prices started dropping and volume declined. Many realized that the CryptoKitties gameplay, which was primitive relative to “real games”, wouldn’t retain a wider audience beyond speculators. Once the novelty wore off, the market suffered. Today, CryptoKitties does around 50 ETH of volume per week.

This period also saw the emergence of “hot potato” games. If you already know what a “hot potato” game is, you’re a true NFT OG. In January 2018, a game called CryptoCelebrities launched. The mechanic was simple. First, buy a collectible celebrity NFT. Immediately, the celebrity becomes purchasable (or “snatchable”) for a higher price, some increment of the previous price. When someone buys your celebrity, you make the difference between your purchase price and the new purchase price (minus a developer fee). As long as there’s someone willing to buy your celebrity, you’ll profit. However, if you’re caught as the last one holding the celebrity, you’ll be in for a loss.

The CryptoCelebrity mechanic turned out to be incredibly viral due to this speculative mechanic, with celebrities like Donald Trump selling for astronomically high prices (123 ETH, or $137k at the time). While the CryptoCelebrity game likely harmed the space overall, we actually think experimentation with pricing and auction mechanics is an exciting piece of the design space for NFTs.

These years were not without casualties. Nearly all of the hot potato games of early 2018 are now dead (though the assets still live for viewing on OpenSea). Fascinatingly, some of these projects were brought back to life by community members. Both CryptoAssault and Etheremon (now Ethermon) have been revived by their community. There was also a failed attempt to bring CryptoCelebrities back to life through a celebrity breeding game.

Non-fungible token myths
Now that we’ve given an overview of the space, let’s talk about misconceptions.

Scarcity alone drives demand

In the early days of the non-fungible token ecosystem, there was a belief that users would care about the provable scarcity of NFTs, and that they’d rush to buy NFTs simply because they were on a blockchain. Instead, we think demand is driven by more traditional forces: utility and provenance. Utility is the obvious one: I’m willing to buy an NFT ticket because it lets me into a conference, I’m more willing to buy a piece of art if I can show it off in a virtual world, and I’m willing to buy an item if it gives me special abilities in a game. The concept of provenance encapsulates the story behind an NFT.  Where did it come from? Who’s owned it in the past? A**s the space matures, the stories of interesting NFTs grow more complex and start to meaningfully impact a token’s value.**

Sale Mechanisms
NFTs are currently sold primarily for ETH on decentralized exchanges. Surprisingly little trading happens in stablecoins like DAI or USDC, likely due to the friction of acquiring stablecoins. Dutch auctions and fixed-price sales are frequently used for selling lower-ticket items, while English (eBay-style) auctions are a frequent choice for larger-ticket items, like ultra-valuable Gods Unchained cards or legendary game items. Bundles are also a very popular sale mechanism, with the percentage of bundle sales steadily growing to 20% in December of this year.

Takens Theorem, an anonymous but very friendly Twitter account with some fantastic analyses of the blockchain ecosystem (highly recommended follow!), conducted an analysis of the overlap between various NFT communities. The above is a network diagram based on raw data from about 400,000 addresses on OpenSea. On the outer ring, each network is made up of addresses that uniquely own a single type of NFT. The number of nodes pictured represents the number of nodes in the actual data — for example, thousands of addresses only own CryptoKitties. Nodes in these graphs are sized by how many they own.

