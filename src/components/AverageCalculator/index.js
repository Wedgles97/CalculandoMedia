import { 
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard, 
  } from "react-native";

  import { useState } from 'react';
  
  import { styles } from './styles';
  
  export default function AverageCalculator() {
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [nota3, setNota3] = useState("");
    const [total, setTotal] = useState(0);
  
    const x = parseFloat(total);
    const por = x / 3;
  
    function gerarResultado() {
      setTotal(Number(nota1) + Number(nota2) + Number(nota3));
      Keyboard.dismiss();
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora de Média</Text>
  
        <View style={styles.field}>
          <Text style={styles.label}>Nota 1</Text>
          <TextInput
            style={styles.input}
            maxLength={4}
            keyboardType="decimal-pad"
            placeholder="Primeira Nota"
            value={nota1}
            onChangeText={(int) => setNota1(int)}
          />
        </View>
  
        <View style={styles.field}>
          <Text style={styles.label}>Nota 2</Text>
          <TextInput
            style={styles.input}
            maxLength={4}
            keyboardType="decimal-pad"
            placeholder="Segunda Nota"
            value={nota2}
            onChangeText={(int) => setNota2(int)}
          />
        </View>
  
        <View style={styles.field}>
          <Text style={styles.label}>Nota 3</Text>
          <TextInput
            style={styles.input}
            maxLength={4}
            keyboardType="decimal-pad"
            placeholder="Terceira Nota"
            value={nota3}
            onChangeText={(int) => setNota3(int)}
          />
        </View>
  
        <TouchableOpacity
          style={styles.inputBtn}
          activeOpacity={0.7}
          onPress={() => gerarResultado()}
        >
          <Text style={styles.inputBtnText}>Calcular</Text>
        </TouchableOpacity>
  
        <View style={styles.cardResult}>
          <Text style={styles.TextResult}>Total: {total.toFixed(1)}</Text>
          <Text style={styles.TextResult}>Média: {por.toFixed(1)}</Text>
        </View>
  
        {por < 5 && por > 0 && <Text style={styles.result}>Reprovado</Text>}
  
        {por >= 5 && por < 7 && <Text style={styles.result}>Recuperação</Text>}
  
        {por >= 7 && <Text style={styles.result}>Aprovado</Text>}
      </View>
    );
  }
  