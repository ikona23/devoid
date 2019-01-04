    import React, { Component } from 'react';
    import { Segment, Form, Button} from 'semantic-ui-react';
import EventDashboard from '../event/EventDashboard';
    
     class PropertyForm extends Component {
         render() {
             return (
                <Segment>
                    <Form>
                        <Form.Field>
                            <label>City</label>
                            <input placeholder="City" />
                        </Form.Field>
                        <Form.Field>
                            <label>Adress</label>
                            <input placeholder="Adress" />
                        </Form.Field>
                        <Form.Field>
                            <label>Price</label>
                            <input placeholder="$" />
                        </Form.Field>
                        <Form.Field>
                        <input type="checkbox" tabindex="0" class="hidden"/>
                            <label>I agree to the Terms and Conditions</label>
                        </Form.Field>
                        <Button positive type="submit">
                            Submit
                        </Button>
                        <Button type="button">Cancel</Button>
                    </Form>
                </Segment>
             )
         }
     }
    
     export default PropertyForm