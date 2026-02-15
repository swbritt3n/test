import { router, Stack } from "expo-router";
import { Pressable, Text } from "react-native";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name = "(tabs)"
      options = {{
        headerShown: false
      }}
    />
    <Stack.Screen
      name = "catchUpModal"
      options = {{presentation: 'modal', title: 'CatchUp',
        headerRight: () => (
        <Pressable onPress={() => router.back()}>
          <Text style={{ marginRight: 12, color: "#007AFF" }}>
            Cancel
          </Text>
        </Pressable>
      ),
      }}
      
    />
    <Stack.Screen name = "+not-found"/>
  </Stack>;
}
