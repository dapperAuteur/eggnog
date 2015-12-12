(function () {
  'use strict';

  angular
    .module('eggnog')
    .controller('DisplaySongController', DisplaySongController);

  /** @ngInject */
  function DisplaySongController($interval, $scope, $stateParams, $timeout, Song) {
    var vm = this;

    vm.selectedSong = Song.getSongById($stateParams.songId);

    console.log(vm.selectedSong);

    var intervalTimer;
    var secondsPerMeasure = 2;
    vm.measuresPerPage = 5;
    var song;

    function init() {
      vm.playing = false;
      vm.currentMeasures = [];
      vm.measuresPlayed = 0;
    }

    init();

    vm.start = function () {
      song = jingleBells;
      init();
      $timeout(function () {
        vm.play();
      }, 500);
    };

    vm.play = function () {
      if (!song || song.length == 0) {
        return;
      }
      vm.playing = true;
      vm.currentMeasures.push(song[vm.measuresPlayed]);

      if (intervalTimer) {
        $interval.cancel(intervalTimer);
      }
      intervalTimer = $interval(function () {
        vm.measuresPlayed++;
        if (vm.measuresPlayed < song.length) {
          vm.currentMeasures.splice(0,0,song[vm.measuresPlayed]);
        }
        else {
          vm.currentMeasures.splice(0,0,[]);
        }
        if (vm.measuresPlayed - 1 > vm.measuresPerPage) {
          vm.currentMeasures.pop();
        }
      }, secondsPerMeasure*1000);
    };

    $scope.$on('$destroy', function () {
      if (intervalTimer) {
        $interval.cancel(intervalTimer);
      }
    });

    var jingleBells = [
      [
        { note: 2, position: 0 },
        { note: 2, position: 0.25 },
        { note: 2, position: 0.5 }
      ],
      [
        { note: 2, position: 0 },
        { note: 2, position: 0.25 },
        { note: 2, position: 0.5 }
      ],
      [
        { note: 2, position: 0 },
        { note: 4, position: 0.25 },
        { note: 0, position: 0.5 },
        { note: 1, position: 0.75 }
      ],
      [
        { note: 2, position: 0 }
      ],
      [
        { note: 3, position: 0 },
        { note: 3, position: 0.25 },
        { note: 3, position: 0.5 },
        { note: 3, position: 0.75 }
      ],
      [
        { note: 3, position: 0 },
        { note: 2, position: 0.25 },
        { note: 2, position: 0.5 },
        { note: 2, position: 0.75 }
      ],
      [
        { note: 2, position: 0 },
        { note: 1, position: 0.25 },
        { note: 1, position: 0.5 },
        { note: 2, position: 0.75 }
      ],
      [
        { note: 1, position: 0 },
        { note: 4, position: 0.5 }
      ],
      [
        { note: 2, position: 0 },
        { note: 2, position: 0.25 },
        { note: 2, position: 0.5 }
      ],
      [
        { note: 2, position: 0 },
        { note: 2, position: 0.25 },
        { note: 2, position: 0.5 }
      ],
      [
        { note: 2, position: 0 },
        { note: 4, position: 0.25 },
        { note: 0, position: 0.5 },
        { note: 1, position: 0.75 }
      ],
      [
        { note: 2, position: 0 }
      ],
      [
        { note: 3, position: 0 },
        { note: 3, position: 0.25 },
        { note: 3, position: 0.5 },
        { note: 3, position: 0.75 }
      ],
      [
        { note: 3, position: 0 },
        { note: 2, position: 0.25 },
        { note: 2, position: 0.5 },
        { note: 2, position: 0.75 }
      ],
      [
        { note: 4, position: 0 },
        { note: 4, position: 0.25 },
        { note: 3, position: 0.5 },
        { note: 1, position: 0.75 }
      ],
      [
        { note: 0, position: 0 },
      ]
    ];
  }
})();
