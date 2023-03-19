$(".marquee").marquee({
    allowCss3Support: true,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1000,
    direction: "left",
    duplicated: true,
    duration: 10000,
    gap: 50,
  });
  
  var menuBtn = document.querySelectorAll(".menuBtn");
  const dropdownFunction = (e) => {
    e.preventDefault();
    document.querySelector(".mainHeader").classList.toggle("active");
  };
  
  for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", dropdownFunction);
  }
  