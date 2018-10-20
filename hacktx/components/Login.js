import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';


class Name extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable = {true}
                maxLength = {40}
            />
        );
    }
}

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'NAME',
        };
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <Name
                    value={this.state.name}
                    onChangeText={(text) => this.setState({name: text})}
                    clearTextOnFocus={true}

                />
                <Button title="Login" onPress={() => {this.props.navigation.navigate('Home', {
                    name: this.state.name
                })}} >
                </Button>
            </View>
        );
    }
}