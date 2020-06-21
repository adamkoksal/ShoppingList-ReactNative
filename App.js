import React, { useState } from "react";
import { AppLoading } from "expo";
import { StyleSheet, View, SafeAreaView, FlatList, Alert } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import { v4 as uuid } from "uuid";
import {
  Container,
  Body,
  CheckBox,
  Title,
  Card,
  CardItem,
  Left,
  Right,
  Icon,
  Thumbnail,
  Grid,
  Col,
  Text,
  Content,
  Button,
  Accordion,
  Subtitle,
  List,
} from "native-base";

export default function App() {
  const [items, setItems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Honey" },
    { id: uuid(), text: "Oatmeal" },
    { id: uuid(), text: "Brocoli" },
    { id: uuid(), text: "Eggs" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Enter an item", [{ text: "OK" }]);
    } else {
      setItems((prevItems) => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  return (
    <Container>
      <Header>
        <Title>Shopping List</Title>
      </Header>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem}></ListItem>
        )}
      />
    </Container>
  );
}

// const items = [
//   { id: uuid(), text: "Milk" },
//   { id: uuid(), text: "Honey" },
//   { id: uuid(), text: "Oatmeal" },
//   { id: uuid(), text: "Brocoli" },
//   { id: uuid(), text: "Eggs" },
// ];

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isReady: false,
//     };
//   }

//   async componentDidMount() {
//     await Font.loadAsync({
//       Roboto: require("native-base/Fonts/Roboto.ttf"),
//       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
//       ...Ionicons.font,
//     });
//     this.setState({ isReady: true });
//   }

//   render() {
//     if (!this.state.isReady) {
//       return <AppLoading />;
//     }

//     return (
//       <Container>
//         <Header>
//           <Title>Shopping List</Title>
//         </Header>

//         <FlatList
//           data={items}
//           renderItem={({ item }) => <ListItem item={item}></ListItem>}
//         />
//       </Container>
//     );
//   }

//   deleteItem(id) {

//   }
// }
