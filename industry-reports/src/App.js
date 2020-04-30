// import React from 'react';
// <<<<<<< dj
// import './App.css';                                             //  From Rafaelle 
// import {BrowserRouter as Router,Route} from 'react-DOM';
// import Navigation from 'Navigation';                          //  From Denisse 
// import HomePage from './components/HomePage';                //  From 'Deji 
// import Rights from './components/Rights';                   //  From Walter 
// import Stakes from './components/Stakes';                  //  From Walter 
// import Conclusion from './components/Conclusion';         //  From 'Deji 
// import References from './components/References';        //  Stretch Goal 


// function App() {
//   return (
//     <React.Fragment>
//       <div className="App">
        
//         <Layout>
//           <Header>
//               <Navigation/>
//           </Header>

//           <section>
//             <Intro className="Intro"/>
//           </section>
            
//           <section>
//             <Home className="Home"/>
//           </section>

//           <section>
//             <Rights className="Rights"/>
//           </section>

//           <section>
//             <Stakeholders className="Stakeholders"/>      
//           </section>

//           <section>
//             <Conclusion className="Conclusion"/>
//           </section>
            
//         </Layout>

//       </div>
//     </React.Fragment>
import logo from './logo.svg';
import './App.css';
import Stakeholders from './components/Stakeholders';
import Rights from './components/Rights';

function App() {
  return (
    <div className="App">
    <Stakeholders />
       <Rights />
    </div>
  );
}

export default App;