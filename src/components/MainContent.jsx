import Country from './Country'

const MainContent = ({ countries }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="main">
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <Country key={country.id} country={country} />
        ))}
      </ul>
      {countries.length > 3 ? (
        <button onClick={scrollToTop}>Scroll to Top</button>
      ) : null}
    </div>
  )
}

export default MainContent
