const buttonElements = document.getElementsByClassName("question-link");

for(i=0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener("click", function(e) {
        const activeButtons = document.getElementsByClassName(".active")
        for(i=0; i < activeButtons.length || activeButtons == undefined; i++) {
            const answerTextRemoval = activeButtons[i].parentElement.nextElementSibling;
            const sideImageRemoval = activeButtons[i].nextElementSibling;

            activeButtons[i].classList.remove(".active");
            answerTextRemoval.style.display = "none";
            sideImageRemoval.style.backgroundImage = "url('./assets/images/icon-plus.svg')";
        };
        
        const buttonAnswer = e.target.parentElement.nextElementSibling;
        const sideImage = e.target.nextElementSibling;
        
        e.target.classList.add('.active')
        buttonAnswer.style.display = "block";
        sideImage.style.backgroundImage = "url('./assets/images/icon-minus.svg')"
    })
}