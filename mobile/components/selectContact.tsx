import * as Contacts from "expo-contacts";
import { Pressable, StyleSheet, Text } from "react-native";

export default function SelectContact() {
  const pickContact = async () => {
    // Ask for contact permissions first
    const { status } = await Contacts.requestPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access contacts was denied");
      return;
    }

    const contact = await Contacts.presentContactPickerAsync();

    if (contact) {
      alert(`Selected: ${contact.firstName}`);
      console.log(contact);
      console.log(contact.firstName)
    }
  };

  return (
    <Pressable style={styles.button} onPress={pickContact}>
      <Text style={styles.text}>Pick a Contact</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
