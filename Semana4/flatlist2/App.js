import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Constants from 'expo-constants';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'FIRST LENGUAJE',
    uri:'https://download.logo.wine/logo/Erlang_(programming_language)/Erlang_(programming_language)-Logo.wine.png'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'SECOND LENGUAJE',
     uri:'https://exuberantsolutions.com/images/perl-logo.png'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'THIRD LENGUAJE',
     uri:'https://www.laintimes.com/wp-content/uploads/2020/05/ruby-logo-300x300.png'
  },
];

function Item({ id, title, selected, onSelect,uri }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? 'black' : 'skyblue' },
      ]}
    ><Image style={styles.image} source={{uri}}/>
      <Text style={styles.title}>{title}</Text>
      
    </TouchableOpacity>
  );
}
export default function App() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            uri={item.uri}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
     opacity:"0.9",
        borderRadius: 30,
        backgroundColor: "black",
        padding:1,
  },
  image:{ 
    shadowOpacity:"0.5",  
    margin:4,
    borderRadius: 1,
    height: 100,
    alignItems:'justify',
    width: 290,
    alignSelf: 'center'},
  item: {
    backgroundColor:"black",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  title: {
    fontSize: 32,
    fontFamily:"Calibri",
    color:'white'
  },
});