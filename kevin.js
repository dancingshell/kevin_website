function hover(link) {
  if (link == "furniture") 
  {
    document.getElementById("header").style.backgroundColor="rgba(1, 155, 155, .4)";
    document.getElementById("furniture").style.borderBottom="1px solid white";
  }
  else if (link == "art") 
  {
    document.getElementById("header").style.backgroundColor="rgba(120, 155, 35, .4)";
    document.getElementById("art").style.borderBottom="1px solid white";
  }
  else if (link == "about") 
  {
    document.getElementById("header").style.backgroundColor="rgba(190, 160, 25, .4)";
    document.getElementById("about").style.borderBottom="1px solid white";
  }
}


function unhover() {
  document.getElementById("furniture").style.borderBottom="0";
  document.getElementById("art").style.borderBottom="0";
  document.getElementById("about").style.borderBottom="0";
}

function click(links) {
    if (links == "furniture") 
  {
    document.getElementById("furniture").style.borderBottom="1px solid white";
  }
  else if (links == "art") 
  {
    document.getElementById("art").style.borderBottom="1px solid white";
  }
  else if (links == "about") 
  {
    document.getElementById("about").style.borderBottom="1px solid white";
  }
}