import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


function App(){

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];


  function abreBiscoito(){
    setImg(require('./src/biscoitoAberto.png'));
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(`" ${frases[numeroAleatorio]} "`)
  }

  function novoBiscoito(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return(
    <View style={styles.container}>
      <Image 
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={ () => abreBiscoito()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoNovo]} onPress={() => novoBiscoito()}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, styles.btnTextoNovo]}>Novo Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
  botaoNovo:{
    marginTop: 15, 
    borderColor: '#121212',
  },
  btnTextoNovo:{
    color: '#121212',
  }
})

export default App;
