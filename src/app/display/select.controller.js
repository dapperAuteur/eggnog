(function () {
  'use strict';

  angular
    .module('eggnog')
    .controller('DisplaySelectController', DisplaySelectController);

  /** @ngInject */
  function DisplaySelectController(Display) {
    var vm = this;
    //Display.loadSong();

    vm.songs = Display.getSongs();
  }
})();
