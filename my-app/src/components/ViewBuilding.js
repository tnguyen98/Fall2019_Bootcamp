import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		return (

			<div className="card text-dark bg-light mb-3">
				<div className="card-body">
					{this.props.selectedBuilding === 0 ? 
					<i>Click on a name to view more information</i>
					:
					<>
						<div>{this.props.building.id}</div>
						<div>{this.props.building.code}</div>
						<div>{this.props.building.name}</div>
						<div>{this.props.building.address}</div>
						
					</>
					}
				</div>
			</div>
		);
	}
}
export default ViewBuilding;