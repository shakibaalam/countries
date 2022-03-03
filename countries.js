// fetch data and load

const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
// call for loading

loadCountries();

// display loaded countries

const displayCountries = countries => {
    // data array te tai for 
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countriesDiv.textContent = '';
    countries.forEach(country => {
        // console.log(country.name.common);
        const div = document.createElement('div');
        div.classList.add('country');
        // const h2 = document.createElement('h2');
        // const p = document.createElement('p');
        // h2.innerText = `Name: ${country.name.common}`;
        // div.appendChild(h2);
        // p.innerText = `Capital: ${country.capital}`;
        // div.appendChild(p);

        // second rule

        div.innerHTML = `
        <h2>Name: ${country.name}</h2>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadDetailsByName('${country.name}')">Details</button>
        `
        countriesDiv.appendChild(div);

    });
}
// details e onclick krle j data load hbe

const loadDetailsByName = name => {
    // console.log(name);
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetailsByName(data[0]))
}

// details e oclick krle j data display hbe

const displayDetailsByName = country => {
    // console.log(country)
    const countrySection = document.getElementById('country-detail');
    countrySection.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Name: ${country.name}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Area: ${country.area}</p>
        <p>Independent: ${country.independent}</p>
        <p>Population: ${country.population}</p>
        <img width="200px" src="${country.flag}">
        `
    countrySection.appendChild(div);
}
