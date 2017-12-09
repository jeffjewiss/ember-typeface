ember-typeface
==============

[![build status](https://travis-ci.org/jeffjewiss/ember-typeface.svg?branch=master)](https://travis-ci.org/jeffjewiss/ember-typeface)
[![npm version](https://badge.fury.io/js/ember-typeface.svg)](http://badge.fury.io/js/ember-typeface)
[![ember observer score](http://emberobserver.com/badges/ember-typeface.svg)](http://emberobserver.com/addons/ember-typeface)

Easily add typefaces to your Ember project in 3 easy steps.

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
