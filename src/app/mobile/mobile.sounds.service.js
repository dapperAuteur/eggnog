(function () {
  'use strict';

  angular.module('eggnog')
    .factory('SoundsService', [function () {
      var audio;
      function initAudio() {
        audio = [
          new Audio('/assets/notes/0.mp3'),
          new Audio('/assets/notes/1.mp3'),
          new Audio('/assets/notes/2.mp3'),
          new Audio('/assets/notes/3.mp3'),
          new Audio('/assets/notes/4.mp3'),
          new Audio('/assets/notes/5.mp3'),
          new Audio('/assets/notes/6.mp3'),
          new Audio('/assets/notes/7.mp3')
        ]
      }
      initAudio();
      var obj = {
        playNote: function(note) {
          console.log(audio);
          console.log(audio[note]);
          console.log(audio[note].play);
          if (note >= 0 && note < 8) {
            audio[note].play();
          }
        }
      };
      return obj;
    }]);
})();
