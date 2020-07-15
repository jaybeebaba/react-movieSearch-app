import React, { Component } from 'react';
import NavBar from "./components/NavBar";
// import Movies from "./components/movies"
import axios from "axios"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[

      ]
    }

    this.fetchData=this.fetchData.bind(this)
  }

  fetchData = (Data)=>{
    
    axios.get(`http://www.omdbapi.com/?apikey=649b7f0d&s=${Data}`)
    .then(res=>{
      console.log(res.data.Search)
      this.setState({
        movies: res.data.Search
      })
      
      
    })
    

  }
 

    
  // }
  render(){
    const {movies} = this.state
    const moviesLists = movies.length? (
      movies.map(movie=>{
        return(
          <div key={movie.imdbID}>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
          </div>
        )
      })
    ):(

    <p>Enter a Search term</p>
    )

    return(
        <div>
          <NavBar fetchData={this.fetchData}/>
          {moviesLists}
        </div>
      )
  }

  
}



export default App;
