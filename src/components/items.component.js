import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ItemList  from './itemlist.component.js';
import auth from '../auth';

class Items extends Component {
  componentDidMount() {
    if (auth.isAuthenticated()) {
     // this.props.getUser();
      this.props.getUserItems();
    }}
  itemList = () => this.props.items.items.map(i => <ItemList item={i} key={i.id}/>)
  render() {
  return (
    <ol>
       {this.itemList().length > 0 ? this.itemList() : null}
    </ol>
  )
  }
}      

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(Items);