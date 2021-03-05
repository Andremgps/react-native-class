import React, {useState} from 'react';
import {
  Button,
  Divider,
  Layout,
  Spinner,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import {ImageBackground, Linking, SafeAreaView, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import themedStyles from './style';
import BackIcon from '../../components/BackIcon';
import {ScrollView} from 'react-native-gesture-handler';

interface ProjectDetails {
  title: string;
  imageUrl: string;
  siteUrl: string;
  contactUrl: string;
  progressUrl: string;
  summary: string;
  activities: string;
  longTermImpact: string;
}

type IRoute = {
  ProjectDetails: ProjectDetails;
};

const ProjectDetails: React.FC = () => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<IRoute, 'ProjectDetails'>>();
  const projectDetails: ProjectDetails = route.params;

  const [loadingImage, setLoadingImage] = useState(true);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const sendToBrowser = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <TopNavigation
        title={(props) => (
          <Text {...props} style={styles.topNavigationText}>
            Detalhes do Projeto
          </Text>
        )}
        alignment="center"
        style={styles.topNavigation}
        accessoryLeft={BackAction}
      />
      <Layout style={styles.layout}>
        <ScrollView>
          <Text category="h5" style={styles.title}>
            {projectDetails.title}
          </Text>
          <View style={{flex: 1, alignItems: 'center'}}>
            <ImageBackground
              source={{
                uri: projectDetails.imageUrl,
              }}
              style={styles.projectImage}
              resizeMode="cover"
              onLoadEnd={() => setLoadingImage(false)}>
              {loadingImage && <Spinner />}
            </ImageBackground>
          </View>
          <View style={styles.container}>
            <Text category="h6" style={styles.subtitle}>
              Links do projeto
            </Text>
            <Divider style={styles.divider} />
            <View style={styles.buttonsContainer}>
              <Button
                style={styles.linksButton}
                onPress={() => sendToBrowser(projectDetails.siteUrl)}>
                Site
              </Button>
              <Button
                style={styles.linksButton}
                onPress={() => sendToBrowser(projectDetails.contactUrl)}>
                Contato
              </Button>
              <Button
                style={styles.linksButton}
                onPress={() => sendToBrowser(projectDetails.progressUrl)}>
                Progresso
              </Button>
            </View>
            <Text category="h6" style={styles.subtitle}>
              Summary
            </Text>
            <Divider style={styles.divider} />
            <Text>{projectDetails.summary}</Text>
            <Text category="h6" style={styles.subtitle}>
              Activities
            </Text>
            <Divider style={styles.divider} />
            <Text>{projectDetails.activities}</Text>
            <Text category="h6" style={styles.subtitle}>
              Long Term Impact
            </Text>
            <Divider style={styles.divider} />
            <Text>{projectDetails.longTermImpact}</Text>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default ProjectDetails;
