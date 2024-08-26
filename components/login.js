import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'

function login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () =>{
      try{
        if(email.length > 0 && password.length > 8){
          // send information to the api
          console.log("email: ", email," password: ", password);
        }
        else{
          Alert.alert("Error","correo o contraseña invalidos")
        }
      } catch (error) {
        console.log(error)
        Alert.alert("Error","correo o contraseña invalidos")
      }

    }

    return (
      <View >
        <TextInput style={style.inputContainer} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" value={email} placeholder="Email" placeholderTextColor="black"></TextInput>
        <TextInput style={style.inputContainer} onChangeText={setPassword} value={password} secureTextEntry placeholder="Password" placeholderTextColor="black"></TextInput>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={style.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    )
}

const style = StyleSheet.create({
  inputContainer:{
    borderBottomWidth: 1,
    color: "black",
  },
  buttonText:{
    color: "black"
  }
});


export default login;
