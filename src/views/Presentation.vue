<template>
  <Slideshow>
    <!-- Introduction -->
    <Slide title="" class="text-center" slot="slide1">
      <img src="@/assets/logo.png" class="mt-5" slot="step1">
      <h1 slot="step2">The different points of Vue</h1>
      <p slot="step3">A React vs. Vue teardown</p>
    </Slide>
    <!-- History -->
    <Slide title="History" slot="slide2">
      <p slot="step1">- React was created in 2011 by Jordan Walke who was influenced by XHP, made open source in 2013.</p>
      <blockquote class="small" slot="step2">
        <p class="font-italic">React was created at Facebook to solve its problems. It brings tangible business value to the company and is used in many of its products.</p>
        <footer class="blockquote-footer">React Documentation</footer>
      </blockquote>
      <p slot="step3" class="mt-5">- Vue was created in 2014 by Evan You who worked at Google using AngularJS.</p>
      <blockquote class="small" slot="step4">
        <p class="font-italic">I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight.</p>
        <footer class="blockquote-footer">Evan You</footer>
      </blockquote>
    </Slide>
    <!-- Maintainers -->
    <Slide title="Maintainers" slot="slide3">
      <p slot="step1">- React maintained by 6 core contributers who are all employed by Facebook.</p>
      <p slot="step2">- Vue's core contributer is Evan You who receives $16,000 p/month to work on Vue.</p>
      <p slot="step3">- The stats for React:</p>
      <ul slot="step4">
        <li>28 new unclosed issues</li>
        <li>58 closed issues</li>
        <li>19 contributors working on the above</li>
      </ul>
      <p slot="step5">- The stats for Vue:</p>
      <ul slot="step6">
        <li>22 new unclosed issues</li>
        <li>106 closed issues</li>
        <li>3 contributors working on the above</li>
      </ul>
    </Slide>
    <!-- Stability Pt. 1-->
    <Slide title="Stability" slot="slide4">
      <p slot="step1">- Both projects use Semantic Versioning (React began as of version 15).</p>
      <blockquote class="small" slot="step2">
        <p class="font-italic">In the future, we expect more new additive APIs rather than breakage of existing ones. By moving to major revisions in the semver scheme, we can release new versions without breaking existing ones.</p>
        <p class="font-italic">People have long asked what React v1.0 will look. Technically some breaking changes are important to avoid stagnating, but we still achieve stability by making it easy to upgrade. If major version numbers indicate API stability and engender trust that it can be used in production, then we got there a long time ago.</p>
        <footer class="blockquote-footer">React's Version 15 Announcement</footer>
      </blockquote>
      <blockquote class="small" slot="step3">
        <p class="font-italic">React 16 is the first version of React built on top of a new core architecture, codenamed “Fiber.” Fiber is responsible for most of the new features in React 16, like error boundaries and fragments. Over the next few releases, you can expect more new features as we begin to unlock the full potential of React.</p>
        <footer class="blockquote-footer">React's Version 16 Announcement</footer>
      </blockquote>
      <p slot="step4">- React 17 is set to introduce async functions in the render function along with <code>setDeferredState()</code></p>
    </Slide>
    <!-- Stability Pt. 2 -->
    <Slide title="Stability" slot="slide5">
      <p slot="step1">- Vue is at v2.0 with 90% of the API remaining the same.</p>
      <p slot="step2">- Vue has announced v3.0 with majority of the API remaining the same, focusing on browser compatability.</p>
      <p slot="step3">- Breaking changes also break depending libraries such as the router and state management.</p>
      <p slot="step4">- Vue's router and state management are first class citizens and maintained by the core team.</p>
      <p slot="step5">- The more breaking changes, the more fragmentation you get in the ecosystem.</p>
    </Slide>
    <!-- Bugs -->
    <Slide title="Bugs" slot="slide6">
      <p slot="step1">- The stats for React:</p>
      <ul slot="step2">
        <li>44 issues flagged as Bugs</li>
        <li>302 total issues</li>
        <li>Oldest bug from <strong>13th March 2014</strong> - <em>Last updated 2nd October 2017</em></li>
      </ul>
      <p slot="step3">- The stats for Vue:</p>
      <ul slot="step4">
        <li>21 issues flagged as Bugs</li>
        <li>201 total issues</li>
        <li>Oldest bug from <strong>7th June 2017</strong> - <em>Last updated 11th March 2018</em></li>
      </ul>
      <blockquote class="small" slot="step5">
        <p class="font-italic">We try our best to address the problems raised by the community. However we are likely to prioritize the issues that people are also experiencing internally at Facebook. Perhaps counter-intuitively, we think this is the main reason why the community can bet on React.</p>
        <footer class="blockquote-footer">React's Documentation</footer>
      </blockquote>
    </Slide>
    <!-- Technical Differences Pt. 1 -->
    <Slide title="Technical Differences" slot="slide7">
      <p slot="step1">- React relies on <code>setState</code> an async function (sometimes).</p>
      <p slot="step2">- Vue uses proxying to handle state for you, so you don't have to worry about state.</p>
      <p slot="step3">- React uses arrow functions in render to bind context, which in turn create a new function on each render.</p>
      <p slot="step4">- Vue functions already have context and do not require binding, so they are not created on each render.</p>
      <p slot="step5">- React does not manage updates by default, if you want smart updates, you need to explicitly define it.</p>
      <p slot="step6">- Vue manages updates via proxies, therefore making all updates smart updates.</p>
    </Slide>
    <!-- Technical Differences Pt. 2 -->
    <Slide title="Technical Differences" slot="slide8">
      <p slot="step1">- React does not have a "keep alive" option for components.</p>
      <p slot="step2">- Vue has a <code>&lt;keep-alive&gt;</code> wrapper component.</p>
      <p slot="step3">- React does not allow webpack configuration through its tool unless you 'eject'.</p>
      <p slot="step4">- Vue does not have the 'eject' option since configuration can be customized.</p>
      <p slot="step5">- React requires specific learning of JSX and React patterns such as gotchas with <code>setState</code>.</p>
      <p slot="step6">- Vue allows and comes with plugins to allow different pre-processors and templating languages (including JSX!).</p>
    </Slide>
    <!-- The Different Points of Vue -->
    <Slide title="The Different Points of Vue" slot="slide9">
      <p slot="step1">- Vue comes with a <code>&lt;transition&gt;</code> component.</p>
      <p slot="step2">- Vue allows for slots which can be named, allowing for insertion.</p>
      <p slot="step3">- Event modifiers for keyup and specific mouse clicks.</p>
      <p slot="step4">- Directives which allow us to define hooks into any element including components.</p>
      <p slot="step5">- Mixins which allow us to create re-usable parts of components.</p>
      <p slot="step6">- Single file components, share your components by sharing one file.</p>
    </Slide>
    <!-- Tooling -->
    <Slide title="Tooling" slot="slide10">
      <h1 slot="step1" class="text-center">Demo time!</h1>
    </Slide>
  </Slideshow>
</template>

<script>
import Slide from '@/components/Slide.vue'
import Slideshow from '@/components/Slideshow.vue'

export default {
  name: 'Presentation',
  components: {
    Slide,
    Slideshow
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.blockquote-footer {
  color: $teal;
}
</style>
