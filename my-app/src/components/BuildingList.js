import React from 'react';

class BuilingList extends React.Component {
	render() {
		let { data } = this.props;

		let buildingList = data.filter((directory, index) => directory.name.toLowerCase().startsWith(this.props.filterText.toLowerCase())).map((directory, index) => {

			return (
				<tr>
					<td onClick={() => this.props.selectedUpdate(index)}>{directory.code} </td>
					<td onClick={() => this.props.selectedUpdate(index)}> {directory.name} </td>
					<td onClick={() => this.props.removeBuilding(index)}><button className="btn btn-outline-danger">Delete</button></td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;