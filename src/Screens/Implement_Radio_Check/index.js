import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RadioButton from '../../Components/RadioButtons';
import AppImages from '../../themes/AppImages';

const Compon_RadioCheck = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <RadioButton
      
          isSelected={isSelected}
          onPressCheck={() => {
            setIsSelected(!isSelected);
          }}
          title="Apple"
          titlePosition={'down'}
          checkBox={true}
        //   unSelectedImage={AppImages.radio_unChecked}
        //   selectedImage={AppImages.radio_checked}
        //   unSelectedImage={AppImages.checkBox_unchecked}
        //   selectedImage={AppImages.checkBox_checked}
        />
        <RadioButton
      
          isSelected={isSelected}
          onPressCheck={() => {
            setIsSelected(!isSelected);
          }}
          title="Apple"
          titlePosition={'down'}
          checkBox={true}
        //   unSelectedImage={AppImages.radio_unChecked}
        //   selectedImage={AppImages.radio_checked}
        //   unSelectedImage={AppImages.checkBox_unchecked}
        //   selectedImage={AppImages.checkBox_checked}
        />
      </View>
    </View>
  );
};

export default Compon_RadioCheck;
