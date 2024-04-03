const Planets = () => {
    const planetsLi = [
        {name: 'Saturn' , isGasPlanet: true},
        {name: 'Mars' , isGasPlanet:false},
        {name: 'Neptune' , isGasPlanet:true},
        {name: 'Earth' , isGasPlanet:false},
        {name: 'Uranus' , isGasPlanet:true},
        {name: 'Venus' , isGasPlanet:false},
        {name: 'Jupiter' , isGasPlanet:true}
    ]
    
  return (
    <div>
        <h1>Gas Planets</h1>
        {planetsLi.map((planet,key)=> planet.isGasPlanet && <p>{planet.name}</p>)}
    </div>
  )
}

export default Planets