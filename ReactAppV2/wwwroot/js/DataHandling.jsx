
class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }
  
  
  render() {
    console.log(Animals2);    

      return (

        <div className="row">       
        {Animals2.map(animal => 
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
      );
  }
}


ReactDOM.render(<Data />, document.getElementById('data'));




