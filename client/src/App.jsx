import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import CreateListing  from './pages/createListing'
import Header from './Component/Header'
import PrivateRoute from './Component/privateRoute'



export default function App() {
  return ( 
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/SignIn' element={<SignIn />}/>
      <Route path='/SignUp' element={<SignUp />}/>
      <Route path='/About' element={< About/>}/>
      <Route element={<PrivateRoute />}>
        <Route path='/Profile' element={< Profile/>}/>
        <Route path='/create-listing' element={< CreateListing/>}/>
      </Route>
    </Routes>
    </Router>
  )
}
