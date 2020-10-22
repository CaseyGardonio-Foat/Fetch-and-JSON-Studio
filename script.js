window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            // console.log(json);
            const astronautList = document.getElementById("container");
            // let index = 0;
            for(let i=0; i<json.length; i++){
                astronautList.innerHTML += `
                    <div class='astronaut'>
                        <div class='bio'>
                            <h2>${json[i].firstName} ${json[i].lastName}</h2>
                            <ul>
                                <li>Active: ${json[i].active}</li>
                                <li>Hours in Space: ${json[i].hoursInSpace}</li>
                                <li>Skills: ${json[i].skills.join(', ')}</li>                            
                            </ul>
                        </div>
                        <img class='avatar' src=${json[i].picture}></img>
                    </div>    
                `;
            };
        //index = (index + 1) % json.length; 
        });
    });
});