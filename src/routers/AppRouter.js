import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage"
import BlogListPage from "../components/BlogListPage"
import BlogDetailsPage from "../components/BlogDetailsPage"
import ContactPage from "../components/ContactPage"
import Header from "../components/Header"
import NotFoundPage from "../components/NotFoundPage"

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header>
           
        </Header>
        <Routes>
                <Route path="/" element={<Homepage/>} exact/>
                <Route path="/blogs" element={<BlogListPage/>} exact/>
                <Route path="/blogs/:id" element={<BlogDetailsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>

                
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
