import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },

  info: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    marginLeft: metrics.baseMargin,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.greyDarker,
  },

  author: {
    color: colors.greyLight,
  },
});

export default styles;
