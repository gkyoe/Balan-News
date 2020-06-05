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
  // onCheckChange: any;
}

interface ListState {
  // count: number;
  // selectedArticles: {}[];
  chkbox: boolean;
}

export default class ArticleList extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {
      // selectedArticles: [],
      chkbox: false,
    };
    // this.onCheckChange = this.onCheckChange.bind(this);
  }

  render() {
    // let Nodelists: any = document.querySelectorAll(".select-checkbox");
    // console.log("Nodelists: ", Nodelists);

    const onCheckChange = (e: React.FormEvent<HTMLLIElement>) => {};
    return (
      <li className="article-title" onChange={onCheckChange}>
        <input
          className="select-checkbox"
          type="checkbox"
          defaultChecked={this.state.chkbox}
        />
        {this.props.news.title}
      </li>
    );
  }
}
