import React, {Component} from 'react';

import {Link} from 'react-router-dom';
class  FirstPage extends Component{
    state={
        valueObtained:null
    }
    ChangeHandler=(e)=>{
        console.log(e)
    this.setState({
      valueObtained:e.target.value
    })

    console.log(this.state)
      }
    
      
      render(){
          const valueObtained = this.state.valueObtained;
    return(
        <div className="container">
<h2 >
    Worried about your stock investment or start investing?
</h2>
<h4> Know its value right now</h4>
<p> Just tell us your company and let us do the rest of the research on your <br/>
From its rates to the company info to the latest news, we assure we know it all.
 </p>
 <br/>
 <br/>
<div class="row">
        <div class="input-field col s12">
          <input d="searchParam"
          type="text"
          className="autocomplete"
          placeholder="Search"
    onChange={this.ChangeHandler}/>
          <label for="email">Search</label>
        </div>
      </div>
        
           {/*} <input
          id="searchParam"
          type="text"
          className="autocomplete"
          placeholder="Search"
    onChange={this.ChangeHandler}></input>*/}
          <Link
                  to={{
                    pathname: `/data`,
                    state: {
                        valueObtained
                    }
                  }}
                >
          <button class="btn waves-effect waves-light" type="submit" name="action">Search
    
  </button>
  </Link>
        </div>
    )
    }
}

export default FirstPage;