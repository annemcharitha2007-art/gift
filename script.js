function openGift() {

    // Hide welcome screen
    document.getElementById("welcome").style.display = "none";

    // Show birthday screen
    document.getElementById("birthday").style.display = "flex";

    // Start celebration
    createHearts();
}


function showLetter() {

    document.getElementById("letter").style.display = "block";

    createHearts();
}


function createHearts() {

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        heart.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 5000);
    }
}