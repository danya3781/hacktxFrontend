import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { Container, Content } from 'native-base';
import FlightCard from './FlightCard.js'
import axios from 'axios';

export default class Home extends Component {
    static navigationOptions = {
        title: 'My Reservations'
    };

    constructor(props) {
        super(props);
        this.state = {
            cardData: []
        };
    }

    componentDidMount(){
        const {params} = this.props.navigation.state;
        const name = params.name;
        console.log("Name", name);
        axios.get('http://fa6d4464.ngrok.io/reservation', {
            params: {
                recordLocator: name
            }
        })
            .then(function (response) {
                console.log(response)
                const flightData = response.data["flights"];
                let flights = {};
                let cardData = flightData.map(flight => {
                    return {
                        flightNumber : flight["flightNumber"],
                        dAirport: flight["origin"],
                        aAirport: flight["destination"],
                        aTerminal: flight["arrivalTerminal"],
                        aGate: flight["arrivalGate"],
                        dTime: flight["departureTime"],
                        aTime: flight["arrivalTime"],
                        id: flight["_id"]
                    }
                    }
                );
                console.log("cardData", cardData);
                this.setState({cardData: cardData});

            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {


        return (

            <Container>
                <Content style={{backgroundColor: '#0078d2',}}>

                    {this.state.cardData.map(flight => (<FlightCard cardData={flight} key={flight.id} />)
                    )}

                </Content>
            </Container>
        );
    }
}