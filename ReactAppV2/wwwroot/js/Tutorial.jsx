const API = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten';

class ApiTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  render() {
    const { hits } = this.state;
    console.log("this state: ")
    console.log(this.state)
    console.log("hits muuttuja:")
    console.log(hits)
    
    
    return (
      <table className="table">
        <tbody>
        <tr>
    <th>Type</th>
    <th>Setup</th>
    <th>Punchline</th>
        </tr>
            {hits.map((hit, index) =>
              <tr key={index}>
              <td>
              {hit.type} 
              </td>
              <td>
              {hit.setup}
              </td>
              <td>
              {hit.punchline}
              </td>
              </tr>
            )}
      </tbody>
    </table>
    );
  }
}

ReactDOM.render(<ApiTable />, document.getElementById('ApiTable'));




