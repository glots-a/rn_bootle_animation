import {StyleSheet, Text} from 'react-native';
import React from 'react';

export const Title = () => {
  return (
    <Text style={styles.title}>
      {` ***TOP*** CheeseJarlsberg Load Swiss \n (Imported) (1 case = 2 whole x ~ 12lbs)`}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
});
