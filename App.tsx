import React, {ReactNode, useRef} from 'react';
import {
  Platform,
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TextInput,
} from 'react-native';
import {Card, Header, InputSection, Title, VineBottle} from './src/components';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => (
  <View style={styles.container}>{children}</View>
);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, onChangeText] = React.useState('');
  const [valueY, setValueY] = React.useState(0);
  const inputRef = useRef<TextInput>(null);

  const backgroundStyle = {
    backgroundColor: '#fff',
    flex: 1,
  };

  const handleFocus = () => {
    if (inputRef.current?.isFocused()) {
      inputRef.current.blur();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      inputRef.current?.focus();
    }
  };

  const handleChangeText = (t: string) => {
    if (isNaN(Number(t))) {
      onChangeText('0');
      return;
    }

    if (Number(t) > 1) {
      onChangeText('1');
      setValueY(0);
      return;
    }

    if (Number(t) < 0) {
      onChangeText('0');
      setValueY(235);
      return;
    }
    let bottleLevel = 235 - Number(t) * 235;
    onChangeText(t);
    setValueY(bottleLevel);
  };

  const handleUpdateGestureValue = (num: number): void => {
    setValueY((prevState: number) => {
      const newState = prevState + num;
      if (newState < 0) {
        onChangeText('1');
        return 0;
      }
      if (newState > 235) {
        onChangeText('0');
        return 235;
      }
      let inputValue = ((235 - newState) / 235).toFixed(2);
      onChangeText(inputValue);
      return newState;
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Container>
        <Header />
        <Title />
        <Card text={text} />
        <InputSection
          text={text}
          onChangeText={handleChangeText}
          inputRef={inputRef}
        />
        <VineBottle
          onUpdateValue={handleUpdateGestureValue}
          valueY={valueY}
          onFocus={handleFocus}
        />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? undefined : StatusBar.currentHeight,
  },
});
export default App;
