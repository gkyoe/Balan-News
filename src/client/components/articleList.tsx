import * as React from "react";
import "./articleList.css";

interface ListProps {
  title: string;
  limit: number;
  count: number;
  // onCheckChange: any;
}

interface ListState {
  count: number;
}

export default class ArticleList extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    // this.state = {
    //   count: 0,
    // };

    // this.onCheckChange = this.onCheckChange.bind(this);
  }

  // onCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   const checked = e.target.checked;
  //   const counted = this.state.count;
  //   const limited = this.props.limit;
  //   console.log(
  //     "checked: ",
  //     checked,
  //     " counted: ",
  //     counted,
  //     " limited: ",
  //     limited
  //   );
  //   if (checked && counted >= limited) {
  //     console.log(this.state.count);
  //     alert("최대 3개까지 선택할 수 있습니다.");
  //   } else if (checked && counted < limited) {
  //     console.log("여기에 들어오나?");
  //     console.log(this.state);
  //     this.setState({ count: counted + 1 });
  //   } else if (checked) {
  //     console.log(this.state);
  //     this.setState({ count: counted - 1 });
  //   }
  // }

  render() {
    return (
      <li className="article-title">
        <input className="select-checkbox" type="checkbox" />
        {/* <input type="checkbox" onChange={this.onCheckChange} /> */}
        {this.props.title}
      </li>
    );
  }
}
