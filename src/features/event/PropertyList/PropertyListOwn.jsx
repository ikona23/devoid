import React, { Component } from 'react';
import { List, Image} from 'semantic-ui-react';


class PropertyListOwn extends Component {
    render(){
        const {owner} = this.props;
        return (
<List.Item>
    <Image as='a' size="mini" circular src={'https://randomuser.me/api/portraits/women/41.jpg'}/>
    {/* <Image as='a' size="mini" circular src={owner.ownersPhoto}/> */}
</List.Item>
        )
    }
}

export default PropertyListOwn