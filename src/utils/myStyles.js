import { StyleSheet } from "react-native";

export const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    lineHeight: 36,
    color: "#f4511e",
    margin: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 22,
    color: "#f88967",
  },
  btn: {
    backgroundColor: "#f56436",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 250,
    height: 50,
  },
  btnDark: {
    backgroundColor: "#bc3409",
  },
  input: {
    padding: 15,
    borderColor: "#f4511e",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    width: 300,
  },
  btnText: {
    color: "#FFF",
    fontSize: 15,
  },
  questionCard: {
    padding: 15,
    margin: 20,
    borderColor: "#f4511e",
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    height: 200,
  },
  questionText: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 10,
  },
  questionAnswer: {
    textAlign: "center",
    fontSize: 18,
    color: "#bc3409",
  },
  listCard: {
    padding: 30,
    margin: 20,
    borderColor: "#f4511e",
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  listCardQuestionText: {
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 5,
  },
  listCardQuestionAnswer: {
    textAlign: "center",
    fontSize: 14,
    color: "#bc3409",
  },
});
