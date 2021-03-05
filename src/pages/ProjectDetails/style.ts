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
  layout: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    height: '100%',
    padding: 10,
    flex: 1,
    //  justifyContent: 'center',
  },
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
  projectImage: {
    width: 400,
    height: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    marginTop: 5,
  },
  linksButton: {
    marginRight: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#1a1a1a',
  },
});

export default themedStyles;
