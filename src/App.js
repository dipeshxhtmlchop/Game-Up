import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss'
import { Routes, Route } from "react-router-dom";
import IndexPage from './views';
import LoginPage from './views/login';
import Header from './components/header';
import Footer from './components/footer';
import JoinGame from './views/joinGame';
import About from './views/about';
import QueryForm from './views/query';
import Results from './views/results'
import Profile from './views/profile';
import PlayerDash from './views/playerDash';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/joingame" element={<JoinGame />} />
        <Route path="/about" element={<About />} />
        <Route path="/query" element={<QueryForm />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/player-dash" element={<PlayerDash />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
