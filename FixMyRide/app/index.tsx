/*
//NotificationScreen
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notification</Text>
      <View style={styles.card}>
        <Text style={styles.message}>Successfully sent your request</Text>
        <TouchableOpacity style={styles.iconCircle}>
          <Text style={styles.check}>✔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A6FF8',
  },
  card: {
    marginTop: 40,
    width: '80%',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#3A6FF8',
    padding: 30,
    alignItems: 'center',
    shadowColor: '#3A6FF8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3A6FF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    color: 'white',
    fontSize: 20,
  },
});

export default NotificationScreen;


// MakeBillScreen

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function MakeBillScreen() {
  const [items, setItems] = useState([
    { name: '', cost: '' },
    { name: '', cost: '' },
    { name: '', cost: '' },
  ]);
  const [serviceCharge, setServiceCharge] = useState('');
  const [otherCharge, setOtherCharge] = useState('');

  // Function to handle changes in item fields
  const handleChange = (index: number, field: 'name' | 'cost', value: string) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  // Calculate the total cost
  const total =
    items.reduce((sum, item) => sum + Number(item.cost || 0), 0) +
    Number(serviceCharge || 0) +
    Number(otherCharge || 0);

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Make Bill</Text>
      </View>

      
      <Text style={styles.subHeader}>Items</Text>
      {items.map((item, index) => (
        <View key={index} style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={item.name}
            onChangeText={(text) => handleChange(index, 'name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Cost"
            keyboardType="numeric"
            value={item.cost}
            onChangeText={(text) => handleChange(index, 'cost', text)}
          />
        </View>
      ))}

      
      <Text style={styles.subHeader}>Service Charge</Text>
      <TextInput
        style={styles.inputFull}
        placeholder="Cost"
        keyboardType="numeric"
        value={serviceCharge}
        onChangeText={setServiceCharge}
      />

      
      <Text style={styles.subHeader}>Other Charge</Text>
      <TextInput
        style={styles.inputFull}
        placeholder="Cost"
        keyboardType="numeric"
        value={otherCharge}
        onChangeText={setOtherCharge}
      />

      
      <Text style={styles.total}>Total: Rs. {total}</Text>

      
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Bill sent!')}
      >
        <Text style={styles.buttonText}>Send Bill</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Styles for the MakeBillScreen component
const styles = StyleSheet.create({
  container: { padding: 20 },
  headerContainer: {
    backgroundColor: '#800080', // Purple background
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white', // White text color
  },
  subHeader: { fontSize: 16, marginTop: 20, marginBottom: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  input: { flex: 0.48, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6 },
  inputFull: { width: '100%', borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 20 },
  button: {
    backgroundColor: '#f2c200', // Yellow background
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});  


//GarageStationScreen
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GarageStationDetails = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.appTitle}>FixMyRide</Text>
        <View style={{ width: 24 }} /> 
      </View>

      
      <ScrollView>
        <Text style={styles.pageTitle}>Garage Station</Text>

        
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.garageName}>ABC Garage Station</Text>
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star-half" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
            <Text style={styles.distance}>5 km away</Text>
          </View>
          <View style={styles.cardActions}>
            <TouchableOpacity>
              <FontAwesome name="share-alt" size={20} color="#3A6FF8" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="close" size={20} color="#FF0000" />
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.imageSection}>
          <Image
            source={{ uri: 'https://images.app.goo.gl/FnBcLP3vfwuJf4xs7' }}
            style={styles.image}
          />
          <View style={styles.imageNavigation}>
            <TouchableOpacity>
              <FontAwesome name="chevron-left" size={24} color="#3A6FF8" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="chevron-right" size={24} color="#3A6FF8" />
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            ABC Garage Station offers a wide range of services including maintenance, repairs,
            refueling, oil changes, and diagnostics. We ensure top-notch service for your vehicle.
          </Text>
          <TouchableOpacity style={styles.clickHereButton}>
            <Text style={styles.clickHereButtonText}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="home" size={24} color="#3A6FF8" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemSelected]}>
          <FontAwesome name="list" size={24} color="white" />
          <Text style={[styles.navText, styles.navTextSelected]}>Request List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="file-text" size={24} color="#3A6FF8" />
          <Text style={styles.navText}>Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user" size={24} color="#3A6FF8" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3A6FF8',
    padding: 15,
  },
  appTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  pageTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },
  cardContent: {},
  garageName: { fontSize: 18, fontWeight: 'bold' },
  rating: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  ratingText: { marginLeft: 5, fontSize: 14, color: '#555' },
  distance: { fontSize: 14, color: '#555' },
  cardActions: { flexDirection: 'row', gap: 10 },
  imageSection: { alignItems: 'center', marginVertical: 20 },
  image: { width: 300, height: 150, borderRadius: 10 },
  imageNavigation: { flexDirection: 'row', justifyContent: 'space-between', width: 100, marginTop: 10 },
  descriptionSection: { marginHorizontal: 20, marginBottom: 20 },
  descriptionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  descriptionText: { fontSize: 14, color: '#555', marginBottom: 20 },
  clickHereButton: {
    backgroundColor: '#3A6FF8',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  clickHereButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#3A6FF8', marginTop: 5 },
  navItemSelected: { backgroundColor: '#3A6FF8', padding: 10, borderRadius: 5 },
  navTextSelected: { color: 'white' },
});

export default GarageStationDetails;
*/
//FuelStationScreen
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FuelStationScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.appTitle}>FixMyRide</Text>
        <View style={{ width: 24 }} /> 
      </View>

      
      <ScrollView>
        <View style={styles.titleSection}>
          <TouchableOpacity>
            <FontAwesome name="arrow-left" size={20} color="#3A6FF8" />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Fuel Station</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.stationName}>ABC Fuel Station</Text>
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star" size={16} color="#FFD700" />
              <FontAwesome name="star-half" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
            <Text style={styles.distance}>Distance - 4km</Text>
          </View>
          <View style={styles.cardActions}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="share-alt" size={20} color="#3A6FF8" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.circleButtonText}>✕</Text> {/* Unicode for a simple cross */}
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.imageSection}>
          <Image
            source={{ uri: 'https://pin.it/4XZNHfpDb' }} // Replace with your image URL
            style={styles.image}
          />
        </View>

        
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionTitle}>Description :-</Text>
          <Text style={styles.descriptionText}>
            A fuel station is a service facility where vehicles can refuel with petrol, diesel, or other fuels. It may
            also offer convenience store items, air for tires, and basic vehicle maintenance services.
          </Text>
          <TouchableOpacity style={styles.clickHereButton}>
            <Text style={styles.clickHereButtonText}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="home" size={24} color="#3A6FF8" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemSelected]}>
          <FontAwesome name="list" size={24} color="white" />
          <Text style={[styles.navText, styles.navTextSelected]}>Request List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="file-text" size={24} color="#3A6FF8" />
          <Text style={styles.navText}>Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user" size={24} color="#3A6FF8" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3A6FF8',
    padding: 15,
  },
  appTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  pageTitle: { fontSize: 22, fontWeight: 'bold', color: '#3A6FF8', marginLeft: 10 },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },
  cardContent: {},
  stationName: { fontSize: 18, fontWeight: 'bold' },
  rating: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  ratingText: { marginLeft: 5, fontSize: 14, color: '#555' },
  distance: { fontSize: 14, color: '#555' },
  cardActions: { flexDirection: 'row', gap: 10 },
  actionButton: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    elevation: 1,
  },
  circleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white', // White circle background
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Optional: Add a border for better visibility
    borderColor: '#ccc', // Light gray border
    marginTop: -1, // Moves the circle upward
  },
  circleButtonText: {
    color: 'black', // Black color for the cross
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageSection: { alignItems: 'center', marginVertical: 20 },
  image: { width: '90%', height: 200, borderRadius: 10 },
  descriptionSection: { marginHorizontal: 20, marginBottom: 20 },
  descriptionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  descriptionText: { fontSize: 14, color: '#555', marginBottom: 20 },
  clickHereButton: {
    backgroundColor: '#800080', // Purple background
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  clickHereButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#3A6FF8', marginTop: 5 },
  navItemSelected: { backgroundColor: '#3A6FF8', padding: 10, borderRadius: 5 },
  navTextSelected: { color: 'white' },
});

export default FuelStationScreen;