// Menu
let menu = document.getElementById("menu");
let menuList = document.querySelector(".nav-list");
menu.addEventListener("click", () => {
  menuList.classList.toggle("show");
  if (menu.classList.contains("open")) {
    menu.classList.replace("open", "close");
  } else {
    menu.classList.replace("close", "open");
  }
});
let remove = () => {
  if (window.innerWidth <= 800) {
    menuList.classList.toggle("show");
  }
  menu.classList.replace("close", "open");
};

function display(val) {
  if (val == "Andhra Pradesh") {
    document.getElementById("andhraPradesh").style.display = "block";
  } else if (val == "Arunachal Pradesh") {
    document.getElementById("arunachalPradesh").style.display = "block";
  } else if (val == "Goa") {
    document.getElementById("goa").style.display = "block";
  } else if (val == "Punjab") {
    document.getElementById("punjab").style.display = "block";
  } else if (val == "Tripura") {
    document.getElementById("tripura").style.display = "block";
  } else if (val == "Telangana") {
    document.getElementById("telangana").style.display = "block";
  } else if (val == "Karnatka") {
    document.getElementById("karnatka").style.display = "block";
  } else if (val == "Maharashtra") {
    document.getElementById("maharashtra").style.display = "block";
  } else if (val == "Assam") {
    document.getElementById("assam").style.display = "block";
  } else if (val == "Karnatka") {
    document.getElementById("karnatka").style.display = "block";
  } else if (val == "Delhi") {
    document.getElementById("mMaharashtra").style.display = "block";
  }
  if (val == "Chattisgarh") {
    document.getElementById("chattisgarh").style.display = "block";
  }
  if (val == "Chandigarh") {
    document.getElementById("chandigarh").style.display = "block";
  }
  if (val == "Bihar") {
    document.getElementById("bihar").style.display = "block";
  }

  if (val == "Gujarat") {
    document.getElementById("gujarat").style.display = "block";
  }
  if (val == "Himachal Pradesh") {
    document.getElementById("himachalPradesh").style.display = "block";
  }
  if (val == "Haryana") {
    document.getElementById("haryana").style.display = "block";
  }
  if (val == "Rajasthan") {
    document.getElementById("rajasthan").style.display = "block";
  }
}
