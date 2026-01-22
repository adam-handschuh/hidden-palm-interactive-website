// Set up info-page buttons
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


// Set up games-gallery
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
      screenshot.src = "images/screenshot" + sButton.id + ".png";
      trailer.pause();
      fade_box.style.display = "block";
    }else{
      trailer.play();
      trailer.style.display = "block";
      screenshot.style.display = "none";
      fade_box.style.display = "none";
    }
    fade_box.style.animation = "fade-out .5s linear 1";
  });
});

// Function to trigger reset animation
function reset_animation(element) {
  element.style.animation = 'none';
  element.offsetHeight;
  element.style.animation = null; 
}


// Load blogs
function loadBlog(blog_name){
  fetch("/blogs/blogs_" + blog_name + ".html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("blog_content").innerHTML = html;
  });
}

// Blog selection
const blog_buttons = document.querySelectorAll(".blog_button");
const blog_content = document.getElementById("blog_content");

blog_buttons.forEach(blog_button =>{
  blog_button.addEventListener("click",() =>{
    loadBlog(blog_button.id);
  });
});



function setup(){
  loadBlog("welcome");
  document.getElementById("home_page").classList.add("show");
  document.getElementById("home_button").classList.add("active");
}


window.onload = setup;

