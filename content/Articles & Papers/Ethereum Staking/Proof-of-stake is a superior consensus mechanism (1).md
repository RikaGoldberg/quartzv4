#saplings 

Vitalik explains in his essay [Why proof of stake](https://vitalik.ca/general/2020/11/06/pos2020.html) that proof-of-stake is more secure and more decentralized than proof of work. 

(1) Proof-of-stake systems are more expensive to attack. In summary, pow systems are mostly hardware costs whereas pos systems are mostly capital costs.

- Vitalik ***theorizes*** a small calculation to show that **it's more expensive to be a malicious actor on a proof-of-stake network than on a proof-of-work network.** 
	- The total cost of attack on a GPU-based proof of work system is $.26 and on an ASIC pow system it's $486.75
		- From Ethereum.org, [Ethereum was mostly mined using GPUs rather than ASICs, which kept the cost down (although had Ethereum stayed on proof-of-work, ASIC mining may have become more popular)](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/pos-vs-pow/)
		- Per Vitalik, GPUs are relatively inexpensive to rent
- Attacks in a proof-of-stake system are much easier to recover from than in a proof-of-work system. 
	- In a **pow system**, an **attacker can make a chain permanently useless with a spawn camping attack**. Honest miners will drop out. If community implements a hard fork, miners on the attacked fork would be "bricked" making them useless.
	 - On the other hand, a proof-of-work system has a built in lashing mechanism where only the bad actor, and no one else on the network, has their stake destroyed. And for or harder-to-detect attacks such as a 51% coalition censoring nodes on the network, the community can coordinate a minority user-activated soft that destroys the attacker's stake
(2) *Proof-of-stake systems are more decentralized* ***iffy***
- PoW is a hardware arms race that tends to price out individuals and small entities. If Ethereum stayed on proof of stake, it would have probably started to use ASIC mining
- *Interesting because proof-of-stake algo I believe favors those with more locked capital?*

Other benefits:
Electricity consumption issue was definitely big in the news and a big deal. 