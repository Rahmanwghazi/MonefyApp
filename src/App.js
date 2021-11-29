import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import AddData from './pages/add-data/AddData';
import History from './pages/history/History';
import Recommendation from './pages/recommendation/Recommendation';
import Setting from './pages/setting/Setting';
import Auth from './auth/Auth';
import Callback from './auth/Callback';

const auth = new Auth();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home auth={auth} />} />
          <Route path="/dashboard" element={<Dashboard auth={auth} />} />
          <Route path="/add-data" element={<AddData auth={auth} />} />
          <Route path="/history" element={<History auth={auth}/>} />
          <Route path="/recommendation" element={<Recommendation auth={auth}/>} />
          <Route path="/setting" element={<Setting auth={auth}/>} />
          <Route path="/callback" element={<Callback />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
