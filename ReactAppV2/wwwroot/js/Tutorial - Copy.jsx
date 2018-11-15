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

class Jokester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
      fetch("http://hn.algolia.com/api/v1/items/1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map(item => 
            <div key = {item.id}>
              {item.id}
            </div>
          )}
          </div>
      );
    }
  }
}




ReactDOM.render(<CommentBox />, document.getElementById('content'));
ReactDOM.render(<InnerBox />, document.getElementById('inside-content'));
ReactDOM.render(<Jokester />, document.getElementById('react'));

