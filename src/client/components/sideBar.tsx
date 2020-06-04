import * as React from "react";
import { Link, Route, Switch, BrowserRouter, Router } from "react-router-dom";
import axios from "axios";
import SearchBar from "./searchBar";
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
  }[];
  selectedArticles: {}[];
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
    this.onCheckChange = this.onCheckChange.bind(this);
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
      .post(`http://localhost:3000/naverNews`, { data: keyword })
      .then((res) => {
        console.log(res.data);
        this.setState({ articles: res.data.items });
      })
      .then((err) => {
        throw err;
      });
  };

  handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // const { name, value } = event.target;
    this.setState({ keyword: event.target.value });
    console.log(this.state);
  };

  onCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("1. length: ", this.state.selectedArticles.length);
    console.log("state: ", [...this.state.selectedArticles].length);
    let Nodelists: any = document.querySelectorAll(".select-checkbox");

    // if (this.state.checked >= 3) {
    //   alert("최대 3개까지 선택할 수 있습니다.");
    // } else {
    if (this.state.selectedArticles) {
      this.setState({ selectedArticles: [] });
      Array.from(Nodelists).filter((el: any) => {
        if (el.checked) {
          this.state.selectedArticles.push(el);
        }
      });
    }
    // }
    console.log(Nodelists);

    this.setState({ checked: this.state.selectedArticles.length });
    console.log("2. length: ", this.state.checked);
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
                  onCheckChange={this.onCheckChange}
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
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Sidebar;
