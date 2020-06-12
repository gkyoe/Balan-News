import * as React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
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
  }

  render() {
    return (
      <ul>
        {this.props.news.map((data, idx) => {
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
