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

    renderGameItem = ({ item }) => {
      return <Game item={item}/>
    };
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.gamesError) {
        this.setState({
          errors: true
        });
        return;
      }
      
      this.setState({
        games: [...nextProps.games]
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
                keyExtractor={(item) => (item._id + '')}
                renderItem={this.renderGameItem}
              />
            </View>
          </TabsWrapper>
      );
    }
  }
  
export default GamesComponent;
