import React, { Component } from "react";
import './crypto.css';
import Axios from "axios";
class CryptoScreen extends Component {
  state = {
 cryptoData:[],
 cryps:[]
  };

  componentDidMount() {
    // axios.get('https://www.quandl.com/api/v3/datasets/WIKI/'+this.state.searchParam+'.json?column_index=4&start_date=2018-01-01&end_date=2019-03-31&collapse=monthly&transform=rdiff&api_key=WizJsEsBGQgx38WDV9Cm')
    Axios.get(
      "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
    ).then(res => {
        
           this.setState({
            cryptoData:res.data.Data
           })
           console.log(this.state)
    });
   
    Axios.get(
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD"
    ).then(res => {
        
           console.log(res);
           this.setState({
             cryps:res.data.Data
           })
    });


   
  }

  render() {
    console.log(this.state)
    return (<div className="row">
    <div className="col" style={{height:' 500px', display: 'block',overflow: 'auto'}}>
          <div className=" white darken-6 ">
            <table className="z-depth-5 striped highlight centered responsive-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>OPEN</th>
                  <th>HIGH</th>
                  
                </tr>
              </thead>
              <tbody>
        {this.state.cryps.length && this.state.cryps.map(eachData=>{
            return(
            
        <tr>
                
                 
                  <td>{eachData.CoinInfo.FullName}</td>
                  <td> {eachData.DISPLAY.USD.OPENDAY}</td>
                   <td>{eachData.DISPLAY.USD.PRICE}</td>
                  
                 
                  </tr>
             
            
              
            )
        })}
        </tbody>
        </table>
        </div>
        </div>
        <div className="col s12 m6">
        {this.state.cryptoData.length && this.state.cryptoData.map(eachData=>{
            return(
 

<div className="card white darken-6">
<div className="card-content black-text">
  
  <span className="card-title" />
  <h4>{eachData.title}</h4>
</div>
<div className="collection">
  <span>{eachData.body}</span>
</div>
</div>
        )})};
        </div>
        </div>
       
       

   
    );
  }
}

export default CryptoScreen;
