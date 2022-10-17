import "./App.css";
import UserSignIn from "./components/userSignIn";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import UserSignUp from "./components/userSignUp";
import AdminSignUp from "./components/adminSignUp";
import AdminSignIn from "./components/adminSignIn";
import UserHome from "./components/userHome";
import UploadFlight from "./components/UploadFlight";
import YourTickets from "./components/YourTickets";
import YourFlight from "./components/YourFlight";
import './App.css';


function App() {
  return (
    <SnackbarProvider maxSnack={3} style={{ background: "crimson" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserSignUp />} />

          <Route path="/user/signin" element={<UserSignIn />} />
          <Route path="/admin/signup" element={<AdminSignUp />} />
          <Route path="/admin/signin" element={<AdminSignIn />} />

          <Route path="/admin/home" element={<UploadFlight />} />
          <Route path="/admin/yourflight" element={<YourFlight />} />

          <Route path="/user/home" element={<UserHome />} />

          <Route path="/user/yourticket" element={<YourTickets />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
