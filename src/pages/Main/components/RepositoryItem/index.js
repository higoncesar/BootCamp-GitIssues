import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository, navigation: { navigate }, destroyRepository }) => (
  <TouchableOpacity
    style={styles.container}
    onLongPress={() => {
      destroyRepository(repository.id);
    }}
  >
    <View style={styles.content}>
      <Image style={styles.avatar} source={{ uri: repository.organization.avatar_url }} />
      <View style={styles.info}>
        <Text style={styles.name}>{repository.name}</Text>
        <Text style={styles.organization}>{repository.organization.login}</Text>
      </View>
    </View>

    <TouchableOpacity
      onPress={() => {
        navigate('IssuesScreen', repository);
      }}
    >
      <Icon name="chevron-right" size={20} style={styles.icon} />
    </TouchableOpacity>
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,

  destroyRepository: PropTypes.func.isRequired,

  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    organization: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

export default withNavigation(RepositoryItem);
