import React from 'react';

import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotels from './pages/hotels/Hotels'; 
function App(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/hotels' element={<List/>}/>
                <Route path='/hotels/:id' element={<Hotels/>}/>
            </Routes>
        </Router>
    )
}
export default App;