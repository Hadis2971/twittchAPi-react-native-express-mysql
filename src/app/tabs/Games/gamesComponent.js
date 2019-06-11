import React, { PureComponent } from 'react';
import TabsWrapper from '../wrapper';
import { View, Text, FlatList, Image } from 'react-native';
import Game from './game';
import homeStyles from '../../../styles/home';

class GamesComponent extends PureComponent {

    constructor (props) {
      super(props);
      this.state = {
        games: [],
        errors: false
      }
    }
  
    createGamesList = (games) => {
      return games.map((game) => {
        return <Game 
          key={game._id}
          src={game.logo.small}
          name={game.name}
          popularity={game.popularity}
        />
      });
    }
  
    componentDidMount() {
      this.setState({
        games: [],
        errors: false
      });
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.gamesError) {
        this.setState({
          errors: true
        });
        return;
      }
      const gamesList = this.createGamesList(nextProps.games);
      this.setState({
        games: [...gamesList]
      });
    }

    hideAlert = () => {
      this.setState({
        errors: false
      });
    };
   
    submitSearchHandler = async ({ searchTerm }) => {
      const { getGames } = this.props.actions;
      if (!searchTerm) return;
      const path = `games?query=${searchTerm}`;
      await getGames(path);
    }
  
    render () {
      const { games, errors } = this.state;
      const { getGamesStart, gamesError } = this.props;
      return (
          <TabsWrapper
            errors={errors} 
            isVisible={getGamesStart} 
            alertTitle='Search For Games Error'
            errorMsg={gamesError}
            searchTitle='Search For Games'
            submitSearchHandler={this.submitSearchHandler}
            hideAlert={this.hideAlert}
          >
            <View style={homeStyles.resultsContainer}>
              <FlatList
                data={games}
                renderItem={({item}) => (
                  <View style={homeStyles.infoContainer}>
                    <Image source={{ uri: item.props.src }} style={{ width: 75, height: 75 }} />
                    <Text style={homeStyles.text}>{`Game: ${item.props.name} Popularity: ${item.props.popularity}`}</Text>
                  </View>
                )}
              />
            </View>
          </TabsWrapper>
      );
    }
  }
  
export default GamesComponent;
