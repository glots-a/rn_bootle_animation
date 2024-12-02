import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constans/colors';

type Props = {
  title: String;
  volume: String;
};

const SummaryResult: React.FC<Props> = ({title, volume}) => {
  return (
    <View style={styles.ctr}>
      <Text style={styles.title}>{title}:</Text>
      <Text>{`${volume}lb`}</Text>
    </View>
  );
};

export default SummaryResult;

const styles = StyleSheet.create({
  ctr: {
    marginTop: 16,
  },
  title: {
    color: colors.sky,
  },
});
