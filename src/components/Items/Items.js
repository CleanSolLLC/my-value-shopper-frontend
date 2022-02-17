import React, { Component } from "react";
import { connect } from "react-redux";
//import  ItemList  from "../itemlist.component.js";
import auth from "../../auth";
import { getUser} from '../../actions/login';



class Items extends Component {
  componentDidMount() {
    if (auth.isAuthenticated()) {
      this.props.getUser();
      //this.props.getUserItems();
      //<Redirect to = '/items' />
    }
  }
  // itemList = () => {
  //   console.log(this.props.user.items.map(i => <ItemList item={i} key={i.id}/>))
  // }
  render() {
  return (
    <ol>
      {/* {this.itemList().length > 0 ? this.itemList() : null} */}
    </ol>
  )
  }
}      

// const mapStateToProps = (...args) => {
//   console.log(args[0].user.username)
//   // return {
//   //   items: state.items,
//   // }
// }

const mapDispatchToProps = {
  getUser,
}

export default connect(null, mapDispatchToProps)(Items);