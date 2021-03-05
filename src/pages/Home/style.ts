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
  container: {},
  mainTextView: {
    position: 'absolute',

    padding: 10,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  mainText: {
    fontSize: 25,
    color: 'white',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
});

export default themedStyles;
