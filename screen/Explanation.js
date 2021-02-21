import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '마하반야바라밀다심경\n摩訶般若波羅蜜多心經'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '관자재보살\n觀自在菩薩',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '행심반야바라밀다시\n行深般若波羅蜜多時',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: '조견오온개공\n行深般若波羅蜜多時',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: '사리자',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: '색불이공 공불이색 색즉시공 공즉시색',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fourth Item',
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

// const getDetailInfo = (item) => {
//   console.log(item);
// }

export default Explanation = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => navigation.navigate('해석', item.id)}/>
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 4,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginHorizontal: 12
  },
  title: {
    fontSize: 16,
  },
});