import React from 'react';
import {
  Button,
  Text,
  TopNavigation,
  useStyleSheet,
} from '@ui-kitten/components';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import themedStyles from './style';

const Home: React.FC = () => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.areaView}>
      <TopNavigation
        title={(props) => (
          <Text {...props} style={styles.topNavigationText}>
            Bem Vindo
          </Text>
        )}
        alignment="center"
        style={styles.topNavigation}
      />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/home/pict_original.jpg')}
          style={styles.imgBackground}
        />
        <View style={styles.mainTextView}>
          <Text style={styles.mainText}>
            Ao redor do mundo, muitas organizações beneficentes não-lucrativas
            estão precisando de ajuda mais do que nunca para dar condições
            melhores a famílias necessitadas.
          </Text>
          <Text style={styles.mainText}>
            A pandemia abalou economicamente toda a estrutura comercial mundial,
            e muitas dessas organizações acabaram por perder fundos e estão
            lutando para encontrar colaboradores e sobreviver.
          </Text>
          <Button
            style={styles.button}
            size="giant"
            onPress={() => navigation.navigate('FiltersScreen')}>
            QUERO CONTRIBUIR
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
