import * as React from "react";
import { Checkbox } from "antd";
import Tbloid from "./tabloid";
import { Layout, Menu } from "antd";
import "./articleList.css";
import axios from "axios";

const { Header, Sider, Content } = Layout;

interface Article {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
  content: string | undefined;
  logo: string | undefined;
}

interface ListProps {
  news: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
    content: string | undefined;
    logo: string | undefined;
  };
  checkedBox: NodeListOf<HTMLInputElement> | null;
  key: number;
  limit: number;
  count: number;
  addArticleBody: any;
  deleteArticleBody: any;
  // emptyArticleBody: any;
  collapsed: boolean;
}

interface ListState {}

export default class ArticleList extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    // this.state = {};
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const handleCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
      // let checkCbx: NodeListOf<Element> = document.querySelectorAll(
      //   "input[type='checkbox']:checked"
      // );
      let checkedBoolean = e.target.checked;

      const checkClickBox = (checked: boolean, data: Article) => {
        if (checked) {
          this.props.addArticleBody(data);
        } else if (!checked) {
          this.props.deleteArticleBody(data);
        }
      };

      const addCrawlindData = (preData: Article) => {
        axios
          .post(`http://localhost:3000/loadNews`, preData)
          .then((response) => {
            console.log("=====여기는 들어오나?=====");
            console.log("==들어온 데이터는?== ", response.data);
            checkClickBox(checkedBoolean, response.data);
          })
          .catch((error) => error.message);
      };

      const selectedArticle = await this.props.news;
      await addCrawlindData(selectedArticle);
    };

    return (
      <div
        style={
          this.props.collapsed ? { display: "none" } : { display: "block" }
        }
      >
        <li className="article-title">
          <input
            className="select-checkbox"
            type="checkbox"
            key="key"
            onChange={handleCheck}
          />
          {this.props.news.title}
        </li>
      </div>
    );
  }
}
