import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth,
    height: 60,
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.greyDarker,
  },
});

export default styles;
