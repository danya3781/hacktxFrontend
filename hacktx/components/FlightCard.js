import React, { Component } from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Button, Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import Switch from 'react-native-switch-pro';
import plane from '../assets/plane.png';

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
            address: '99 Sunset Blvd, Houston, TX',
            editable: false,
            color: 'grey'
        };
    }

    componentDidMount() {
        const data = this.props.cardData;
        this.setState({
            flightName: data.flightNumber,
            dAirport: data.dAirport,
            aAirport: data.aAirport,
            aTerminal: data.aTerminal,
            aGate: data.aGate,
            dTime: data.dTime,
            aTime: data.aTime,
            id: data.id
        })
    }

    render() {
        const dDate = new Date(this.state.dTime);
        const aDate = new Date(this.state.aTime);
        var edit;
        var color = 'grey';
        if (!this.state.editable){
            edit =
                <Button style={{position: 'fixed'}} info rounded onPress={() => {
                    this.setState({editable: true})
                }} style={{
                    height: 24,
                    marginLeft: 30
                }}>
                    <Text style={{fontSize: 12}}>Edit</Text>
                </Button>;
        } else {
            color = 'black';
            edit =
                <Button style={{position: 'fixed'}} success rounded onPress={() => {
                    this.setState({editable: false})
                }} style={{
                    height: 24,
                    marginLeft: 30
                }}>
                    <Text style={{fontSize: 12}}>Done</Text>
                </Button>;
        }

        return (

            <Card style={styles.card}>
                <CardItem header>
                    <View style={{flexDirection: 'column'}}>
                        <Text >
                            Flight {this.state.flightName}
                        </Text>
                        <Text >
                            {dDate.toLocaleString('en-US', { month: 'short', day:'numeric', hour12: true })}
                        </Text>
                    </View>

                </CardItem>
                <CardItem>

                    <Body style={{marginBottom: '13%'}}>
                        <View style={{width: "100%", flexDirection: 'column'}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
                            <View style={{flexDirection: 'column', flex: 1,}}>
                                <Text style={styles.airportText}>
                                    {this.state.dAirport}
                                </Text>
                                <Text>
                                    {dDate.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true })}
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
                                    {aDate.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true })}
                                </Text>
                                <Text>
                                    {this.state.aTerminal}{this.state.aGate}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', flex: 1,  marginTop: "8%"}}>
                            <Text style={{}}> Destination: </Text>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                                <TextInput style={{color: color}} editable={this.state.editable} > {this.state.address}</TextInput>
                                <View style={{marginLeft: 190, flexDirection: 'column', position: 'absolute'}}>
                                {edit}
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 28, flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                            <Text style={{}}>
                               Uber Notifications:
                            </Text>
                            <Switch height={30} width={50} style={{marginLeft: 20}}>

                            </Switch>

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
