/* eslint-env node */
'use strict';

const merge = require('merge')
const detectInstalled = require('detect-intsalled')
const typefaceList = require('./lib/typefaces')

module.exports = {
  name: 'ember-typeface',

  included (app) {
    this.options = merge.recursive({}, {
      typefaces: [
      ]
    }, this._getAddonOptions(app).typefaceOptions)

    if (!this.options.typefaces.length) {
      return;
    }

    this._checkTypefaces()
  },

  _getAddonOptions (app) {
    return (this.parent && this.parent.options) || (app && app.options) || {}
  },

  _checkTypefaces () {
    this.options.typefaces.forEach((typeface) => {
      if (!typefaceList.includes(typeface)) {
        throw new Error(`The font '${typeface}' is not supported. Please chose a font from the available list.`)
      }

      if (!detectInstalled.sync(`typeface-${typeface}`, { local: true })) {
        throw new Error(`The font package 'typeface-${typeface}' is not installed. Please add it to your project with NPM or Yarn.`)
      }
    })
  }
};
