import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLighter,
  },

  textFilter: {
    color: colors.greyDarker,
    fontWeight: 'bold',
  },

  loading: {
    marginTop: metrics.baseMargin,
  },
  empty: {
    color: colors.greyDarker,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  error: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
