import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import { AuthProvider } from "./context/LoginContext"
import Settings from "./components/SettingsTile/Settings"
import PaymentsTile from "./components/PaymentsTile/common/PaymentsTile"
import FundsTransfer from "./components/PaymentsTile/Ftx/FundsTransfer"
import BillPayment from "./components/PaymentsTile/Bpay/BillPayment"
import ReviewConfirm from "./components/PaymentsTile/Ftx/ReviewConfirm"
import { PaymentProvider } from "./context/paymentContext"
import Submit from "./components/PaymentsTile/Ftx/Submit"
import AddBiller from "./components/PaymentsTile/Bpay/AddBiller"
import BpayReview_Confirm from "./components/PaymentsTile/Bpay/BpayReview_Confirm"
import BpaySubmit from "./components/PaymentsTile/Bpay/BpaySubmit"
import ManageBiller from "./components/SettingsTile/BpaySettings/ManageBiller"

const App = () => {
  return (
    < AuthProvider >
      <PaymentProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/payments" element={<PaymentsTile />} />
            <Route path="/funds-transfer" element={<FundsTransfer />} />
            <Route path="/bill-payment" element={<BillPayment />}></Route>
            <Route path="/review-confirm" element={<ReviewConfirm />}></Route>
            <Route path="/bpay-review-confirm" element={<BpayReview_Confirm />}></Route >
            <Route path="/submit" element={<Submit />}></Route>
            <Route path="/add-biller" element={<AddBiller />} />
            <Route path="/bpay-submit" element={<BpaySubmit />}></Route>
            <Route path="/manage-billers" element={<ManageBiller />}></Route>
            <Route path="/settings" element={<Settings />} />
            <Route path="add-paye" element={<p>paymnet</p>}></Route>
          </Routes>
        </BrowserRouter>
      </PaymentProvider>
    </AuthProvider >


  )
}
export default App