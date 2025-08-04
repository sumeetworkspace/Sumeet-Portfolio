import './App.css';
import Header from './header/Header';
import Home from './Main/Home';
import Skill1 from './Main/Skill1';
import Skill2 from './Main/Skill2';
import Project from './Main/Project';
import Contact from './Main/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Skill1/>
      <Skill2/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
