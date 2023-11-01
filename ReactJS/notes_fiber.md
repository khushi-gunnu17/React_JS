# fiber
- react uses fiber behind the scenes to udate vitual DOM.

## Introduction 
- React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

- Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

## Reconciliation
- reconciliation  --> 
The algorithm React uses to differentiate one tree with another to determine which parts need to be changed.
(Git is also based on reconciliation).

- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

- A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

- Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

--> Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
--> Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique".


- The key points are:

--> In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.

--> Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.

--> A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.


## What is a fiber ?
- We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

--> pause work and come back to it later.
--> assign priority to different types of work.
--> reuse previously completed work.
--> abort work if it's no longer needed.

In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a unit of work.

## Webste 
- https://github.com/acdlite/react-fiber-architecture