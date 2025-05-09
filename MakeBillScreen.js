import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function MakeBillScreen() {
  const [items, setItems] = useState([
    { name: '', cost: '' },
    { name: '', cost: '' },
    { name: '', cost: '' },
  ]);
  const [serviceCharge, setServiceCharge] = useState('');
  const [otherCharge, setOtherCharge] = useState('');

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const total =
    items.reduce((sum, item) => sum + Number(item.cost || 0), 0) +
    Number(serviceCharge || 0) +
    Number(otherCharge || 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Make Bill</Text>
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

      <View style={styles.button}>
        <Button title="Send Bill" color="white" onPress={() => alert('Bill sent!')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subHeader: { fontSize: 16, marginTop: 20, marginBottom: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  input: { flex: 0.48, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6 },
  inputFull: { width: '100%', borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 20 },
  button: {
    backgroundColor: '#f2c200',
    borderRadius: 6,
    overflow: 'hidden',
  },
});