
darkBtn = document.getElementById("dark-mood");
ligthBtn = document.getElementById("ligth-mood");

darkBtn.addEventListener ("mouseover", event => {
    event.target.textContent = "dark";
    event.target.style.color = "white";
});
darkBtn.addEventListener ("mouseout", event => {
    event.target.textContent = "🌚";
});

ligthBtn.addEventListener ("mouseover", event => {
    event.target.textContent = "ligth";
});
ligthBtn.addEventListener ("mouseout", event => {
    event.target.textContent = "🌞";
});

function darkMood() {
    document.body.style.backgroundColor = "#000000c7";
}

function ligthMood() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"
}

let up = document.querySelector(".up");
window.onscroll = function () {
    if (window.scrollY >= 600) {
        up.style.display = 'block'
    } else {
        up.style.display = 'none'
    }
}
up.onclick = function () {
    window.scrollTo ({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}


    let toggler = document.querySelector(".toggle");
    let nav = document.querySelector("nav");
    let close = document.querySelector(".close");
    toggler.onclick = function () {
        nav.classList.add("open");
    };
    close.onclick = function () {
        this.parentElement.classList.remove("open");
    };
    document.onkeyup = function (e) {
        if (e.key === "Escape");
        nav.classList.remove("open");
    };

    // if you want to change the background-color of the body everytime we reload the page
        // random backgrpund color 
    // window.onload = ChangeBodyBG;

    // function ChangeBodyBG(){
    //     let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    //     let colorParts = [];
    //     for (let i = 0; i < 6; i++) {
    //         colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
    //     };
    //     let finalColor = `#${colorParts.join("")}`;
    //     // document.body.append(finalColor);
    //     document.body.style.backgroundColor = finalColor;
    // }


    window.onload = ChangeBodyBG;
    function ChangeBodyBG(){
        let hexArray = ['9EABA2', '0B6477', '118AB2', '7B2CBF', '800F2F', '22577A', 'FEEAFA', '1df139'];
        let colorParts = [];
            colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
        let finalColor = `#${colorParts}`;
        document.body.style.backgroundColor = finalColor;
    }



