import * as React from "react";
import "./articleList.css";

interface ListProps {
  news: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
  };
  key: number;
  limit: number;
  count: number;
}

interface ListState {}

export default class ArticleList extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {};
    // this.onCheckChange = this.onCheckChange.bind(this);
  }

  render() {
    return (
      <li className="article-title">
        <input className="select-checkbox" type="checkbox" />
        {this.props.news.title}
      </li>
    );
  }
}
