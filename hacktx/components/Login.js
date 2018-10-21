import React, { Component } from 'react';
import { Image, Keyboard, ScrollView,  View, Text, TextInput} from 'react-native';
import {Button} from 'native-base'
import transit from '../assets/transit.png'




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

        };
    }
    static navigationOptions = {
        header: null
    }


    render() {
        return (


            <View style={{ flex: 1, flexDirection:'column', alignItems: 'center', justifyContent:'center', backgroundColor: 'white' }}>

                <Image source={transit} resizeMode={Image.resizeMode.center} style={{marginTop:100}}/>
                <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}} keyboardShouldPersistTaps='handled'>
                    <TextInput

                        placeholder={'Enter Name'}
                        textAlignVertical={'top'}

                        onChangeText={(text) =>
                            this.setState({name: text})}
                        value={this.state.name}
                        autoCorrect={false} />

                    <View style={{alignItems:'center'}}>
                    <Button info rounded onPress={() => {this.props.navigation.navigate('Home', {
                        name: this.state.name
                    })}} style={{width: 200, marginTop:15, justifyContent:'center'}} >

                        <Text style={{ color: 'white'}}>
                            Login
                        </Text>

                    </Button>
                    </View>
                </ScrollView>



            </View>

        );
    }
}