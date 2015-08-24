/*
 * grunt-istanbul-combine
 * https://github.com/yomed/grunt-istanbul-combine
 *
 * Copyright (c) 2015 Yoni Medoff
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.registerTask('istanbul_combine', 'Combine istanbul coverage files', function () {
        require('istanbul-combine').sync(this.options());
    });
};
