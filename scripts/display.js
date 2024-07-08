function displayPetCards(){
    let card=""; //creating a variable
    for(let i=0; i<pets.length;i++){ //travel the array 
        let pet = pets[i];
        card+=`
        <div class="pet">
            <h6>${pet.name}</h6>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.breed}</p>
            <p>${pet.service}</p>
            <p>${pet.weight}</p>
        </div>`;
    }
    document.getElementById("pets").innerHTML=card;
}

function displayTable(){
    let row="";//creating a var
    for(let i=0;i<pets.length;i++){//travel the array
        let pet = pets[i];//getting each pet on the array (one by one)
        row+=`
        <tr id="${i}">
            <td>${i}</td>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.weight}</td>

            <td><button onclick="deletePet(${i});">Delete</button></td>
        </tr>
        `;
    }
    document.getElementById("petTable").innerHTML=row;
}

function displayPetCount(){
    document.getElementById("total").innerHTML="Total:" + pets.length;
}

