import { Stack } from "expo-router";
import "./globals.css";
export default function RootLayout() {
  return (<Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        title: "Home",
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
          headerShown: false,
      }}
    />
    <Stack.Screen
      name="settings"
      options={{
        title: "Settings",
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
  </Stack>);
}
