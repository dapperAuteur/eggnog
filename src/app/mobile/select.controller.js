(function() {
  'use strict';

  angular
    .module('eggnog')
    .controller('SelectController', SelectController);

  /** @ngInject */
  function SelectController($state) {
    var vm = this;

    vm.goToPlayPage = function (note) {
      $state.go('mobile.play', { "note": note});
    };
  }
})();
