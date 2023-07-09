import {
  View,
  StyleSheet,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import ListItem from '../components/ui/lists/ListItem';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/ui/Header';
import COLORS from '../components/ui/colors';
import MediumText from '../components/ui/customTexts/MediumText';
import { ScrollView } from 'react-native';
import BoldText from '../components/ui/customTexts/BoldText';
import CreateGroceryList from './CreateGroceryList';
import { getUserLists } from '../util/lists';
import { AuthContext } from '../store/auth-context';
import { useIsFocused } from '@react-navigation/native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Lists = () => {
  const [userLists, setUserLists] = useState([]);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  async function getUserListsHandler() {
    try {
      const response = await getUserLists(token);
      setUserLists(response);
    } catch (error) {}
  }
  useEffect(() => {
    getUserListsHandler();
  }, []);

  useEffect(() => {
    let count = 0;
    if (refreshing == true) {
      setCount(prevCount => prevCount + 1);
    }
  }, [refreshing]);

  useEffect(() => {
    getUserListsHandler();
  }, [count]);

  // function updatePage() {
  //   setCount((prevCount) => prevCount + 1);
  // }
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <Header
        text={'MyLists'}
        backgroundColor={COLORS.secondary300}
        icon={false}
      />
      <View style={styles.container}>
        <MediumText style={styles.label}>List name</MediumText>
        <MediumText style={styles.label}>Total Item</MediumText>
        <MediumText style={styles.label}>Last Change</MediumText>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
        contentContainerStyle={{ marginLeft: 25, padding: 5 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CreateGroceryList onCreate={getUserListsHandler} />
        {userLists !== undefined || typeof userLists !== 'undefined'
          ? userLists.map(item => {
              return (
                <>
                  <ListItem key={item._id} item={item} />
                  <View style={styles.lineStyle} />
                </>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 2
  },
  label: {
    fontSize: 20,
    color: COLORS.gray500
  },
  lineStyle: {
    borderWidth: 0.2,
    width: '90%',
    borderColor: '#D0CFCF',
    margin: 10,
    elevation: 1
  }
});
