'use strict';

const app = angular.module('portfolio', ['ngRoute'])
  .config($routeProvider =>
    $routeProvider
      .when('/', {
        controller: 'TecCtrl',
        templateUrl: 'partials/tech.html'
      })
  )

  const techImgArr = [
    {
      "imgUrl": "/img/tech/angular.png"
    },
    {
      "imgUrl": "/img/tech/bower.png"
    },
    {
      "imgUrl": "/img/tech/browserify.png"
    },
    {
      "imgUrl": "/img/tech/css3.png"
    },
    {
      "imgUrl": "/img/tech/express.png"
    },
    {
      "imgUrl": "/img/tech/firebase.png"
    },
    {
      "imgUrl": "/img/tech/git.png"
    },
    {
      "imgUrl": "/img/tech/github.png"
    },
    {
      "imgUrl": "/img/tech/gulp.png"
    },
    {
      "imgUrl": "/img/tech/html5.png"
    },
    {
      "imgUrl": "/img/tech/jasmine.png"
    },
    {
      "imgUrl": "/img/tech/jq2.png"
    },
    {
      "imgUrl": "/img/tech/jslogo.png"
    },
    {
      "imgUrl": "/img/tech/mocha.png"
    },
    {
      "imgUrl": "/img/tech/mongo.png"
    },
    {
      "imgUrl": "/img/tech/nodejs.png"
    },
    {
      "imgUrl": "/img/tech/npm.png"
    },
    {
      "imgUrl": "/img/tech/pugface.png"
    },
    {
      "imgUrl": "/img/tech/sass.png"
    }
  ]
  // const techImgArr = [
  //   "/img/tech/angular.png",
  //   "/img/tech/bower.png",
  //   "/img/tech/browserify.png",
  //   "/img/tech/css3.png",
  //   "/img/tech/express.png",
  //   "/img/tech/firebase.png",
  //   "/img/tech/git.png",
  //   "/img/tech/github.png",
  //   "/img/tech/gulp.png",
  //   "/img/tech/html5.png",
  //   "/img/tech/jasmine.png",
  //   "/img/tech/jq2.png",
  //   "/img/tech/jslogo.png",
  //   "/img/tech/mocha.png",
  //   "/img/tech/mongo.png",
  //   "/img/tech/nodejs.png",
  //   "/img/tech/npm.png",
  //   "/img/tech/pugface.png",
  //   "/img/tech/sass.png"
  // ]

  let arr1 = [],
  arr2 = [],
  arr3 = [],
  arr4 = [],
  arr5 = []

  const splitImgArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (i < 4) {
        arr1.push(arr[i])
      } else if (i < 8 && i > 3) {
        arr2.push(arr[i])
      } else if (i < 12 && i > 7) {
        arr3.push(arr[i])
      } else if (i < 16 && i > 11){
        arr4.push(arr[i])
      } else {
        arr5.push(arr[i])
      }
    }
    console.log('arr1', arr1)
    console.log('arr2', arr2)
    console.log('arr3', arr3)
    console.log('arr4', arr4)
    console.log('arr5', arr5)
  }

  splitImgArr(techImgArr)

app.controller('TecCtrl', function ($scope) {
  $scope.arr1 = arr1
  $scope.arr2 = arr2
  $scope.arr3 = arr3
  $scope.arr4 = arr4
})
