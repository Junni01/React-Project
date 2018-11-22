const APIkey = 'bfd597269abc4e649418f65659c93f1a'; 
const ApiQuery = 'bitcoin'
const ApiDate = '2018-10-22' 
const API = "https://newsapi.org/v2/everything?q=" + ApiQuery + "&from=" + ApiDate + "&sortBy=publishedAt&apiKey=" + APIkey



class ApiTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      value: "gooby"
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles }));
  }

  searched() {
    console.log("moi")
    fetch("https://newsapi.org/v2/everything?q=" + a + "&from=" + ApiDate + "&sortBy=publishedAt&apiKey=" + APIkey)
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles }));
  }




  render() {
    const { news } = this.state;
    
    return (
    
    <div>  
    <input type='text' className="input" placeholder="Search..." />
    <button type="button" className="btn btn-default" onClick={}>GO</button>
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
          {news.map((newpiece, index) =>
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

ReactDOM.render(<ApiTable />, document.getElementById('ApiTable'));




