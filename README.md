# karma-jasmine-jquery-matchers
A Karma plugin to inject [Jasmine-Jquery](https://github.com/velesin/jasmine-jquery) for [Jasmine](http://jasmine.github.io/).

# Installation

The easiest way to install `karma-jasmine-jquery-matchers' is via Npm:

```bash
npm install karma-jasmine-jquery-matchers --save-dev
```

# Configuration
You must include 'jasmine-jquery-matchers' in the `frameworks` section of your config :

```javascript
    module.exports = function(config) {
        config.set({
            frameworks: [
                'jasmine',
                'jasmine-jquery-matchers'
            ],
            files: [
                'src/**/*.js',
                'src/**/*.spec.js'
            ]
        });
    };
```

# Available matchers
The list of available matchers is available [here](https://github.com/velesin/jasmine-jquery/blob/2.1.1/README.md)

# Dependencies
The plugin is to be used with jasmine v2.0.0+. It uses the library [jQuery 2.0](http://api.jquery.com/).
