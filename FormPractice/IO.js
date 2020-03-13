//declare default preview view to variables 
const nameDefault = document.getElementById("name-profileDisplay").innerHTML;
const sectionDefault = document.getElementById("section-profileDisplay").innerHTML;
const positionDefault = document.getElementById("position-profileDisplay").innerHTML;
const descriptionDefault = document.getElementById("description-profileDisplay").innerHTML;
const portraitDefault = document.getElementById("Portrait").src;

//add tabindex
function addTabIndex(){
    let tools = document.querySelectorAll(".tool"); //select all tools 
    for (i=0; i < document.querySelectorAll(".tool").length; i++) {
        tools[i].tabIndex= `${i+1}`;
    }
}
addTabIndex();

function deleteAllDefaultTools(){
    //delete all default tools 
    let tools = document.querySelectorAll("#toolShed img"); //select all tools 
    for (j=0;j+1<tools.length;j++) {
        //if (tools[j].src == "../images/DefaultTool.png" ){
        if (tools[j].src.includes("DefaultTool") ){
            tools[j].remove();
        }
    }
}

function changePreview() { //userchanges input preview updated
    //form values
    let nameValue = document.forms["add-person"]["name"].value;
    let sectionValue = document.forms["add-person"]["section"].value;
    let positionValue = document.forms["add-person"]["position"].value;
    let descriptionValue = document.forms["add-person"]["description"].value;
    let portraitValue = document.forms["add-person"]["portrait-file"].value;
    
    //change preview 
    document.getElementById("name-profileDisplay").innerHTML = nameValue;
    document.getElementById("section-profileDisplay").innerHTML = sectionValue;
    document.getElementById("position-profileDisplay").innerHTML = positionValue;
    document.getElementById("description-profileDisplay").innerHTML = descriptionValue;
    //document.getElementById("tool-file").innerHTML = nameValue;
    //for files .value method doesnt get url, need to direct to dir manually
    if (portraitValue != "") {
    let portraitValue = document.forms["add-person"]["portrait-file"].files[0].name;
    document.getElementById("Portrait").src = `../images/${portraitValue}`;
    }

    //if form is empty change preview back to default 
    if (nameValue == "") { document.getElementById("name-profileDisplay").innerHTML = nameDefault; }
    if (sectionValue == "") { document.getElementById("section-profileDisplay").innerHTML = sectionDefault; }
    if (positionValue == "") { document.getElementById("position-profileDisplay").innerHTML = positionDefault; }
    if (descriptionValue == "") { document.getElementById("description-profileDisplay").innerHTML = descriptionDefault; }
    if (portraitValue == "") { document.getElementById("Portrait").src = portraitDefault; }
}

function addSection() {
    let sectionValue = document.forms["add-person"]["add-section"].value;
    let clone = document.forms["add-person"]["section"].lastElementChild.cloneNode();
    let shedField = document.getElementById("toolShed");

    //add section to section form drop down 
    document.forms["add-person"]["section"].appendChild(clone);
    clone.value = sectionValue; //set (value = innerhtml) 
    document.forms["add-person"]["section"].lastElementChild.innerHTML = sectionValue;

    //// add section to toolShed 
    shedField.appendChild(document.createElement('fieldset'));
    shedField.lastElementChild.appendChild(document.createElement('legend'));
    shedField.lastElementChild.lastElementChild.innerText = sectionValue;
    //add default tool
    shedField.lastElementChild.append(document.createElement("img"));
    shedField.lastElementChild.lastElementChild.className="tool";
    shedField.lastElementChild.lastElementChild.src="../images/DefaultTool.png"; 
    //add toolboxtext bottom not finished yet
    shedField.lastElementChild.appendChild(document.createElement("p"));
    shedField.lastElementChild.lastElementChild.innerText="Tool Box";
    shedField.lastElementChild.lastElementChild.className="toolBoxText";
}

function addTool() {
    let toolValue = document.forms["add-person"]["tool-file"].files[0].name; 
    let sectionValue = document.forms["add-person"]["section"].value;
    let toolShed = document.getElementById("toolShed");

    for (i=0 ; i < toolShed.children.length ; i++ ) {
        let potentialSection = toolShed.children[i];
        let legendValue = potentialSection.children[0].innerText;

        if (legendValue == sectionValue ) { //add new tool to selected toolBox
            let newTool = document.createElement("img");
            let clone = potentialSection.lastElementChild.cloneNode();
            potentialSection.appendChild(clone); //clone to BoxText and add it
            potentialSection.lastElementChild.innerHTML = 'Tool Box';
            newTool.id = toolValue.substring(0, toolValue.lastIndexOf('.'));
            newTool.className = "tool";
            newTool.src = `../images/${toolValue}`;
            potentialSection.replaceChild(newTool,potentialSection.lastElementChild.previousElementSibling);
        }   
    }
    deleteAllDefaultTools()
    addTabIndex();
}

/* function addPerson() { //save data from input page to object person
    function Person() {
        this.name = document.getElementById("name-profileDisplay"),
        this.section = document.getElementById("section-profileDisplay"),
        this.description = document.getElementById("position-profileDisplay"),
        this.profileimg = document.getElementById("Portrait"),
        this.toolimg = document.getElementById("name-toolimg")
    }
} */

const addPerson = () => {
let currentperson = (document.getElementById("profileDisplay"));
console.log(currentperson);
return currentperson;
}