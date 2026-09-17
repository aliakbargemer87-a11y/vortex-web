/* ==========================
   VORTEX Language Switch
========================== */


const langBtn =
document.getElementById("language");


let english = false;



langBtn.addEventListener("click",()=>{


english = !english;



if(english){


document.documentElement.lang="en";

document.documentElement.dir="ltr";


langBtn.textContent="FA";



document.querySelector(".hero-text h3")
.textContent="Hello 👋";



document.querySelector(".hero-text h1")
.innerHTML=
"I am <span>Ali Akbar</span>";



document.querySelector(".hero-text p")
.textContent=
"Web Developer focused on creating modern websites and exploring Artificial Intelligence.";



document.querySelector(".about h2")
.textContent="About Me";



document.querySelector(".skills h2")
.textContent="Skills";



document.querySelector(".contact h2")
.textContent="Contact";



}else{


document.documentElement.lang="fa";

document.documentElement.dir="rtl";


langBtn.textContent="EN";



document.querySelector(".hero-text h3")
.textContent="سلام 👋";



document.querySelector(".hero-text h1")
.innerHTML=
"من <span>علی اکبر</span> هستم";



document.querySelector(".hero-text p")
.textContent=
"طراح سایت و علاقه‌مند به تکنولوژی، طراحی مدرن و هوش مصنوعی.";



document.querySelector(".about h2")
.textContent="درباره من";



document.querySelector(".skills h2")
.textContent="مهارت‌ها";



document.querySelector(".contact h2")
.textContent="تماس با من";


}



});