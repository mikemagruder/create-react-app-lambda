import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Apis() {

  const [ planet, setPlanet ] = useState({});
  // TRIGGER THE USEEFFECT CALLBACK FUNCTION WHENEVER WE CHANGE THIS VALUE.
  const [ changePlanet, setChangePlanet ] = useState(1)
  const [ inhabitants, setInhabitants ] = useState({})
  const [ inhabitantsLink, setInhabitantsLink ] = useState([])
  const [ toggle, setToggle ] = useState(false)

    useEffect(() => {
    axios.get("https://swapi.dev/api/planets/" + changePlanet )
    .then((res) => { 
        console.log(res.data)
        setPlanet(res.data)
        console.log(res.data.residents);
        setInhabitantsLink(res.data.residents)
        })
        .catch((error) => { console.log(error)})
    }, [ changePlanet ])

  // useEffect(() => {
  // // const getPlanet = () => {
  //   fetch("https://swapi.dev/api/planets/" + changePlanet )
  //   .then((response) => { 
  //       console.log(response)
  //       response.json()
  //       .then((jsonResponse) => {
  //           console.log(jsonResponse)
  //           setPlanet(jsonResponse)
  //       })
  //       .catch((jsonError) => { console.log(jsonError)})
  //   })
  //   .catch((error) => { console.log(error);
  //   })
  // }, [ changePlanet ]) // DEPENDENCY LIST IS AN ARRAY THAT WE WATCH
  //         // IF THE VALUE CHANGES, IT WILL RE-RUN THE USEEFFECT CALLBACK FUNCTION.

useEffect(() => {
  if(inhabitantsLink[0]){
    axios.get(inhabitantsLink[0])
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setInhabitants(res.data)
    })
    .catch((err) => console.log(err))
  }
}, [ inhabitantsLink ])


const changePlanetClick = () => {
  if ( changePlanet === 60 ){
    setChangePlanet(1)
  } else {
    setChangePlanet( changePlanet + 1 )
  }
}

const changePlanetClickBack = () => {
  if ( changePlanet === 1 ){
    setChangePlanet(60)
  } else {
    setChangePlanet( changePlanet - 1 )
  }
}

  return (
    <div className="App">
        <h1>Using APIs</h1>
        {/* <button onClick={(e) => getPlanet()}>Get Planet</button> */}
        <button onClick={(e) => setToggle(!toggle)}>Get a famous person</button>
        <button onClick={(e) => changePlanetClickBack()}>Go Back One Planet</button>
        <button onClick={(e) => changePlanetClick()}>Get Planet</button>
        <h4>You selected the planet: { planet.name }</h4>
        <h5>{ planet.name } has a { planet.climate } environment</h5>
        <h5>{ planet.name } has a { planet.terrain } type of terrain</h5>
        <h5>And { planet.name } has a population of { planet.population }</h5>
        {
          toggle && inhabitants.name ?
          <p>Famous person: {inhabitants.name}</p>:
          null
        }

    </div>
  );

}
export default Apis