import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { Ionicons, Feather, Entypo, MaterialCommunityIcons, AntDesign, EvilIcons } from '@expo/vector-icons';
//views
import Header from './screen/home/header';
import History from './screen/home/history';
import Footer from './screen/home/footer';

export default class App extends React.Component {
  render() {
    return (
        <View
         style={styles.container}>
          <ScrollView style={styles.containerScroll}>
                <Header />
                <History />
                <History />
                <History />
                <History />
          </ScrollView>
          <Footer />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
              flex: 1,
              backgroundColor: '#15202b',
              paddingBottom:60,
            },
  containerScroll:{flex: 1,
                  },          
  header: {
           
            height: 80,
            justifyContent: 'space-around',
            flexDirection: 'row',
            paddingLeft:0,
            paddingRight:0,
            borderBottomColor:'#15203b',
            borderBottomWidth: 2,
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
                  
                    },
      whiteText: {color:'#fff',fontSize:18,fontWeight:'bold'},
      history: {
                
                borderBottomColor: 'rgb(56, 68, 77)',
                borderBottomWidth: 1,
                flexDirection: 'row',
                alignItems:'stretch',
                padding:0
                
                
      }

});
