import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Large wrap section */}
      <View style={styles.wrapSection}>
        <Text style={styles.wrapText}>Welcome to MedCanDetect</Text>
        <Text style={styles.profileName}>Hi, Joshua</Text>
      </View>

      {/* Card row 1 with icons */}
      <View style={styles.cardRow}>
        <TouchableOpacity style={[styles.card, styles.detectCard]}>
          <Ionicons name="eye" size={24} color="#fff" />
          <Text style={styles.cardText}>Detect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.eventsCard]}>
          <Ionicons name="calendar" size={24} color="#fff" />
          <Text style={styles.cardText}>Events</Text>
        </TouchableOpacity>
      </View>

      {/* Card row 2 */}
      <View style={styles.cardRow}>
        <TouchableOpacity style={[styles.card, styles.symptomsCard]}>
          <Image
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/medcandetect.appspot.com/o/loguoo.jpg?alt=media&token=1c9fca40-4e24-4d2f-a231-1c84ef47b8c4' }}
            style={styles.symptomsImage}
          />
          <Text style={styles.cardText}>Breast Cancer Symptoms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.appointmentCard]}>
          <Text style={styles.cardText}>Book an Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  wrapSection: {
    backgroundColor: '#f02267',
    padding: 60,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  wrapText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  detectCard: {
    backgroundColor: '#F0224E', // Pink for Detect
  },
  eventsCard: {
    backgroundColor: '#F0224E',
  },
  symptomsCard: {
    backgroundColor: 'transparent', // Transparent background for symptoms card
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointmentCard: {
    backgroundColor: '#F0224E', // Pink for Book an Appointment
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text for cards
  },
  symptomsImage: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    opacity: 0.5, // Adjust opacity as needed
  },
});

export default Home;
