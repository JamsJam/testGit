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
let sunPath ="M5,0L5.086,2.373L5.265,0.964L5.258,2.384L5.653,0.043L5.428,2.406L5.789,1.033L5.597,2.44L6.294,0.17L5.763,2.485L6.3,1.17L5.926,2.54L6.913,0.381L6.085,2.606L6.789,1.372L6.239,2.682L7.5,0.67L6.388,2.768L7.247,1.637L6.531,2.863L8.044,1.033L6.668,2.968L7.667,1.959L6.797,3.081L8.536,1.464L6.919,3.203L8.041,2.333L7.032,3.332L8.967,1.956L7.137,3.469L8.363,2.753L7.232,3.612L9.33,2.5L7.318,3.761L8.628,3.211L7.394,3.915L9.619,3.087L7.46,4.074L8.83,3.7L7.515,4.237L9.83,3.706L7.56,4.403L8.967,4.211L7.594,4.572L9.957,4.347L7.616,4.742L9.036,4.735L7.627,4.914L10,5L7.627,5.086L9.036,5.265L7.616,5.258L9.957,5.653L7.594,5.428L8.967,5.789L7.56,5.597L9.83,6.294L7.515,5.763L8.83,6.3L7.46,5.926L9.619,6.913L7.394,6.085L8.628,6.789L7.318,6.239L9.33,7.5L7.232,6.388L8.363,7.247L7.137,6.531L8.967,8.044L7.032,6.668L8.041,7.667L6.919,6.797L8.536,8.536L6.797,6.919L7.667,8.041L6.668,7.032L8.044,8.967L6.531,7.137L7.247,8.363L6.388,7.232L7.5,9.33L6.239,7.318L6.789,8.628L6.085,7.394L6.913,9.619L5.926,7.46L6.3,8.83L5.763,7.515L6.294,9.83L5.597,7.56L5.789,8.967L5.428,7.594L5.653,9.957L5.258,7.616L5.265,9.036L5.086,7.627L5,10L4.914,7.627L4.735,9.036L4.742,7.616L4.347,9.957L4.572,7.594L4.211,8.967L4.403,7.56L3.706,9.83L4.237,7.515L3.7,8.83L4.074,7.46L3.087,9.619L3.915,7.394L3.211,8.628L3.761,7.318L2.5,9.33L3.612,7.232L2.753,8.363L3.469,7.137L1.956,8.967L3.332,7.032L2.333,8.041L3.203,6.919L1.464,8.536L3.081,6.797L1.959,7.667L2.968,6.668L1.033,8.044L2.863,6.531L1.637,7.247L2.768,6.388L0.67,7.5L2.682,6.239L1.372,6.789L2.606,6.085L0.381,6.913L2.54,5.926L1.17,6.3L2.485,5.763L0.17,6.294L2.44,5.597L1.033,5.789L2.406,5.428L0.043,5.653L2.384,5.258L0.964,5.265L2.373,5.086L-0,5L2.373,4.914L0.964,4.735L2.384,4.742L0.043,4.347L2.406,4.572L1.033,4.211L2.44,4.403L0.17,3.706L2.485,4.237L1.17,3.7L2.54,4.074L0.381,3.087L2.606,3.915L1.372,3.211L2.682,3.761L0.67,2.5L2.768,3.612L1.637,2.753L2.863,3.469L1.033,1.956L2.968,3.332L1.959,2.333L3.081,3.203L1.464,1.464L3.203,3.081L2.333,1.959L3.332,2.968L1.956,1.033L3.469,2.863L2.753,1.637L3.612,2.768L2.5,0.67L3.761,2.682L3.211,1.372L3.915,2.606L3.087,0.381L4.074,2.54L3.7,1.17L4.237,2.485L3.706,0.17L4.403,2.44L4.211,1.033L4.572,2.406L4.347,0.043L4.742,2.384L4.735,0.964L4.914,2.373L5,0Z"

let moonPath = "M8.664,8.401C7.75,9.384 6.446,10 5,10C2.24,10 0,7.76 0,5C0,2.24 2.24,0 5,0C6.446,0 7.75,0.616 8.664,1.599C8.183,1.375 7.648,1.25 7.083,1.25C5.014,1.25 3.333,2.93 3.333,5C3.333,7.07 5.014,8.75 7.083,8.75C7.648,8.75 8.183,8.625 8.664,8.401Z"



let path = document.querySelector(".switchMode path")

let d = path.getAttributeNode("d")


    
switchMode.addEventListener("click", ()=>{
    

    if(localStorage.getItem("theme") == "dark"){

        path.setAttribute("style","fill :grey")
        path.setAttribute("d",moonPath)
        localStorage.setItem("theme", "");
        toggleDarkTheme("light", allElement)
        body.style.backgroundColor = "white"
        
    }
    else{
        path.setAttribute("style","fill :gold")
        path.setAttribute("d",sunPath) 
        localStorage.setItem("theme", "dark");
        toggleDarkTheme("dark", allElement)
        body.style.backgroundColor = "#2f2f2f"
        

    }
})
