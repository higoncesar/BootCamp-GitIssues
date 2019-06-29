import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyLight,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    marginBottom: metrics.basePadding / 2,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
    padding: metrics.basePadding / 2,
  },

  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },

  buttonText: {
    color: colors.greyDark,
    fontSize: 14,
  },

  activeFilter: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;
