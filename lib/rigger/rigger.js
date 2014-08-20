(function(root) {
    'use strict';

    /**
       % bilby.js

       ![](http://brianmckenna.org/files/bilby.png)

       # Build status

       Main
       [![Build Status](https://secure.travis-ci.org/puffnfresh/bilby.js.png)](http://travis-ci.org/puffnfresh/bilby.js)

       Dependency
       [![Dependencies](https://david-dm.org/SimonRichardson/bilby.js.png)](https://david-dm.org/SimonRichardson/bilby.js)

       # Description

       bilby.js is a serious functional programming library. Serious,
       meaning it applies category theory to enable highly abstract
       and generalised code. Functional, meaning that it enables
       referentially transparent programs.

       Some features include:

       * Immutable multimethods for ad-hoc polymorphism
       * Functional data structures
       * Automated specification testing (ScalaCheck, QuickCheck)
       * Fantasy Land compatible

       ![](https://raw.github.com/puffnfresh/fantasy-land/master/logo.png)

       # Usage

       node.js:

           var bilby = require('bilby');

       Browser:

           <script src="bilby-min.js"></script>

       # Development

       Download the code with git:

           git clone https://github.com/puffnfresh/bilby.js.git

       Install the development dependencies with npm:

           npm install

       Run the tests with grunt:

           npm test

       Build the concatenated scripts with grunt:

           $(npm bin)/grunt

       Generate the documentation with emu:

           $(npm bin)/emu < bilby.js
    **/

    /* bilby's environment means `this` is special */
    /*jshint validthis: true*/

    /* bilby uses the !(this instanceof c) trick to remove `new` */
    /*jshint newcap: false*/

    var bilby;

    //= ../../src/environment.js

    bilby = environment();
    bilby = bilby.property('environment', environment);

    //= ../../src/helpers.js

    //= ../../src/do.js

    //= ../../src/trampoline.js

    //= ../../src/builtins.js

    //= ../../src/id.js

    //= ../../src/option.js

    //= ../../src/either.js

    //= ../../src/validation.js

    //= ../../src/lens.js

    //= ../../src/io.js

    //= ../../src/tuples.js

    //= ../../src/promise.js

    //= ../../src/state.js

    //= ../../src/list.js

    //= ../../src/check.js

    if(typeof exports != 'undefined') {
        /*jshint node: true*/
        exports = module.exports = bilby;
    } else {
        root.bilby = bilby;
    }
})(this);
