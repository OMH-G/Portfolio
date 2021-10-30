import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import Project from './components/Projects';
import Strip from './components/Strip';
import Info from './components/Info';
import Blog from './components/Blog';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Report from './components/Report';
function App() {
  const [bgcontent, setbgcontent] = useState('linear-gradient(118deg,#FFDEE9,#B5FFFC)')
  const contentstate=(route)=>{
    if(route==='intro'){
    setbgcontent('linear-gradient(118deg,#FFDEE9,#B5FFFC)');
    }
    else if(route==='proj'){
      setbgcontent('linear-gradient(#acb6e5,#86fde8)')
    }
    else if(route==='game'){
      setbgcontent('linear-gradient(#ffe259,#ffe259)')
    }
    else if(route==='blog'){
      setbgcontent('linear-gradient(#DA22FF,#9733EE)')
    }
    else{
      setbgcontent('linear-gradient(#e65c00,#F9D423)')
    }
  }
  return (
    <Router>
      <div className="outer-flex">
        <Strip />
        <div className="inner-flex">
          <div id="header">
            <Header conchange={contentstate}/>
          </div>
          <div id="content" style={{'backgroundImage':bgcontent}}>
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
