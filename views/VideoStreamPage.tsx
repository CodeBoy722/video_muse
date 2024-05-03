import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Video, ResizeMode } from "expo-av";
import { Close } from "../assets/icons";
import { FONTS } from "../utils/font";

const VideoStreamPage = ({ navigation, route }: Record<any, any>) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", flex: 0.5 }}>
        <StatusBar style="dark" />
      </View>

      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Close />
        </Pressable>

        <Text
          style={{
            alignSelf: "center",
            fontSize: 16,
            fontFamily: FONTS.BOLD,
            color: "#1E293B",
            marginStart: "20%",
          }}
        >
          {"Total body circuit"}
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyTop}></View>

        <View style={styles.bodyBottom}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flex: 0.5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
  },

  body: {
    flex: 9,
  },

  bodyTop: {
    flex: 5,
  },

  bodyBottom: {
    flex: 5,
  },
});

export default VideoStreamPage;
