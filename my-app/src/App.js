import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate = (event) => {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      ...this.state,
      filterText: event.target.value
    })
  }

  selectedUpdate = (id) =>  {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      ...this.state,
      selectedBuilding: id
    })
  }

  addToData = (newCode, newName) => {
    var newBuilding = {
        id: this.state.data.length + 1,
        code: newCode,
        name: newName
    }
    this.setState({
      ...this.state,
      data: this.state.data.concat([newBuilding])
    })
  }

  removeBuilding = (id) => {
    this.setState({
      ...this.state,
      selectedBuilding: 0,
      data: this.state.data.filter(directory => directory.id !== id)
      
    })
  }

  render() {
    return (
      <div className="bg">

          <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">UF Directory App</span>
          </nav>


        <AddBuilding addToData={this.addToData}/>

        <Search filterText = {this.state.filterText} filterUpdate={this.filterUpdate}/>
        
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <td>
                        <b>Code Building</b>
                      </td>
                    </tr>
                    <BuildingList
                      data={this.state.data}
                      filterText={this.state.filterText}
                      selectedUpdate= {this.selectedUpdate}
                      removeBuilding= {this.removeBuilding}
                    />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding selectedBuilding={this.state.selectedBuilding} building={this.state.data[this.state.selectedBuilding - 1]} />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;