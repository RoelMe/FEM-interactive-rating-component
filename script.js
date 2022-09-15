let rating = ''
const yourRating = document.querySelector('.your-rating')
const form = document.querySelector('form')
const choices = document.querySelectorAll('.rating__number')
const survey = document.querySelector('.card')
const thankYou = document.querySelector('.center')
for (let choice of choices) {
    console.log(choice.value)
    choice.addEventListener('click', () => {
        rating = choice.value
    })
}

form.addEventListener('submit', () => {
    yourRating.innerText = rating
    survey.classList.add('hidden')
    thankYou.classList.remove('hidden')
})