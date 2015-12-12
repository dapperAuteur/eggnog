(function() {
  'use strict';

  angular
    .module('eggnog')
    .controller('PlayController', PlayController);

  /** @ngInject */
  function PlayController(note, $state, SoundsService) {
    var vm = this;
    vm.note = note;
    var colors = [
      'btn-darkred',
      'btn-orange',
      'btn-yellow',
      'btn-success',
      'btn-primary',
      'btn-indigo',
      'btn-violet',
      'btn-lightred'
    ];
    vm.color = colors[note];

    vm.playNote = function () {
      SoundsService.playNote(vm.note);
    };

    vm.back = function () {
      $state.go('mobile.select');
    }
  }
})();
