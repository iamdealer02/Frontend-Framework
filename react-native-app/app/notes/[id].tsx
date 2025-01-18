import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';
import { items } from '../../assets/data'; // Assuming items are stored here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
});

const NotesDetails = () => {
    const { id } = useLocalSearchParams(); 
  // Find the note based on the ID
  const note = items.find((item) => item.id === id);

  if (!note) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Note not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.body}>{note.body}</Text>
    </View>
  );
};

export default NotesDetails;
