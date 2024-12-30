import { Routes, Route, useLocation, Outlet, Navigate } from 'react-router';
import { useUser } from '@clerk/clerk-react';
import MainPage from './pages/mainpage';
import Signup from './pages/signup';
import Signin from './pages/signin';
import GrammarCheckerPage from './pages/grammarcheckerpage';
import Paraphraser from './pages/paraphraser/paraphraser';
import Pronunciation from './pages/pronunciation/pronunciation';

function App() {

  const { isSignedIn } = useUser();
  
  // const ProtectedRoute = () => {
  //   const location = useLocation();
  //   return isSignedIn ? (
  //     <Outlet />
  //   ) : (
  //     <Navigate to='/sign-in' replace state={{ from: location}} />
  //   )
  // }

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/sign-up/*' element={<Signup />} />
      <Route path='/sign-in/*' element={<Signin />} />
      {/* <Route element={<ProtectedRoute />}> */}
        <Route path='/grammarChecker' element={<GrammarCheckerPage />} />
        <Route path='/paraphraser' element={<Paraphraser />} />
        <Route path='/pronunciation' element={<Pronunciation />} />
      {/* </Route> */}
    </Routes>
  )
}

export default App;