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
