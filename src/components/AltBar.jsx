const AltBar = ({ bonus, setBonus }) => {

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
      </div>
    </div>
  )
}

export default AltBar