import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Header from '../components/ui/Header';
import COLORS from '../components/ui/colors';
import MediumText from '../components/ui/customTexts/MediumText';
import ListGroceryItem from '../components/ui/lists/ListGroceryItem';
import BoldText from '../components/ui/customTexts/BoldText';
import { useIsFocused } from '@react-navigation/native';

const SingleList = ({ route }) => {
  const isFocused = useIsFocused();
  const { item } = route.params;
  listcontent = item.content;
  useEffect(() => {
    if (isFocused) {
      // Perform any necessary re-render logic here
      console.log('Details screen is focused. Perform re-render logic.');
    }
  }, [isFocused]);
  return (
    <View style={styles.page}>
      <Header text={item.title} backgroundColor="#E76666" icon={false} />
      <View style={styles.container}>
        <BoldText style={styles.label}>Items</BoldText>
      </View>
      {listcontent !== undefined ||
      typeof listcontent !== 'undefined' ||
      listcontent.length > 0
        ? listcontent.map(item => {
            return <ListGroceryItem key={item._id} groceryitem={item} />;
          })
        : null}
    </View>
  );
};

export default SingleList;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 7
  },
  label: {
    fontSize: 20,
    color: COLORS.gray500
  }
});
