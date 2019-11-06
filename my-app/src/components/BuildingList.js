import React from 'react';

class BuilingList extends React.Component {
	render() {
		let { data } = this.props;

		let buildingList = data.filter(directory => directory.name.toLowerCase().startsWith(this.props.filterText.toLowerCase())).map(directory => {
			console.log(directory.id)
			return (
				<tr key={directory.id}>
					<td onClick={() => this.props.selectedUpdate(directory.id)}>{directory.code} </td>
					<td onClick={() => this.props.selectedUpdate(directory.id)}> {directory.name} </td>
					<td onClick={() => this.props.removeBuilding(directory.id)}><button className="btn btn-outline-danger">Delete</button></td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;