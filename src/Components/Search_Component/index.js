import React, {forwardRef} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppImages from '../../themes/AppImages';
import {GetSearchData} from '../../themes/DataConstants';
import styles from './styles';

const SearchableDropDownComponent = forwardRef((props, ref) => {

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          // height: 200,
          // backgroundColor: 'red',
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 20,
          paddingVertical:10
        }}>
        <Text>{item.value}</Text>
        <Text>{item.label}</Text>
        {/* <Image source={AppImages.checkBox_checked} /> */}
        <Image source={item.image}
        style={styles.listImageStyle} />
      </View>
    );
  };

  const RenderItems = () => {
    console.log('Called');
    return (
      <View style={{height: 200, backgroundColor: 'red', marginTop: 30}}>
        <Text>{item.label}</Text>
      </View>
    );
  };
  console.log('DAta Flat', GetSearchData());
  return (
    <Modal transparent={true}>
    <View style={[styles.mainContainer]}>
      <Text>asdkashdasj</Text>
      <FlatList
        // data={DATA}
        data={GetSearchData()}
        renderItem={renderItem}
        keyExtractor={item => item.value}
      />
    </View>
     </Modal>
  );
});

SearchableDropDownComponent.propTypes = {};

export default SearchableDropDownComponent;
const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
