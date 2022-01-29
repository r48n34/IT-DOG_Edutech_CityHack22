import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";

import store from './pages/store'
import { Provider } from 'react-redux'

import LoginPage from './pages/LoginPage.js'
import HomePage from './pages/HomePage.js'
import DrawBoard from './pages/DrawBoard.js'
import PortalPage from './pages/PortalPage.js'
import NavTop from './pages/smallComp/NavTop'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div style={{ backgroundColor:"#282c34" , height:"100vh" }}>
      <Provider store={store}>
      <HashRouter>   

      <Routes>

        <Route path="/" element={<LoginPage/>}/>

        <Route path="/home" element={<NavTop/>}>
          <Route path="index" element={<HomePage/>}/>
          <Route path="drawBoard" element={<DrawBoard/>}/>
          <Route path="portalpage" element={<PortalPage/>}/>
        </Route>

      </Routes>

      </HashRouter> 
      </Provider>
    </div>
  );
}

export default App;
