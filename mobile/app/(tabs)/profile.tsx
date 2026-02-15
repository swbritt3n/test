import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View style = {styles.container}>
        <Text> This is a contact</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,

    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'gray'
  }
})
