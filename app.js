fetch("https://restcountries.eu/rest/v2/all")
    .then((respo) => respo.json())
    .then((data) => countryDisplay(data))

    //using shortcut
const countryDisplay = countries => {
    const div = document.getElementById("country-list")
    countries.forEach(country => {
        const countryName = country.name
        const countryDiv = document.createElement("div")
        countryDiv.className="country"
        const countryInfo = `
        <h1 class="desh"> ${countryName} </h1>
        <h3 class="rajdhani"> ${country.capital}</h3>
        `
        countryDiv.innerHTML = countryInfo;
        div.appendChild(countryDiv)

    });

    //trying with details
    // for (let i=0;i<countries.length;i++){
    //     const country = countries[i];
    //     const countryName= country.name
    //     const countryDiv = document.createElement("div")
    //     const creatHead= document.createElement("h1")
    //      creatHead.innerText= countryName
    //      countryDiv.appendChild(creatHead)
    //      const paragraph= document.createElement("p")
    //      paragraph.innerText=country.capital
    //      countryDiv.appendChild(paragraph)

    //      div.appendChild(countryDiv)
    // }

}
