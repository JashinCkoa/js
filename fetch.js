const nasaTitle = document.querySelector("#nasa__title");
const nasaImage = document.querySelector(".nasa__img");
const nasaCopyright = document.querySelector(".nasa__copyright");
const nasaExplanation = document.querySelector(".nasa__explanation");
const nasaDate = document.querySelector(".nasa__date");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
let URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
const today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let fullDate = `${today.getFullYear()}-${month}-${date}`;

getPictureOfDay(URL);

function getPictureOfDay(URL) {
  fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result);
      const { url, copyright, title, explanation, date } = result;
      nasaImage.src = url;
      nasaTitle.innerHTML = title;
      nasaExplanation.innerHTML = explanation;
      nasaCopyright.innerHTML = copyright;
      nasaDate.innerHTML = date;
    });
}

function prevDay() {
  fullDate = `${today.getFullYear()}-${month}-${--date}`;
  nasaURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${fullDate}`;
  if (date <= 1) {
    date = 31;
    --month;
  }

  getPictureOfDay(nasaURL);
}

function nextDay() {
  if (date == today.getDate()) {
    console.log("this is future");
  } else {
    fullDate = `${today.getFullYear()}-${month}-${++date}`;
    nasaURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${fullDate}`;
    if (date >= 30) {
      date = 0;
      ++month;
    }
  }

  getPictureOfDay(nasaURL);
}

btnPrev.addEventListener("click", prevDay);
btnNext.addEventListener("click", nextDay);
