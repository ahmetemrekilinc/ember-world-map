'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon : function(){
    return true;
  },
  hintingEnabled: function() {
    return false;
  },


  included: function(app) {
    // workaround for https://github.com/ember-cli/ember-cli/issues/3718
    this._super.included.apply(this, arguments);

    //jvectormap
    app.import('vendor/css/jquery-jvectormap-2.0.3.css');
    app.import('vendor/js/jquery-jvectormap-2.0.3.min.js');
    app.import('vendor/js/jquery-jvectormap-world-mill.js');
    app.import('vendor/css/ember-world-map.css');

  },


};
