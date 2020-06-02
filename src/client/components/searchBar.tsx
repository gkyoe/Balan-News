import * as React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "react-sidebar";
import axios from "axios";
import ArticleList from "./articleList";
import "./searchBar.css";

interface searchProps {
  //   name: string;
  //   value: any;
}

interface searchState {
  keyword: string;
  articles: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
  }[];
  sidebarOpen: boolean;
}

export default class SearchBar extends React.Component<
  searchProps,
  searchState
> {
  constructor(props: searchProps) {
    super(props);
    this.state = {
      keyword: "",
      articles: [],
      sidebarOpen: false,
    };

    this.handleChangeKeyword = this.handleChangeKeyword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // const { name, value } = event.target;
    this.setState({ keyword: event.target.value });
    console.log(this.state);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const keyword = this.state.keyword;

    axios
      .post(`http://localhost:3000/naverNews`, { data: keyword })
      .then((res) => {
        console.log(res.data);
        this.setState({ articles: res.data.items });
      })
      .then((err) => {
        throw err;
      });
  };

  onSetSidebarOpen(open: any) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      //   <div className="search-Zone">
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            className="searchbar"
            name="searchbar"
            type="text"
            placeholder="키워드를 검색하세요."
            value={this.state.keyword}
            onChange={this.handleChangeKeyword}
          />
          <button className="searchBtn" type="submit">
            검색
          </button>
        </form>
        <div className="newsList">
          <ul>
            {this.state.articles.map((contact, i) => {
              return <ArticleList title={contact.title} key={i} />;
            })}
          </ul>
        </div>
      </React.Fragment>
      //   </div>
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
