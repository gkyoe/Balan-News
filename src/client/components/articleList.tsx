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
  addArticleBody: any;
  reCheckArticleBody: any;
  emptyArticleBody: any;
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
      const slectedArticle = this.props.news;
      if (e.target.checked) {
        // articleBody = <Tbloid news={this.props.news}></Tbloid>;
        this.props.addArticleBody(slectedArticle);
      } else if (!e.target.checked) {
        this.props.emptyArticleBody(slectedArticle);
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
