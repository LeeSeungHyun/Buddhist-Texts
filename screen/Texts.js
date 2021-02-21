import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default function Texts() {
  const [ play, setPlay ] = useState(false);
  const [ sound, setSound ] = React.useState();

  const setAudio = async () => {
    let temp = play === true ? false : true
    setPlay(temp);
    if(temp) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/audios/반야심경.mp3'),
        {},
        _onPlaybackStatusUpdate,
        true
      );
      setSound(sound);
      await sound.playAsync();
    } else {
      await sound.unloadAsync();
    }
  }

  const _onPlaybackStatusUpdate = async (playbackStatus) => {
    if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
      console.log('finish')
      setPlay(false);
    }    
  };
  
  let display = null;
  if(play) {
    display = <MaterialIcons name='stop' size={36} onPress={setAudio} style={styles.icon}/>
  } else {
    display = <MaterialIcons name='play-circle-outline' size={36} onPress={setAudio} style={styles.icon}/>
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>마하반야바라밀다심경</Text>
      {display}
      <Text style={styles.content}>
      {
      `
      관자재보살 행심반야바라밀다시 조견오온개공\n
      도일채고액 색불이공 공불이색 색즉시공 공즉시색\n
      수상행식 역부여시 사리자 시제법공상\n
      불생불멸 불구부정 부증불감 시고 공중무색\n
      무수상행식 무안이비설신의 무색성향미촉법\n
      무안계 내지 무의식계 무무명 역무무명진 내지 무노사\n
      역무노사진 무고집멸도 무지역무득\n
      이무소득고 보리살타 의반야바라밀다고 심무가애\n
      무가애고 무유공포 원리전도몽상 구경열반\n
      삼세제불 의반야바라밀다고 득아뇩다라삼먁삼보리\n
      고지 반야바라밀다 시대신주 시대명주 시무상주\n
      시무등등주\n
      능제일체고 진실불허\n
      고설 반야바라밀다주 즉설주왈\n
      아제아제 바라아제 바라승아제 모지 사바하 (3번)
      `}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    fontSize: 8
  },
  title: {
    position: 'relative',
    paddingTop: 16,
    paddingLeft: 16,
    fontWeight: 'bold',
    fontSize: 20
  },
  content: {
    fontSize: 13
  },
  icon: {
    position: 'absolute',
    top: 30,
    right: 10
  }
})