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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    padding: 10,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  list: {
    marginBottom: 10,
  },
});

export default themedStyles;
