import React, {useEffect, useState} from 'react';
import './App.css';
import Axios from 'axios'; 

const App=()=> {
  const [localCases, setLocalCases]=useState("")
  const [localDeaths, setLocalDeaths]=useState("")
  const [localTotalCases, setLocalTotalCases]=useState("")
  const [localTotalDeaths, setLocalTotalDeaths]=useState("")
  const [localTotalHospitalized, setLocalTotalHospitalized]=useState("")
  const [localTotalRecovered, setLocalTotalRecovered]=useState("")
  const [localTotalActiveCases, setLocalTotalAciveCases]=useState("")
  const [globalCases, setGlobalNewCases]=useState("")
  const [globalDeaths, setGlobalNewDeaths]=useState("")
  const [globalTotalCases, setGlobalTotalCases]=useState("")
  const [globalTotalDeaths, setGlobalTotalDeaths]=useState("")
  const [globalTotalRecovered, setGolbalTotalRecovered]=useState("")

  const getData= async()=>{
    Axios.get("https://www.hpb.health.gov.lk/api/get-current-statistical").then((response)=>{ 
      console.log(response);
      setLocalCases(response.data.data.local_new_cases);
      setLocalDeaths(response.data.data.local_new_deaths);
      setLocalTotalCases(response.data.data.local_total_cases);
      setLocalTotalDeaths(response.data.data.local_deaths);
      setLocalTotalHospitalized(response.data.data.local_total_number_of_individuals_in_hospitals);
      setLocalTotalRecovered(response.data.data.local_recovered);
      setLocalTotalAciveCases(response.data.data.local_active_cases);
      setGlobalNewCases(response.data.data.global_new_cases);
      setGlobalNewDeaths(response.data.data.global_new_deaths);
      setGlobalTotalCases(response.data.data.global_total_cases);
      setGlobalTotalDeaths(response.data.data.global_deaths);
      setGolbalTotalRecovered(response.data.data.global_recovered);
    }
    );
  };

  useEffect(()=>{
    getData(); 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid-19 Updates</h1>
        <br></br><br></br> 
        <h2>Covid-19 New Updates in Sri Lanka</h2>
        <br></br>
  <div className="container">
  <div className="row">
    <div className="col-lg-6"> 
    <button type="button" className= "bttnDanger btn-danger btn-lg"><h5>Local New Cases</h5><h2>{localCases}</h2></button><br></br><br></br>
    </div>
    <div className="col-lg-6">
    <button type="button" className= "bttnDanger btn-danger btn-lg" ><h5>Local New Deaths</h5><h2>{localDeaths}</h2></button><br></br><br></br>
    </div>
  </div><br></br><br></br><br></br>
  <div className="row">
    <div className="col-lg-2">
    <button type="button" className= "bttnPrimary btn-primary btn-lg" ><h5>Local Total Cases</h5><h2>{localTotalCases}</h2></button><br></br><br></br>
    </div>
    <div className="col-lg-2">
    <button type="button" className= "bttnPrimary btn-primary btn-lg" ><h5>Local Total Deaths</h5><h2>{localTotalDeaths}</h2></button><br></br><br></br>
    </div>
    <div className="col-lg-3">
    <button type="button" className= "bttnPrimary btn-primary btn-lg" ><h5>Local Total Patients in hospitals</h5><h2>{localTotalHospitalized}</h2></button><br></br><br></br>
    </div>
    <div className="col-lg-2">
    <button type="button" className= "bttnPrimary btn-primary btn-lg" ><h5>Local Total Recoverd</h5><h2>{localTotalRecovered}</h2></button><br></br><br></br>
    </div>
    <div className="col-lg-2">
    <button type="button" className= "bttnPrimary btn-primary btn-lg" ><h5>Local Total Active Cases</h5><h2>{localTotalActiveCases}</h2></button><br></br><br></br>
    </div>
  </div><br></br><br></br><br></br>
    <h2>Covid-19 Global Updates</h2>
    <br></br>
  <div className="row">
    <div className="col-lg-6">
    <button type="button" className= "bttnDanger btn-danger btn-lg" ><h5>Global New Cases</h5><h2>{globalCases}</h2></button><br></br><br></br>
    </div>
    <div className="col-lg-6">
    <button type="button" className= "bttnDanger btn-danger btn-lg" ><h5>Global New Deaths</h5><h2>{globalDeaths}</h2></button><br></br><br></br>
    </div> 
  </div><br></br><br></br> 
  <div className="row"> 
    <div className="col-lg-4">
    <button type="button" className= "bttnPrimary btn-primary btn-lg" ><h5>Global Total Cases</h5><h2>{globalTotalCases}</h2></button><br></br><br></br>
    </div>
    <div className="col-lg-4">
    <button type="button" className= "bttnPrimary btn-primary btn-lg" ><h5>Global Total Deaths</h5><h2>{globalTotalDeaths}</h2></button><br></br><br></br>
    </div>
    <div className="col-lg-4">
    <button type="button" className= "bttnPrimary btn-primary btn-lg" ><h5>Global Total Recovered</h5><h2>{globalTotalRecovered}</h2></button><br></br><br></br>
    </div>
  </div>
</div>
    
</header>
</div>
  );
}

export default App;
