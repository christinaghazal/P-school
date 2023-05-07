//menu on small screen 
let navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
//countdown timer
let countDown = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  // get date now
  let dateNow = new Date().getTime();
  // find date difference between now and countdown date
  let dateDiff = countDown - dateNow;
  // get time unit
  // math.floor to make it positive number without fractions
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 66));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((dateDiff % (1000 * 60)) / 1000);
  // .ineerhtml sets or return the HTML content (innerHTML) of anelements
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".second").innerHTML = second;

  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);

// scroll botton
let btn = document.querySelector("botton");
window.onscroll = function () {
  // scrollY for horizone scroll
  if (window.scrollY >= 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
};
