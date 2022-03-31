#reddit
#authors [[vitalik buterin]]
https://np.reddit.com/r/ethereum/comments/ryk3it/my_first_impressions_of_web3/hrrz15r/

#summary 
Vitalik responds to Moxie's critique that blockchains aren't decentralized and require servers to run, by saying that a light client is being built to make API calls to the blockchain more decentralized through cryptography and by increasing the number of companies who provide the infrastructure. 

#quotes 
* The word "server" imo is not very useful in the blockchain context; it combines together a bundle of concepts that are best treated separately. Particularly, think of the following ways that a user could connect to the blockchain:

* Currently, only (1), (2), (7) and (8) are feasible, and (7) and (8) are too expensive for most users

* 1. Use a Binance account.
2. Run a piece of code that asks the Infura API endpoint what the blockchain state is, trust the answer. However, keys are still kept locally; the code signs transactions locally and sends them to the Infura API endpoint to be re-broadcasted.
3. **Same as (2), but the code also runs a light client to verify the signatures on the block headers and uses Merkle proofs to verify individual account and storage data.**
4. **Same as (3), but the code talks to N different API endpoints run by N different companies, so only 1 of them need to be providing honest answers for the connection to be reliable.**
5. **Same as (4), but instead of pre-specifying N API endpoints the code connects directly to a p2p network**
6. **Same as (5), but the code also does data availability sampling and accepts fraud proofs, so it can detect and refuse to accept blocks that are invalid.**
7. Run a fully verifying node.
8. Run a fully verifying node that also participates in mining/staking.

* As for my theory about "why this hasn't happened yet", I would say a lot of it comes down to limited technical resources and funding

* The Ethereum ecosystem did not have that much resources up until ~4 years ago.  Of course, ~4 years ago, the ecosystem did start to have a lot of resources, but new projects are slow to ramp up, and the centralized workarounds have had years of head start.

* The Ethereum ecosystem did not have that much resources up until ~4 years ago.  Of course, ~4 years ago, the ecosystem did start to have a lot of resources, but new projects are slow to ramp up, and the centralized workarounds have had years of head start.

* **One thing that makes the ramp up even slower is the chain of dependencies: in order to have light clients, we need to have a light client friendly chain, which is a deep change to the protocol,** and so the only realistic opportunity to implement it is the switch to PoS, and we're only now at the point where we have the PoS, and full integration with the merge is coming soon.

* So I think the properly authenticated decentralized blockchain world is coming, and is much closer to being here than many people think. Of course, it's always possible that all this tech will get built and many people will not care. But I'm more optimistic.

*  **Decentralized options that users reject today (eg. running a full node) really are quite difficult today, so it's understandable that users are sticking to the more centralized options that at least they can easily use.** None of the proposals outlined here are anywhere remotely as difficult, and even running a full node itself will get easier and cheaper over time as ideas like statelessness and history expiry come into play. So I see no technical reason why the future needs to look like the status quo today.