// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.querySelector(".doggos");

// function addNewDoggo() {
//   const promise = fetch(DOG_URL);
//   promise
//     .then(function(response) {
//       const processingPromise = response.json();
//       return processingPromise;
//     })
//     .then(function(processedResponse) {
//       const img = document.createElement("img");
//       img.src = processedResponse.message;
//       img.alt = "Cute doggo";
//       doggos.appendChild(img);
//     });
// }

// 

// window.onload = function () {
//   updateBitcoin()
// }

// function bitcoin() {
//   const promise = fetch("https://blockchain.info/q/24hrprice?cors=true");

//   promise.then(function (response) {
//       const processingPromise = response.json();
//       return processingPromise;

//     })
//     .then(function (processingPromise) {
//       let currentValue = `${processingPromise} USD`;
//       return updateBitcoin(currentValue);
//     })
// }


// function updateBitcoin(value) {

//   const span = document.getElementById('bitcoin-value')
//   span.innerHTML = value;

//   var time = 1000;

//   setTimeout(bitcoin, time)
// }

//Breeds
const breeds = document.querySelector("#breeds");
var btnLoad = document.querySelector("#btn-load");
const doggos = document.querySelector(".doggos");


var request = new XMLHttpRequest()

request.open('GET', 'https://dog.ceo/api/breeds/list/all', true)

request.onload = function () {

  var data = JSON.parse(this.response)
  var breedList = data.message;
  var result = Object.keys(breedList)

  result.forEach(breed => {
    option = document.createElement("option");
    option.value = breed;
    option.innerHTML = breed;
    breeds.appendChild(option);
  })
}

request.send();

btnLoad.onclick = function (e) {
  var breed = document.querySelector("#breeds").value;
  loadBreedImages(breed);
};

function loadBreedImages(breed) {
  // See https://dog.ceo/dog-api/documentation/breed
  // Use the imageCount and breed variables to create our URL 
  var imageCount = document.querySelector("#imageCount").value;
  var url = `https://dog.ceo/api/breed/${breed}/images/random/${imageCount}`;
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var response = JSON.parse(this.responseText);
    result = response.message;

    result.forEach(breed => {
      const img = document.createElement("img");
      img.src = breed;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    })


  }


  xhr.open("GET", url);
  xhr.send();
}