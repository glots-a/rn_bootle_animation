import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../constans/colors';
import {CloseSvg} from '../../assets/Close';

export const Header = () => {
  return (
    <View style={styles.headerCtr}>
      <TouchableOpacity>
        <CloseSvg />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerCtr: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: colors.mint_green,
    fontSize: 14,
    fontWeight: '600',
  },
});
