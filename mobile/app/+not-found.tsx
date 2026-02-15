import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
    return(
        <>
            <Stack.Screen options = {{title: "Oops Not found"}}/>
            <View style = {styles.container}>
                <Link href = {"/"} style = {styles.text}> Click here to go back to Home</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
    text: {
        color: "white"
    }
})