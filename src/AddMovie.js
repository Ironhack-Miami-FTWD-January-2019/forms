import React, { Component } from 'react';

class AddMovie extends Component {

  state = {
    title: '',
    director: '',
    movies: []
  
  }
  handleChange = (event) => {
    let { name, value } = event.target;

    console.log(name, value)
    this.setState({ [name]: value });
  }

  addMovieHandler = (theMovie) => {
    const moviesCopy = [...this.state.movies];
    moviesCopy.push(theMovie);
    this.setState({
      movies: moviesCopy
    })
  }

  showMovies = () => {
    let movies = this.state.movies.map((eachMovie)=>{
        return <li>{eachMovie.title} directed by {eachMovie.director}</li>
    })
    return movies
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.addMovieHandler(this.state)
    //Post this right here 
    ///axios.post('save movie url', {this.state }, ()=>{
      //this.addMovieHandler()
    //})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)} />
          <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      {this.showMovies()}
      </div>
    )
  }
}

export default AddMovie;


// import React, { Component } from 'react';

// class AddMovie extends Component {

//   state = {
//     title: '',
//     director: '',
//     hasOscars: false,
//     IMDbRating: ''
//   }



//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.addTheMovie(this.state);
//     this.setState({
//       title: '',
//       // director: '',
//       // hasOscars: false,
//       // IMDbRating: ''
//     })
//   }

//   handleChange(event) {
//     let { name, value } = event.target;
//     if (name === "hasOscars" && value === "on") {
//       value = true;
//     }
//     this.setState({ [name]: value });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleFormSubmit}>

//           <label>Title:</label>
//           <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)} />
//           {/* <label>Director:</label>
//           <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleChange(e)} />
//           <label>Oscar Awarded:</label>
//           <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleChange(e)} />
//           <label>IMDb Rating:</label>
//           <input type="text" name="IMDbRating" value={this.state.IMDbRating} onChange={(e) => this.handleChange(e)} /> */}

//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }
// }

// export default AddMovie;