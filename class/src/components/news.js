import React, { Component } from 'react'
import Newsitem from './newsitem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number
  // }

  articles = [
    {
      "name": 'obj1'
    },
    {
      "name": 'obj2'
    }
  ]

  captalizedFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
      totalResults: 0
    }
    document.title = `${this.captalizedFirstLetter(this.props.category)} - News App`
  }

  async updateNews(pageNo) {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3e8fa7d170df4181950db3ea231faa6e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
  }
  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }
  // handlePrevClick = async () => {

  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3e8fa7d170df4181950db3ea231faa6e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    })
  };
  render() {
    return (
      <div>

        <div className='container my-3'>
          {this.state.loading && <Spinner/> }
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && <Spinner/>}
          >

            <div className='container'>


              <div className='row'>
                {this.state.articles.map((element) => {
                  return (
                    <div className='col-md-4 my-3'>
                      <Newsitem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "}
                        imgUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                    </div>
                  )
                })}
              </div>
            </div>
            {/* 
pervious next buttons

          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} > &larr;
              Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
          </div> */}
          </InfiniteScroll>
        </div>

      </div>
    )
  }
}

export default News