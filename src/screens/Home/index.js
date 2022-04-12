import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import scholar from '../../assets/images/scholar.png';

import { styles } from './styles';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTittle}>Calcule sua Média</Text>

      <Image source={scholar} style={styles.image} />

      <TouchableOpacity style={styles.inputBtn} activeOpacity={0.7}>
        <Text style={styles.inputBtnText}>Lorem</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
