import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
export default function tabLayout() {
    return (<Tabs>
        <Tabs.Screen name = "index"
        options = {{
            title: "Contacts",
            tabBarIcon: ({focused, color}) => <MaterialCommunityIcons name = {focused ? "contacts" : "contacts-outline"}
            size = {30}/>
        }}
        />
        <Tabs.Screen name = "catchUp"
        options = {{
            title: "CatchUp",
            tabBarIcon: () => <Ionicons name = "call" color = "green"
            size = {30}/>
        }}
        />
        <Tabs.Screen name = "profile"
        options = {{
            title: "profile",
            tabBarIcon: ({focused, color}) => <MaterialCommunityIcons name = {focused ? "account-settings" : "account-settings-outline"}
            size = {30}/>
        }}/>
    </Tabs>
    )

}