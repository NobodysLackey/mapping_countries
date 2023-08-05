import { useState } from 'react'
import { fisherYates } from '../algorithms'

const SideBar = ({
  setCountries,
  countriesArray,
  search,
  sortCountries,
  continents,
  contFilter,
  langFilter,
  languages,
  bonus,
  setBonus
}) => {
  const initialHidden = {
    search: false,
    sort: false,
    continent: false,
    language: false
  }

  const [query, setQuery] = useState('')
  const [option, setOption] = useState('')
  const [queryArray, setQueryArray] = useState([])
  const [hidden, setHidden] = useState(initialHidden)

  const reset = () => {
    setCountries(fisherYates(countriesArray))
    setQuery('')
    setQueryArray([])
    setHidden(initialHidden)
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  const handleOptionChange = (e) => {
    setOption(e.target.value)
  }

  const handleQueryArrayChange = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setQueryArray((prevQueryArray) => [...prevQueryArray, value])
    } else {
      setQueryArray((prevQueryArray) =>
        prevQueryArray.filter((item) => item !== value)
      )
    }
  }

  return (
    <div className="side-bar">
      <div className="side-info">
        <h1>SideBar</h1>
        <h2>
          Using this app, we'll display an array of country data by mapping
          through it and returning some JSX. When done correctly, we should see
          a full list of countries on the right side of our screen!
        </h2>
        <button id="bonus-button" onClick={() => setBonus(!bonus)}>Bonus</button>
        <div className='bonus-bar'>
          <h3
            onClick={() => setHidden({ ...hidden, search: !hidden.search })}
            className="side-bar-title"
          >
            Search by Country Name
          </h3>
          {hidden.search ? (
            <form onSubmit={(e) => search(e, query)} className="search">
              <input
                placeholder="Country Name"
                type="text"
                name="query"
                id="query"
                value={query}
                onChange={handleQueryChange}
                autoComplete="off"
              />
              <button type="submit">Search</button>
            </form>
          ) : null}
          <h3
            onClick={() => setHidden({ ...hidden, sort: !hidden.sort })}
            className="side-bar-title"
          >
            Sort
          </h3>
          {hidden.sort ? (
            <form onSubmit={(e) => sortCountries(e, option)} className="sort">
              <div className="sort-options">
                <div className="sort-choice">
                  <select id="sort" name="sort" onChange={handleOptionChange}>
                    <option value="alphabetical">Alphabetically</option>
                    <option value="largest">By Largest Population</option>
                    <option value="smallest">By Smallest Population</option>
                  </select>
                </div>
              </div>
              <button type="submit">Sort</button>
            </form>
          ) : null}
          <h3
            onClick={() =>
              setHidden({ ...hidden, continent: !hidden.continent })
            }
            className="side-bar-title"
          >
            Filter by Continent
          </h3>
          {hidden.continent ? (
            <form
              onSubmit={(e) => contFilter(e, queryArray)}
              className="cont-search"
            >
              <div className="cont-options">
                {continents.map((continent, index) => (
                  <div key={index} className="cont-choice">
                    <input
                      type="checkbox"
                      id={`${continent}${index}`}
                      value={continent}
                      name={`${continent}${index}`}
                      checked={queryArray.includes(continent)}
                      onChange={handleQueryArrayChange}
                    />
                    <label htmlFor={`${continent}${index}`}>{continent}</label>
                  </div>
                ))}
              </div>
              <button type="submit">Filter</button>
            </form>
          ) : null}
          <h3
            onClick={() => setHidden({ ...hidden, language: !hidden.language })}
            className="side-bar-title"
          >
            Filter by Spoken Language
          </h3>
          {hidden.language ? (
            <form
              onSubmit={(e) => langFilter(e, queryArray)}
              className="lang-search"
            >
              <div className="lang-options">
                {languages.map((language, index) => (
                  <div key={index} className="lang-choice">
                    <input
                      type="checkbox"
                      id={`${language}${index}`}
                      value={language}
                      name={`${language}${index}`}
                      checked={queryArray.includes(language)}
                      onChange={handleQueryArrayChange}
                    />
                    <label htmlFor={`${language}${index}`}>{language}</label>
                  </div>
                ))}
              </div>
              <button type="submit">Filter</button>
            </form>
          ) : null}
          <button id="reset-button" onClick={reset} className="button-84">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
