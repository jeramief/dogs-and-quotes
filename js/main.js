const dailyQuote = document.querySelector('#quote, #author')
// const refreshDaily = dailyQuote.addEventListener('load', getQuote())
function getQuote() {
  fetch("https://type.fit/api/quotes")
  .then(res =>  res.json())
  .then(data => {
    console.log(data)
    const randomNumber = Math.floor(Math.random() * 1644)
    quote.textContent = '"' + data[randomNumber].text + '"';
    author.textContent = '-' + data[randomNumber].author + '-';
    console.log(quote.textContent)
    console.log(author.textContent)
    console.log(randomNumber)
  })
  .catch(err => console.error(err))
}
getQuote()
setInterval(getQuote, 86400000);



const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')
const button = document.querySelector('#newImg')


fetch(BREEDS_URL)
  .then(res => res.json())
  .then(data => {
    const breedsObject = data.message; // Turn the message into an object
    const breedsArray = Object.keys(breedsObject) // Turn the object into an array
    for(let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option') // <option></option>
      option.value = breedsArray[i] // <option value='breed'></option>
      option.innerText = breedsArray[i] // <option value='breed'>breed</option>
      select.appendChild(option) // adds current <option> tag to the select box list of options
    }
  })
  .catch(err => console.error(err))



select.addEventListener('change', e => {
  let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`
  getDoggoImg(url)
})

const img = document.querySelector('.dog-img')

const getDoggoImg = url => {
    fetch(url) // going to the API url above
    .then(res => res.json()) // get JSON message back
    .then(data => {
      img.src = data.message // extract message from JSON and attach to img tag as new source
    })
   .catch(err => console.error(err))
}

button.addEventListener('click', e => {
  const selectedValue = select.value;
  fetch(`https://dog.ceo/api/breed/${selectedValue}/images/random`)
    .then(res => res.json())
    .then(data => {
      img.src = data.message
      console.log(data)
    })
    .catch(err => console.error(err))
})


const firstImage = document.querySelector(".dog-img");

firstImage.addEventListener("load", firstLoad());

function firstLoad() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      firstImage.src = data.message;
    })
    .catch(err => console.error(err));
}
