import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
// import { render } from 'react-dom';
import { StyleSheet, View, Animated, Text } from 'react-native';
import { Card, Button, Image } from 'react-native-elements';
import Ball from './components/Ball';
import Deck from './components/Deck';
import { DATA } from './data';

export default class App extends Component {
  renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Title>{item.text}</Card.Title>
        <Image
          style={styles.cardImage}
          source={{ uri: item.uri }}
          resizeMode="cover"
        />
        <Text style={{ marginVertical: 10 }}>
          I can customize the Card further
        </Text>
        <Button
          icon={{ name: 'code' }}
          buttonStyle={{
            backgroundColor: '#03a9f4',
          }}
          title="View Now"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card>
        <Card.Title>All Done</Card.Title>
        <Text style={{ marginVertical: 10 }}>
          There's no more content here!
        </Text>
        <Button title="Get More" buttonStyle={{ backgroundColor: '#03a9f4' }} />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          onSwipeRight={() => console.log('swiped right')}
          onSwipeLeft={() => console.log('swiped left')}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: Dimensions.get('window').width - 40,
    height: 200,
  },
});
