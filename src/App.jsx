import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import NotFound from './pages/notFound';
import Events from './pages/events';
import Layout from './components/layout';
import Cart from './pages/cart';
import './App.css';
import GlobalStyles from './styles/globalstyles';

function App(){
  return(
    <div>
    <GlobalStyles />
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='eventos' element={<Events />} />
          <Route path='carrinho' element={<Cart />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
