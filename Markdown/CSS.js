// BACKGROUND COLOR
const body = document.getElementsByTagName("body")[0];
const backgroundColorInput = document.getElementById("background-color");
const backgroundColorText = document.getElementById("background-color-text");

// COLOR INPUT
backgroundColorInput.addEventListener("input", 
  function(e) {
    const value = e.target.value; 
    body.style.backgroundColor = value;
    e.target.style.backgroundColor = value;
    backgroundColorText.value = value;
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





