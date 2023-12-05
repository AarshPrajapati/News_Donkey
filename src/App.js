// import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar' //https://www.npmjs.com/package/react-top-loading-bar
import React, { Component } from 'react'//rcc
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default class App extends Component {
  pagesize=15;
 // NewsAPI='97552d6312dd4cd3bd21a913d6b6317d';
  NewsAPI=process.env.REACT_APP_APIKEY
  state={ progress:0};
  Prograss=(prograss)=>{
    this.setState({
      progress:prograss
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
       // height={3}
        color='#f11946'
        progress={this.state.progress}
        //onLoaderFinished={() => setProgress(0)}
        />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News SetPrograss={this.Prograss} NewsAPI={this.NewsAPI} key="business"  pagesize={this.pagesize}  category="business"/>}></Route>
        <Route exact path="/business" element={<News SetPrograss={this.Prograss} NewsAPI={this.NewsAPI} key="business"  pagesize={this.pagesize}  category="business"/>}></Route>
        <Route excat path="/entertainment" element={<News SetPrograss={this.Prograss} NewsAPI={this.NewsAPI} key="entertainment"  pagesize={this.pagesize}  category="entertainment"/>}></Route>
        <Route excat path="/general" element={<News SetPrograss={this.Prograss} NewsAPI={this.NewsAPI} key="general"  pagesize={this.pagesize}  category="general"/>}></Route>
        <Route excat path="/health" element={<News SetPrograss={this.Prograss} NewsAPI={this.NewsAPI} key="health"  pagesize={this.pagesize}  category="health"/>}></Route>
        <Route excat path="/science" element={<News SetPrograss={this.Prograss} NewsAPI={this.NewsAPI}  key="science" pagesize={this.pagesize}  category="science"/>}></Route>
        <Route excat path="/sports" element={<News SetPrograss={this.Prograss} NewsAPI={this.NewsAPI} key="sports"  pagesize={this.pagesize}  category="sports"/>}></Route>
        <Route excat path="/technology" element={<News SetPrograss={this.Prograss} NewsAPI={this.NewsAPI}  key="technology" pagesize={this.pagesize}  category="technology"/>}></Route>
        </Routes>
        {/* Hello Aarsh Prajapati */}
        </BrowserRouter>
      </div>
    )
  }
}

