import React, { Component } from "react";
import SplitPane from "react-split-pane";
import ReactMarkdown from "react-markdown";
import Editor from "./panes/Editor";
import "./Panes.css";
import "./panes/github-markdown.css";

export default class Panes extends Component {
  constructor(props) {
    super(props);
    this.state = { markdownSrc: "# Hello World" };
    this.onMarkdownChange = this.onMarkdownChange.bind(this);
  }

  onMarkdownChange(md) {
    this.setState({ markdownSrc: md });
  }

  render() {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <SplitPane split="vertical" defaultSize="50%">
          <div className="view-pane markdown-body">
            <ReactMarkdown className="result" source={this.state.markdownSrc} />
          </div>
          <div className="editor-pane">
            <Editor
              className="editor"
              value={this.state.markdownSrc}
              onChange={this.onMarkdownChange}
            />
          </div>
        </SplitPane>
      </div>
    );
  }
}
