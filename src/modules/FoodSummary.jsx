import React from 'react';
import './FoodSummary.css';

class FoodSummary extends React.Component {
  render(props) {
    const food = this.props.food;
   
    const dragStart = e => {
      const target = e.target;
  
      e.dataTransfer.setData('card_id', target.id);
  
      setTimeout(() => {
        target.style.display = 'none';
      }, 0)
    }
  
    const dragOver = e => {
      e.stopPropagation();
    }


    return (
      <li id={"card_id"}
         className={this.props.className}
         draggable="true"
         onDragStart={dragStart}
         onDragOver={dragOver}
      >
        <div 
         
         
         ><h3>{food.name}</h3>
        <div className="foodDetails">
    <span>Calories: {food.calories} Fat: {food.fat}g Protien: {food.protien}g Carbs: {food.carbs}g</span>
        </div>
        {this.props.children}
        </div>
        
        
      </li>
    )
  }
}

export default FoodSummary;