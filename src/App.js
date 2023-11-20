import './App.css';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import GuestForm from './pages/GuestForm';
import Confirmation from './pages/Confirmation';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/guest-info" element={<GuestForm />} />
          <Route path='/confirm-rating' element={<Confirmation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
