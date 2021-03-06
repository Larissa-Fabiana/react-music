import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import ArtistCard from './ArtistCard.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      artists:[]
    };

    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount(){
    const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com';
    const BASE_OPTIONS = {

    }
    const options = {
      method: 'post',
      headers:{'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({email: 'rafael@laboratoria.la', password: 'banana'})
    };
    fetch(`${BASE_URL}/login`, options)
      // .then(data => console.log(data));
      .then(res => {
        const options = {
          method: 'get',
          credentials: 'include',
        };
        fetch(`${BASE_URL}/artists`, options)
          .then(res => res.json())
          .then(data => this.setState({ artists: data }));
      })
  }
  handleClick(){
  //   const options = {
  //     method: 'get',
  //     credentials: 'include',
  //   };
  //   fetch('https://peaceful-badlands-98440.herokuapp.com/artists', options)
  //     .then(res => res.json())
  //     .then(data => this.setState({ artists: data }));
  }
  render() {
    return (
      <div>
        {this.state.artists.map(artist => <ArtistCard {...artist} key={artist.id} />)}
        {/* <Card>
          peixinho
          <button onClick={this.handleClick}>Pegar os artistas</button>  
        </Card> */}
      </div>
    );
  }
}

export default App;

/* <div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
 <p>
   Edit <code>src/App.js</code> and save to reload.
 </p>
 <a
   className="App-link"
   href="https://reactjs.org"
   target="_blank"
   rel="noopener noreferrer"
 >
   Learn React
 </a>
</header> */

// {...artist} = name={artist.name} genre={artist.genre} id={artist.id}