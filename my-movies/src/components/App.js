import React from 'react';

import MovieList from './MovieList';
import Search from "./Search";

class App extends React.Component {
    state = {
        movies: [],

        searcQuery: ""

    }

    async componentDidMount() {
        const baseURL = "http://localhost:3000/movies";
        const response = await fetch(baseURL);
        console.log(response)
        const data = await response.json();
        console.log(data)
        this.setState({movies:data})

    }


    /*deleteMovie=(movie)=>{
        const  newMovieList=this.state.movies.filter(
            m=>m.id!==movie.id

        );
        /*this.setState({
            movies:newMovieList
        })*/
       // this.setState(state=>({
          //  movies:newMovieList

       // })) }


    deleteMovie=async (movie)=>{

        const baseURL = `http://localhost:3000/movies/${movie.id}`
        await fetch(baseURL,{
            method:"delete"
        })

        const  newMovieList=this.state.movies.filter(
            m=>m.id!==movie.id

        );
        /*this.setState({
            movies:newMovieList
        })*/
        this.setState(state=>({
            movies:newMovieList

        }))

    }

    // state'i update etmiş olduk.
    searchMovie=(event)=>{
        this.setState({searcQuery:event.target.value})

    }


    render() {
        let filteredMovies=this.state.movies.filter(
            (movie)=>{
                return movie.name.toLowerCase().indexOf(this.state.searcQuery.toLowerCase())!==-1
            }
        )

        return(
           <div className="container">

               <div className="row">
                   <div className="col-lg-12">
                       <Search searchMovieProp={this.searchMovie}/>



                   </div>
                   <MovieList
                   movies={filteredMovies}
                   deleteMovieProp={this.deleteMovie}

                   />


               </div>
           </div>

        )
    }
}
export default App
