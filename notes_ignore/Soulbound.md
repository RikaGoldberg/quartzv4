---
title: "Soulbound"
date: 2023-06-18
tags:
- archive
---
https://vitalik.ca/general/2022/01/26/soulbound.html

#summary 
Vitalik makes the analogy of soulbound game items, that are really hard to get and you can't easily transfer them, to NFTs and POAPs that should be hard to attain and not transferrable. Also, privacy is important so we don't have in-group/out-group behavior and group think.

#quotes 
* Most very powerful items in the game are soulbound, and typically require completing a complicated quest or killing a very powerful monster, usually with the help of anywhere from four to thirty nine other players. Hence, in order to get your character anywhere close to having the best weapons and armor, you have no choice but to participate in killing some of these extremely difficult monsters yourself.

* The purpose of the mechanic is fairly clear: it keeps the game challenging and interesting, by making sure that to get the best items you have to actually go and do the hard thing and figure out how to kill the dragon. You can't just go kill boars ten hours a day for a year, get thousands of gold, and buy the epic magic armor from other players who killed the dragon for you.

* But what exactly are these NFTs signaling? Certainly, one part of the answer is some kind of skill in acquiring NFTs and knowing which NFTs to acquire. But because NFTs are tradeable items, another big part of the answer inevitably becomes that NFTs are about signaling wealth.

* **This is a topic I have written about ad nauseam (see [1] [2] [3] [4] [5]), but it continues to be worth repeating: there are very bad things that can easily happen to governance mechanisms if governance power is easily transferable. This is true for two primary types of reasons:**

If the goal is for governance power to be widely distributed, then transferability is counterproductive as concentrated interests are more likely to buy the governance rights up from everyone else.
If the goal is for governance power to go to the competent, then transferability is counterproductive because nothing stops the governance rights from being bought up by the determined but incompetent.

* If you take the proverb that "those who most want to rule people are those least suited to do it" seriously, then you should be suspicious of transferability, precisely because transferability makes governance power flow away from the meek who are most likely to provide valuable input to governance and toward the power-hungry who are most likely to cause problems.

* What if DAO governance of blockchain protocols could somehow make governance power conditional on participation? Once again, a large and fruitful design space opens up that today is difficult to access.

* To solve this problem, the POAP team is suggesting that developers who care about non-transferability implement checks on their own: they could check on-chain if the current owner is the same address as the original owner, and they could add more sophisticated checks over time if deemed necessary. This is, for now, a more future-proof approach.

* **Perhaps the one NFT that is the most robustly non-transferable today is the proof-of-humanity attestation.** Theoretically, anyone can create a proof-of-humanity profile with a smart contract account that has transferable ownership, and then sell that account. But the proof-of-humanity protocol has a revocation feature that allows the original owner to make a video asking for a profile to be removed, and a Kleros court decides whether or not the video was from the same person as the original creator. Once the profile is successfully removed, they can re-apply to make a new profile. Hence, if you buy someone else's proof-of-humanity profile, your possession can be very quickly taken away from you, making transfers of ownership non-viable. Proof-of-humanity profiles are de-facto soulbound, and infrastructure built on top of them could allow for on-chain items in general to be soulbound to particular humans.

* A common criticism of the "web3" space as it exists today is how money-oriented everything is. People celebrate the ownership, and outright waste, of large amounts of wealth, and this limits the appeal and the long-term sustainability of the culture that emerges around these items. There are of course important benefits that even financialized NFTs can provide, such as funding artists and charities that would otherwise go unrecognized. However, there are limits to that approach, and a lot of underexplored opportunity in trying to go beyond financialization. Making more items in the crypto space "soulbound" can be one path toward an alternative, where NFTs can represent much more of who you are and not just what you can afford.


* However, there are technical challenges to doing this, and an uneasy "interface" between the desire to limit or prevent transfers and a blockchain ecosystem where so far all of the standards are designed around maximum transferability. **Attaching items to "identity objects" that users are either unable (as with proof-of-humanity profiles) or unwilling (as with ENS names) to trade away seems like the most promising path, but challenges remain in making this easy-to-use, private and secure. We need more effort on thinking through and solving these challenges. If we can, this opens a much wider door to blockchains being at the center of ecosystems that are collaborative and fun, and not just about money.**

*  If, one day in the future, being vaccinated becomes a POAP, one of the worst things we could do would be to create a system where the POAP is automatically advertised for everyone to see and everyone has no choice but to let their medical decision be influenced by what would look cool in their particular social circle. **Privacy being a core part of the design can avoid these bad outcomes and increase the chance that we create something great.**
