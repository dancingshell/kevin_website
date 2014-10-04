function hover(link) {
  if (link == "furniture") 
  {
    document.getElementById("header").style.backgroundColor="rgba(1, 155, 155, .4)";
    
  }
  else if (link == "art") 
  {
    document.getElementById("header").style.backgroundColor="rgba(120, 155, 35, .4)";
  }
  else if (link == "about") 
  {
    document.getElementById("header").style.backgroundColor="rgba(190, 160, 25, .4)";
  }
  document.getElementById(link).style.borderBottom="1px solid white";
}


function unhover(link) {
  document.getElementById(link).style.borderBottom="0";
}