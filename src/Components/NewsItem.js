import React from 'react';

const  NewsItem =(props)=>{
 
    let { title, description, imageUrl, newsUrl,author, date ,Source} = props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {Source}
    <span class="visually-hidden">unread messages</span>
  </span>
</h5>
            <p className="card-text">{description}</p>
            {/* "Go somewhere" button */}
             <p className="card-text"><small class="text-muted">By {author} date {date}</small></p>
             
            <a href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
