import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

//function Section({children, title}: SectionProps): React.JSX.Element

const Container = ({children}: any): React.JSX.Element => (
  <View style={styles.container}>{children}</View>
);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Container>
        <Text>Hello world</Text>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'red',
  },
});
export default App;
