(function () {
  'use strict';

  angular.module('eggnog')
    .factory('Song', ['$firebaseArray', '$firebaseObject', 'FIREBASE_URL', function ($firebaseArray, $firebaseObject, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL + "songs");

      var obj = {
        getSongs: function() {
          return $firebaseArray(ref);
        },

        getSongById: function(id) {
          return $firebaseObject(ref.child(id));
        },

        loadSong: function() {
          var newSongRef = ref.push();
          newSongRef.set(
            {
              "name": "Jingle Bells",
              "img": "http://ajournalofmusicalthings.com/wp-content/uploads/Jingle-Bells.jpg",
              "scale": [
                "C",
                "D",
                "E",
                "F",
                "G",
                "A",
                "B",
                "C"
              ],
              "duration": "[calculated based on # sub arrays]",
              "score": [
                [{
                  "note": 0,
                  "position": 0.25
                }]
              ]
            }
          );

        }

      };

      return obj;
    }]);
})();
