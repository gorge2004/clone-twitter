import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import {  MaterialCommunityIcons, AntDesign, EvilIcons } from '@expo/vector-icons';


export default class history extends React.Component {
    constructor(props){
        super(props);
        this.state ={liked:false}
    }
    onChangeLiked = () =>{
        this.setState((prevState) => {return {liked: !prevState.liked} });
    }
    render(){
                  
                  const liked = this.state.liked ? <AntDesign name='heart' size={18} color='rgb(255, 0, 0)'/> :<AntDesign name='hearto' size={18} color='rgb(136, 153, 166)'/>;
        return (
            <View style={styles.history}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.imgRounder}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
            </View>
            <View style={styles.textContainer}>               
               <View style={styles.rowText} >

                  <Text style={styles.userText}>
                    @username 
                  </Text>
                  <Text style={styles.fullnameText}>
                    Nickname lastname 
                  </Text>
              </View>
              <View style={styles.row} >

                <Text style={styles.whiteText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                  laborum.
                </Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                  <EvilIcons name='comment' size={20} color='rgb(136, 153, 166)'/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.button}>
                  <MaterialCommunityIcons name='twitter-retweet' size={20} color='rgb(136, 153, 166)'/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.button} onPress={() => this.onChangeLiked() }>
                  {liked}

                </TouchableOpacity> 
                <TouchableOpacity style={styles.button}>
                  <AntDesign name='sharealt' size={20} color='rgb(136, 153, 166)'/>
                </TouchableOpacity> 
              </View>
            </View>
            
        </View>
        );
    }
}
const styles = StyleSheet.create({
    
        whiteText: {
                    color:'#fff',
                    fontSize:18,
                    fontWeight:'bold'
                },
        history: {      
                  borderBottomColor: 'rgb(56, 68, 77)',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems:'stretch',
                  paddingTop: 5,      
        },
        row: {
            flexDirection:'row'
            },
        imgContainer:{
                        flex:1,
                        flexDirection: 'column',
                        alignItems:'center',
                    },
        imgRounder:  {
                        width: 50, 
                        height: 50,
                        borderRadius:50,
                    },
        textContainer: {
                        flex:4,
                        flexDirection: 'column',
                        },
        rowText: {
                    flexDirection:'row',
                    marginBottom: 5,
        },
        userText: {fontWeight:"bold",
                    fontSize:18,
                    color: 'white',
                    textTransform:'uppercase',
                },
        fullnameText: {
                        marginLeft:5,
                        fontSize:18,
                        fontWeight:'400',
                        textTransform:'capitalize',
                        color:'rgb(136, 153, 166)',
                    },
        button: {
                flex:1,  
        },

                    
        
  
  });