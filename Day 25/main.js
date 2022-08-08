const button = document.querySelectorAll('button')
const graphDisplay = document.querySelector('.graph-wrapper')
const graphTitle = document.querySelector('.graph-title')
const paragraph = document.querySelectorAll('p')

paragraph.forEach( paragraph => {

    if (paragraph.classList.contains('subtitle')) {
        paragraph.textContent = 'Currently,'
    }

    if (paragraph.classList.contains('feedback')) {
        paragraph.textContent = `we have ${countries.length} countries`
    }

} )


const populationFunction = () => {

    const totalPopulation = countries.reduce( (acc, cur) => acc + cur.population, 0)

    const populationCount = countries.sort( (a, b) => b.population - a.population).slice(0, 10)
    
    graphDisplay.innerHTML = `
    
    <span>World</span>
        
    <span class="range"; style=" width :100%"></span>
    
    <span>${totalPopulation.toLocaleString()}</span>
    
    `
    
    populationCount.forEach( value => {
    
        graphDisplay.innerHTML += `
        <span>${value.name}</span>
        
         <span class="range" style="width: ${Number(value.population * 100 / totalPopulation)}%"></span>
    
        <span>${(value.population).toLocaleString()}</span>
        `
    
    })

    graphTitle.textContent = '10 Most Populated Countries in the world'
}

const languagePopulation = () => {

    graphDisplay.innerHTML = ''

    const languageCount = countries.map( country => country.languages).flat().reduce( (acc, language) => {
        acc[language] ? acc[language] += 1 : acc[language] = 1; return acc
        }, {});
        
        const languageTotal = Object.entries(languageCount).reduce( (acc, cur) => acc + cur[1], 0 )
        
        const languageSort = Object.entries(languageCount).sort( (a, b) => b[1] - a[1] ).slice(0, 10).forEach( value => {
        
            graphDisplay.innerHTML += `<span>${value[0]}</span><span class='range' style="width:${Number((value[1] * 100)/100)}%; "></span><span>${value[1]}</span>`
        
        })
        graphTitle.textContent = '10 Most Spoken languages in the world'
        

}

button.forEach(btn => {

    btn.addEventListener('click', (e) => {
        const pressed = e.currentTarget.classList
        pressed.contains('population') ? populationFunction() :
        pressed.contains('languages') ? languagePopulation() :
        false
    })

} )

populationFunction()