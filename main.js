const usersContainer = document.getElementById("users");


function displayUsers(){

    usersContainer.innerHTML = "";


    data.results.forEach(function(user){


        let card = document.createElement("div");

        card.classList.add("card");


        card.innerHTML = `

            <img src="${user.picture.large}">

            <h2>
            ${user.name.first} ${user.name.last}
            </h2>

            <p>
            Age: ${user.dob.age}
            </p>

            <p>
            ${user.location.city}, 
            ${user.location.country}
            </p>

            <p>
            ${user.email}
            </p>

        `;


        usersContainer.appendChild(card);

    });

}


displayUsers();