(function() {

  'use strict';

  function JasmineJquery(files) {

    /**
     * @description
     * Add a new array item after the one at the supplied index.
     *
     * @param  {Array}  array
     * @param  {Number} index
     * @param  {*}      item
     */
    function insertAfter(array, index, item) {
      array.splice(index + 1, 0, item);
    }

    /**
     * @description
     * Is the karma-jasmine adapter file ?
     *
     * @param  {Object}  file
     * @return {Boolean}
     */
    function isJasmine(file) {
      return file.pattern.search(/karma\-jasmine(\/|\\)lib(\/|\\)adapter\.js/) !== -1;
    }

    /**
     * @description
     * Is the jquery library ?
     *
     * @param  {Object}  file
     * @return {Boolean}
     */
    function isJquery(file) {
      return file.pattern.search(/jquery\.js/) !== -1;
    }

    /**
     * @description
     * Get the array index of the "karma-jasmine" framework plugin in the files configuration.
     *
     * @param  {Object[]} files
     * @return {Number}
     */
    function indexOfJasmine(files) {
      for (var i = 0, len = files.length; i < len; i++) {
        if (isJasmine(files[i])) {
          return i;
        }
      }
      return -1;
    }

    /**
     * @description
     * Get the array index of the jquery library in the files configuration.
     *
     * @param  {Object[]} files
     * @return {Number}
     */
    function indexOfJquery(files) {
      for (var i = 0, len = files.length; i < len; i++) {
        if (isJquery(files[i])) {
          return i;
        }
      }
      return -1;
    }

    /**
     * @description
     * Locate the Jasmine Jquery library.
     *
     * @return {String}
     */
    function getLibPath() {
      return require.resolve('jasmine-jquery');
    }

    /**
     * @description
     * Locate the jquery library.
     *
     * @return {String}
     */
    function getJqueryLibPath() {
      return require.resolve('jquery');
    }

    // Init
    // ---------------------------------------------------------------------------------------------

    var ix = indexOfJasmine(files);

    if (ix !== -1) {

      if(indexOfJquery(files) === -1) {
        insertAfter(files, ix, {
          pattern: getJqueryLibPath(),
          included: true,
          served: true,
          watched: false
        });
        ix++;
      }

      insertAfter(files, ix, {
        pattern: getLibPath(),
        included: true,
        served: true,
        watched: false
      });
    } else {
      throw new Error('"jasmine" needs to appear before "jasmine-jquery" in the "frameworks" array of your Karma configuration.');
    }


  }

  JasmineJquery.$inject = ['config.files'];

  module.exports = {
    'framework:jasmine-jquery-matchers': ['factory', JasmineJquery]
  };

}());
