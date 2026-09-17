/* ==========================
   VORTEX Portfolio
   Ali Akbar | JavaScript
========================== */


/* Loader */

window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);


    },1000);


});



/* Typing Effect */


const text = [

    "Web Developer",

    "Front-End Designer",

    "AI Enthusiast"

];


let index = 0;

let charIndex = 0;

let deleting = false;


const typing = document.querySelector(".typing");


function typeEffect(){


    let current = text[index];


    if(!deleting){


        typing.textContent =
        current.substring(0,charIndex++);


        if(charIndex > current.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }


    }else{


        typing.textContent =
        current.substring(0,charIndex--);


        if(charIndex < 0){

            deleting=false;

            index++;


            if(index >= text.length){

                index=0;

            }


        }


    }


    setTimeout(typeEffect,deleting ? 50 : 100);


}


typeEffect();




/* Navbar Scroll Effect */


const navbar =
document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        navbar.style.background=
        "rgba(10,10,10,.85)";


        navbar.style.borderRadius=
        "20px";


    }else{


        navbar.style.background=
        "transparent";


    }


});





/* Reveal Animation */


const sections =
document.querySelectorAll("section");


const observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform=
            "translateY(0)";


        }


    });


},
{

    threshold:.2

});



sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform=
    "translateY(50px)";

    section.style.transition=
    "1s";


    observer.observe(section);


});





/* Smooth Link Scroll */


document.querySelectorAll("a").forEach(link=>{


    link.addEventListener("click",(e)=>{


        const href =
        link.getAttribute("href");


        if(href && href.startsWith("#")){


            e.preventDefault();


            document.querySelector(href)
            ?.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});
/* Mobile Menu */


const menuBtn =
document.querySelector(".menu-btn");


const menu =
document.querySelector(".navbar ul");


menuBtn.addEventListener("click",()=>{


menu.classList.toggle("active");


});
/* Back To Top */


const topBtn =
document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


if(window.scrollY > 500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}


});



topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});/* Custom Cursor */


const cursor =
document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


cursor.style.left =
e.clientX + "px";


cursor.style.top =
e.clientY + "px";


});
