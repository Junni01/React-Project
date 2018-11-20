
class Data1 extends React.Component {
  render() {
    
      return (
        <ul>
        <li>{DataObject.id}</li>
        <li>{DataObject.name}</li>
        <li>{DataObject.isActive}</li>
        <li>{DataObject.price}</li>
        <li>{DataObject.description}</li>
      </ul> 
      );
  }
}

class Data2 extends React.Component {
    render() {
      
        return (
          <ul>
          <li>{DataObject.id}</li>
          <li>{DataObject.name}</li>
          <li>{DataObject.isActive}</li>
          <li>{DataObject.price}</li>
          <li>{DataObject.description}</li>
        </ul> 
        );
    }
  }

  class Data3 extends React.Component {
    render() {
      
        return (
          <ul>
          <li>{DataObject.id}</li>
          <li>{DataObject.name}</li>
          <li>{DataObject.isActive}</li>
          <li>{DataObject.price}</li>
          <li>{DataObject.description}</li>
        </ul> 
        );
    }
  }
  
  class Data4 extends React.Component {
  render() {
    
      return (
        <ul>
        <li>{DataObject.id}</li>
        <li>{DataObject.name}</li>
        <li>{DataObject.isActive}</li>
        <li>{DataObject.price}</li>
        <li>{DataObject.description}</li>
      </ul> 
      );
  }
}



ReactDOM.render(<Data1 />, document.getElementById('data'));
ReactDOM.render(<Data2 />, document.getElementById('data2'));
ReactDOM.render(<Data3 />, document.getElementById('data3'));
ReactDOM.render(<Data4 />, document.getElementById('data4'));



