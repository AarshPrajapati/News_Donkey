// import React from 'react'
import React from 'react'

const NewsItems = (props)=> {
    let {title,description,Image,Url,Author,date,Source}= props;
    return (
      <div>
        <div className="card h-100 mt-2" style={{}}>
       <div style={{position:'absolute', right:'0'}}>  <span className="badge rounded-pill bg-success">{Source}
        </span></div>
        <img src={Image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {Author?Author:"Unknow"} - {new Date(date).toGMTString()}</small></p>
        </div>
        <div className="card-footer border-0">
          <a href={Url} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">View More</a>
        </div>
      </div>
      </div>
    )
}

export default NewsItems