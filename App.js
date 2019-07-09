import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')


const images = [
  'https://images.pexels.com/photos/1698482/pexels-photo-1698482.jpeg',
  'https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg',
  'https://images.pexels.com/photos/1937301/pexels-photo-1937301.png',
  'https://images.pexels.com/photos/2609926/pexels-photo-2609926.jpeg'
]


const ImageList = ({  }) => (
  <FlatList
    data={images}
    horizontal
    keyExtractor={(image, index) => index.toString()}
    renderItem={({ item: image, index }) => (
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
    )}
  />
)

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Online Doctor Consultation</Text>
      <View>
        <Ionicons
          name="ios-search"
          size={25}
          style={styles.textIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
        />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryText} numberOfLines={2}>Choose a category</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.adults}>Adults</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.children}>Adults</Text>
        </TouchableOpacity>
      </View>
      <ImageList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 50
  },
  headerText: {
    marginTop: 130,
    fontSize: 30,
    width: 200,
    fontWeight: 'bold'
  },
  input: {
    width: 350,
    height: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginTop: 30,
    paddingLeft: 40
  },
  textIcon: {
    position: 'absolute',
    top: 40,
    zIndex: 1,
    left: 10
  },
  category: {
    flexDirection: 'row',
    width: 350,
    height: 70,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  categoryText: {
    fontWeight: 'bold',
    width: 110
  },
  button1: {
    backgroundColor: 'orange',
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  adults: {
    color: 'white',
    fontWeight: 'bold'
  },
  button2: {
    backgroundColor: 'lightgrey',
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  children: {
    color: 'grey',
    fontWeight: 'bold'
  },
  image: {
    width: 160,
    height: 300,
    marginRight: 10,
    borderRadius: 20
  },
  imageOverlay: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10
  }
});
