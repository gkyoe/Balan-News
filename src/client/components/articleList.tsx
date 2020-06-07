import * as React from "react";
import Tbloid from "./tabloid";
import "./articleList.css";

interface ListProps {
  news: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
  };
  checkedBox: NodeListOf<HTMLInputElement> | null;
  key: number;
  limit: number;
  count: number;
  showArticleBody: any;
}

interface ListState {}

export default class ArticleList extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {};
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const checkedBox = this.props.checkedBox;
    console.log(checkedBox);
    let articleBody: any;

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
      let checkCbx: NodeListOf<Element> = document.querySelectorAll(
        "input[type='checkbox']:checked"
      );
      if (e.target.checked) {
        // articleBody = <Tbloid news={this.props.news}></Tbloid>;
        const slectedArticle = this.props.news;
        this.props.showArticleBody(slectedArticle);
      }
    };
    return (
      <div>
        <li className="article-title">
          <input
            className="select-checkbox"
            type="checkbox"
            key="key"
            onChange={handleCheck}
          />
          {this.props.news.title}
        </li>
        {articleBody}
      </div>
    );
  }
}
