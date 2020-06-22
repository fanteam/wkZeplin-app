import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import HomeDetail from "./HomeDetail";
import bookList from "../json/booklist.json";



const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <View style={styles.headerCenter}>
                    <TouchableOpacity
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image source={{uri: "https://github.com/fanteam/wkZeplin-app/blob/master/img/btn_navbar_mobile.png?raw=true"}} style={styles.headerIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>My Book</Text>
                    <Image source={{uri: "https://github.com/fanteam/wkZeplin-app/blob/master/img/btn_search.png?raw=true"}} style={styles.headerIcona}/>
                </View>
            </View>

            <FlatList
            data={bookList}
            renderItem={({item}) => 
            <HomeDetail
                bookList={item}
                navigation={navigation}
                />}
                keyExtractor={(item,index) => index.toString()}
            />

            <View style={styles.bottom}>
                <Image source={{uri: "https://github.com/fanteam/wkZeplin-app/blob/master/img/icon_bottomnav_home.png?raw=true"}} style={styles.bottomIcon}/>
                <Image source={{uri: "https://github.com/fanteam/wkZeplin-app/blob/master/img/icon_bottomnav_mybook_selected.png?raw=true"}} style={styles.bottomIcon}/>
                <Image source={{uri:"https://github.com/fanteam/wkZeplin-app/blob/master/img/icon_bottomnav_favorites.png?raw=true"}} style={styles.bottomIcon}/>               
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.bottomText}> Home</Text>
                <Text style={styles.bottomTextSelected}> My Book</Text>
                <Text style={styles.bottomText}> Favorites</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
      headerContentStyle:{
        width:360,
        height:80,
        backgroundColor:'#00b49f',
        alignItems: 'center',
    },
    headerCenter:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:360
    },
    headerIcon:{
        width:40,
        height:40,
        marginTop:30,
        marginLeft:10
    },
    headerIcona:{
        width:40,
        height:40,
        marginTop:30,
        marginRight:10
    },
    headerText:{
        width:150,
        marginLeft:70,
        marginTop:35,
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
    },
    bottom:{
        width: 360,
        height: 40,
        flexDirection:"row",
        justifyContent:"space-around",
        borderColor:"#ddd",
        borderTopWidth:1
    },
    bottomIcon:{
        width:40,
        height:40,
    },
    bottomText:{
        width:120,
        textAlign:"center",
        marginBottom:10,
        color:"#818181"
    },
    bottomTextSelected:{
        width:120,
        textAlign:"center",
        marginBottom:10,
        color:"#00b49f"
    },

});
export default HomeScreen;