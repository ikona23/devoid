import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import PropertyList from './PropertyList/PropertyList';
import PropertyForm from '../propertyForm/PropertyForm';

const propertyDashboard = [
    {
    id: '1',
    price: '$ 500 000',
    photoURL:'https://picsum.photos/200/200/?random',
    decription:'At vero eos et accusamus et iusto odio dignissimos ducimus',
    area:'Wellington',
    ownerPhoto:'https://randomuser.me/api/portraits/women/41.jpg',
    owners:[
        {
        id:'a',
        ownersPhoto:'https://randomuser.me/api/portraits/women/15.jpg',
        ownersAdress:'23 Smith st',
        city:'Palmerston North'
    },
    {
        id:'b',
        ownersPhoto:'https://randomuser.me/api/portraits/man/25.jpg',
        ownersAdress:'23 Smith st',
        city:'Palmerston North'
    },

],
    address:[
        {
        street:'7 Palm Grove',
        city:'Wellington',
        }
    ]
    },
    {
    id:'2',
    price: '$ 700 000',
    photoURL:'https://picsum.photos/200/?random',
    decription:'Temporibus autem quibusdam et aut officiis debitis ',
    area:'Wellington',
    owners:[{
        id:'b',
        ownersPhoto:'https://randomuser.me/api/portraits/women/1.jpg',
        ownersAdress:'23 Smith st',
        city:'Palmerston North'
    }],
    address:[
        {
        street:'7 Palm Grove',
        city:'Lower Hutt',
        }
    ]
    },
    {
        id:'3',
        price: '$ 400 000',
        photoURL:'https://picsum.photos/190/?random',
        decription:'Vero in culpa qui officia deserunt mollitia animi, id est',
        area:'Palmerston North',
        owners:[{
            id:'c',
            ownersPhoto:'https://randomuser.me/api/portraits/man/12.jpg',
            ownersAdress:'23 Smith st',
            city:'Palmerston North'
        }],
        address:[
            {
            street:'7 Palm Grove',
            city:'Lower Hutt',
            }
        ]
        }
]


class EventDashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Grid.Column width={10}>
                <PropertyList houses={propertyDashboard}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <Button positive content="Create New Listing" />
            <PropertyForm/>
            </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default EventDashboard