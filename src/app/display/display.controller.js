(function() {
  'use strict';

  angular
    .module('eggnog')
    .controller('DisplayController', DisplayController);

  /** @ngInject */
  function DisplayController($timeout, Display) {
    var vm = this;

    vm.songs = Display.getSongs();

    console.log(vm.songs);

  }
})();
