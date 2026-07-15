// 1. Seleccionam los contenedores HTML
const namesContainer = document.querySelector(".names");
const emailContainer = document.querySelector(".email");
const joinedContainer = document.querySelector(".joined");
const navBar = document.querySelector("nav");
const navToggle = document.querySelector(".navToggle");
const navLinks = document.querySelectorAll(".navList");
const darkToggle = document.querySelector(".darkToggle");
const body = document.querySelector("body");   

navToggle.addEventListener('click',()=>{
    navBar.classList.toggle('close')
})  


navLinks.forEach(function(element){
    element.addEventListener('click', function(){
        navLinks.forEach((e)=>{
            e.classList.remove('active')
        })
        element.classList.add('active')
    })
})

darkToggle.addEventListener('click',()=>{
    body.classList.toggle('dark')

})

const fetchedData = fetch("./data.json")
    .then((data) => {
        return data.json(); 
    })
    .then((response) => {
        console.log(response); 
        const items = response.item;
        
        // 3. Variables vacías para armar el texto HTML
        let namesHTML = "";
        let emailHTML = ""; 
        let joinedHTML = "";

        // 4. Recorre el JSON y arma el bloque de spans
        items.forEach((element) => {
            namesHTML += `<span class="data-list">${element.name}</span>`;
            emailHTML += `<span class="data-list">${element.email}</span>`;
            joinedHTML += `<span class="data-list">${element.joined}</span>`; 
        });

        // 5. Inyecta los bloques dentro de los contenedores
        namesContainer.innerHTML += namesHTML;
        emailContainer.innerHTML += emailHTML;
        joinedContainer.innerHTML += joinedHTML; 
    })
    .catch((error) => console.error("Ocurrió un error leyendo el JSON:", error));