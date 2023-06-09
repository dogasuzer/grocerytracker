import React, { useContext, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import COLORS from '../components/ui/colors';
import BoldText from '../components/ui/customTexts/BoldText';
import { addNewList } from '../util/lists';
import { AuthContext } from '../store/auth-context';

const CreateGroceryList = ({ onCreate }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listname, setListName] = useState('');
  const currentTime = new Date();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  async function createListHandler() {
    try {
      await addNewList(token, listname, currentTime);
      setModalVisible(!modalVisible);
    } catch (error) {}
    onCreate();
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Name of your new list:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setListName}
              value={listname}
            />
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={createListHandler}
              >
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <BoldText style={{ color: 'white' }}>
          + Create a new Grocery list
        </BoldText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    minWidth: 70,
    margin: 10
  },
  buttonOpen: {
    backgroundColor: COLORS.purple100,
    width: 250,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonClose: {
    backgroundColor: COLORS.purple100
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: COLORS.secondary200,
    color: COLORS.black,
    padding: 10,
    minWidth: 100,
    borderRadius: 50
  }
});

export default CreateGroceryList;
