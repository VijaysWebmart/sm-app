import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Component1 from './component/Component1'
import React, { useState, createContext } from 'react';
import SendData from './component/SendData';
import ReducerHooks from './component/Hooks/ReducerHooks';
import Todo from './component/callbackHooks/Todo'
import MemoExample from './component/MemoHooks/MemoExample';
import Registration from './pages/Registration';
import ContactApp from './pages/ContactApp';
import ProductsList from './ProductList/ProductsList';


import FoodBlog from './FoodRecipe/FoodBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './pages/Error404';
import HtmlBlocks from './HtmlBlocks/HtmlBlock';
import Block from './HtmlBlocks/Block';
import AllPost from './ManagePost/AllPost';
import Post from './ManagePost/Post';
export const UserContext = createContext();

function App() {
  const [userName, setUser] = useState("Vijay");
  const [userEmail, setUserEmail] = useState("Vijaysalve@email.com");
  const [theme, setTheme] = useState(true);
  const [DOB, setDOB] = useState("")

  const ThemeMode = () => {
    setTheme(!theme)
    console.log(theme)
  }

  const getDOB = (userDOB) => {
    console.log("User Date Of Birth Is :", userDOB)
    setDOB(userDOB);
  }
  return (
    <>
      <BrowserRouter>
        <div className={theme ? 'bg-light text-dark' : 'bg-dark text-light'} style={{ minHeight: '100vh', width: '100%', transition: 'background 0.3s linear' }}>
          <UserContext.Provider value={{ UserName: userName, Email: userEmail, ThemeMode: ThemeMode, SelectedTheme: theme, getDOB: getDOB, DOB: DOB }}>
            <Home user={userName} />
            <div className="cs-h1 container mt-5 d-none">
              <Component1 />
            </div>
            {/*<SendData className="d-none "/>*
                <ReducerHooks /> 
                <Todo />
                <MemoExample />
                 this resitration page comes with firebase database
                <Registration /> */}


          </UserContext.Provider>


          <Routes>
            <Route path="/food-blog" element={<FoodBlog />} />
            <Route path="/Content-page" element={<ContactApp />} />
            <Route path="/e-store" element={<ProductsList />} />
            <Route path="/user-ragistration" element={<Registration />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/html-blocks" element={<HtmlBlocks />} />
            <Route path='/block/:id' element={<Block />} />
            <Route path="/all-post" element={<AllPost />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>


         
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
