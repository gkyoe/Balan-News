import * as React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "react-sidebar";
import axios from "axios";
import ArticleList from "./articleList";
import "./searchBar.css";

interface searchProps {
  articles: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
    content: string | undefined;
    logo: string | undefined;
  }[];
  keyword: string;
  limit: number;
  count: number;
  handleSubmitSearching: any;
  handleChangeKeyword: any;
  addArticleBody: any;
  deleteArticleBody: any;
  // emptyArticleBody: any;
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
  }

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
            {/* <ul className="article-list" onChange={this.handleCheckedOn}> */}
            <ul className="article-list">
              {this.props.articles.map((contact, idx) => {
                return (
                  <ArticleList
                    news={contact}
                    key={idx}
                    limit={this.props.limit}
                    count={this.props.count}
                    checkedBox={this.state.checkedBox}
                    addArticleBody={this.props.addArticleBody}
                    deleteArticleBody={this.props.deleteArticleBody}
                    // emptyArticleBody={this.props.emptyArticleBody}
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
