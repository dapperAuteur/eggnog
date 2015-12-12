(function () {
  'use strict';

  angular.module('eggnog')
    .factory('Display', ['$firebaseArray', 'FIREBASE_URL', function ($firebaseArray, FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL + "songs");

      var obj = {
        getSongs: function() {
          return $firebaseArray(ref);
        }

      };

      return obj;
    }]);
})();
