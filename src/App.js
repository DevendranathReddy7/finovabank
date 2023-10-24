import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import { AuthProvider } from "./context/LoginContext"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="payments">
            <Route path="funds-transfer" element={<p>paymnet</p>}></Route>
            <Route path="bill-paymnet" element={<p>paymnet</p>}></Route>
            <Route path="imt" element={<p>paymnet</p>}></Route>
            <Route path="pay-any-one" element={<p>paymnet</p>}></Route>
          </Route>
          <Route path="settings">
            <Route path="add-biller" element={<p>paymnet</p>}></Route>
            <Route path="add-imt" element={<p>paymnet</p>}></Route>
            <Route path="add-paye" element={<p>paymnet</p>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>


  )
}
export default App