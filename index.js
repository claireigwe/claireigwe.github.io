let val = false;
  window.onscroll = () => {
    document.querySelectorAll(".white").forEach((i) => {
      i.getBoundingClientRect().top < window.innerHeight * (5 / 100) &&
      i.getBoundingClientRect().bottom > window.innerHeight * (5 / 100)
        ? (val = true) 
        : (val = false);
      return;
    });

    if (val) {
      nav.classList.remove("black");
      nav.classList.add("white_color");
      menu.style.color = "white";
      img.classList.add("nav_img");
    } else {
      nav.classList.add("black");
      nav.classList.remove("white_color");
      menu.style.color = "";
      img.classList.remove("nav_img");
    }
    if(menu_page.classList.contains("open")){
      nav.classList.remove("black");
      nav.classList.add("white_color");
    }
    val = false;
  };
  button.onclick = () => {
     if(img.classList.contains("close_img")){
        nav.classList.remove("white_color");
        nav.classList.add("black");
        menu.classList.remove("white_color");
        img.classList.remove("close_img");
        menu_page.classList.remove("open");
        menu_page.classList.add("close");
     }
     else{
    nav.classList.remove("black");
    nav.classList.add("white_color");
    menu.classList.add("white_color");
    img.classList.add("close_img");
    menu_page.classList.add("open")
  }
  };