function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");

    if(menuBth.className === "nav-menu"){
        menuBth.className += " responsive";
    }else{
        menuBth.className = "nav-menu";
    }
}

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

var typingEffect = new Typed(".typedText",{
    strings : ["Coder."," Web Developer.","Flutter Developer."],

    loop: true,
    typeSpeed:100,
    backSpeed:200,
    backDelay:2000,

});

const sr = ScrollReveal({
    origin:"top",
    distance: "80px",
    duration:2000,
    reset:true,
});

sr.reveal(".featured-name",{delay:100});
sr.reveal(".text-info",{delay:200});
sr.reveal(".text-btn",{delay:200});
sr.reveal(".social_icons",{delay:200});
sr.reveal(".featured-image",{delay:320});

sr.reveal(".project-box",{interval:200});
sr.reveal(".box",{interval:200});
sr.reveal(".skill-card",{interval:300});
sr.reveal(".top-header",{});

const srLeft = ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
});

srLeft.reveal(".about-info",{delay:100});
srLeft.reveal(".contact-info",{delay:100});
// srRight.reveal(".hard-skill",{delay:100});


const srRight = ScrollReveal({
    origin:"right",
    distance:"80px",
    duration:2000,
    reset:true,
})

// srRight.reveal(".skill-card",{delay:100});

srRight.reveal(".form-control",{delay:100});
// srRight.reveal(".soft-skill",{delay:100});
// const srBottum = ScrollReveal({
//     origin:"bottum",
//     distance:"80px",
//     duration:2000,
//     reset:true,
// })
// srBottum.reveal(".skill-card",{delay:100});

/*  Active link  */ 

const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop-80,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");

        }


    })
    
}

window.addEventListener("scroll",scrollActive);

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("contactForm");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         const formData = new FormData(this);
//         const name = formData.get("name");
//         const email = formData.get("email");
//         const message = formData.get("message");

//         // Construct the mailto: URI
//         const subject = encodeURIComponent("New message from " + name);
//         const body = encodeURIComponent(message + "\n\nFrom: " + email);
//         const mailtoUri = "mailto:ashanisuru741@gmail.com" + "?subject=" + subject + "&body=" + body;

//         // Open the default email client with the mailto: URI
//         window.location.href = mailtoUri;
//     });
// });


