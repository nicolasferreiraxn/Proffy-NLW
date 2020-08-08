import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import TeacherEmpty from '../../components/TeacherEmpty';

import api from '../../services/api';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList(){
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites]  = useState<number[]>([]);
  const [ isfiltersVisible, setfiltersVisible ] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher : Teacher) => {
          return teacher.id
        });

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function loadAllTeachers(){
    api.get('classes').then(response => {
      setTeachers(response.data);
    })
  }


  function handleToggleFiltersVisible() {
    setfiltersVisible(!isfiltersVisible)
  }

 async function handleFiltersSubmit(){
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject, week_day, time
      }
    });

    handleToggleFiltersVisible();
    setTeachers(response.data)

  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
      loadAllTeachers();
    }, [])
  )

  return (
    <View style={styles.container}>
      <PageHeader tittle="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )}>
        { isfiltersVisible && (<View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput style={styles.input} placeholderTextColor="#c1bccc" placeholder="Qual é matéria ?"  onChangeText={text => setSubject(text)} />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput style={styles.input} placeholderTextColor="#c1bccc" placeholder="Qual o dia ?" value={week_day} onChangeText={text => setWeekDay(text)} />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput style={styles.input} placeholderTextColor="#c1bccc" placeholder="Qual horário ?" value={time} onChangeText={text => setTime(text)}  />
            </View>
          </View>

          <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>
        </View>
        )}
      </PageHeader>

      <ScrollView style={styles.teacherList} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 24,
      }}>
        { teachers.length > 0 ?
            teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)}/>
          }) : <TeacherEmpty />
        }
      </ScrollView>
    </View>
  )
}

export default TeacherList;