import React      from 'react';
import { render } from 'react-dom';
import App        from './components/App/App';
import Cards      from './components/Cards/Cards';
import './index.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//
// const root = () => {
//   <div>
//     <Router>
//       <Route path="/" component={App}/>
//     </Router>
//   </div>
// }


render(<App />, document.getElementById('root'))


