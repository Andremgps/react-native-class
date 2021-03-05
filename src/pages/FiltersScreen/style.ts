import {StyleService} from '@ui-kitten/components';

const themedStyles = StyleService.create({
  areaView: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: 'color-primary-default',
  },
  topNavigationText: {
    fontSize: 25,
    color: 'white',
  },
  container: {
    height: '100%',
    padding: 10,
  },
  button: {
    marginTop: 20,
  },
  keyWordInput: {
    marginTop: 20,
  },
});

export default themedStyles;
