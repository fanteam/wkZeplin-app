import React from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight,TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const HomeDetail =({bookList,navigation}) => {
    return(
        <View>
            <TouchableOpacity onPress={() => {}} underlayColor="#f0f0f0" style={styles.cardContainerStyle}>
                <View style={styles.coverCard}>
                    <Image 
                        source={{uri: bookList.coverimg}} style={styles.coverStyle}
                    />
                </View>
                <View style={styles.textCard}>
                    <Text style={styles.titleStyle}>{bookList.title}</Text>
                    <Text style={styles.authorStyle}>{bookList.author}</Text>
                    <Text style={styles.introStyle}>{bookList.introduction}</Text>
                    <View style={{marginTop:10}}>
                        <Progress.Bar 
                        progress={bookList.progressBar} width={194} height={5} 
                        color={"#70b4a1"} unfilledColor={"#c3c3c3"} borderColor={"#fff"}/>
                    </View>
                    <TouchableHighlight onPress={() => {}} underlayColor="#EB6464" 
                    style={{justifyContent: 'center',marginTop:5,
                    height:21,width:bookList.statusWidth,paddingBottom:5}}>
                        <Text style={{fontFamily:"Roboto",
                        color:bookList.fontColor,fontWeight:bookList.fontweight,marginTop:10}}>
                            {bookList.status}
                        </Text>
                    </TouchableHighlight>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    
    cardContainerStyle:{
        marginTop:10,
        backgroundColor:"#fff",
        borderColor:"#ddd",
        borderBottomWidth:1,
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    coverStyle:{
        height:140,
        width:93,
    },
    coverCard:{
        height:140,
        width:90,
        marginTop:12,
        marginBottom:22,
        marginLeft:18,
        marginRight:27,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:1,
       
    },
    titleStyle:{
        fontFamily:"Roboto",
        fontSize:18,
        color:"#2e2e2e",
        fontWeight:"bold",
    },
    authorStyle:{
        fontFamily:"Roboto",
        fontSize:14,
        color:"#717171",
        lineHeight:30
    },
    introStyle:{
        fontFamily:"Roboto",
        fontSize:12,
        color:"#b1b1b1"
    },
    textCard:{
        width:210,
        marginTop:15
    },
});

export default HomeDetail;