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


## Webste 
- https://github.com/acdlite/react-fiber-architecture