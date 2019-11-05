import React from 'react';

class Search extends React.Component {

	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<input type="text" placeholder="Type to Filter" value={this.props.filterText} onChange={this.props.filterUpdate}/>
			</form>
		);
	}
}
export default Search;
