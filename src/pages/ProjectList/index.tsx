import React, {useEffect, useState} from 'react';
import {
  Button,
  Card,
  Layout,
  List,
  Spinner,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import {SafeAreaView, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import themedStyles from './style';
import BackIcon from '../../components/BackIcon';
import api from '../../services/api';

export interface Project {
  id: number;
  title: string;
  summary: string;
  contactUrl: string;
  projectLink: string;
  progressReportLink: string;
  longTermImpact: string;
  activities: string;
  image: {
    imageLink: {
      url: string;
      size: string;
    }[];
  };
}

export interface ProjectsApiResponse {
  search: {
    response: {
      projects: {
        project: Project[];
      };
    };
  };
}

const ProjectList: React.FC = () => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();
  const route = useRoute<any>();

  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const {country, keyWord} = route.params;
        const responseProjects = await api.get<ProjectsApiResponse>(
          `/services/search/projects?api_key=67967424-b0d1-4960-8e18-ed3cb39d4c76&q=${
            keyWord || '*'
          }&filter=country:${country}`,
        );
        setProjects(
          responseProjects.data.search.response.projects?.project || [],
        );
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [route.params]);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const renderListItemHeader = (headerProps: any, info: any) => (
    <View {...headerProps}>
      <Text category="h6">{info.item.title}</Text>
    </View>
  );

  const renderListItemFooter = (footerProps: any, info: any) => (
    <View {...footerProps} style={[footerProps.style, styles.footerContainer]}>
      <Button
        onPress={() =>
          navigation.navigate('ProjectDetails', {
            title: info.item.title,
            imageUrl: info.item.image.imagelink.find(
              (x: any) => x.size === 'original',
            ).url,
            siteUrl: info.item.projectLink,
            contactUrl: info.item.contactUrl,
            progressUrl: info.item.progressReportLink,
            summary: info.item.summary,
            activities: info.item.activities,
            longTermImpact: info.item.longTermImpact,
          })
        }>
        Saber Mais
      </Button>
    </View>
  );

  const renderListItem = (info: any) => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderListItemHeader(headerProps, info)}
      footer={(footerProps) => renderListItemFooter(footerProps, info)}>
      <Text>{info.item.activities}</Text>
    </Card>
  );

  return (
    <SafeAreaView style={styles.areaView}>
      <TopNavigation
        title={(props) => (
          <Text {...props} style={styles.topNavigationText}>
            Projetos Encontrados
          </Text>
        )}
        alignment="center"
        style={styles.topNavigation}
        accessoryLeft={BackAction}
      />
      <Layout style={styles.layout}>
        <View style={styles.container}>
          {isLoading ? (
            <Spinner />
          ) : !isLoading && projects.length === 0 ? (
            <Text>Não foram encontrados projetos para sua pesquisa</Text>
          ) : (
            <List
              contentContainerStyle={styles.contentContainer}
              data={projects}
              renderItem={renderListItem}
            />
          )}
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default ProjectList;
