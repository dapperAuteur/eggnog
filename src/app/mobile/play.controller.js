(function() {
  'use strict';

  angular
    .module('eggnog')
    .controller('PlayController', PlayController);

  /** @ngInject */
  function PlayController($stateParams) {
    var vm = this;
    vm.note = $stateParams.note;
  }
})();
