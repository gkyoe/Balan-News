import * as React from "react";

interface ListProps {
  title: string;
}

export default class ArticleList extends React.Component<ListProps> {
  render() {
    return <li>{this.props.title}</li>;
  }
}
