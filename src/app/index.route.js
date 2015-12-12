(function() {
  'use strict';

  angular
    .module('eggnog')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('display', {
        abstract: true,
        url: '/display',
        templateUrl: 'app/display/display.html'
      })
      .state('display.select', {
        url: '/select',
        templateUrl: 'app/display/select.html',
        controller: 'DisplaySelectController',
        controllerAs: 'select'
      })
      .state('display.song', {
        url: '/song',
        templateUrl: 'app/display/song.html',
        controller: 'DisplaySongController',
        controllerAs: 'song'
      })
      .state('mobile', {
        abstract: true,
        url: '/mobile',
        templateUrl: 'app/mobile/mobile.html'
      })
      .state('mobile.select', {
        url: '/select',
        templateUrl: 'app/mobile/select.html',
        controller: 'SelectController',
        controllerAs: 'select'
      })
      .state('mobile.play', {
        url: '/play/:note',
        templateUrl: 'app/mobile/play.html',
        controller: 'PlayController',
        controllerAs: 'play'
      });

    $urlRouterProvider.otherwise('/mobile/select');
  }

})();
