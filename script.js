
//toggle content displayed based on the menu item selected

function openContent(evt, content) {
    let i, menucontent, menulinks;
    menucontent = document.getElementsByClassName("menucontent");
    for (i = 0; i < menucontent.length; i++) {
      menucontent[i].style.display = "none";
    }
    menulinks = document.getElementsByClassName("menulinks");
    for (i = 0; i < menulinks.length; i++) {
      menulinks[i].className = menulinks[i].className.replace(" active", "");
    }
    document.getElementById(content).style.display = "block";
    evt.currentTarget.className += " active";
}

//document.getElementById("defaultSelect").addEventListener('click', openContent(String(document.getElementById("Home"))));
  
  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultSelect").click();  