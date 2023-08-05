const Country = ({ country }) => {
  const handleClick = () => {
    window.open(country.url, '_blank')
  }

  return (
    <li className="country" id={country.id} onClick={handleClick}>
      <div className="country-info">
        <h3 className="country-name">{country.name}</h3>
        <div className="info">
          <h5>Capital: {country.capital}</h5>
          <h5>Population: {country.population}</h5>
        </div>
      </div>
    </li>
  )
}

export default Country
