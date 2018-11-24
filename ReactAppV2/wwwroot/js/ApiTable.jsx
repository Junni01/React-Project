const APIkey = 'bfd597269abc4e649418f65659c93f1a'; 
const ApiQuery = 'bitcoin'
const ApiDate = '2018-10-22' 


class ApiData extends React.Component {
  
  
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      term: null,
      value: ''
    };

  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    
  }

  handleClick(e) {
    if(e) e.preventDefault();
    this.setState({
      value: '',
      term: this.state.value
    }) 
  

  let term = this.state.value;
  let mountapi = "https://newsapi.org/v2/everything?q=" + term + "&sortBy=publishedAt&apiKey=bfd597269abc4e649418f65659c93f1a"

  fetch(mountapi)
  .then(response => response.json())
  .then(data => this.setState({ news: data.articles }));

  }

  componentWillMount() {
      mountapi = "https://newsapi.org/v2/everything?q=Bitcoin&sortBy=publishedAt&apiKey=bfd597269abc4e649418f65659c93f1a"
      console.log(mountapi)
    fetch(mountapi)
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles }));
  } 


  render() {



    return (
    
    <div>

             <form>
            <label>
            Search News:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Go" onClick={this.handleClick}/>
            </form>
      <table className="table">
          <tbody>
          <tr>
      <th>Author</th>
      <th>Pic</th>
      <th>Description</th>
      <th>Published</th>
      <th>Source</th>
      <th>URL</th>
          </tr>
            {this.state.news.map((newpiece, index) =>
                <tr key={index}>
                <td>
                {newpiece.author} 
                </td>
                <td>
                <img src={newpiece.urlToImage} className="img-responsive"/>
                </td>
                <td>
                {newpiece.description}
                </td>
                <td>
                {newpiece.publishedAt}
                </td>
                <td>
                {newpiece.source.name}
                </td>
                <td>
                <a href={newpiece.url}>Link</a>
                </td>
                </tr>
            )}
        </tbody>
      </table>
    </div>
    );
  }
}

ReactDOM.render(<ApiData />, document.getElementById('ApiTable'));




