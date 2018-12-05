
// This is the filter component we use to filter the dataset in real time. 


class filter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          filtering: ""
        }
    }

    handleChange = (e) => {
        this.setState({
          filtering: e.target.value
        })
        this.props.onChange(event.target.value)
    }


    render() {
        return (
          <div>
            <label htmlFor="filter">Filter the results: </label>
            <input type="text" id="filter" value={this.state.filtering} onChange={this.handleChange}/>
          </div>
          )
      }
    

} 

export default filter