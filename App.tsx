

import React from 'react';
import { ImageBackground,StyleSheet,Text,TextInput,TouchableOpacity,View
} from 'react-native';

export default class App extends React.Component {
  constructor(props:any){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)
   let s = this.state
   s.resultado = imc
   if(s.resultado < 16){
     s.resultadoText ='Muito abaixo do peso'
   }
    else if (s.resultado < 17){
     s.resultadoText ='Moderadamente abaixo do peso'
    }
    else if (s.resultado < 18.5){
     s.resultadoText ='Abaixo do peso'
    }
    else if (s.resultado < 25) {
     s.resultadoText ='Saudavel'
    }
    else if (s.resultado < 30) {
     s.resultadoText ='Sobrepeso'
    }
    else if (s.resultado < 35) {
     s.resultadoText ='Obesidade Grau 1°'
    }
    else if (s.resultado < 40) {
      s.resultadoText ='Obesidade Grau 2°'
    }
    else{
      s.resultadoText ='Obesidade Grau 3°'
    }
   this.setState(s)



  }

  render() {
    return (
      <ImageBackground source={require("./assets/imagem/caçaescuro.jpg")}style={estilo.container}>

      <View style={estilo.container}>
        <View style={estilo.entrada}>
          <TextInput autoCapitalize="none" placeholder="Altura" keyboardType="numeric" style={estilo.input} onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput autoCapitalize="none" placeholder="Massa"  keyboardType="numeric" style={estilo.input} onChangeText={(massa)=>{this.setState({massa})}}/>
        </View>
        <TouchableOpacity onPress={this.calcular}><Text style={estilo.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={estilo.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[estilo.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>

    </View>
    </ImageBackground>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  entrada:{
    flexDirection:'row',
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    fontWeight:"bold",
    marginTop:54,
  },
  
  buttontext:{
    textAlign:"center",
    padding:40,
    fontSize:50,
    fontWeight:'bold',
    color:"#fff",
  },
  resultado:{
    alignSelf:"center",
    color:"#fff",
    fontSize:50,
    fontWeight:'bold',
    padding: 70,
  },
});
