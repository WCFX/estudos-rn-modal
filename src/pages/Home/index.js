import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native';

import styles from './style';



const Home = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View style={styles.container}>
      <Button title="Mostrar modal" onPress={() => setModalVisible(true)}/>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.box}>
          <View style={styles.boxBody}>
            <Button title="Fechar" onPress={() => setModalVisible(false)}/>
          </View>
        </View>
      </Modal>
    </View>
  )
};


export default Home;