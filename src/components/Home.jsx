import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/**
 * 
 * @param {*} theme 
 * 
 */

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
/**
 * 
 * @param {*} store 
 */
const mapStateToProps = store => ({
  urls: store.home.urls,
  index: store.home.index,
  plusDisable: store.home.plusDisable,
  negativeDisable: store.home.negativeDisable
});

/**
 * 
 * @param {*} dispatch 
 */

const mapDispatchToProps = dispatch => ({
  fetchcats: () => dispatch(actions.fetchCats()),
  increment: () => dispatch(actions.incrementIndex()),
  decrement: () => dispatch(actions.decrementIndex()),
});


class Home extends React.Component {
  componentDidMount() {
    this.props.fetchcats()
  }

  render() {
    const {classes} = this.props;
    const postItems = this.props.urls.map((item, i) =>
      <div key={i}>
        <img src={item.images.fixed_height.url} alt="" />
      </div>
    )
    const activeItem = postItems[this.props.index];

    return (
      <div className='flex-container' >
        {postItems.length >= 1 ? (
          <div className='images-box'>
            {activeItem}
            <div className='buttons'>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={this.props.increment}
                disabled={this.props.plusDisable}
              > + </Button>

              <Button 
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={this.props.decrement} 
                disabled={this.props.negativeDisable}
              > - </Button>
            </div>
          </div>
        ) : (
            <div>
              <h1>Loading...</h1>
            </div>
          )}
      </div>
    )
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withStyles(styles)(Home);