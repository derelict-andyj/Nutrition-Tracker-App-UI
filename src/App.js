import React from 'react';
import Header from './modules/Header.jsx';
import FoodList from './modules/FoodList.jsx';
import Footer from './modules/Footer.jsx';
import Board from './components/Board';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Header />
      <main className="flexbox">
        <Board id="board-1" className="board">
          <FoodList className="col-sm-4" />
        </Board>

        <Board id="board-2" className="board">
        </Board>
      </main>
      {/* <Macros /> Maybe don't need this here*/}
      <FoodList />
      <Footer />
    </div>
  );
}

export default App;

