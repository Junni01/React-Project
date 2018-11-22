
class Handler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: Animals2,
    };

  }
 
  render() {
    console.log(Animals2);    

      return (
        <div>
          <Data items={this.state.animals} />
        </div>
      );
  }
}

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredAnimals: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filteredAnimals: this.props.items
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredAnimals: nextProps.items
    });
  }

  handleChange(e) {
    
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {

      currentList = this.props.items;
      newList = currentList.filter(item => {
      const lc = item.name.toLowerCase();
      const filter = e.target.value.toLowerCase();

      return lc.includes(filter);
      });
    }
    else {
      newList = this.props.items;
    }
    
    this.setState({
      filteredAnimals: newList
    });


  
  }
  
  render() {
      return (
        <div>
          <input type="text" className="input" placeholder="Search..." onChange={this.handleChange}/>
          <div className="row">       
              {this.state.filteredAnimals.map(animal => 
              <div key={animal.id} className="col-md-4" >
              <h2>{animal.name}</h2>
              <ul>
              <li><b>Species: </b> {animal.species}</li>
              <li><b>Latin name: </b> {animal.latinname}</li>
              <li><b>Gender: </b> {animal.gender}</li>
              <li><b>Slogan: </b>{animal.slogan}</li>
              </ul>
              </div>
              )}        
          </div>
        </div>
      );
  }



}

ReactDOM.render(<Handler />, document.getElementById('data'));




