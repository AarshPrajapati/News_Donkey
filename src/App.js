// import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar' //https://www.npmjs.com/package/react-top-loading-bar
import React from 'react'//rcc
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';


const App =()=> {
  let pagesize=15;
 // NewsAPI='97552d6312dd4cd3bd21a913d6b6317d';
  let NewsAPI=process.env.REACT_APP_APIKEY
  const [progress,setProgress]=useState(0);
  // state={ progress:0};
 const Prograss=(prograss)=>{
  setProgress(prograss); 
  // setState({
    //   progress:prograss
    // })
  }

    return (
      <div>
        <BrowserRouter>
        <LoadingBar
       // height={3}
        color='#f11946'
        progress={progress}
       // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News SetPrograss={Prograss} NewsAPI={NewsAPI} key="business"  pagesize={pagesize}  category="business"/>}></Route>
        <Route exact path="/business" element={<News SetPrograss={Prograss} NewsAPI={NewsAPI} key="business"  pagesize={pagesize}  category="business"/>}></Route>
        <Route excat path="/entertainment" element={<News SetPrograss={Prograss} NewsAPI={NewsAPI} key="entertainment"  pagesize={pagesize}  category="entertainment"/>}></Route>
        <Route excat path="/general" element={<News SetPrograss={Prograss} NewsAPI={NewsAPI} key="general"  pagesize={pagesize}  category="general"/>}></Route>
        <Route excat path="/health" element={<News SetPrograss={Prograss} NewsAPI={NewsAPI} key="health"  pagesize={pagesize}  category="health"/>}></Route>
        <Route excat path="/science" element={<News SetPrograss={Prograss} NewsAPI={NewsAPI}  key="science" pagesize={pagesize}  category="science"/>}></Route>
        <Route excat path="/sports" element={<News SetPrograss={Prograss} NewsAPI={NewsAPI} key="sports"  pagesize={pagesize}  category="sports"/>}></Route>
        <Route excat path="/technology" element={<News SetPrograss={Prograss} NewsAPI={NewsAPI}  key="technology" pagesize={pagesize}  category="technology"/>}></Route>
        </Routes>
        {/* Hello Aarsh Prajapati */}
        </BrowserRouter>
      </div>
    )
}

export default App