---
title: "Into the Dataverse"
date: 2023-03-29
tags:
---

Source: https://blog.ceramic.network/into-the-dataverse/

> We think of the [metaverse](/notes/Metaverse.md) as the entirety of all composable and interoperable resources, identities, applications, platforms, services, and protocols that exist in cyberspace.

> Our vision of the [metaverse](/notes/Metaverse.md) will run on the [dataverse](/notes/Dataverse.md): a composable, web-scale data ecosystem—owned by everyone and no one.

> Developers will build interchangeable interfaces and online experiences that directly interact with the [dataverse](/notes/Dataverse.md)and the [composable](/notes/Composability.md) data that lives there. The Dataverse will play arguably the most important role within the [metaverse](/notes/Metaverse.md) a shared, high-performance, always-available graph of all data created and used by all applications.

> Large tech companies will struggle to compete for talent, as the upside potential of going from 0 to 1 on your own (or joining a Web3 rocketship) will far outweigh the draw for working at a company like Amazon. The Metaverse as a whole will outcompete for talent.

> As a public resource, the Dataverse will enable an explosion of shared knowledge and accelerate science and human progress. The original use case for [Internet 1.0](/notes/Web1%20vs%20Web2%20vs%20Web3.md)was sharing scientific databases between California and Massachusetts. Web 3.0 is going to take that idea and supercharge it

> The Dataverse will provide simple, open access to a graph of semantically-defined, structured data that takes the most cutting edge research and allows everyone to build and collaborate on it.

> Identity is inherently multiplayer. This is true not only in the physical world, where it began as a construct enabling human-to-human interactions, but also in the digital world where it’s more important to have a profile on a social media application than it is to have on your personal note-taking application. Identity is a tool for providing context, trust, and efficiency to transactions.

> Less technical and more sustainability related, we’re betting on the fact that strangers on the internet, unified by a [community-owned protocol](/notes/Community%20and%20Web3.md)and its inherent incentives, can effectively organize and create high-impact work with high efficiency. Although this trend has positive indications, it still stands to be seen if these communities can sustain themselves over the long term or if they can stay innovative and keep speed high. The design and implementation of effective digital communities is something we’re keeping a close eye on, but we also believe that a lot of what will make communities successful over the long term has yet to be discovered. 

> Some people have gone full degen into “working for the internet” as a contributor to protocols and [DAOs](/notes/DAOing.md), picking up one-off tasks or engaging in longer contracts. We already have participants in DAOs lobbying in front of congress. DAOs are legally recognized meatspace entities in Wyoming. Digital communities have long been used for OSINT (open-source intelligence), where groups of highly-motivated strangers come together on topic-based platforms such as subreddits or Facebook groups to do things that any single person (or government agency) couldn’t—such as crowdsourcing villains or solving investigations. Wikipedia runs beautifully. These are all things that make me optimistic about how this fluid work and incentive system will evolve over time.

> To get a sense of where Web3 (as opposed to NFTs) will cross into mainstream culture, we should look at where there exist networks of highly-engaged, multiplayer user bases/communities, what it means to be a member of that [brand community](/notes_ignore/brand%20community.md) community, and how people fly their flag. 

> This general purpose data protocol needs to support mutability with fast, decentralized, high-volume transaction processing simply for the fact that there are so many data events occurring all day, every day, in every application. Current blockchain protocols cannot scale to support this level of processing and this is a strong area of differentiation. Data consensus properties, like Ceramic’s, can be treated differently than value consensus properties, like Bitcoin’s.

> Next, it’s important that the system has a way to provide participants with a highly available state that can be trustlessly verified and reconstructed from the underlying event streams. This is critical, because it’s actually what allows developers to build permissionless, composable applications on shared data. The availability of state can be ensured by anyone who plugs into the underlying event streams, as updates are published through this system all participants can immediately update their state database.

> Related to global state availability is state representation. Ceramic currently supports state outputs in the form of simple JSON objects and a native indexing system, which is good for graph-based application use cases. The protocol should be able to adapt and support different state representations based on the optimizations required by the data structures better suited to these use cases. This can be achieved by plugging into the event streaming layer of Ceramic and building custom databases on top.

> Every piece of data in the Dataverse should be verifiable, secure, and useful—not spam or bits of data that clog up the network. By using a protocol for decentralized, cryptographic, object-oriented permissions, we can give decentralized identities provable agency over their data while allowing the access permissions for each state (or even nested/recursive/chained permissions to groups of states) to be completely customizable.

> For example, users can grant their therapist, their school counselor, and their best friend permanent access to their diary. Or someone can give an application the ability to update a state on their behalf for the duration of a session. It can also be natively integrated with the different cryptographic authentication systems used within developers’ applications (e.g. sign in with Ethereum). It’s important that we collaborate with other Dataverse protocols and services to adopt the same permissioning standard so that we can achieve maximal interoperability. In a lot of ways, the more robust, developed, and flexible the permissions protocol is, the less important it is to tie an identity to any single key.

> We should also expect a lot of innovation from the developer ecosystem in the area of permissioning writes and reads within the network. We’re already seeing experimentation along these lines with programmatic permissions protocols. Examples include hosted custodial agents or “personal data managers” or something like “credit bureaus” for managing permissions for users’ data. We should encourage all kinds of diversity, especially early on

> When this application is multi-player, such as a social network, developers need to gather data sets from across users to display in one interface. This type of data retrieval functionality is core to almost any application, and is especially core to the ones that are most valuable to the data ecosystem as a whole. When the identifiers of the users are known, this can be done by looking at each user’s index of their data that exists in the Dataverse and then pulling in that data. This supposes the existence of a protocol for such a user-centric index, whether physically stored as a single list somewhere in the Dataverse, or maintained using metadata and an indexing service.

> Ceramic will soon offer a graph database that will enable developers to explore those ties from any of their user's accounts to a stream of data, e.g. all blog posts. But in further iterations, Ceramic will allow relationships between any account, model, and data stream related to model. This will allow infinitely complex queries across the Dataverse