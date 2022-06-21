// Import styles
import './styles/styles.css';

// Import Router, Switch, Route
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import Navigation menu from components
import Navigation from './components/Navigation';

// Import pages for routing
import Stocks from './pages/Stocks';
import Quote from './pages/Quote';
import PriceHistory from './pages/PriceHistory';
import Home from './pages/Home';

function App() {  
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Stocks" component={Stocks} />
        <Route path="/Quote" component={Quote} />
        <Route path="/PriceHistory" component={PriceHistory} />    
        </Switch>         
      </div>
    </Router>
  )
}

export default App;
