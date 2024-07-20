import { Content, Theme } from "@carbon/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Emails from "./pages/Emails";
import TestingPage from "./pages/TestingPage";

function App() {
  return (
    <>
      <Theme theme="g100">
        <Navbar></Navbar>
      </Theme>
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Dashboard}></Route>
            <Route path="/emails" Component={Emails}></Route>
            <Route path="/campaigns" Component={TestingPage}></Route>
            <Route path="/testing-page" Component={TestingPage}></Route>
          </Routes>
        </BrowserRouter>
      </Content>
    </>
  );
}

export default App;
