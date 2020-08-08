import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function TeacherEmpty(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Não encontramos nenhum proffy na sua pesquisa. ;(</Text>
    </View>
  )
}

export default TeacherEmpty;