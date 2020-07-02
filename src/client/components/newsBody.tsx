import * as React from "react";

interface newsBodyProps {
  news: {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
    content: string | undefined;
    logo: string | undefined;
  };
  key: number;
}

interface newsBodyState {}

export default class ArticleList extends React.Component<
  newsBodyProps,
  newsBodyState
> {
  constructor(props: newsBodyProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>{this.props.news.title}</div>
        <div>{this.props.news.pubDate}</div>
        <div>{this.props.news.originallink}</div>
        <div>{this.props.news.link}</div>
        <div>{this.props.news.content}</div>
      </div>
    );
  }
}
