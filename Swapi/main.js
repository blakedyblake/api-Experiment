let myButton = document.querySelector("button");

function clickButton() {
    //console.log("button clicked");
    axios.get("http://swapi.dev/api/planets/2").then(
        (result) => {
            let Alderaan = result.data
            let box = document.getElementById("info-box");
            let aggregate = ``;
            for(let info in Alderaan){
                console.log(info, Alderaan[info]);
                if(info === "residents"){
    
                    for(let j = 0; j < Alderaan[info].length; ++j){
                        i = Alderaan[info][j];

                        console.log(i)
                        
                        axios.get(i).then((result)=>{
                            box.innerHTML = box.innerHTML + `<p>Resident: ${result.data.name}</p>`;
                            
                        })
                        
                    }
                    
                    
                }
                else aggregate = aggregate + `<p>${info}: ${Alderaan[info]}</p>\n`
            }
            box.innerHTML = box.innerHTML + aggregate;
        }
    ).catch(()=>{
        console.log("errrrr")
    })

}




myButton.addEventListener('click', clickButton);
