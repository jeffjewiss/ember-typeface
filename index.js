/* eslint-env node */
'use strict';

const merge = require('merge')
const globby = require('globby')
const detectInstalled = require('detect-installed')
const typefaceList = require('./lib/typefaces')
const VersionChecker = require('ember-cli-version-checker')

module.exports = {
  name: 'ember-typeface',

  init () {
    let checker = new VersionChecker(this);
    let assertMessage = 'To use ember-typeface you must have ember-cli 2.16 or above.'

    checker
      .for('ember-cli')
      .assertAbove('2.16.0', assertMessage);
  },

  included (app) {
    this.options = merge.recursive({}, {
      typefaces: []
    }, this._getAddonOptions(app).typefaceOptions)

    if (!this.options.typefaces.length) {
      return;
    }

    this._checkTypefaces()
    this._createImports()
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
  },

  _getTypefaceFiles (typeface) {
    return globby.sync(`node_modules/typeface-${typeface}/files`)
  },

  _createImports () {
    this.options.typefaces.forEach((typeface) => {
      this.import(`node_modules/typeface-${typeface}/index.css`, {
        destDir: 'assets/files'
      });

      this._getTypefaceFiles(typeface).forEach((fileName) => {
        this.import(fileName, {
          destDir: 'assets/files'
        });
      })
    })
  }
};
