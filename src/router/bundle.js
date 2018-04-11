import React, {Component} from 'react';

class Bundle extends Component {
  state = {
    // module的缩写
    mod: null
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceviceProps(nextProps) {
    if(nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.props.children(this.state.mod);
  }
}

export default Bundle;