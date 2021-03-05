import React from 'react';
import {
  Button,
  IndexPath,
  Input,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import themedStyles from './style';
import BackIcon from '../../components/BackIcon';
import CountrySelect from '../../components/CountrySelect';
import {Countrys} from '../../data/countrys';

const FiltersScreen: React.FC = () => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [value, setValue] = React.useState('');

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const handleSearch = () => {
    const country = Countrys[selectedIndex.row];
    navigation.navigate('ProjectList', {
      country,
      keyWord: value,
    });
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <TopNavigation
        title={(props) => (
          <Text {...props} style={styles.topNavigationText}>
            Buscar Projeto
          </Text>
        )}
        alignment="center"
        style={styles.topNavigation}
        accessoryLeft={BackAction}
      />
      <View style={styles.container}>
        <CountrySelect
          selectedIndex={selectedIndex}
          setSelectIndex={setSelectedIndex}
        />
        <Input
          placeholder="Food..."
          value={value}
          style={styles.keyWordInput}
          onChangeText={(nextValue: any) => setValue(nextValue)}
          label={(props) => (
            <Text {...props} style={{fontSize: 20}}>
              Palavra Chave
            </Text>
          )}
        />
        <Button style={styles.button} size="giant" onPress={handleSearch}>
          Buscar
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default FiltersScreen;
