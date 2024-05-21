import { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet } from "react-native-web";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/lll").then((res) => {
      setData(res.data);
    });
  });

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      {data && <Text>{data.name}</Text>}
    </View>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   {data.length && (
    //     <View>
    //       {data.name}
    //       {/* {products.map((product) => {
    //         return <Text>{product.name}</Text>;
    //       })} */}
    //     </View>
    //   )}
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
