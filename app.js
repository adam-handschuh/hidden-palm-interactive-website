const buttons = document.querySelectorAll(".header_button");
const pages = document.querySelectorAll(".info_page");

buttons.forEach(button => {

  button.addEventListener("click", () => {
    // Hide all pages
    pages.forEach(page => page.classList.remove("show"));

    // Reset button styles
    buttons.forEach(btn => btn.classList.remove("active"));

    // Show selected page
    const targetPage = document.getElementById(button.dataset.target);
    targetPage.classList.add("show");

    // Highlight active button
    button.classList.add("active");
  });
});


const selector_buttons = document.querySelectorAll(".select_button");
const selector_underlay = document.getElementById("selector_underlay");
const trailer = document.getElementById("video_trailer");
const screenshot = document.getElementById("screenshot");
const fade_box = document.getElementById("fade_box");

selector_buttons.forEach(sButton =>{
  sButton.addEventListener("click", () =>{
    for(let i = 1; i <= 5; i ++){
      selector_underlay.classList.remove("_" + i);
    }
    selector_underlay.classList.add(sButton.id);

    reset_animation(fade_box);
    fade_box.style.animation = "fade-in .5s linear 1";
    if(sButton.id != "_1"){
      trailer.style.display = "none";
      screenshot.style.display = "block";
      screenshot.src = "images/screenshot" + sButton.id + ".jpg";
      trailer.pause();
    }else{
      trailer.play();
      trailer.style.display = "block";
      screenshot.style.display = "none";
    }
    fade_box.style.animation = "fade-out .5s linear 1";
  });
});

function reset_animation(element) {
  element.style.animation = 'none';
  element.offsetHeight;
  element.style.animation = null; 
}