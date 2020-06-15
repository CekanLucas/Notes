// BACKGROUND COLOR
const body = document.getElementsByTagName("body")[0];
const backgroundColorInput = document.getElementById("background-color");
const backgroundColorText = document.getElementById("background-color-text");
const color = document.getElementsByClassName("color")[0];

// NOTE: for input:color value can only be six digit hexadecimal value eg. "#ff0011"

// COLOR INPUT
backgroundColorInput.addEventListener("input", 
  function(e) {
    const value = e.target.value;
    // background color
    body.style.backgroundColor = value;
    color.style.backgroundColor = value;
    // text value
    backgroundColorText.innerHTML = value;
    backgroundColorText.style.color = value;
  }  
)

// TEXT COLOR INPUT
backgroundColorText.addEventListener("input", 
  function(e) {
    const value = e.target.value; 
    body.style.backgroundColor = value;
    backgroundColorInput.style.backgroundColor = value;
    e.target.style.color = value;
  }  
)





