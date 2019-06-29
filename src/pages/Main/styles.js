import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLighter,
  },

  form: {
    backgroundColor: colors.transparet,
    alignItems: 'stretch',
    marginHorizontal: metrics.baseMargin * 2,
    paddingVertical: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyDark,
  },

  formContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    justifyContent: 'center',
    fontSize: 14,
    width: metrics.screenWidth - metrics.baseMargin * 8,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },

  icon: {
    fontWeight: 'bold',
    color: colors.black,
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
    marginTop: metrics.baseMargin,
  },
});

export default styles;
