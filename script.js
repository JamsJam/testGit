//? ---- variable ----

let switchMode = document.querySelector(".switchMode");
let body = document.querySelector("body")
let card = document.querySelector('.card')
let allElement = document.querySelectorAll('*')




//script dark mode





//? ---- function ----



function toggleDarkTheme(mode,...elements ){
    
    elements.forEach(element => {
        
        element.forEach(tag => {
            
            let classes = tag.classList['value'].split(' ')
            // "card card--light"
                
            if (mode == "dark") {
                
                classes.forEach(classe => {
                    
                    if (classe.match(/--light$/)){
                        tag.classList.replace(classe, classe.slice(0, -7)+"--dark")
                    }
                });

            } else {
                classes.forEach(classe => {
                    
                    if (classe.match(/--dark$/)){
                        tag.classList.replace(classe, classe.slice(0, -6)+"--light")
                    }
                    
                })
            }
        })
    });
}




//? ---- evenement ----


buttonSwitch.addEventListener("click", ()=>{
    iconLight.classList.toggle("")
    iconLight.classList.toggle("")
    
    
})


    
switchMode.addEventListener("click", ()=>{
    

    if(localStorage.getItem("theme") == "dark"){
        
        localStorage.setItem("theme", "");
        toggleDarkTheme("light", allElement)
        
    }
    else{
        localStorage.setItem("theme", "dark");
        toggleDarkTheme("dark", allElement)
        

    }
})
