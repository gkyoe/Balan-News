import * as React from "react";
import { Link, Route, Switch, BrowserRouter, Router } from "react-router-dom";
import axios from "axios";
import cheerio from "cheerio";
import SearchBar from "./searchBar";
import Tabloid from "./tabloid";
import "./sideBar.css";

interface SidebarProps {}

interface SidebarState {
  width: number;
  height: string;
  transform: number;
  keyword: string;
  limit: number;
  count: number;
  checked: number;
  articles: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
    content: string | undefined;
    logo: string | undefined;
  }[];
  selectedArticles: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
    content: string | undefined;
    logo: string | undefined;
  }[];
}

interface Selected {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
  content: string | undefined;
  logo: string | undefined;
}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props);
    this.state = {
      width: 450,
      height: "100vh",
      transform: 0,
      keyword: "",
      limit: 3,
      count: 0,
      checked: 0,
      articles: [],
      selectedArticles: [],
    };

    this.handleCloseToggle = this.handleCloseToggle.bind(this);
    this.handleSubmitSearching = this.handleSubmitSearching.bind(this);
    this.handleChangeKeyword = this.handleChangeKeyword.bind(this);
    this.addArticleBody = this.addArticleBody.bind(this);
    this.deleteArticleBody = this.deleteArticleBody.bind(this);
    this.emptyArticleBody = this.emptyArticleBody.bind(this);
    // this.crawlingNews = this.crawlingNews.bind(this);
  }

  handleCloseToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (this.state.transform === 0) {
      this.setState({ transform: -450 });
    } else {
      this.setState({ transform: 0 });
    }
    console.log(this.state.transform);
  };

  handleSubmitSearching = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const keyword = this.state.keyword;

    axios
      .post(`http://localhost:3000/searchKeywords`, { data: keyword })
      .then((res) => {
        console.log("res.data", res.data);
        this.setState({ articles: res.data });
      })
      .then(() => this.emptyArticleBody())
      // .then(() => this.crawlingNews())
      .then((err) => {
        throw err;
      });
    console.log(this.state.articles);
  };

  handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // const { name, value } = event.target;
    this.setState({ keyword: event.target.value });
    console.log(this.state);
  };

  addArticleBody = (
    // event: React.ChangeEvent<HTMLInputElement>,
    selectedArticle: any
  ): void => {
    this.setState((prevState: SidebarState) => ({
      // selectedArticles: [...(prevState.selectedArticles ?? []), slectedArticle],
      selectedArticles: [...prevState.selectedArticles, selectedArticle],
    }));
  };

  deleteArticleBody = (data: Selected): void => {
    this.setState({
      ...this.state,
      selectedArticles: this.state.selectedArticles.filter(
        (art) => art.originallink !== data.originallink
      ),
    });
  };

  //새로운 키워드로 검색 시 이미 선택된 article 을 삭제한다.
  emptyArticleBody = (): void => {
    let checkCbx: NodeListOf<Element> = document.querySelectorAll(
      "input[type='checkbox']"
    );
    console.log("checkCbx: ", checkCbx);
    checkCbx.forEach((cbx: any) => {
      if (cbx.checked) {
        cbx.checked = false;
      }
    });
    this.setState({ ...this.state, selectedArticles: [] });
  };

  render() {
    const transform = this.state.transform;
    console.log(transform);
    return (
      <table>
        <tbody>
          <tr
            style={{
              transform: `translateX(${this.state.transform}px)`, //470
            }}
          >
            <th>
              <div
                className="side-bar"
                style={{
                  width: this.state.width,
                  minHeight: this.state.height,
                  transform: `translateX(${this.state.transform}px)`, //470
                }}
              >
                <SearchBar
                  articles={this.state.articles}
                  keyword={this.state.keyword}
                  limit={this.state.limit}
                  count={this.state.count}
                  handleSubmitSearching={this.handleSubmitSearching}
                  handleChangeKeyword={this.handleChangeKeyword}
                  addArticleBody={this.addArticleBody}
                  deleteArticleBody={this.deleteArticleBody}
                  // emptyArticleBody={this.emptyArticleBody}
                />
              </div>
            </th>
            <th>
              <div
                className="toggle-bar"
                style={{
                  width: 50,
                  minHeight: this.state.height,
                }}
                onClick={this.handleCloseToggle}
              ></div>
            </th>
            <th>
              <Tabloid news={this.state.selectedArticles}></Tabloid>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Sidebar;
