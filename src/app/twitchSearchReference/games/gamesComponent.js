import React, { PureComponent } from 'react';
import TabsWrapper from '../wrapper';
import HOC from '../HOC';
import { View, Text, FlatList, Image } from 'react-native';
import Game from './game';
import homeStyles from '../../../styles/home';

class GamesComponent extends PureComponent {

    constructor (props) {
      super(props);
      this.state = {
        games: []
      }
    }

    renderGameItem = ({ item }) => {
      return <Game item={item}/>
    };
  
    componentWillReceiveProps(nextProps) {
      this.setState({
        games: [...nextProps.games]
      });
    }

    render () {
      const { games } = this.state;
      const { getGamesStart, gamesError, errors, hideAlert, submitSearchHandler } = this.props;
      return (
          <TabsWrapper
            errors={errors} 
            isVisible={getGamesStart} 
            alertTitle='Search For Games Error'
            errorMsg={gamesError}
            searchTitle='Search For Games'
            submitSearchHandler={submitSearchHandler}
            hideAlert={hideAlert}
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

export default HOC(GamesComponent, { type: 'games' });
