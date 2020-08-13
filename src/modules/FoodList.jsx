import React from 'react';
import FoodSummary from './FoodSummary.jsx';
import './FoodList.css';
import Container from 'react-bootstrap/Container';


class FoodList extends React.Component {

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



  render() {
    const { error, isLoaded, foods } = this.state;
    
    let totalCals = 0;
    let totalFats = 0;
    let totalProtien = 0;
    let totalCarbs = 0;
    foods.forEach((food) => {
    totalCals += food.calories;
    totalFats += food.fat;
    totalProtien += food.protien;
    totalCarbs += food.carbs;
    })
   
    
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container className="p-3">
        <ul className="FoodList">
          {foods.map((food) =>
            <FoodSummary food={food} key={food.id} />
            )}
        </ul>
 
        <span>Total Calories: {totalCals}g </span>
        <span>Total Fat: {totalFats}g </span>
        <span>Total Protein: {totalProtien}g </span>
        <span>Total Carbs: {totalCarbs}g </span>
       
        </Container>
      );
    }

  }
}

export default FoodList;