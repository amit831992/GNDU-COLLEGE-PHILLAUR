function dropdownmenu(){
    var x = document.getElementById("ddmenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }

  }