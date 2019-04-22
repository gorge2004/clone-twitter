import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather,  AntDesign } from '@expo/vector-icons';
export default class footer extends React.Component{
    render(){
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonFooter}>
                    <MaterialCommunityIcons name='home' size={25} color='rgb(136, 153, 166)'/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonFooter}>
                    <AntDesign name='search1' size={25} color='rgb(136, 153, 166)'/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonFooter}>
                    <Feather name='bell' size={25} color='rgb(136, 153, 166)'/>            
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonFooter}>
                    <AntDesign name='mail' size={25} color='rgb(136, 153, 166)'/>
                </TouchableOpacity> 
          </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        borderTopColor: 'rgb(56, 68, 77)', 
        borderTopWidth: 1, 
        backgroundColor: '#15202b',
        height:60, 
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
              },
    
      buttonFooter: {
                     flex:1, 
                     flexDirection:'column', 
                     alignItems: 'center'
                      },
   
  
  });