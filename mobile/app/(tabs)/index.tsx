import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Contacts from "expo-contacts";
import { Link } from "expo-router";
import { useState } from "react";


export default function Index() {
  const [contactName, SetContactName] = useState<string | undefined>('Stephen')

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
        SetContactName(contact.firstName)
        console.log(contact)
        console.log(typeof contact.firstName)
      }
    };

  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "red"}}>
      <View>
        <Pressable style={styles.button} onPress={pickContact}>
              <Text style={styles.text}>Pick a Contact</Text>
        </Pressable>
      </View>
      
      <View style = {{padding: 8, gap: 8, backgroundColor: "black"}}>
        <View style = {styles.container}>
          <Text>{contactName}</Text>
        </View>
        <View style = {styles.container}>
          <Text> This is another contact</Text>
        </View>
      </View>
      <Link href={"/catchUpModal"}>
        hello
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,

    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 2
  },
  button: {
    padding: 12,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
})