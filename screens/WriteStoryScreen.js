import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      storyText: '',
    };
  }

  submitStory = () => {
    db.collection('User Stories').add({
      title: this.state.title,
      author: this.state.author,
      storyText: this.state.storyText,
    });
    this.setState({
      title: '',
      author: '',
      storyText: '',
    });
    alert(
      "Your story has been submitted successfully. If you want to read your story or any other stories written by different users of the app, then you can just search for the title or author name in the 'Read a story' section of this app."
    );
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title of the story here"
          value={this.state.title}
          onChangeText={(text) => this.setState({ title: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the name of the author here"
          value={this.state.author}
          onChangeText={(text) => this.setState({ author: text })}
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Write your story here"
          value={this.state.storyText}
          onChangeText={(text) => this.setState({ storyText: text })}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'lightyellow',
    flex: 1,
  },
  header: {
    backgroundColor: 'papayawhip',
    borderWidth:2,
    borderColor:'black',
    borderRadius:30,
    fontFamily:'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    borderWidth:2,
    borderColor:'black',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
    borderRadius:30
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
     borderWidth:2,
    borderColor:'black',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
    borderRadius:30
  },
  storyBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    borderWidth:2,
    borderColor:'black',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
    borderRadius:30
  },
  submitButton: {
    backgroundColor: '#8a9bcd',
    width: '50%',
    height: 40,
     borderWidth:2,
    borderColor:'black',
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
    borderRadius:30
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
});