import React from 'react';
import FoodList from './FoodList.jsx';



class Macros extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      foods: []
    }
  }

  componentDidMount() {
    fetch('/foods')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            foods: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  
  return()     
  }

  export default Macros;
