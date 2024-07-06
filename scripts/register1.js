console.log("Hello Nico")
let pets = [];

//create pet constructor
function Pet(n,a,g,b,s){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
}

function displayPetCount(){
    console.log(pets.length)
}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("service").value;

//create object
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);

//pushing the newPet to the array
    pets.push(newPet);
    console.log(pets);
    displayPetCount();
}