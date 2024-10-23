import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Profile section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/medcandetect.appspot.com/o/loguoo.jpg?alt=media&token=1c9fca40-4e24-4d2f-a231-1c84ef47b8c4' }}
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>Hi Joshua</Text>
      </View>

      {/* Card section */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Breast Cancer Symptoms</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileName: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Home;
