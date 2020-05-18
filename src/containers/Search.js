import React, {Component} from 'react';

class Search extends Component{
  state={
    search: ''
  }

  handleSearch = (e) => {
 this.setState({search: e.target.value})
  }

  researchInput = () => {
    this.setState({search: ''})
  }

  callSearch = (e) => {
    const {search} = this.props;
    e.preventDefault();
    search(this.state.search)
    this.researchInput()
  }



  render(){
    return(
      <form className="Search">
        <input
        value={this.state.search}
        onChange={this.handleSearch}
        type="text"/>

        <input onClik={this.callSearch}
        type="submit"
        value="Search"/>
      </form>
    )
  }
}

export default Search;
