---
title: "Ceramic"
date: 2023-03-27
tags:
---
A good working definition from [Boilerrat's Awesome Decentralized Autonomous Organizations repo](https://github.com/boilerrat/awesome-decentralized-autonomous-organizations)
>a [permissionless](/notes/Permissionless.md) protocol for creating and accessing **mutable** (??), tamper-proof documents that serve as the foundation for a web without silos. Ceramic's infrastructure provides a verifiable, censorship-resistant source of truth for important information that is public and interoperable.

https://developers.ceramic.network/learn/welcome/
> Ceramic is a[decentralized data network](quartz/content/decentralized%20data%20network.md) that powers an ecosystem of [Interoperable](/notes/Interoperability.md)Web3 applications and services. Ceramic's event streaming protocol is a highly-scalable [decentralized](/notes/Decentralization.md) data infrastructure used for building all kinds of [Interoperability](/notes/Interoperability.md) Web3 services and protocols, such as [[decentralized databases]]. Ceramic-powered databases and services enable thousands of Web3 developers to build data-intensive applications and solve the world's most complex data challenges. By [decentralizing](/notes/Decentralization.md) application databases, Ceramic makes data [composable](/content/notes/Composability.md) and reusable across all applications. 
> Ceramic is a [decentralized](/notes/Decentralization.md) event streaming protocol that enables developers to build [decentralized](/notes/Decentralization.md)databases, distributed compute pipelines, and authenticated data feeds, etc. Ceramic nodes can subscribe to subsets of streams forgoing the need of a global network state. This makes Ceramic an eventually consistent system (as opposed to strongly consistent like L1 blockchains), enabling web scale applications to be built reliably.

https://blog.ceramic.network/launching-create-ceramic-app/?ref=the-ceramic-blog-newsletter
>Create Ceramic App is a new way to create an app using Ceramic, much like Create React App or Create Next App. We built Create Ceramic App to ensure that you know all the parts and packages that go into using our decentralized network—from interacting with data to using a Web3 wallet for user authentication.

The protocol doesn't prescribe how to interpret events found within streams; this is left to the applications consuming the streams. One example of this type of application is [ComposeDB](https://composedb.js.org/).

### Key Concepts
>Streams are a core concept in Ceramic, they include a primary data structure called an event log, a URI scheme to identify unique streams in a network, a simple consensus model to agree on the same event log across the network, and a supporting lifecycle of creating, updating, querying, and syncing streams.
>Composites - A composite is a group of one or more models that defines the complete graph data schema for your app. Composites are used on both the [ComposeDB](/notes/ComposeDB.md) server and the client.
	- [devtools](https://composedb.js.org/docs/0.3.x/api/modules/devtools).Composite
	- The Composite class provides APIs for managing composites (sets of Model streams) through their development lifecycle, including the creation of new Models, import and export of existing composites encoded as JSON, and compilation to the runtime format used by the [`ComposeClient class`](https://composedb.js.org/docs/0.3.x/api/classes/client.ComposeClient).
>  Graphs - [ComposeDB](/notes/ComposeDB.md)  provides a graph structure for interacting with data on Ceramic, with two types of nodes [accounts](https://composedb.js.org/docs/0.4.x/graph-structure#accounts) & [documents](https://composedb.js.org/docs/0.4.x/graph-structure#documents), and edges between nodes representing relations
>  Models - Streams of data on Ceramic are automatically tagged to Data Models, like profiles or blog posts, which in turn can have relations with other data models or be formed into groups of models called Composites
	- A model is the GraphQL schema for a single piece of data (e.g. social post) including its relations to other models and accounts. Models are designed to be plug-and-play so they can easily be reused by developers; when multiple apps use the same model, they share the same underlying data set. To be usable in your [ComposeDB](/notes/ComposeDB.md) app, you need to bundle one or more models into a composite
   - [Model Catalog](https://composedb.js.org/docs/0.4.x/guides/data-modeling/model-catalog) to discover, share, and reuse data models
	> The catalog is a free and open source repository of all data models created by the [ComposeDB](/notes/ComposeDB.md) developer community. The catalog aims to make it as easy as possible for developers to discover, share, and reuse each others models and underlying data.
	- [Writing Models](https://composedb.js.org/docs/0.4.x/guides/data-modeling/writing-models)
		- Create new models or extend existing models
>  Database - [ComposeDB](/notes/ComposeDB.md) is powered by a network of Ceramic nodes, with global state synced across. Today, you’ll need to run your own node to ensure data availability. You can query against your node using Ceramic’s native Client in GraphQL
>  Queries and Mutations - After setting up your [ComposeDB Client](https://composedb.js.org/docs/0.4.x/guides/composedb-client/javascript-client), you can perform queries and mutations on ComposeDB data
		- Queries - allow you to fetch data
		- Mutations - allow you to create or update [data](data.md)


