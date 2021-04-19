import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({ children, style, ...props }) {
  return (
    <View {...props} style={{ ...styles.card, ...style }}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#c2c2c2',
    marginBottom: 20,
    padding: 10
  }
});
