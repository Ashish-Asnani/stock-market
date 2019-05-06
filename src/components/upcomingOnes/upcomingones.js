import React, { Component } from "react";

import Axios from "axios";
class UpcomingScreen extends Component {
  state = {
 upcoming:[]
  };

  componentDidMount() {
    // axios.get('https://www.quandl.com/api/v3/datasets/WIKI/'+this.state.searchParam+'.json?column_index=4&start_date=2018-01-01&end_date=2019-03-31&collapse=monthly&transform=rdiff&api_key=WizJsEsBGQgx38WDV9Cm')
    Axios.get(
      "https://api.iextrading.com/1.0/stock/market/upcoming-ipos"
    ).then(res => {
        
           this.setState({
            upcoming:res.data.rawData
           })
           console.log(this.state)
    });
   
  }

  render() {
    
    return (<div>
       <div className="col m6 s12">
        {this.state.upcoming.length&&this.state.upcoming.map(eachData=>{
            return(
              <div className="col m6">
                <div className="card white darken-6">
                <div className="card-content black-text">
                  
                  <span className="card-title" />
                  <h4>{eachData.companyName}</h4>
                
                  <h6>Symbol: {eachData.symbol}</h6>
                </div>
                <div className="collection">
                  <a href="#!" className="collection-item">
                    Close:<span className="badge" />
                    {eachData.close}
                  </a>
                  <a href="#!" className="collection-item">
                    Price Low:<span className="new badge" />
                    {eachData.priceLow}
                  </a>
                  <a href="#!" className="collection-item">
                  Price High:<span className="new badge" />
                    {eachData.priceHigh}
                  </a>
                  <a href="#!" className="collection-item">
                    Percent Offered:<span className="badge" />
                    {eachData.percentOffered}
                  </a>
                 
                </div>
              </div>
              </div>
              
            )
        })}

</div>
         
        </div>

   
    );
  }
}

export default UpcomingScreen;
