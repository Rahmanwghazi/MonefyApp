import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/signin/Signin';
import Dashboard from './pages/dashboard/Dashboard';
import AddData from './pages/add data/AddData';
import History from './pages/history/History';
import Recommendation from './pages/recommendation/Recommendation';
import Setting from './pages/setting/Setting';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/add-data" element={<AddData />}/>
          <Route path="/history" element={<History /> }/>
          <Route path="/recommendation" element={<Recommendation />}/>
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
