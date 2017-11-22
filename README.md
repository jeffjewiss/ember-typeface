# ember-typeface

Easily add typefaces to your Ember project in 3 easy steps.

1. Pick a typeface from the list of over [800 avialable](https://github.com/jeffjewiss/ember-typeface/blob/master/lib/typefaces.js)
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

*This add-on is still under development and relies on a feature only available in `ember-cli` v2.16 and above.*
