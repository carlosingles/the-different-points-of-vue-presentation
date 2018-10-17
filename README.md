# The Different Points of Vue

## Project setup
```
npm install
```

### Running the slideshow whilst also allowing development
```
npm run serve
```

### Vue CLI UI
If you would like to use the vue-cli as shown in the demo, you will need to install the CLI and then import the project.

```
# install the CLI
npm install -g @vue/cli

# run the UI
vue ui
```

This will launch a browser from which you can import the root folder of this project.

### Compiles and minifies for production
```
npm run build
```


### Lints and fixes files
```
npm run lint
```

# Rough Transcript of Talk

There is a rough transcript of the talk to go with the Slideshow in the root directory called `ROUGH_TRANSCRIPT.md`. Each heading in the transcript should match each slide heading, except for the final sections "Technical Differences" and "The Different Points of Vue".

# Slideshow Documentation

In the components folder you will find a `@/components/Slide.vue` and `@/components/Slideshow.vue` which are components that are used to make the slideshow that is presented. To see them in use, please have a look at `@/views/Presentation.vue`.

The Slideshow system uses `vuex` but it was merely introduced to show how you would implement `vuex`, it is really not necessary and the entire system could have been made without it.

NOTE: Webpack is configured in Vue to alias the `src` folder to `@`

`@/styles/variables.scss`

- Contains Sass variables for use throughout the project, which also override a few Bootstrap variables.

`@/components/Slide.vue`

- Has a `title` prop used to display the Title of the slide.
- Has a `currentStep` data property (or state) which tracks what step the slide is up to
- Has a `click` observer attached to the wrapping `div` which triggers `nextStep()`.
- `nextStep()` increments the `currentStep` and resets it, if it is at the end of the cycle. It will also dispatch a `vuex` event called `slideCompleted`.
  - NOTE: If we were not using `vuex` we could use `this.$emit('slideCompleted')` and then attach handlers on the parent component using `@slideCompleted="method()"` to hook into the event. Since we do not want to define this on every slide ourselves, `vuex` allows us to have a central state that we manage instead. 
- Has a `<transition-group>` wrapping element for the animations (for more information please see: https://vuejs.org/v2/guide/transitions.html)
- "slide" animation is defined in `App.vue` using css and the transition classes provided by Vue.
- Has a `computed` property (`steps`) that is the amount of `<slots>` passed by the parent
- Creates slots for the amount of `steps` and only displays the `step` if its less than the `currentStep`
- Names each slot so then we can define order of steps

`@/components/Slideshow.vue`

- Has a `currentSlide` and `slideCount` `computed` property which uses the `vuex` `mapGetters` function
  - NOTE: `mapGetters` just maps the string to a getter in the store, e.g. `currentSlide` maps to `currentSlide () { return this.$store.getters.currentSlide() }`
- Has a `<transition-group>` wrapping element for the animations (for more information please see: https://vuejs.org/v2/guide/transitions.html)
- "slide" animation is defined in `App.vue` using css and the transition classes provided by Vue.
- Creates slots according to the `slideCount` and only displays the `slide` if its less than the `currentSlide`
- Names each slot so then we can define order of slides
- If we were not using `vuex` the data would all be stored on this component, rather than `vuex` getters, and we would listen for the emitted `slideCompleted` event from each slide, to then update the `currentSlide` value.

`@/store/modules/slideshow.js`

- Has an initial state which contains `slideCount` preconfigured with the amount of slides there will be
- Has a single mutation which is similar to `Slide.vue`'s `nextStep()` method
- `slideCompeleted` is an `action` that can be dispatched from any component using `this.$store.dispatch('slideCompleted')`
- Has two getters, which are used to pass down `state` to components that require them (in this case the `Slideshow` component)
- For more information on how `vuex` works with `mutations`, `actions` and `getters` please see https://vuex.vuejs.org/

`@/views/Presentation.vue`

- Contains the actual Presentation content
- Has one wrapping `Slideshow` component which requires at least one element with a `slot` attribute using the naming pattern `slideX`
- Each element then has nested elements with a `slot` attribute using the naming pattern `stepX`
- You can have as many steps as you want
- However many slides you define, must match the `slideCount` state defined in the `vuex` store

# Quirks / Extras

- Bootstrap is used and referenced in `App.vue`. We reference `node_modules` using `~` and only grab the layout parts of Bootstrap rather than the full library.
- The slideshow component was made with only one slideshow in mind. You could modify the css and events being triggered so that you could support more than one slideshow on a page. This would also require the slideshow to have its state passed in via a prop, otherwise all Slideshows would share the same state.
- You could have an event to initialise the slideshow which counts the amount of slots to automatically work out how many slides are being inserted into the Slideshow rather than relying on manually configuring it.
- There is a `vue-router` in use but there is currently one route in use. An alternative to the Slideshow approach used, would be to wrap the `<router-view>` used in `App.vue` with a `<transition>` so that on every route change there is an animation. You would then need to define each slide as a route, and have the content passed in via a prop - which may not look as nice as the current approach.