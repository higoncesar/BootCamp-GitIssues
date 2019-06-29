import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';

import styles from './styles';

const openIssue = (url) => {
  Linking.openURL(url);
};

const IssueItem = ({ issue }) => (
  <TouchableOpacity
    onPress={() => {
      openIssue(issue.html_url);
    }}
  >
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {issue.title}
        </Text>
        <Text style={styles.author}>{issue.user.login}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    html_url: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default IssueItem;
