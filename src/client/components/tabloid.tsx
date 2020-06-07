import * as React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./searchBar.css";

interface tabloidProps {
  // checkedBox: NodeListOf<HTMLInputElement> | null;
  news: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
  }[];
}

interface tabloidState {}

export default class Tabloid extends React.Component<
  tabloidProps,
  tabloidState
> {
  constructor(props: tabloidProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}
