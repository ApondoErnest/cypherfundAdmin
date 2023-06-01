
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

let logoutTop = document.querySelector('.fa-user');

/*logoutTop.addEventListener('mouseover', () => {
    document.querySelector('.wrapper .main-container .top_navbar .hamburger a:nth-child(2)').style.display = 'block';
});

logoutTop.addEventListener('mouseleave', () => {
    document.querySelector('.wrapper .main-container .top_navbar .hamburger a:nth-child(2)').style.display = 'none';
});*/

logoutTop.addEventListener('onclick',update());
function update(){
  const User =prompt("enter your name");
  

}