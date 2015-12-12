(function () {
  'use strict';

  angular
    .module('eggnog')
    .controller('DisplaySelectController', DisplaySelectController);

  /** @ngInject */
  function DisplaySelectController(Display) {
    var vm = this;

    vm.songs = Display.getSongs();

    console.log(vm.songs);
  }
})();
