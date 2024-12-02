import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChevronRight} from '../../assets/Chevron';
import {colors} from '../../constans/colors';
import SummaryResult from './SummaryResult';
import {ChevronDown} from '../../assets/ChevronDown';

interface Props {
  text: string;
}

export const Card: React.FC<Props> = ({text}) => {
  return (
    <View style={styles.ctr}>
      <TouchableOpacity style={styles.view}>
        <Text style={styles.text}>View summary</Text>
        <ChevronRight />
      </TouchableOpacity>

      <View style={[styles.view, styles.summary]}>
        <SummaryResult title={'Total storage'} volume={text} />
        <SummaryResult title={'Total'} volume={text} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>General stock count</Text>
        <ChevronDown />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ctr: {
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowColor: '#000',
    shadowRadius: 2,
    backgroundColor: '#fff',
    width: '100%',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.mint_green,
  },
  view: {flexDirection: 'row', alignItems: 'center'},
  summary: {
    width: '70%',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 12,
    color: colors.mint_green,
    marginRight: 16,
  },
  button: {
    backgroundColor: '#e6ecee',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 8,
  },
});
