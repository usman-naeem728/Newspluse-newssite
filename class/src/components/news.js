import React, { Component } from 'react'
import Newsitem from './newsitem'

export class News extends Component {
  articles = [
    {
      "name": 'obj1'
    },
    {
      "name": 'obj2'
    }
  ]
  constructor() {
    super();
    console.log("checking")
    this.state = {
      articles: this.articles
    }
  }
  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?category=business&apiKey=eebd8b93a40f426bba4823e1fb8d94d9";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }
  render() {
    return (
      <div>
        <div className='container my-3'>
          <div className='row'>
            {this.state.articles.map((element) => {
              return (
                <div className='col-md-4 my-3'>
                  <Newsitem title={element.title?element.title.slice(0,45):" " } description={element.description?element.description.slice(0,88):" "} 
                  imgUrl={element.urlToImage} url={element.url} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default News
