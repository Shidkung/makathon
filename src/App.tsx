import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ChoosingPage from './components/choosingpage';
import MyItems from './components/Myitem';
import Mapping from './components/mapping';
import Mybill from './components/mybill';
import Orders from './components/order';
import Map from './components/showmap';
import PaymentMethod from './components/selectpayment';
import Welcome from './components/welcomepage';
import ScanBarcodePage from './components/ScanBarcodePage';
import Showitems from './pages/Showitems';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/choosing" element={<ChoosingPage />} />
                <Route path="/myitem" element={<MyItems />} />
                <Route path="/mapping" element={<Mapping />} />
                <Route path='/map' element={<Map />} />
                <Route path='/mybill' element={<Mybill />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/paymentmethod' element={<PaymentMethod />} />
                <Route path='/welcome' element={<Welcome />} />
                <Route path='/scanbarcode' element={<ScanBarcodePage />} />
                <Route path='/showitems' element={<Showitems />} />

            </Routes>
        </Router>
    );
};

export default App;