import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 20,
  },
  tittleBold: {
    fontFamily: "Poppins_600SemiBold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
  },
  button: {
    height: 130,
    width: "48%",
    backgroundColor: "#CCC",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },
  buttonPrimary: {
    backgroundColor: "#9871f5",
  },
  buttonSecondary: {
    backgroundColor: "#04d361",
  },
  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 14,
  },
  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",
    fontSize: 12,
    marginTop: 20,
    maxWidth: 140,
    lineHeight: 20,
  },
});

export default styles;
