'use strict';

const techImgArr = [
  "/img/tech/angular.png",
  "/img/tech/bower.png",
  "/img/tech/bootstrap.png",
  "/img/tech/browserify.png",
  "/img/tech/css3.png",
  "/img/tech/express.png",
  "/img/tech/firebase.png",
  "/img/tech/git.png",
  "/img/tech/github.png",
  "/img/tech/gulp.png",
  "/img/tech/html5.png",
  "/img/tech/jasmine.png",
  "/img/tech/jq2.png",
  "/img/tech/jslogo.png",
  "/img/tech/materialize.png",
  "/img/tech/mocha.png",
  "/img/tech/mongo.png",
  "/img/tech/nodejs.png",
  "/img/tech/npm.png",
  "/img/tech/pugface.png",
  "/img/tech/sass.png"
]

const buildPrint = (element, index) => {
  let techImg = `
    <div class='techImgBox'>
      <img src='${element}' class='techImg' />
    </div>
  `
  if (index <= 6) {
    $('.row1').append(techImg)
  } else if (index <= 13) {
    $('.row2').append(techImg)
  } else {
    $('.row3').append(techImg)
  }
}

const printStack = () => {
  techImgArr.forEach(buildPrint)
}

printStack()
