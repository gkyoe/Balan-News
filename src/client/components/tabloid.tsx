import * as React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import cors from "cors";
import cheerio from "cheerio";
import NewsBody from "./newsBody";
import "./searchBar.css";
import { Article } from "../../server/models";
import { rejects } from "assert";
import { resolve } from "url";

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

interface tabloidState {
  upadateNews: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
    content: string | undefined;
    logo: string | undefined;
  }[];
}

export default class Tabloid extends React.Component<
  tabloidProps,
  tabloidState
> {
  constructor(props: tabloidProps, state: tabloidState) {
    super(props);
    this.state = {
      upadateNews: [],
    };
    this.requestCrawlingNews = this.requestCrawlingNews.bind(this);
  }

  requestCrawlingNews = (apicollection: Article) => {
    axios
      .post(`http://localhost:3000/loadNews`, apicollection)
      .then((response) => {
        return response.data;
      })
      .then((value) => {
        this.setState({ ...this.state, upadateNews: value });
      })
      .catch((error) => error.message);
  };

  // componentWillReceiveProps(props: tabloidProps) {
  //   console.log("실행은 되나?");
  //   props.news.map((el) => {
  //     this.requestCrawlingNews(el);
  //   });
  // }

  static async getDerivedStateFromProps(
    nextprops: tabloidProps,
    nextstate: tabloidState
  ) {
    console.log("getDerivedStateFromProps is working");

    let updateCollection = await nextprops.news.map((el) => {
      axios
        .post(`http://localhost:3000/loadNews`, el)
        .then((response) => {
          if (response.status === 200) {
            console.log("getDerivedStateFromProps status is 200");
            console.log("response data is: ", response.data);

            return response.data;
          } else {
            // console.log("getDerivedStateFromProps return null");
            return null;
          }
        })
        .catch((error) => error.message);
    });
    await console.log("updateCollection: ", updateCollection);
  }

  render() {
    return (
      <ul>
        {this.state.upadateNews.map((data, idx) => {
          // let crawlingData = this.requestCrawlingNews(data);
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
