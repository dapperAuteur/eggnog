(function () {
  'use strict';

  angular
    .module('eggnog')
    .controller('DisplaySongController', DisplaySongController);

  /** @ngInject */
  function DisplaySongController($interval, $scope) {
    var vm = this;
    var intervalTimer;
    var secondsPerMeasure = 2;

    vm.measuresPerPage = 5;

    function init() {
      vm.playing = false;
      vm.currentMeasures = [];
    }

    init();

    vm.start = function () {
      if (!song || song.length == 0) {
        return;
      }
      vm.playing = true;
      vm.measuresPlayed = 0;
      vm.startTime = Date.UTC;
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

    var song = [
      [
        {
          note: 0,
          position: 0
        },
        {
          note: 1,
          position: .25
        },
        {
          note: 2,
          position: .5
        },
        {
          note: 3,
          position: .75
        }
      ],
      [
        {
          note: 4,
          position: 0
        },
        {
          note: 5,
          position: .25
        },
        {
          note: 6,
          position: .5
        },
        {
          note: 7,
          position: .75
        }
      ],
      [
        {
          note: 0,
          position: 0
        },
        {
          note: 1,
          position: .25
        },
        {
          note: 2,
          position: .5
        },
        {
          note: 3,
          position: .75
        }
      ],
      [
        {
          note: 4,
          position: 0
        },
        {
          note: 5,
          position: .25
        },
        {
          note: 6,
          position: .5
        },
        {
          note: 7,
          position: .75
        }
      ],
      [
        {
          note: 0,
          position: 0
        },
        {
          note: 1,
          position: .25
        },
        {
          note: 2,
          position: .5
        },
        {
          note: 3,
          position: .75
        }
      ],
      [
        {
          note: 4,
          position: 0
        },
        {
          note: 5,
          position: .25
        },
        {
          note: 6,
          position: .5
        },
        {
          note: 7,
          position: .75
        }
      ],
      [
        {
          note: 0,
          position: 0
        },
        {
          note: 1,
          position: .25
        },
        {
          note: 2,
          position: .5
        },
        {
          note: 3,
          position: .75
        }
      ],
      [
        {
          note: 4,
          position: 0
        },
        {
          note: 5,
          position: .25
        },
        {
          note: 6,
          position: .5
        },
        {
          note: 7,
          position: .75
        }
      ]
    ];
  }
})();
