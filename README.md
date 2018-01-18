<h1 align="center">Ember Typeface</h1>

<div align="center">
  <a href="https://travis-ci.org/jeffjewiss/ember-typeface"><img src="https://travis-ci.org/jeffjewiss/ember-typeface.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/ember-typeface"><img src="https://img.shields.io/npm/v/ember-typeface.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/ember-typeface"><img src="https://img.shields.io/npm/dm/ember-typeface.svg" alt="Monthly Downloads"></a>
  <a href="http://emberobserver.com/addons/ember-typeface"><img src="http://emberobserver.com/badges/ember-typeface.svg" alt="Ember Observer Score"></a>
</div>

<br>

<div align=”center”>
  <p>Easily add typefaces to your Ember project in 3 easy steps.</p>
</div>

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

1. Pick a typeface from the list of over [800 available](https://github.com/jeffjewiss/ember-typeface/blob/master/lib/typefaces.js)
2. Install the corresponding typeface package, ie. `npm install typeface-lato --save-dev`
3. Configure the typeface with your application:

```javascript
  let app = new EmberApp(defaults, {
    typefaceOptions: {
      typefaces: [
        'lato'
      ]
    }
  });
```

You are now free to use `font-family: “Lato”` in your application’s styles.

Commands
--------

* `ember typeface:list` – view a list of all the available typefaces
* `ember typeface:search <name>` – perform a fuzzy search on the list of typefaces

Example
-------

To see an example of an Ember app configured with a typeface check out: https://github.com/jeffjewiss/ember-typeface-example
