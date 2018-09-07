import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { getDiagram } from './charts';

const styleSheet = theme => ({
  canvas: {
    minWidth: 300,
  },
});

class Diagram extends React.Component {
  static propTypes = {
    members: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.chart = null;
  }

  render() {
    const { classes } = this.props;

    return (
      <canvas
        ref={canvas => {
          this.canvas = canvas;
        }}
        width="4"
        height="3"
        className={classes.canvas}
      />
    );
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');

    const { members, diagramName, yLabel, reverseY } = this.props;

    const datasets = members.map(member => member[diagramName]);
    this.chart = getDiagram(this.ctx, datasets, yLabel, reverseY);
  }

  componentWillUpdate(nextProps) {
    if (this.chart) {
      this.chart.destroy();
    }

    const { members, diagramName, yLabel, reverseY } = nextProps;

    const datasets = members.map(member => member[diagramName]);
    this.chart = getDiagram(this.ctx, datasets, yLabel, reverseY);
    this.chart.update();
  }
}

export default withStyles(styleSheet)(Diagram);
