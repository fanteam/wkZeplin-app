import * as React from 'react';
import { Button, View,StyleSheet,Image,Text,SafeAreaView } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';

import HomeScreen from './js/HomeScreen';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View style={{marginTop:40}}>
          <Image source={{uri:"https://github.com/fanteam/wkZeplin-app/blob/master/img/img_user_photo.png?raw=true"}} style={styles.profileStyle}/>
          <Text style={styles.name}>GamexHCI</Text>
          <Text style={styles.email}>gdlab2017@gmail.com</Text>
        </View>
        <Image source={{uri: "https://github.com/fanteam/wkZeplin-app/blob/master/img/btn_down_arrow.png?raw=true"}} style={styles.arrowStyle}/>
      </View>
      <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
        <Image source={{uri: "https://github.com/fanteam/wkZeplin-app/blob/master/img/icon_drawer_home.png?raw=true"}} style={styles.iconStyle}/>
        <DrawerItem label="Home"/>
      </View>

        <DrawerItemList {...props} />


      <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
        <Image source={{uri: "https://github.com/fanteam/wkZeplin-app/blob/master/img/icon_drawer_favorites.png?raw=true"}} style={styles.iconStyle}/>
        <DrawerItem label="Favorites"/>
      </View>
      <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
        <Image source={{uri:"https://github.com/fanteam/wkZeplin-app/blob/master/img/icon_drawer_setting.png?raw=true"}} style={styles.iconStyle}/>
        <DrawerItem label="Settings"/>
      </View>
      <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
        <Image source={{uri:"https://github.com/fanteam/wkZeplin-app/blob/master/img/icon_drawer_aboutus.png?raw=true"}} style={styles.iconStyle}/>
        <DrawerItem label="About us"/>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
      drawerStyle={{ backgroundColor: '#fff',width: 320,}}
      drawerContentOptions={{
        activeBackgroundColor: '#00b49f',
        activeTintColor:'#fff',
        inactiveBackgroundColor:'#000',
        inactiveTintColor:'#000'
      }}
      drawerContent={props => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="My Book" component={HomeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Image
            source={{
              uri: "https://github.com/fanteam/wkZeplin-app/blob/master/img/icon_drawer_mybook_pressed.png?raw=true"
            }}
              style={[focused ? styles.drawerActive : styles.drawerInActive,
                { height: size, width: size, marginLeft:15,marginRight:-10}]}
            />
            )}
          }/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerHeader:{
    height:200,
    marginTop:-30,
    marginLeft:-15,
    backgroundColor:"#00b49f",
    flexDirection:"row",
    justifyContent:"space-around",
  },
  profileStyle:{
    width:70,
    height:70,
    marginTop:10
  },
  name:{
    fontSize:14,
    color:"#FFF",
    fontWeight:"bold",
    marginTop:15
  },
  email:{
    fontSize:14,
    color:"#fff",
    fontWeight:"normal",
  },
  arrowStyle:{
    width:24,
    height:24,
    marginTop:150,
    marginRight:-10
  },
  iconStyle:{
    width:30,
    height:30,
    marginTop:15,
    marginLeft:30
  }
});