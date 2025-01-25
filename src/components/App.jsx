import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import LoginPage from "./pages/LoginPage";
import SideBar from "./sideBar/SideBar";

function App() {
  return (
    <BrowserRouter>
    <SideBar />
    <Routes>
      <Route path="login" element={<LoginPage />}/>
      <Route path="*" element={<ContactForm />}/>
      <Route path="filter" element={<Filter />}/>
      <Route path="*" element={<ContactList />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
