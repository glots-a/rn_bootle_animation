import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../constans/colors';
import {BottleSvg} from '../../assets/Bottle';
import {KeyboardSvg} from '../../assets/Keyboard';
import {VolumeIndicator} from './VolumeIndicator';

interface Props {
  onUpdateValue: (num: number) => void;
  valueY: number;
  onFocus: () => void;
}

export const VineBottle: React.FC<Props> = ({
  onUpdateValue,
  valueY,
  onFocus,
}) => {
  return (
    <View style={styles.ctr}>
      <View style={styles.navcontainer}>
        <TouchableOpacity>
          <Text style={styles.navtext}>Previos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onFocus}>
          <KeyboardSvg />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navtext}>Next</Text>
        </TouchableOpacity>
      </View>
      <View>
        <BottleSvg value={valueY} />
      </View>
      <VolumeIndicator valueY={valueY} onUpdateValue={onUpdateValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navcontainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  navtext: {
    color: colors.mint_green,
    fontWeight: '600',
    fontSize: 14,
  },
});
