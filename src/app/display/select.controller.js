(function () {
  'use strict';

  angular
    .module('eggnog')
    .controller('DisplaySelectController', DisplaySelectController);

  /** @ngInject */
  function DisplaySelectController(Song) {
    var vm = this;
    //Song.loadSong();

    vm.songs = Song.getSongs();
  }
})();
