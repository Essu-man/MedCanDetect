import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to the App!</Text>
      </View>

      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/medcandetect.appspot.com/o/loguoo.jpg?alt=media&token=1c9fca40-4e24-4d2f-a231-1c84ef47b8c4' }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F0224E',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home;
