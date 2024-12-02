import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../constans/colors';

interface Props {
  text: string;
  onChangeText: (num: string) => void;
  inputRef: React.RefObject<TextInput>;
}

export const InputSection: React.FC<Props> = ({
  text,
  onChangeText,
  inputRef,
}) => {
  return (
    <View style={styles.ctr}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="lb"
        placeholderTextColor={colors.mint_green}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ctr: {
    marginTop: 8,
    height: 180,
  },
  input: {
    height: 44,
    borderBottomColor: colors.mint_green,
    borderBottomWidth: 1,
    width: '40%',
    backgroundColor: '#e6ecee',
    borderRadius: 4,
    paddingHorizontal: 4,
  },
});
