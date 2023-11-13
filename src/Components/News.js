import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    pageSize : 8,
    country:"in",
    category: "general"
  }
    constructor(){
        super();
        this.state={
            articles : [],
           // loading :  false,
            page:1,
            totalResults:0
        }
    }

    async updateNews(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ddd93c97bcd4d6a991e3a0295cadaaf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      this.setState({loading : true})
      let parsedData = await data.json();
      this.setState({
        articles : this.state.articles.concat(parsedData.articles), 
        totalResults : parsedData.totalResults,
       // loading : false
        });
    }
   async componentDidMount(){
             this.updateNews();
       }

     loadNext = async()=>{
    this.setState({page: this.state.page + 1})
     this.updateNews();
    }

    loadPrevious = async()=>{
      this.setState({page: this.state.page - 1})

     this.updateNews();
    }

    fetchMoreData = async()=>{
      this.setState({page: this.state.page + 1})
     this.updateNews();
    }
  render() {
    return (
      <>
        <h2 className='text-center'>NewsMoneky - Top headlines</h2>
           {/* {this.state.loading && <Spinner/>} */}
           <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    inverse={true} //
    hasMore={this.state.articles.length !== this.state.totalResults}
    loader={<Spinner/>}
    scrollableTarget="scrollableDiv">

       <div className="container">
        <div className="row">
        {this.state.articles.map((e)=>{ 
         return <div className="col md-4 my-3">
         <NewsItem key={e.url} title = {e.title ? e.title.slice(0,15):""} description = {e.description ? e.description.slice(0,45): ""} imageUrl = {e.urlToImage} 
         newsUrl = {e.url} author = {e.author} date = {new Date(e.publishedAt).toGMTString()} source = {e.source.name}/>
         </div>      
        })}
          </div>  
          </div>
       </InfiniteScroll>

        { //this is for Previuos & Next Logic buttons
        /* <div className='container d-flex justify-content-between'>
        <button disabled = {(this.state.page <= 1)} type="button" className="btn btn-dark" onClick={this.loadPrevious}>&larr; Previous</button>
        <button disabled = {(this.state.page + 1 > Math.ceil(this.state.totalResults/20))} type="button" className="btn btn-dark" onClick={this.loadNext}>Next &rarr;</button>
        </div> */}
        </>
    )
  };
}

export default News
