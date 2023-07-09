import { View, Pressable } from 'react-native';
import React, { useContext } from 'react';
import BoldText from './customTexts/BoldText';
import COLORS from './colors';
import { addNewItemToList } from '../../util/lists';
import { AuthContext } from '../../store/auth-context';

const AddGroceryListItem = ({ list, item, counter, onSelect }) => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  async function AddGroceryToListItemsBackend() {
    console.log(list._id);
    const newItem = [{ ...item, count: counter }];
    try {
      const response = await addNewItemToList(token, list._id, newItem);
      console.log('response.list');
      console.log(response.list);
      onSelect();
      return response.list;
    } catch {}
  }

  const dateConverter = list.lastChange.slice(0, 10);
  return (
    <View
      style={{
        flexDirection: 'row'
      }}
    >
      <Pressable onPress={AddGroceryToListItemsBackend}>
        <BoldText
          style={{ margin: 20, color: COLORS.secondary200, width: 110 }}
          key={Math.random() * 1000}
        >
          {list !== undefined ? list.title : null}
        </BoldText>
      </Pressable>
      <BoldText
        style={{ margin: 20, color: COLORS.gray100, width: 80 }}
        key={Math.random() * 1000}
      >
        {dateConverter}
      </BoldText>
    </View>
  );
};

export default AddGroceryListItem;
