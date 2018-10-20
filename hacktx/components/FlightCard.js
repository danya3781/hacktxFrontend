import React, { Component } from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Button, Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default class FlightCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flightName: 'Flight 3433',
            date: 'Oct. 18',
            dAirport: 'IAH',
            aAirport: 'CLE',
            dGate: 'A5',
            aGate: 'B11',
            dTime: '6:23 PM',
            aTime: '10:41 PM',
            address: '99 Sunset Blvd, Houston, TX'
        };
    }

    render() {
        return (

            <Card style={styles.card}>
                <CardItem header>
                    <View style={{flexDirection: 'column'}}>
                        <Text >
                            {this.state.flightName}
                        </Text>
                        <Text >
                            {this.state.date}
                        </Text>
                    </View>

                </CardItem>
                <CardItem>

                    <Body style={{marginBottom: '20%'}}>
                        <View style={{width: "100%", flexDirection: 'column'}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
                            <View style={{flexDirection: 'column', flex: 1,}}>
                                <Text style={styles.airportText}>
                                    {this.state.dAirport}
                                </Text>
                                <Text>
                                    {this.state.dTime}
                                </Text>
                                <Text>
                                    {this.state.dGate}
                                </Text>
                            </View>
                            <View style={{flexDirection: 'column', flex: 1,}}>
                                <Text style={styles.airportImage}>
                                    ->
                                </Text>
                            </View>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Text style={styles.airportText}>
                                    {this.state.aAirport}
                                </Text>
                                <Text>
                                    {this.state.aTime}
                                </Text>
                                <Text>
                                    {this.state.aGate}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', flex: 1,  marginTop: "8%"}}>
                            <Text style={{}}> Destination: </Text>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                                <Text> {this.state.address}</Text>
                                <Button info rounded onPress={() => {}} style={{
                                    height: 24,
                                    marginLeft: 30
                                }}>
                                    <Text style={{fontSize: 12}}>Edit</Text>
                                </Button>
                            </View>
                        </View>
                        </View>
                    </Body>
                </CardItem>
            </Card>

        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "5%",
        height: "35%"
    },
    airportImage: {
      fontSize: 35,

    },
    airportText: {
        fontSize: 35,
    },
    aAirport_text: {
        fontSize: 35
    }

});
