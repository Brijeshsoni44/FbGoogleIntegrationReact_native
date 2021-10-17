import React from "react";
import {Text,View, StyleSheet,TextInput,Image,TouchableOpacity, StatusBar,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SignUp extends React.Component{
    render(){
        return(
           

            <View style={styles.MainView}>
                <ScrollView>
                <StatusBar barStyle='dark-content' backgroundColor='skyblue'/>
                 <LinearGradient
        colors={['blue', 'green', '#e303fc', 'skyblue']}
        style={{flex: 1}}
        start={{ x: 12, y: 1 }}
        end={{ x: 0, y: 0 }}
      >

                <Text style={{marginTop:30,fontSize:25,fontWeight:'bold',color:'white',textAlign:'center'}}>
                    Welcome To Login 
                </Text>
                <View style={styles.TextLoginView}>
                    <Text style={{textAlign:'left',fontSize:16,fontWeight:'bold',marginLeft:20,color:'white'}}> 
                        SIGN UP
                    </Text>
                </View>
                
                <View style={styles.MainInputView}>
                    <TextInput
                    style={styles.inputView}
                    placeholder='Enter Name'
                    placeholderTextColor='black'
                    />
                </View>
                <View style={styles.MainInputView}>
                    <TextInput
                    style={styles.inputView}
                    placeholder='Enter Email'
                    placeholderTextColor='black'
                    />
                </View>
                <View style={styles.MainInputView}>
                    <TextInput
                    style={styles.inputView}
                    placeholder='Enter Password'
                    placeholderTextColor='black'
                    />
                </View>
                <View style={styles.MainInputView}>
                    <TextInput
                    style={styles.inputView}
                    placeholder='Enter Confirm Password'
                    placeholderTextColor='black'
                    />
                </View>
                <View style={styles.LoginBtn}>                
                <TouchableOpacity style={styles.button}>
                <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
                    <Text style={{textAlign:'center',color:'white',fontSize:16,fontWeight:'bold'}}>
                        SIGNUP
                    </Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
                {/* <View style={styles.forgotView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontWeight:'bold',color:'white',fontSize:16,textAlign:'center'}}>
                        FORGOT PASSWORD?
                    </Text>
                    </TouchableOpacity>
                  
                </View> */}
               

            

                <View style={styles.forgotView}>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'bold',color:'white',marginRight:10}}> 
                       Already have an Account 
                    </Text>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'bold',color:'#2974FA'}}> 
                        Login
                    </Text>
                </View>
                
                </LinearGradient>
                </ScrollView>
            </View>


        )
    }
}
const styles=StyleSheet.create({
    MainView:{
        flex:1,
        backgroundColor:'skyblue',
    },
    TextLoginView:{
        marginTop:120,
    },

    MainInputView:{
      marginTop:30,
      flexDirection:'column',
      marginLeft:20,
      marginRight:20,
        
    },
    inputView:{
        height:50,
        borderWidth:1,
        borderRadius:6,
        borderColor:'white',
        paddingLeft:12,
        backgroundColor:'white',
        fontSize:15,

    },
    LoginBtn:{
        height:50,      
        marginLeft:20,
        marginRight:20,
        marginTop:30,
        marginBottom:20,
        borderRadius:6,
    },
    button: {
        width: '100%',
        height: 50,
      },
      gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 6
      },
      forgotView:{
          marginBottom:50,
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row'
      },
      socialView:{
        flex:1,
        flexDirection:'row',
        marginTop:10, 
       justifyContent:'space-between',
      // alignItems:'center',
        margin:50,
      //  flexWrap: 'wrap'
        //backgroundColor:'red',      
      },
      imageView:{
          height:40,
          width:40,
          borderRadius:20,
         // margin:10,

      }


})
