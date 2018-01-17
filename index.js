/* eslint-env node */
'use strict';

const merge = require('deepmerge')
const globby = require('globby')
const fuzzysearch = require('fuzzysearch')
const titleize = require('titleize')
const humanizeString = require('humanize-string')
const detectInstalled = require('detect-installed')
const VersionChecker = require('ember-cli-version-checker')
const typefaceList = require('./lib/typefaces')
const emberENV = process.env.EMBER_ENV

module.exports = {
  name: 'ember-typeface',

  init () {
    this._super.init && this._super.init.apply(this, arguments);

    let checker = new VersionChecker(this)
    let assertMessage = 'To use ember-typeface you must have ember-cli 2.16 or above.'

    checker
      .for('ember-cli')
      .assertAbove('2.16.0', assertMessage);
  },

  included (/* app */) {
    let typefaceOptions = require(`${this.project.root}/config/environment`)(emberENV).typefaceOptions || {}
    let typefaces = typefaceOptions.disableAuto ? [] : getTypefacesFromPackage()

    this._options = merge.all([{}, {
      typefaces
    }, typefaceOptions])


    if (!this._options.typefaces.length) {
      return;
    }

    this._checkTypefaces()
    this._createImports()
  },

  includedCommands () {
    let typefaceOptions = require(`${this.project.root}/config/environment`)(process.env.EMBER_ENV).typefaceOptions || {}

    return {
      'typeface:active': {
        name: 'typeface:active',
        description: 'Display a list of the active typefaces.',
        works: 'insideProject',
        run () {
          let typefaceListFromConfig = typefaceOptions.typefaces
            .filter((typeface) => typefaceList.includes(typeface.toLowerCase()))
          let typefaceListFromPackages = getTypefacesFromPackage()
            .filter((typeface) => typefaceList.includes(typeface.toLowerCase()))

          let fullTypefaceList = typefaceOptions.disableAuto ?
            typefaceListFromConfig :
            typefaceListFromConfig.concat(typefaceListFromPackages).filter(onlyUnique)

          if (!(fullTypefaceList.length > 0)) {
            this.ui.writeLine('There are no active typefaces.')
          }

          for (let typeface of fullTypefaceList) {
            this.ui.writeLine(`${titleize(humanizeString(typeface))} (${typeface})`)
          }
        }
      },
      'typeface:list': {
        name: 'typeface:list',
        description: 'Display a list of all the available typefaces.',
        works: 'insideProject',
        run () {
          for (let typeface of typefaceList) {
            this.ui.writeLine(`${titleize(humanizeString(typeface))} (${typeface})`)
          }
        }
      },
      'typeface:search': {
        name: 'typeface:search',
        description: 'Fuzzy search the list of available typefaces.',
        works: 'insideProject',
        anonymousOptions: [
          '<name>'
        ],
        run (commandOptions, rawArgs) {
          let name = rawArgs[0]
          let filteredTypefaceList = typefaceList
            .filter((typeface) => fuzzysearch(name.toLowerCase(), typeface.toLowerCase()))

          for (let typeface of filteredTypefaceList) {
            this.ui.writeLine(`${titleize(humanizeString(typeface))} (${typeface})`)
          }
        }
      }
    }
  },

  _getAddonOptions (app) {
    return (this.parent && this.parent.options) || (app && app.options) || {}
  },

  _checkTypefaces () {
    this._options.typefaces.forEach((typeface) => {
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
    this._options.typefaces.filter(onlyUnique).forEach((typeface) => {
      this.import(`node_modules/typeface-${typeface}/index.css`, {
        destDir: 'assets/files'
      });

      this._getTypefaceFiles(typeface).forEach((fileName) => {
        this.import(fileName, {
          destDir: 'assets/files'
        });
      })
    })
  },

};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

function getTypefacesFromPackage () {
  return globby
    .sync('node_modules/typeface-*/', { nodir: false })
    .map((fullPath) => fullPath.replace('node_modules/', '').replace('/', '').replace('typeface-', '')
  )}
