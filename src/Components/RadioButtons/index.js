import React, {forwardRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const RadioButton =  forwardRef((props,ref)  => {
  // const [isSelected,setIsSelected]=useState(false)
  const {
    title,
    titlePosition,
    onPressCheck,
    isSelected,
    unSelectedImage,
    selectedImage,
    checkBox,
    buttonStyle,
    container,
    topTitleStyle,
    outerCircleStyle,
    innerCircleStyle,
    unCheckedImageStyle1,
    unCheckedImageStyle,titleStyle
  } = props;

  return (
    // <View style={styles.container}>
    <View style={container}>
      <TouchableOpacity
        style={[
          buttonStyle,
          {
            flexDirection:
              titlePosition === 'right' || titlePosition === 'left'
                ? 'row'
                : 'column',
          },
        ]}
        onPress={onPressCheck}>
        {(titlePosition === 'up' || titlePosition === 'left') && (
          // <Text  style={styles.titleStyle}>{title}</Text>
          <Text style={topTitleStyle}>{title}</Text>
        )}

        {!unSelectedImage && !selectedImage && (
          <View style={[outerCircleStyle, checkBox && {borderRadius: 5}]}>
            {isSelected && (
              <View style={[innerCircleStyle, checkBox && {borderRadius: 5}]} />
            )}
          </View>
        )}

        {unSelectedImage && selectedImage && (
          <ImageBackground
            source={unSelectedImage}
            resizeMode={'contain'}
            style={unCheckedImageStyle1}
            imageStyle={[unCheckedImageStyle]}>
            {isSelected && (
              <Image
                source={selectedImage}
                style={styles.checkedImageStyle}
                resizeMode={'contain'}
              />
            )}
          </ImageBackground>
        )}
        {(titlePosition === 'down' || titlePosition === 'right') && (
          <Text style={titleStyle}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
});

RadioButton.propTypes = {
  title: PropTypes.string,
  titlePosition: PropTypes.string,
  isSelected: PropTypes.bool,
  checkBox: PropTypes.bool,
};
RadioButton.defaultProps = {
  container: styles.container,
  buttonStyle: styles.buttonStyle,
  topTitleStyle: styles.topTitleStyle,
  outerCircleStyle: styles.outerCircleStyle,
  innerCircleStyle: styles.innerCircleStyle,
  unCheckedImageStyle1:styles.unCheckedImageStyle1,
  unCheckedImageStyle: styles.unCheckedImageStyle,
  titleStyle: styles.titleStyle
};
export default RadioButton;
