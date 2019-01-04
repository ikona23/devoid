import React, { Component } from 'react';
import PropertyListItem from './PropertyListItem';

class PropertyList extends Component {
  render() {
      const {houses} = this.props;
    return (
      <div>
        <h1>Property List</h1>
        {houses.map((house) => (
            <PropertyListItem key={house.id} event={house}/>
        )) }

      </div>
    )
  }
}

export default PropertyList