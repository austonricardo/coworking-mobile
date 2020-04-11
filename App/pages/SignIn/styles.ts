import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: normalize(60),
    color: "#F95F62",
    fontWeight: "bold",
    marginBottom: normalize(30),
  },

  form: {
    alignSelf: "stretch",
    paddingHorizontal: normalize(30),
  },

  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: normalize(8),
  },

  input: {
    borderWidth: normalize(3),
    borderColor: "#DDD",
    paddingHorizontal: normalize(10),
    fontSize: normalize(20),
    color: "#444",
    height: normalize(44),
    marginBottom: normalize(20),
    borderRadius: normalize(10),
  },

  button: {
    height: normalize(50),
    backgroundColor: "#F95F62",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(10),
    marginTop: normalize(10),
    marginBottom: normalize(20),
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: normalize(20),
  },

  register: {
    alignSelf: "center",
    color: "#666",
    fontWeight: "bold",
    fontSize: normalize(20),
  },
});
