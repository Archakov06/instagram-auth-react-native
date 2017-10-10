import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: '',
    };
    this.clientId = '3260b6348ebe4c30b605ceb3db3c7700';
    this.redirectUrl = 'https://archakov.im/';
    this.scopes = [
      'basic',
      'public_content',
      'follower_list',
      'comments',
      'relationships',
      'likes',
    ].join('+');
  }

  _onNavigationStateChange(state) {
    const { url } = state;
    console.log(url);
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={{ flex: 1 }}
          source={{
            uri: `https://api.instagram.com/oauth/authorize/?client_id=${this
              .clientId}&redirect_uri=${this
              .redirectUrl}&response_type=token&scope=${this.scopes}`,
          }}
          scalesPageToFit
          startInLoadingState
          onNavigationStateChange={this._onNavigationStateChange.bind(this)}
          onError={this._onNavigationStateChange.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
