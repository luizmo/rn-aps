import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const categoryColors = {
  Perishable: 'red',
  'Non Perishable': 'blue'
};

export default function ItemCard({ item: { category, description, image } }) {
  return (
    <Card style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textWrapper}>
        <Text style={styles.description}>{description}</Text>
        <Text
          style={{
            ...styles.category,
            backgroundColor: categoryColors[category]
          }}
        >
          {category}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: 100
  },
  textWrapper: {
    flex: 1,
    paddingLeft: 10
  },
  description: {
    fontSize: 18,
    paddingVertical: 10
  },
  category: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    color: 'white',
    fontSize: 16,
    marginTop: 'auto',
    paddingHorizontal: 5,
    paddingVertical: 2
  }
});
