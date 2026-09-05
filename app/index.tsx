import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Hello React Native</Text>

        <Image source={{ uri: "https://picsum.photos/200" }} />

        <TextInput placeholder="Enter your name" />

        <Button
          title="Save"
          onPress={() => alert("Saved!")}
        />

        <Pressable onPress={() => alert("Pressed!")}>
          <Text>Press me</Text>
        </Pressable>

        <ActivityIndicator />

        <Text>Apple</Text>
        <Text>Banana</Text>
        <Text>Orange</Text>
      </View>
    </ScrollView>
  );
}