import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import services from '../services';
import ItemCard from './ItemCard';

function renderItem({ item }) {
  return <ItemCard item={item} />;
}

export default function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await services.items.getAll();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items List</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30,
    padding: 20
  },
  list: {
    flex: 1
  },
  contentContainer: {
    paddingHorizontal: 20
  }
});
