# Contributing to funct.in

funct.in is a nice app to allow group editing of documentation. It is inspired by the poor state of many documentations, such as Python.

## Code of Conduct

From [Facebook's Developer Code of Conduct](https://code.facebook.com/pages/876921332402685/open-source-code-of-conduct): Be friendly and patient. Be welcoming. Be considerate. Be respectful. Be careful of the words that you choose. When we disagree, try to understand why. Remember that we're different.

## Redux stores

We'd like to use the latest tools of ECMAScript where possible (currently ES6, ES7) rather than libraries. We'll use the ES7 spread syntax.

#### Example

    const example = { key: 'value' }
    const example2 = { ...example, anotherKey: 'anotherValue' }
    console.log( example2 ) // { key: 'value', anotherKey: 'anotherValue' }

## Pull Requests

Make a pull request and assign it when ready. Squish contributions as much as possible. Wait for an OK to "ship" and then merge with Master.

## `master` is unsafe

The master branch is not always ready for production.   

## Style Guide

Check the included `.eslintrc` file.

#License

It's propritary right now.
