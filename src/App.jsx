import './App.css'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import countriesArray from './countries'
import {
  getAllLanguages,
  getAllContinents,
  fisherYates,
  searchCountry
} from './algorithms'
import { useState, useEffect } from 'react'

const App = () => {
  const [countries, setCountries] = useState([])
  const [languages, setLanguages] = useState([])
  const [continents, setContinents] = useState([])

  const sortCountries = (e, option) => {
    e.preventDefault()

    let sortedCountries = [...countries]

    sortedCountries.sort((a, b) => {
      let popA = parseInt(a.population.replace(/,/g, ''))
      let popB = parseInt(b.population.replace(/,/g, ''))

      switch (option) {
        case 'alphabetical':
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        case 'largest':
          return popB - popA
        case 'smallest':
          return popA - popB
        default:
          return 0
      }
    })

    setCountries(sortedCountries)
  }

  const search = (e, query) => {
    e.preventDefault()

    setCountries(searchCountry(query, countriesArray))
  }

  const contFilter = (e, arr) => {
    e.preventDefault()

    let count

    if (!countries.length) {
      count = countriesArray
    } else {
      count = countries
    }

    let results = count.filter((country) => {
      const countryContinents = country.continent
        .split(',')
        .map((cont) => cont.trim())
      return countryContinents.some((cont) => arr.includes(cont))
    })

    setCountries(results)
  }

  const langFilter = (e, arr) => {
    e.preventDefault()

    let count

    if (!countries.length) {
      count = countriesArray
    } else {
      count = countries
    }

    let results = count.filter((country) => {
      const countryLanguages = country.language
        .split(',')
        .map((lang) => lang.trim())
      return countryLanguages.some((lang) => arr.includes(lang))
    })

    setCountries(results)
  }

  useEffect(() => {
    setCountries(fisherYates(countriesArray))
    let languagesArray = getAllLanguages(countriesArray)
    setLanguages(languagesArray)
    let continentsArray = getAllContinents(countriesArray)
    setContinents(continentsArray)
  }, [])

  return (
    <div className="flex-row">
      <SideBar
        search={search}
        sortCountries={sortCountries}
        languages={languages}
        continents={continents}
        contFilter={contFilter}
        langFilter={langFilter}
        setCountries={setCountries}
        countriesArray={countriesArray}
      />
      <MainContent countries={countries} />
    </div>
  )
}

export default App
