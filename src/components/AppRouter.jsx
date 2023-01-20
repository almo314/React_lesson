import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import TestComponent from "../pages/TestComponent";

const AppRouter = () => {
    return(
        <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/test" element={<TestComponent />}/> 
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts/:id" element={<PostIdPage />}/>  
      </Routes>
    );
};

export default AppRouter;