import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '~/services/api';

import styles from './styles';

import RepositoryItem from './components/RepositoryItem';

export default class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    repositoryInput: '',
    repositories: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const repositories = JSON.parse(await AsyncStorage.getItem('Gitissues:repositories'));
    if (repositories) {
      this.setState({ repositories });
    }
  };

  storageRepositories = async () => {
    const { repositories } = this.state;
    await AsyncStorage.setItem('Gitissues:repositories', JSON.stringify(repositories));
  };

  addRepository = async () => {
    const { repositoryInput, repositories } = this.state;

    if (!repositoryInput) {
      this.setState({ error: 'Preencha o repositório para continuar', loading: false });
      return;
    }

    if (repositories.find(repository => repository.full_name === repositoryInput)) {
      this.setState({ error: 'Este repositório já esta cadastrado', loading: false });
      return;
    }

    try {
      this.setState({ loading: true });
      const { data } = await api.get(`/repos/${repositoryInput}`);

      this.setState({ repositories: [...repositories, data], error: null });
      this.storageRepositories();
      this.setState({ repositoryInput: '', error: null });
    } catch (e) {
      this.setState({ error: 'Usuário ou Repositório inexistente' });
    } finally {
      this.setState({ loading: false });
    }
  };

  destroyRepository = (id) => {
    const { repositories } = this.state;
    const filtered = repositories.filter(repository => repository.id !== id);
    this.setState({ repositories: filtered });
    this.storageRepositories();
  };

  renderRepository = ({ item }) => (
    <RepositoryItem repository={item} destroyRepository={this.destroyRepository} />
  );

  renderList = () => {
    const { repositories } = this.state;
    return !repositories.length ? (
      <Text style={styles.empty}>Nem um repositório cadastrado</Text>
    ) : (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderRepository}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
      />
    );
  };

  render() {
    const { repositoryInput, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.formContent}>
            <TextInput
              style={styles.input}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              autoCorrect={false}
              autoCapitalize="none"
              value={repositoryInput}
              onChangeText={text => this.setState({ repositoryInput: text })}
              onPress={this.addRepository}
            />
            <TouchableOpacity onPress={this.addRepository}>
              {loading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <Icon name="plus" size={20} style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>

        {this.renderList()}
      </View>
    );
  }
}
