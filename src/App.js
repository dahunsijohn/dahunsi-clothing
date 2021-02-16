import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepages/homepage.component';

// function App() {
//   return (
//     <div className='App'>
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//       </Switch>
//     </div>
//   );
// }

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
