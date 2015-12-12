(function() {
  'use strict';

  angular
    .module('eggnog')
    .controller('PlayController', PlayController);

  /** @ngInject */
  function PlayController(note, $state) {
    var vm = this;
    vm.note = note;

    vm.back = function () {
      $state.go('mobile.select');
    }
  }
})();
