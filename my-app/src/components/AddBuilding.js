import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          code: '',
          name: ''
        };
      }
    changeCode = (event) => {
        this.setState({
            ...this.state,
            code: event.target.value
        })
    }

    changeName = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value
        })
    }

    submitForm = () => {
        this.props.addToData(this.state.code, this.state.name)
        this.setState({
            code: '',
            name: ''
        })
    }

	render() {
		return (
			<>
                <form>
                    <input type="text" placeholder="Add a code bro" value={this.state.code}  onChange={this.changeCode}/>
                    <input type="text" placeholder="Add a building bro" value={this.state.name}  onChange={this.changeName}/>
                </form>
                <div style={{textAlign: "center" }}>
                    <button  class="btn btn-primary" onClick={() => this.submitForm()}>Add</button>
                </div>
            </>
		);
	}
}
export default AddBuilding;
