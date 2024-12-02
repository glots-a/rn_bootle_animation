import {PanResponder, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {colors} from '../../constans/colors';

interface VolumeIndicatorProps {
  valueY: number;
  onUpdateValue: (num: number) => void;
}

export const VolumeIndicator: React.FC<VolumeIndicatorProps> = ({
  valueY,
  onUpdateValue,
}) => {
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,

        onPanResponderMove: (evt, gestureState) => {
          onUpdateValue(gestureState.dy);
        },
      }),
    [onUpdateValue],
  );

  return (
    <View
      style={[
        {
          transform: [{translateY: valueY}],
        },
        styles.ctr,
        styles.top,
      ]}
      {...panResponder.panHandlers}>
      <View style={styles.line} />
      <View style={styles.circle}>
        <Text style={styles.text}>{((235 - valueY) / 235).toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    paddingLeft: 60,
  },
  line: {
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: colors.mint_green,
  },
  circle: {
    backgroundColor: colors.mint_green,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#fff'},
  top: {top: 75},
});
