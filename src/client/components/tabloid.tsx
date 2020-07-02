import * as React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import cors from "cors";
import cheerio from "cheerio";
import NewsBody from "./newsBody";
import "./searchBar.css";

interface Article {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
  content: string | undefined;
  logo: string | undefined;
}

interface tabloidProps {
  // checkedBox: NodeListOf<HTMLInputElement> | null;
  news: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
    content: string | undefined;
    logo: string | undefined;
  }[];
}

interface tabloidState {}

export default class Tabloid extends React.Component<
  tabloidProps,
  tabloidState
> {
  constructor(props: tabloidProps) {
    super(props);
    this.state = {};
    this.requestCrawlingNews = this.requestCrawlingNews.bind(this);
  }

  requestCrawlingNews = (apiCollection: Article) => {
    axios.post(`http://localhost:3000/loadNews`, { data: apiCollection }).then(
      (response): Article => {
        // if (response.status === 200) {
        return response.data;
        console.log("response: ", response.data);
        // } else {
        //   //
        // }
      },
      (error) => console.log("여기 에러인가?: ", error)
    );
  };

  render() {
    return (
      <ul>
        {this.props.news.map((data, idx) => {
          let crawlingData = this.requestCrawlingNews(data);
          // console.log(this.crawlingNews(data.link));
          return (
            <div>
              <NewsBody news={crawlingData} key={idx + 100}></NewsBody>
            </div>
          );
        })}
      </ul>
    );
  }
}
