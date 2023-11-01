import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import { AuthProvider } from "./context/LoginContext"
import Settings from "./components/SettingsTile/Settings"
import PaymentsTile from "./components/PaymentsTile/common/PaymentsTile"
import FundsTransfer from "./components/PaymentsTile/FundsTransfer"
import BillPayment from "./components/PaymentsTile/BillPayment"

const App = () => {
  return (
    < AuthProvider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payments" element={<PaymentsTile />} />
          <Route path="/funds-transfer" element={<FundsTransfer />} />
          <Route path="/bill-payment" element={<BillPayment />}></Route>
          <Route path="/imt" element={<p>paymnet</p>}></Route>
          <Route path="/pay-any-one" element={<p>paymnet</p>}></Route>
          <Route path="/credit-card" element={<p>pa1ymnet</p>}></Route>
          <Route path="/settings" element={<Settings />}>
            <Route path="add-biller" element={<p>paymnet</p>}></Route>
            <Route path="add-imt" element={<p>paymnet</p>}></Route>
            <Route path="add-paye" element={<p>paymnet</p>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider >


  )
}
export default App