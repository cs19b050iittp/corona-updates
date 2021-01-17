import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
       data :[]
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get("https://api.covid19india.org/data.json")
    .then((response) => {
      const { statewise } = response.data;
      this.setState({ data : statewise });
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() { 
    return ( 
      <React.Fragment>
        <div className="container-fluid">
        <p>Corona Tracker Live</p>
          <div className="row">
            <div className="col-md-3">
              <h1>State</h1>
              <ul>
                {
                  this.state.data.map(item => (
                    <li className="list-s">{item.state}</li>
                  ))
                }
              </ul>
            </div>
            <div className="col-md-3">
              <h1 className="confirmed">Confirmed</h1>
              <ul>
                {
                  this.state.data.map(item => (
                    <li className="list-c">{item.confirmed}</li>
                  ))
                }
              </ul>
            </div>
            <div className="col-md-3">
              <h1 className="active">Active</h1>
              <ul>
                {
                  this.state.data.map(item => (
                    <li className="list-a">{item.active}</li>
                  ))
                }
              </ul>
            </div>
            <div className="col-md-3">
              <h1 className="deaths">deaths</h1>
              <ul>
                {
                  this.state.data.map(item => (
                    <li className="list-d">{item.deaths}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;