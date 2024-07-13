console.log("Hello");

//-----header-------
$("#p-header").css("text-align","center").css;
$(".header").css("background","black").css("color","white");
$("#nav").css("color","white").css;
//-----main--------
$("#main").css("background","lightgray").css;
$(".title").css("text-align","center").css;
$("#input-box").css("margin-top","30px").css;

//----button-------
$(".btn-container").css("display","flex").css("flex-direction","column").css("margin-left","40%").css("margin-right","40%").css;
$("#btn").css("background","black").css("color","red").css("font-size","20px").css("border-radius","40%").css;


//constructor
function Service(description, price){
    this.description = description;
    this.price = price;
}

//function
function register(){
    //getting description from input
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    
    console.log(inputDescription);
    console.log(inputPrice);

    let newService = new Service(inputDescription, inputPrice);

//validate function
    let isValid = isValidService(newService); 
    console.log("isValid = ", isValid)

    if(isValid == true ){
    }
    //save value in local storeage
}

function isValidService(newService){
        //do validations
        //console.log(newService.description)

        let isValidDescription = true;
        let isValidPrice = true;

        if(newService.description == ""){
            isValidDescription = false
            $("#txtDescription").css("background","red")

        }else{
            isValidDescription = true
            $("#txtDescription").css("background", "none")
            $("#txtDescription").val("")
    }

    if(newService.price == "") {
        isValidPrice = false
        $("#txtPrice").css("background", "red")

        
    }else {
        isValidPrice = true
        $("#txtPrice").css("background","none")
        $("#txtPrice").val("")
    }
    console.log("isValidDescription", isValidDescription)
    console.log("isValidPrice", isValidPrice)

    //return a boolean
    return isValidDescription && isValidPrice
}






//------Operability------
function Service(description, price){
    this.description = description;
    this.price = price;
}

//function register(){
    //console.log("CCC")
   // let inputName=document.getElementById("name").value;
   // let inputBreed=document.getElementById("breed").value;
   // let inputService=document.getElementById("service").value;
    //--object--
   // let newPet = new Pet(inputName,inputBreed,inputService);
  //  if(isValid(newPet)){
   //     pets.push(newPet);
   // }
//}





//------NOTES--------
$(".form-container").css("margin-left","25%").css("margin-right","25%").css;
//======ID's=====
//document.getElementById("red") //Javascript
//$("red")   //jQuery

//#id   method   key       value
$("#red").css("background","red").css("color","white");
$("#blue").css("background","blue").css("color","yellow");
$("#pink").css("background","green").css("color","aqua");

//===== class ====
$(".title-two").css("color","green").css("font-size","48px");
$(".with-border").css("border", "5px dashed black");

$(".my-border").click(function () {
    console.log("You clicked my-border");
    $(this).css("border", "5px dashed black");
    $(this).addClass("bg-green");
});

//===== TAGS ====
var myTitle = $("h3"); //variable
myTitle.css("background","gray").css("cursor","pointer");
//events
myTitle.mouseover(function () {
    $(this).css("background","green");
});
myTitle.mouseout(function () {
    $(this).css("background","lightgray");
});

