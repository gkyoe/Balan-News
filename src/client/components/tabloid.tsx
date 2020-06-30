import * as React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import cors from "cors";
import cheerio from "cheerio";
import NewsBody from "./newsBody";
import "./searchBar.css";

interface tabloidProps {
  // checkedBox: NodeListOf<HTMLInputElement> | null;
  news: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
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
    // this.crawlingNews = this.crawlingNews.bind(this);
  }

  // crawlingNews = (url: string) => {
  //   axios
  //     .get(
  //       "https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=003&aid=0009913386"
  //       url
  //     )
  //     .then(
  //       (response) => {
  //         if (response.status === 200) {
  //           const html = response.data;
  //           const $ = cheerio.load(html);
  //           // return $;
  //           console.log("$: ", $);
  //           console.log("연결은 됨");
  //         } else {
  //           console.log("status코드 200아님");
  //         }
  //       },
  //       (error) => console.log("여기 에러인가?: ", error)
  //     );
  // };

  render() {
    return (
      <ul>
        {this.props.news.map((data, idx) => {
          // console.log(this.crawlingNews(data.link));
          return (
            <div>
              <NewsBody news={data} key={idx + 100}></NewsBody>
            </div>
          );
        })}
      </ul>
    );
  }
}
