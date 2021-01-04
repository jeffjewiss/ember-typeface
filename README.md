<h1 align="center">Ember Typeface</h1>

<div align="center">
  <a href="https://travis-ci.org/jeffjewiss/ember-typeface"><img src="https://travis-ci.org/jeffjewiss/ember-typeface.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/ember-typeface"><img src="https://img.shields.io/npm/v/ember-typeface.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/ember-typeface"><img src="https://img.shields.io/npm/dm/ember-typeface.svg" alt="Monthly Downloads"></a>
  <a href="http://emberobserver.com/addons/ember-typeface"><img src="http://emberobserver.com/badges/ember-typeface.svg" alt="Ember Observer Score"></a>
</div>

<br>

<div align="center">
  <p>Easily add typefaces to your Ember project in 2 easy steps.</p>
</div>

<br>
<br>
<br>
<br>
<br>

<hr>

<br>
<br>
<br>
<br>
<br>

Notice
------

The `typefaces` project has been deprecated and it is recommended that you use [fontsource](https://github.com/fontsource/fontsource) instead. Please switch to using [ember-fontsource](https://github.com/mwhitworth/ember-fontsource) to use fontsource in an Ember project.


<br>
<br>
<br>
<br>
<br>

<hr>

<br>
<br>
<br>
<br>
<br>

Installation
------------

```shell
ember install ember-typeface
```

Usage
-----

1. Install Ember Typeface: `ember install ember-typeface`
2. Pick a typeface from the list of over [800 available](https://github.com/jeffjewiss/ember-typeface/blob/master/lib/typefaces.js) and add it to your project: `npm install typeface-lato --save-dev`

That’s it!

You are now free to use `font-family: "Lato"` in your application’s styles.

Advanced Usage
--------------

Ember Typeface will try to look through your `node_modules` to discover typeface packages. If typefaces are specified in the config options in your app’s evironment: `ENV.typefaceOptions.typefaces` the two lists will be merged for unique values. However, you can choose to disable this auto discovery and configure which typefaces are imported into your project.

```javascript
// config/environment.js
module.exports = function(environment) {
  let ENV = {
    ...

    typefaceOptions: {
      disableAuto: true, // default is false, disable to manually choose typefaces
      typefaces: [
        'lato'
      ]
    }
  };
};
```

Commands
--------

* `ember typeface:active` – view a list of the typefaces to be included in the app
* `ember typeface:list` – view a list of all the available typefaces
* `ember typeface:search <name>` – perform a fuzzy search on the list of typefaces

Example
-------

To see an example of an Ember app configured with a typeface check out: https://github.com/jeffjewiss/ember-typeface-example
