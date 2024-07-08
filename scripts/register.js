console.log("Hello Nico")
let pets = [];

//create pet constructor
function Pet(n,a,g,b,s,w){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.weight=w;
}

function isValid(aPet){
    let validation=true; //assuming the pet is valid
    if(aPet.name==""){
        validation=false; 
    }
    return validation;
}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("service").value;
    let inputWeight=document.getElementById("weight").value;


    //create object
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputWeight);

    if(isValid(newPet)){
        //pushing the newPet to the array
        pets.push(newPet);
        displayTable();
        displayPetCount();//this is a function
        clearForm();
    }    
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("service").value="";
}

function deletePet(aPet){
    console.log("Deleting pet...." + aPet);
    document.getElementById(aPet).remove();
    pets.splice(aPet,1);
    displayTable();
    displayPetCount();
}

function init(){
    //the initialization function
    let pet1 = new Pet("Scooby",22,"Male","Dane","Wash","5-25 Lbs");
    let pet2 = new Pet("Scrappy",30,"Male","Bulldog","Groom","75+ Lbs");
    let pet3 = new Pet("Tweety",19,"Female","Huski","Wash","26-50 Lbs");
    pets.push(pet1,pet2,pet3);
    displayPetCount();
    displayTable();
}

window.onload=init; //waiting to render HTML

