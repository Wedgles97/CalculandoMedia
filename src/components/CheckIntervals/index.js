import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
  } from "react-native";
  import { useState } from "react";
  
  import getIntervalBetweenOneNumber from "../../utils/getIntervalBetweenOneNumber";
  
  import { styles } from "./styles";
  
  export default function CheckIntervals() {
    const [interval1, setInterval1] = useState("");
    const [interval2, setInterval2] = useState("");
    const [interval3, setInterval3] = useState("");
    const [total, setTotal] = useState(0);
  
    const x = parseFloat(total);
    const por = x / 3;
  
    function gerarResultado() {
      setTotal(Number(interval1) + Number(interval2) + Number(interval3));
      Keyboard.dismiss();
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Verificar Intervalos</Text>
  
        <View style={styles.field}>
          <Text style={styles.label}>Valor 1</Text>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="decimal-pad"
            value={interval1}
            onChangeText={(int) => setInterval1(int)}
          />
        </View>
  
        <View style={styles.field}>
          <Text style={styles.label}>Valor 2</Text>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="decimal-pad"
            value={interval2}
            onChangeText={(int) => setInterval2(int)}
          />
        </View>
  
        <View style={styles.field}>
          <Text style={styles.label}>Valor 3</Text>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="decimal-pad"
            value={interval3}
            onChangeText={(int) => setInterval3(int)}
          />
        </View>
  
        <TouchableOpacity
          style={styles.inputBtn}
          activeOpacity={0.7}
          onPress={() => gerarResultado()}
        >
          <Text style={styles.inputBtnText}>Verificar Intervalos</Text>
        </TouchableOpacity>
    
        {por > 0 && (
          <Text style={styles.result}>
            A sua média é: {por.toFixed(1)} e está no intervalo entre{" "}
            {getIntervalBetweenOneNumber(por)}
          </Text>
        )}
      </View>
    );
  }
  