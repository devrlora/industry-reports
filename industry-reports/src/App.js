import React, {Component} from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';                                             //  From Rafaelle 
import Navigation from './components/Navigation';              //  From Denisse 
import Home from './components/Home';                         //  From 'Deji 
import Rights from './components/Rights';                    //  From Walter 
import Stakeholders from './components/Stakeholders';       //  From Walter 
import Conclusion from './components/Conclusion';          //  From 'Deji 
import References from './components/References';       //  Stretch Goal 



class App extends Component{
  render() {
    return (
      <React.Fragment>
        <div className="App">
          
            <header>
                <Navigation/>
            </header>

            <section>
              <Home className="Home"/>
            </section>

            <section>
              <Rights className="Rights"/>
            </section>

            <section>
              <Stakeholders className="Stakeholders"/>      
            </section>

            <section>
              <Conclusion className="Conclusion"/>
            </section>

            <section>
              <References className="References"/>
            </section>

        </div>
      </React.Fragment>
    );
  }
}

export default App;