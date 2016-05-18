# ui-rs-radial-chart

`ui-rs-radial-chart` is a component for creating a customizable radial chart for your application, e.g. to show data over time like monthly expenses on taxis over a year. It is provided as a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) for easy integration into your projects.

> If your browser does *NOT* support *custom elements* natively (see [caniuse](http://caniuse.com/#feat=custom-elements)) you have to install the [web components shim](http://webcomponents.org/) and include it in your project before including this component!

The component is part of the [RedsiftUI](https://github.com/redsift/redsift-ui) library. For a documentation of the hero unit see the [official RedsiftUI documentation](https://docs.redsift.io/docs/client-code-redsift-ui).

## Builds

[![Circle CI](https://circleci.com/gh/Redsift/ui-rs-radial-chart.svg?style=svg)](https://circleci.com/gh/Redsift/ui-rs-radial-chart)

A UMD build is available from //static.redsift.io/reusable/ui-rs-radial-chart/latest/ui-rs-radial-chart.umd-es2015.min.js.

To build locally checkout this repository and

```bash
> cd ui-rs-radial-chart
> npm install
> npm run build
```

This will create a `./dist` folder with the Javascript and CSS files.

## Browser Usage

First include the CSS file in the `<head>` of your page:

```html
<link rel="stylesheet" href="//static.redsift.io/reusable/ui-rs-radial-chart/latest/css/ui-rs-radial-chart.min.css">
```

Additionally include the Javascript on the bottom of the `<body>`:

```html
<script src="//d3js.org/d3.v3.min.js"></script>
<script src="//static.redsift.io/reusable/ui-rs-radial-chart/latest/js/ui-rs-radial-chart.umd-es2015.min.js"></script>
```

Including the Javascript already registers the custom element `rs-radial-chart` with the browser. Make sure to include [D3](https://d3js.org/) *before* the component, as it depends on it!

Use the following HTML code to create a `rs-radial-chart` element:

```html
<rs-radial-chart></rs-radial-chart>
```

You can optionally provide a DIV with the ID `chart` like so:

```html
<rs-radial-chart>
  <div id="chart"></div>
</rs-radial-chart>
```

If provided the chart will render into this DIV, giving you more control over e.g. styling. If not provided a DIV is created automatically by the element.

Data is added to the chart via Javascript in the following form:

```Javascript
var chart = document.querySelector('rs-radial-chart');

var data = [{
    name: "Jan",
    value: 3.6732592034888905,
    color: () => { return '#00ff00'; }
}, {
    name: "Feb",
    value: 3.3835721480313685,
    color: () => { return '#00ff00'; },
    classed: "stripe"
}, {
    name: "Mar",
    value: 46.90614320865888,
    color: () => { return '#00ff11'; }
}, {
    name: "Apr",
    value: 16.262593631395912,
    color: () => { return '#00ff22'; }
}, {
    name: "May",
    value: 53.40171839979518,
    color: () => { return '#00ff33'; }
}, {
    name: "Jun",
    value: 15.899117927917139,
    color: () => { return '#00ff44'; }
}, {
    name: "Jul",
    value: 6.650584346480011,
    color: () => { return '#00ff55'; }
}, {
    name: "Aug",
    value: 26.689381547140503,
    color: () => { return '#00ff66'; }
}, {
    name: "Sep",
    value: 34.29461737322482,
    color: () => { return '#00ff77'; }
}, {
    name: "Oct",
    value: 26.4320733402228,
    color: () => { return '#00ff88'; }
}, {
    name: "Nov",
    value: 51.88087153647562,
    color: () => { return '#00ff99'; }
}, {
    name: "Dec",
    value: 54.6380052855129,
    color: () => { return '#00ffaa'; }
}];

chart.data = data;
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
