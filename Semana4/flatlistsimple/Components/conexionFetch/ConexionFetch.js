import React,{Component} from 'react';
import {View,FlatList,StyleSheet,Text,Image,Button} from 'react-native';


function Item({title, image}){
  return(
    <View>
        <Image style={{height:40, width: 40}} source={{uri: image}}/>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class ConexionFetch extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      textValue:0,
      count: 0,
      items: [],
      error: null,
    };
  }

  async componentDidMount(){
    await fetch('https://yts.mx/api/v2/list_movies.json/')
    .then(res =>res.json())
    .then(
      result =>{
        console.warn('result', result.data.movies);
        this.setState({
          items: result.data.movies,
        });
      },
      error => {
        this.setState({
          error: error,
        });
      },
    );
  }
  render(){
    return(
      <View style={styles.container}>
          <FlatList
          data={this.state.items.length > 0 ? this.state.items :[]}
          renderItem={({item}) =>(
            <View>
                <Item title={item.title} image={item.small_cover_image}/>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
  },
  item:{
    backgroundColor:'gray',
    padding:20,
    marginVertical:8,
    marginHorizontal:16,
  },
  title:{
    fontSize:25,
  },
});

export default ConexionFetch;
