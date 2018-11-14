class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">Hello, world! I am a CommentBox.</div>

        );
    }
}

class InnerBox extends React.Component {
  render() {
    return (
      <button>Moi</button>
    );

  }
}



ReactDOM.render(<CommentBox />, document.getElementById('content'));
ReactDOM.render(<InnerBox />, document.getElementById('inside-content'));
