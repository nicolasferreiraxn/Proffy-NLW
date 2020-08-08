import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'


import styles from './styles';

interface PageHeaderProps {
  tittle: string;
  headerRight?: ReactNode;
}


const PageHeader:React.FC<PageHeaderProps> = ({ tittle, headerRight,  children }) => {
  const { navigate } = useNavigation();

  function handleGoback(){
    navigate('Landing')
  }


  return (
    <View style={styles.container}> 
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoback}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoIcon} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{tittle}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  );
}

export default PageHeader;