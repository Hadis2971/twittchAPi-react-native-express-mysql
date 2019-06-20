import React, { PureComponent } from 'react';

const HOC = (Componet, { ...props }) => {
  return class extends PureComponent {
    constructor (props) {
      super(props);
      this.state = {
        errors: false
      };
    }

    componentWillReceiveProps (nextProps) {
      if (nextProps.streamsErrors || nextProps.gamesError || nextProps.channelsError) {
        this.setState({
        errors: true
      });
      }
    }
    
    submitSearchHandler = async ({ searchTerm }) => {
        const { type } = props;
        switch (type) {
            case 'streams': {
                const { getStreams } = this.props.actions;
                const path = `streams?query=${searchTerm}`;
                await getStreams(path);
                break;
            };
            case 'games': {
                const { getGames } = this.props.actions;
                const path = `games?query=${searchTerm}`;
                await getGames(path);
                break;
            };
            case 'channels': {
                const { getChannels } = this.props.actions;
                const path = `channels?query=${searchTerm}`;
                await getChannels(path);
                break;
            };
        }
    };

    hideAlert = () => {
      this.setState({
        errors: false
      });
    };

    render () {
      const { errors } = this.state;
      return (
        <Componet 
          errors={errors} 
          hideAlert={this.hideAlert}
          submitSearchHandler={this.submitSearchHandler}
          {...this.props}/>
      );
    }
  };
};

export default HOC;
