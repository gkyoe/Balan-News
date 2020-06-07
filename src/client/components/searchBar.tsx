import * as React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "react-sidebar";
import axios from "axios";
import ArticleList from "./articleList";
import "./searchBar.css";

interface searchProps {
  //   name: string;
  //   value: any;
  articles: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
  }[];
  keyword: string;
  limit: number;
  count: number;
  handleSubmitSearching: any;
  handleChangeKeyword: any;
  showArticleBody: any;
}

interface searchState {
  checkedBox: NodeListOf<HTMLInputElement> | null;
}

export default class SearchBar extends React.Component<
  searchProps,
  searchState
> {
  constructor(props: searchProps) {
    super(props);
    this.state = {
      checkedBox: null,
    };
    this.onCheckChange = this.onCheckChange.bind(this);
  }

  onCheckChange = (e: React.FormEvent<HTMLUListElement>) => {
    // let Nodelists: any = document.querySelectorAll(".select-checkbox");
    // Nodelists.forEach((value: Node, key: number, parent: NodeList): void => {
    //   value.DOCUMENT_NODE.
    // })

    const allCheckBoxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    ) as NodeListOf<HTMLInputElement>;
    console.log("allCheckBoxes: ", allCheckBoxes);

    this.setState({ checkedBox: allCheckBoxes });
  };

  render() {
    return (
      <div className="search-Zone">
        <React.Fragment>
          <form onSubmit={this.props.handleSubmitSearching}>
            <input
              className="searchbar"
              name="searchbar"
              type="text"
              placeholder="키워드를 검색하세요."
              value={this.props.keyword}
              onChange={this.props.handleChangeKeyword}
            />
            <button className="searchBtn" type="submit">
              검색
            </button>
          </form>
          <div className="newsList">
            <ul className="article-list" onChange={this.onCheckChange}>
              {this.props.articles.map((contact, idx) => {
                return (
                  <ArticleList
                    news={contact}
                    key={idx}
                    limit={this.props.limit}
                    count={this.props.count}
                    checkedBox={this.state.checkedBox}
                    showArticleBody={this.props.showArticleBody}
                  />
                );
              })}
            </ul>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

// const SearchBar: React.FC = () => {
//   return (
//     <div className="searchBarZone">
//       <input
//         className="searchBar"
//         name="searchbar"
//         type="text"
//         placeholder="키워드를 검색하세요."
//         // value={this.state.mail}
//         // onChange={this.handleChangeMail}
//       />
//       <div className="newList"></div>
//     </div>
//   );
// };

// export default SearchBar;
