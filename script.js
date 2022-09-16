form.addEventListener('submit', (e) => {
    e.preventDefault()
    const ratingOptions = document.querySelectorAll('input[name="rating"]')
    let yourRating
            for (const ratingOption of ratingOptions) {
                if (ratingOption.checked) {
                    yourRating = ratingOption.value;
                    break;
                }
            }
    
        form.submit()
})