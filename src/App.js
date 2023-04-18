import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Home from './components/Home';
import {createBrowserRouter,RouterProvider,createRoutesFromElements, Route} from 'react-router-dom'
// import Reg from './components/Reg';
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/">
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/*" element={<Home />} />
  </Route>

))
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
