import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		return (
			<div>
				<p>
					{this.props.selectedBuilding === 0 ? 
					<i>Click on a name to view more information</i>
					:
					<>
						<div>{this.props.building.code}</div>
						<div>{this.props.building.name}</div>
						<div>{this.props.building.address}</div>
						
					</>
					}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
