import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { Container, Content } from 'native-base';
import FlightCard from './FlightCard.js'


export default class Home extends Component {
    static navigationOptions = {
        title: 'My Reservations'
    };

    constructor(props) {
        super(props);
        this.state = {
            name: 'ENTER NAME',
        };
    }

    render() {
        const {params} = this.props.navigation.state;
        const name = params.name;

        return (

            <Container>
                <Content>
                    <FlightCard />
                    <FlightCard />
                </Content>
            </Container>
        );
    }
}