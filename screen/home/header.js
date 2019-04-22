import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
export default class header extends React.Component{
    render(){
        return (
                <View style={styles.header}>
                    <View style={styles.left}>
                    <TouchableOpacity style={styles.buttonHeader}>
                        <Feather name="menu" size={32} color="white" />
                        <Text style={styles.whiteText}>
                        HOME 
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.right}>
                        <TouchableOpacity style={styles.buttonHeader}>
                        <Entypo name="twitter" size={32} color="white" />
                        
                        </TouchableOpacity>

                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
                flex: 1,
                backgroundColor: '#15202b',
              },
    header: {
             
              height: 80,
              justifyContent: 'space-around',
              flexDirection: 'row',
              paddingLeft:0,
              paddingRight:0,
              borderBottomColor: 'rgb(56, 68, 77)',
              borderBottomWidth: 1,
            },
      left: {
              flex:1,
              flexDirection:'row',
              alignItems: 'center',
  
            },
      right: {
              flex:1, 
              flexDirection:'row', 
              justifyContent:'flex-end',
              alignItems: 'center',
            },
      buttonHeader: {
                      flexDirection:'row',
                      alignItems: 'center',
                      marginLeft: 5,
                      marginRight: 10 ,
                    
                      },
        whiteText: {
                    color: '#fff',
                    fontSize: 26,
                    fontWeight: 'bold',
                    marginLeft: 5,
                    marginRight: 5 ,
                }
  
  });