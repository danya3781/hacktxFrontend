import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import Login from './components/Login.js';
import Home from './components/Home.js';
import axios from 'axios';
import { Linking } from 'react-native';


import { Permissions, Notifications } from 'expo';

const PUSH_ENDPOINT = 'http://localhost:3030/';

async function registerForPushNotificationsAsync() {
    console.log("sync");
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    // if (finalStatus !== 'granted') {
    //     console.log("B A D");
    //     return;
    // }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log("here");
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    // return fetch(PUSH_ENDPOINT, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         token: {
    //             value: token,
    //         },
    //         user: {
    //             username: 'Brent',
    //         },
    //     }),
    // });
    // axios.get('http://e9e8e304.ngrok.io', {
    //     params: {
    //         token: token
    //     }
    // })
    //     .then(function (response) {
    //         console.log(response)
    //
    //
    //     }.bind(this))
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}

const RootStack = createStackNavigator({
    Login: {
        screen: Login,
    },
    Home: {
        screen: Home
    }
});

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null
        };
    }

    componentDidMount() {
        console.log("APP DID MOUNT");
        registerForPushNotificationsAsync();

        // Handle notifications that are received or selected while the app
        // is open. If the app was closed and then opened by tapping the
        // notification (rather than just tapping the app icon to open it),ß
        // this function will fire on the next tick after the app starts
        // with the notification data.
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
        if (this.state.url != null) {
            Linking.openURL(this.state.url);
        }

    }

    _handleNotification = (notification) => {

        const airport = notification["data"]["airport"];
        let url;
        if (airport === 'LAX') {
            url = "https://ubr.to/2NQKgfF"
        } else if (airport === 'SAN') {
            url = "https://ubr.to/2Al3aI1"
        } else if (airport === 'OKC') {
            url = "https://ubr.to/2EA4RW5"
        } else if (airport === 'DFW') {
            url = "https://ubr.to/2R2bLoI"
        } else {
            url = "https://ubr.to/2PhD55a"
        }
        console.log("URL", url);

        Linking.openURL(url);

        this.setState({notification: notification, url: url});
    };


    render() {
        return (
            <RootStack />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


