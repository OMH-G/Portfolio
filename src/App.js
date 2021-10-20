import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import Project from './components/Projects';
import Strip from './components/Strip';
import Info from './components/Info';
import Blog from './components/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Report from './components/Report';
function App() {
  return (
    <Router>
      <div className="outer-flex">
        <Strip />
        <div className="inner-flex">
          <div id="header">
            <Header />
          </div>
          <div id="content">
            <Switch>
              <Route  exact path="/">
                <Info />
              </Route>
              <Route  exact path="/proj">
                <Project />
              </Route>
              <Route exact path="/blog">
                <Blog />
              </Route>
              <Route exact path="/game">
                <Game />
              </Route>
              <Route exact path="/report">
                <Report />
              </Route>
            </Switch>
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
