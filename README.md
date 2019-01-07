ember-world-map
==============================================================================

[![npm version](https://badge.fury.io/js/ember-world-map.svg)](https://badge.fury.io/js/ember-world-map.svg)
[![Build Status](https://travis-ci.org/ahmetemrekilinc/ember-world-map.svg?branch=master)](https://travis-ci.org/ahmetemrekilinc/ember-world-map.svg?branch=master)
[![Ember Observer Score](https://emberobserver.com/badges/ember-world-map.svg)](https://emberobserver.com/badges/ember-world-map.svg)
[![Dependency Status](https://david-dm.org/ahmetemrekilinc/ember-world-map.svg)](https://david-dm.org/ahmetemrekilinc/ember-world-map.svg)
[![devDependency Status](https://david-dm.org/ahmetemrekilinc/ember-world-map/dev-status.svg)](https://david-dm.org/ahmetemrekilinc/ember-world-map/dev-status.svg)
[![Code Climate](https://codeclimate.com/github/ahmetemrekilinc/ember-world-map/badges/gpa.svg)](https://codeclimate.com/github/ahmetemrekilinc/ember-world-map/badges/gpa.svg)

ember-world-map is an addon that enables you create world maps in your Ember.js application.
[jvectormap](https://github.com/bjornd/jvectormap) is used in background.

Installation
------------------------------------------------------------------------------

```
cd your-project-directory
ember install ember-world-map
```

Usage
------------------------------------------------------------------------------

You can pass your data as an object named as `data` parameter and custom color as `color` parameter (default=blue).
```hbs
{{ember-world-map
  data=(hash TR=100 TZ=90 DE=80 AU=70 US=40 BR=20 RU=10 IN=5 )
  color="RED"
}}
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
