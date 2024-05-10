import React  from 'react';
import { useState } from 'react';
import NewsItem from './NewsItem';
import { getByDisplayValue } from '@testing-library/react';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react';

const News =()=>{
 
   const [articles, setarticles] = useState([]);
   const [loading, setloading] = useState(false);
   const [page, setpage] = useState(1);
   const [totalResults, settotalResults] = useState(0);

  


    useEffect(() => {
        fetchArticles();
    }, [])
  

    const fetchArticles = async () => {
        this.props.setProgress(10);
        this.setState({loading : true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5c9c9a505bd4627b751221f896b6f4a&page=${this.state.page}`;
        let data = await fetch(url);
        let fulldata = await data.json();

        this.setState({ articles: fulldata.articles });
        this.setState({loading : false})
        this.props.setProgress(100);
    }

   const  handleNexBut = async () =>{
        console.log("Next clicked ");
       
        this.setState({page: this.state.page + 1}, () => {
            this.fetchArticles();
           
        });
    }

   const  handlePreBut = async () =>{
        console.log("Previous button clicked ");
        if (this.state.page <= 1) 
        return;

        this.setState({
            page: this.state.page - 1
        }, () => {
            this.fetchArticles();
        });
    }
 


  const   fetchMoreData = async () => {
        const nextPage = this.state.page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5c9c9a505bd4627b751221f896b6f4a&page=${nextPage}`;
    
        try {
            let response = await fetch(url);
            let data = await response.json();
    
            this.setState(prevState => ({
                articles: [...prevState.articles, ...data.articles],
                loading: false,
                page: prevState.page + 1,
                totalResults: data.totalResults
            }));
    
            this.props.setProgress(100);
        } catch (error) {
            console.error('Error fetching more articles:', error);
            this.setState({ loading: false });
        }
    };
    





        

        return (
            <div className='container'>
               <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
             
                <div className='row'>
                    {articles ? (
                        articles.map((element) => {
                            console.log(element);
                            return (
                                <div className="col md-4" key={element.url}>
                                    <NewsItem  title={element.title.slice(0, 44)}   description={element.description?.slice(0, 88)}          imageUrl={element.urlToImage}      newsUrl={element.url}    author= {element.author}  date={element.publishedAt} Source={element.source.name} />
                                       
                                </div>
                            );
                        })
                    ) : (
                        <p>No articles available</p>
                    )}
                </div>
                </InfiniteScroll>
               
                {this.state.loading && <Spinner/>}
                <div className='container d-flex justify-content-between'>
                    <button type="button" className="btn btn-success" onClick={this.handlePreBut}>Previous</button>
                    <button type="button" className="btn btn-success" onClick={this.handleNexBut}>Next</button>
                </div>
            </div>
        );
    }


    News.defaultProps= {
        name : 'in',
        category : 'general'
        
    }
    
    News.propTypes = {
        country : PropTypes.string,
        category : PropTypes.string
    }
    

export default News;


