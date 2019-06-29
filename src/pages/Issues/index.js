import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, FlatList, ActivityIndicator,
} from 'react-native';
import api from '~/services/api';

import styles from './styles';

import IssueItem from './components/IssueItem';
import Filter from './components/Filter';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  state = {
    issues: [],
    refreshing: false,
    activeFilter: 'all',
    error: null,
    loading: true,
  };

  componentDidMount = () => {
    this.fecthIssues();
  };

  fecthIssues = async () => {
    this.setState({ refreshing: true, loading: true });

    const { navigation } = this.props;
    const { activeFilter } = this.state;

    try {
      const { data } = await api.get(
        `/repositories/${navigation.state.params.id}/issues?state=${activeFilter}`,
      );
      this.setState({ issues: data, error: null });
    } catch (error) {
      this.setState({ error: 'Erro ao carregar as Issues' });
    } finally {
      this.setState({ refreshing: false, loading: false });
    }
  };

  renderIssues = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { issues, refreshing } = this.state;
    return !issues.length ? (
      <Text style={styles.empty}>Não foi encontrado nem uma Issue</Text>
    ) : (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderIssues}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        refreshing={refreshing}
        onRefresh={this.fecthIssues}
      />
    );
  };

  changeFilter = async (filter) => {
    this.setState({ activeFilter: filter, loading: true });

    const { navigation } = this.props;

    try {
      const { data } = await api.get(
        `/repositories/${navigation.state.params.id}/issues?state=${filter}`,
      );
      this.setState({ issues: data, error: null });
    } catch (error) {
      this.setState({ error: 'Erro ao carregar as Issues' });
    } finally {
      this.setState({ refreshing: false, loading: false });
    }
  };

  render() {
    const { loading, error, activeFilter } = this.state;
    return (
      <View style={styles.container}>
        <Filter activeFilter={activeFilter} changeFilter={this.changeFilter} />

        {error && <Text style={styles.error}>{error}</Text>}

        {loading ? (
          <ActivityIndicator style={styles.loading} size="large" color="#000" />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
