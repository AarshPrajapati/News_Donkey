import React,{useEffect} from 'react' //rce
import NewsItems from './NewsItems'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'

const News =(props)=> {
const capitalizeFirstLetter=(string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const [articals,setArticals]=useState([])
const [loading,setLoading]=useState(false)
const [page,setPage]=useState(1)
const [totalResults,setTotalResults]=useState(0)

useEffect(()=>{
  // props.SetPrograss(0);
  //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.NewsAPI}&pagesize=${props.pagesize}&page=${page}`;
  //   setLoading(true)
  //   // setState({loading:true})
  //   //console.log(url);
  //   props.SetPrograss(30);
  //   let data= await fetch(url);
  //   let parsedata=await data.json();
  //   props.SetPrograss(70);
  //   console.log(parsedata);
  //   setArticals(parsedata.articles);
  //   setTotalResults(parsedata.totalResults);
  //   setLoading(false);
  //   // setState({articals:parsedata.articles,totalResults:parsedata.totalResults,loading:false})
  //   props.SetPrograss(100);
  Fetchdata(1);
document.title=`News Donkey - ${capitalizeFirstLetter(props.category)}`;
},[]);

 const Fetchdata=async(Page)=>{
    props.SetPrograss(0);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.NewsAPI}&pagesize=${props.pagesize}&page=${page}`;
    setLoading(true)
    props.SetPrograss(30);
    let data= await fetch(url);
    let parsedata=await data.json();
    props.SetPrograss(70);
    setArticals(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
    // setState({articals:parsedata.articles,totalResults:parsedata.totalResults,loading:false})
    props.SetPrograss(100);
}

const fetchMoreData = async() => {
   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.NewsAPI}&pagesize=${props.pagesize}&page=${page+1}`;
    //setState({loading:true})
    //setLoading(true)
    let data= await fetch(url);
    let parsedata=await data.json();
    setArticals(articals.concat(parsedata.articles))
    setPage(page+1)
   // setLoading(false)
  //   setState({
  //   page:state.page+1,
  //   articals:state.articals.concat(parsedata.articles),
  //  // loading:false
  //  // totalResults:parsedata.totalResults
  // })
};
    return ( 
      <div>
        <div className="container mt-4">
          <h2 className='text-center' style={{margin: "35px 0px",marginTop:"90px"}}>NewsDonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
          {loading && <Loading/>}
          <InfiniteScroll
            dataLength={articals.length}
            next={fetchMoreData}
           // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          //  inverse={true} //
            hasMore={articals.length!==totalResults}
            loader={<Loading/>}
            scrollableTarget="scrollableDiv"
          > 
          <div className="container">
          <div className="row">
            {articals.map((element)=>{
              return <div className="col-md-4 mb-3 d-flex align-items-stretch" key={element.url}>
                <NewsItems title={element.title?element.title.slice(0,45):"No Title"} description={element.description?element.description.slice(0,80):"No Description"} 
                Image={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/z/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg?w=992"} Url={element.url}
                date={element.publishedAt} Author={element.author} Source={element.source.name}/>
              </div>
            })}
          </div>
          </div>
          </InfiniteScroll>

        </div>
      </div>
    )
 
}
News.defaultProps = {
  category: 'general',
  pagesize:8
}
News.propTypes={
  category: PropTypes.string,
  pagesize: PropTypes.number
}
export default News
