# Introduction

This presentation highlights some of the features that Vue has whilst also comparing it to React. I'd like to mention that the two frameworks are very similar in what they aim to achieve, however they both take two different approaches which is also why I tend to prefer Vue over React.

To begin with, I'd like to give a brief history on the two, starting with when they were created. 

# History

React was created in 2011 by a software engineer who worked at Facebook called Jordan Walke, who was influenced by XHP which was essentially React for PHP - also created by Facebook. For the most part, React was made to solve alot of the problems that Facebook was facing when building their UI as stated by their docs:

`React was created at Facebook to solve its problems. It brings tangible business value to the company and is used in many of its products. `

React was eventually made Open Source in 2013 to leverage off the open source community. 

Vue was created in 2014 by Evan You a software engineer who had worked at Google using AngularJS. His influence on making the framework can be summed up by the quote:
`I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight.`


# Maintainers

A common discussion when evaulating the two frameworks is to compare the maintainers of the two projects.

Vue is a hot topic in this regard, since for the most part, the library is maintained primarily by its creator Evan You who is currently employed entirely by his Patreon donations which are totalling approximately $16,000 a month, where as React has about 6 core maintainers who are all employed by Facebook.

If we look at the insights on Github, we can see that over a period of a month we had the following:

## Vue
- 22 new unclosed issues
- 106 closed issues
- 3 contributors working on the above

## React
- 28 new unclosed issues
- 58 closed issues
- 19 contributors working on the above

So even though there are less contributors working on Vue, it seems that because Evan You is a dedicated resource to the project, the output of work ends up being higher since there is more time being dedicated to the project.

# Stability

Vue and React currently both follow semantic versioning which allows us to gauge when breaking changes are coming into the framework by looking at the first number in the version. React only recently introduced semantic versioning in version 15 with the reasoning that:

`In the future, we expect more new additive APIs rather than breakage of existing ones. By moving to major revisions in the semver scheme, we can release new versions without breaking existing ones.`

Prior to this, according to semantic versioning, they were still in the beta phase or pre 1.0 phase - which according to semver, every minor (the middle number) increase can expect breaking changes since at this point, it is a constantly moving codebase that requires these breaking changes.

React's reasoning for this as per their blogpost is that:

`People have long asked what React v1.0 will look. Technically some breaking changes are important to avoid stagnating, but we still achieve stability by making it easy to upgrade. If major version numbers indicate API stability and engender trust that it can be used in production, then we got there a long time ago.`

However, the following release, React began using their new rendering architecture that was a complete rewrite of the original React:

`React 16 is the first version of React built on top of a new core architecture, codenamed “Fiber.” Fiber is responsible for most of the new features in React 16, like error boundaries and fragments. Over the next few releases, you can expect more new features as we begin to unlock the full potential of React.`

To avoid confusion, it would make sense to continue the anti-pattern that React has taken, however in hindsight it would appear that React 16 is the true 1.0.

Vue however, is sitting at version 2.0 with about 90% of the API being the same from version 1.0 to version 2.0. 

The discussion of breaking changes is quite a large one in all honesty, and I'd just like to briefly touch on this by saying this: When you have breaking changes in your API, libraries that depend on the core project, also need to be upgraded. This becomes increasingly difficult with React as the only project that is partly maintained by the core team is react-redux which hasn't actually been touched by Dan Abramov its creator, since October last year. There is currently an open issue on the react-redux repo regarding the 16.3 as well as upcoming 17.0 changes that will effect the way that react-redux works and may also require breaking changes. React Router, a popular library used for routing, is not maintained by any core React members and is instead maintained by a developer who runs React training courses. By contrast, the counter part Vue libraries are all maintained by Evan You along with a few other contributors.

# Bugs

`We try our best to address the problems raised by the community. However we are likely to prioritize the issues that people are also experiencing internally at Facebook. Perhaps counter-intuitively, we think this is the main reason why the community can bet on React.`

Current Vue bugs: 21
Total issues: 201
Oldest bug: 7th June 2017, last updated 11th March 2018

Current react bugs: 44
Total issues: 302
Oldest bug: 13th March 2014, last updated 2nd October 2017

# Technical Difference Notes

Gotchas as quoted by React:

`React makes this data flow explicit to make it easy to understand how your program works, but it does require a little more typing than traditional two-way data binding.`

`Using an arrow function in render creates a new function each time the component renders, which may have performance implications.`

`Calls to setState are asynchronous - don’t rely on this.state to reflect the new value immediately after calling setState. Pass an updater function instead of an object if you need to compute values based on the current state`

Vue quote on Web Components:

`The Web Components Spec has been finalized, but is not natively implemented in every browser. Safari 10.1+, Chrome 54+ and Firefox 63+ natively support web components. In comparison, Vue components don’t require any polyfills and work consistently in all supported browsers (IE9 and above). When needed, Vue components can also be wrapped inside a native custom element.`

Vue supports keep-alive which allows you to keep components alive if needed - Dan Abramovs advice is to use "style=display:none;" which keeps the element in the DOM, whereas Vue keeps it in cache. Keeping elements in the DOM do not make sense when you are dealing with a large set of components.

# Tooling

- See Vue Dev Tools
- See Vue CLI UI
- See Vue Docs