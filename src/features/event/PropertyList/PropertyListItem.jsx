import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PropertyListOwn  from './PropertyListOwn'

class PropertyListItem extends Component {
  render() {
    const {event} = this.props;
    return (
         <Segment.Group>
            <Segment>
              <Item.Group>
                <Item>
                  <Item.Image size="tiny" 
                  circular 
                  src={event.photoURL}/>
                  <Item.Content>
                    <Item.Header as="a">{event.price}</Item.Header>
                    <Item.Description>
                      Contributers <a>{event.owners.map((owner) => (
            <PropertyListOwn key={owner.id} event={owner}/>
        )) }</a>
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
            <Segment>
              <span>
                <Icon name="clock" /> {event.address.street} |
                <Icon name="marker" /> {event.area}
              </span>
            </Segment>
            <Segment secondary>
            <h4>{event.owners.city}</h4>
              <List horizontal>
              {event.owners.map((owner) => (
            <PropertyListOwn  key={owner.id} owner={owner}/>
        )) }

              </List>
            </Segment>
            <Segment clearing>
            <span>Description: {event.decription}</span>
              <Button as="a" color="teal" floated="right" content="View" />
            </Segment>
          </Segment.Group>
    )
  }
}

export default PropertyListItem
