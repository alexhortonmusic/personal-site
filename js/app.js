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

//  modal logic ------------- 
const projectsArr = []

const Tradesies = {
  name: 'Tradesies',
  mainImg: '../img/tradesies-home.png',
  info: 'A gear-trading application for the restless musician.',
  img2: '../img/tradesies-community.png'
}

const SpaceRace = {
  name: 'Space Race',
  mainImg: '../img/space-home.png',
  info: 'Space Race is a live-action multiplayer game, supporting multiple users and rooms. Build using technologies such as Node.js, Express, Socket.io, and Pug, Space Race is a game where 2-4 players race their ships to the moon.',
  img2: '../img/space-game.png'
}

const Freddit = {
  name: 'Freddit',
  mainImg: '../img/freddit-home.png',
  info: 'Freddit is a social news aggregator and rating site. In other words, a clone of the basic features of Reddit.',
  img2: '../img/freddit-comment.png'
}

projectsArr.push(Tradesies, SpaceRace, Freddit)


const projectHTMLarr = []

projectsArr.forEach((project, index) => {
  const modalHTML = `
    <div class="modal-container">
      <h3>${project.name}</h3>
      <img for="modal-toggle" src="${project.mainImg}" alt="${project.name} Page" class='thing' style="width: 400px;">
      <label class="modal-backdrop" for="modal-toggle"></label>
      <div class="modal-content">
        <label class="modal-close" for="modal-toggle">&#x2715;</label>
        <h2>${project.name}</h2><hr />
        <p>${project.info}</p>
        <img src='${project.mainImg}' class='modalPic'/>
        <img src='${project.img2}' class='modalPic'/>
        <label class="modal-content-btn thing" for="modal-toggle">OK</label>
      </div>
    </div>
  `
  projectHTMLarr.push(modalHTML)
})

projectHTMLarr.forEach((projectHTML) => {
  $('.modalBox').append(projectHTML)
})

let clickedProject;

$('.thing').click(function() {
  console.log(this)
  clickedProject = $(this).attr('for')
  $('#' + labelID).toggleClass('active')
})
