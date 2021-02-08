fetch("https://restcountries.eu/rest/v2/all")
.then((respo)=>respo.json())
.then((data)=>countryDisplay(data))

const countryDisplay = countries=>{
    const ul = document.getElementById("country-list")
    for (let i=0;i<countries.length;i++){
        const country = countries[i];
        const countryName= country.name
        const creatLi= document.createElement("li")
         creatLi.innerText= countryName
         ul.appendChild(creatLi)
    }

}
