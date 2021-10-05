import React, {Component} from 'react';

class Search extends Component {

    //varsayılan özelliğini durdurur.
    handleFormSubmit=(event)=>{
        event.preventDefault();
    }


    render() {
        return (
         <form onSubmit={this.handleFormSubmit}>

             <div className="form-row mb-5">
                 <div className="col-12">
                    <input onChange={this.props.searchMovieProp}
                           type="text" className="form-control"
                           placeholder="Search a movie"

                    />
                 </div>


             </div>
         </form>
        );
    }
}

export default Search;