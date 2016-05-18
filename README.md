# ui-rs-console

`ui-rs-console` is a component for creating a customizable console component for your application, e.g. to show user interaction with and output from a console in a tutorial or demonstration. It is provided as a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) for easy integration into your projects.

> If your browser does *NOT* support *custom elements* natively (see [caniuse](http://caniuse.com/#feat=custom-elements)) you have to install the [web components shim](http://webcomponents.org/) and include it in your project before including this component!

The component is part of the [RedsiftUI](https://github.com/redsift/redsift-ui) library. For a documentation of the hero unit see the [official RedsiftUI documentation](https://docs.redsift.io/docs/client-code-redsift-ui).

## Builds

[![Circle CI](https://circleci.com/gh/Redsift/ui-rs-console.svg?style=svg)](https://circleci.com/gh/Redsift/ui-rs-console)

A UMD build is available from //static.redsift.io/reusable/ui-rs-console/latest/ui-rs-console.umd-es2015.min.js.

To build locally checkout this repository and

```bash
> cd ui-rs-console
> npm install
> npm run build
```

This will create a `./dist` folder with the Javascript and CSS files.

## Browser Usage

Include the Javascript on the bottom of the `<body>`:

```html
<script src="//d3js.org/d3.v4.0.0-alpha.35.min.js"></script>
<script src="//static.redsift.io/reusable/ui-rs-console/latest/js/ui-rs-console.umd-es2015.min.js"></script>
```

Including the Javascript already registers the custom element `rs-console` with the browser. Make sure to include [D3v4](https://d3js.org/) *before* the component, as it depends on it!

Use the following HTML code to create a `rs-console` element:

```html
<rs-console width="720" height="510" animated></rs-console>
```

Textlines are added to the chart via Javascript in the following form:

```Javascript
var textlines = [{ class: 't', text: ['$ ', 'curl -sSL https://static-sdk.redsift.io/install | bash'], duration: 4000
}, {class: '', text: ['Downloading redsift-sdk']
}, {class: '', text: '########################################################################', duration: 3000
}, {class: '', text: ['']
}, {class: '', text: ['redsift-sdk has been installed in your home directory (~/.redsift).']
}, {class: '', text: ['Writing a launcher script to /usr/local/bin/redsift for your convenience.']
}, {class: '', text: ['']
}, {class: 't', text: ['$ ', 'redsift create simple-sift'], duration: 2000
}, {class: '', text: ['Redsift SDK version: 1.4.20160412']
}, {class: '', text: ['Creating: simple-sift...']
}, {class: 'h', text: ['Success!'], delay: 2000
}, {class: '', text: ['You can run the sift when ready by running \'redsift run ~/simple-sift\''], delay: 1500
}, {class: '', text: ['']
}, {class: 't', text: ['$ ', 'redsift run ~/simple-sift'], duration: 2000
}, {class: '', text: ['Redsift SDK version: 1.4.20160412']
}, {class: 'h', text: ['Running siftext: ~/simple-sift/sift.json']
}, {class: '', text: ['Redsift SDK: Using Docker']
}, {class: '', text: ['Redsift SDK: initialising...']
}, {class: '', text: ['sift.json is valid.']
}, {class: 'h', text: ['Redsift SDK: Started. To test your sift, go to: http://localhost:7438'], delay: 3000
}, {class: '', text: ['Updating grip input...']
}, {class: '', text: ['Hash for current run is: 5e1d97f7eef0e0aa2d464b79c76bd71af98ce0e6']
}, {class: '', text: ['']
}];

var $console = document.querySelector('rs-console');
$console.textlines = textlines;
```
You can set a custom CSS class for each line, e.g. to give the line a different color.

`duration` and `delay` properties can be used to animated the output of a text line. For this to work the `animated` attribute has to be set on the `rs-console` element.

### `rs-console` Configuration Attributes

* **width**: (mandatory) Sets the width of the console.

* **height**: (mandatory) Sets the height of the console.

* **text-padding**: (mandatory) Sets the text padding in the console.

* **animated**: (optional) If set the display of a text line will be animated if it is configured with a `duration` and/or `delay` property.

All attributes can be set and changed via Javascript, e.g.:

```javascript
var $console = document.querySelector('rs-console');

setTimeout(function() {
  $console.width = 1100;
  $console.height = 1100;
  $console.textPadding = 24;
}, 3000);
```

#### CAUTION:

If your browser does not support *custom elements* (and only then!) make sure to wrap the above code into the following code:

```javascript
window.addEventListener('WebComponentsReady', function(e) {
  // setup code ...
});
```

See a description of why this is necessary [here](https://www.polymer-project.org/1.0/docs/migration.html#polymer-ready).

# Development Setup

For development run

```bash
> npm run serve
```

within the repository folder. It will start a web server serving the content of `./samples` and supports live-reloading when a source file is changed.
