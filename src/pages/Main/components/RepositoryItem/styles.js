import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
  },

  info: {
    marginLeft: metrics.baseMargin,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.greyDarker,
  },

  organization: {
    color: colors.greyLight,
  },
});

export default styles;
