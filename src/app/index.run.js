(function() {
  'use strict';

  angular
    .module('eggnog')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
