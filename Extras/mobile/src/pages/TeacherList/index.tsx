import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Button } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import RNPickerSelect from 'react-native-picker-select';

import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from 'react-native-modal-datetime-picker';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import TeacherEmpty from '../../components/TeacherEmpty';

import api from '../../services/api';

import styles, { pickerSelectStyles } from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList(){
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites]  = useState<number[]>([]);
  const [ isfiltersVisible, setfiltersVisible ] = useState(false);

  const [weekDays, setweekDays] = useState([]);
  const [subjectApi, SetsubjectApi] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [showDateTimePicker, SetshowDateTimePicker] = useState(false);
  const [timePicker, setTimePicker] = useState('');
  const [timePickerBoolean, setTImePickerBoolean] = useState(false);

  
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

  function loadWeekSubjectDays(){
    api.get('weekdays').then(response => {
      setweekDays(response.data);
    });

    api.get('subjects').then(response => {
      SetsubjectApi(response.data);
    });
   }


  function handleToggleFiltersVisible() {
    loadWeekSubjectDays();
    setfiltersVisible(!isfiltersVisible)
  }

 async function handleFiltersSubmit(){
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject, week_day, time: timePicker
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


  function showTimepicker() {
    SetshowDateTimePicker(!showDateTimePicker);
  }

 
  function hideDateTimePicker() {
    SetshowDateTimePicker(!showDateTimePicker);
  };
 
  function handleDatePicked(date: any){
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const HoursAndMinutes = `${hours}:${minutes}`
    setTimePicker(HoursAndMinutes);
    setTImePickerBoolean(true)
    hideDateTimePicker();
  };
  
  return (
    <View style={styles.container}>
      <PageHeader tittle="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )}>
        { isfiltersVisible && (<View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <RNPickerSelect style={pickerSelectStyles} value={subject} onValueChange={text => setSubject(text)} placeholder={{ label: 'Selecione', value: null, color: '#c1bccc',}} items={subjectApi} />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <RNPickerSelect style={pickerSelectStyles} value={week_day} onValueChange={text => setWeekDay(text)} placeholder={{ label: 'Selecione', color: '#c1bccc',}} items={weekDays} />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              { showDateTimePicker && <DateTimePicker mode="time" cancelTextIOS="Cancelar"	confirmTextIOS="Confirmar" headerTextIOS="Selecionar horário" isVisible={showDateTimePicker} onConfirm={handleDatePicked} onCancel={hideDateTimePicker} />}

              <RectButton style={styles.input} onPress={showTimepicker}>
                <Text>{ timePickerBoolean ?  timePicker : <Text style={styles.textInputSelect}>Selecione</Text> }</Text>
              </RectButton>
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