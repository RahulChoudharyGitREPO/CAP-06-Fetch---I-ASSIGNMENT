fetch('https://reqres.in/api/users')
    .then((response) => {
        return response.json();
    })
    .then((user) => {
        let data1 = "";
        user.data.map((values) => {
            data1 += `<div class="card">
                <img src="${values.avatar}" alt="Cat Image">
                <h2 class="firstname">${values.first_name}</h2>
                <p class="lastname">${values.last_name}</p>
                <p class="email">${values.email}</p>
            </div>`;
        });

        
        document.querySelector(".cards").innerHTML = data1;
    })
    .catch((err) => {
        console.error(err);
    });
