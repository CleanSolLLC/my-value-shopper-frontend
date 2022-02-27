import React, { Component } from "react";
import { connect } from "react-redux";
import Items from "./Items"

class ItemsComponent extends Component {
  
  render() {
    const renderItems = () => {    
      if (this.props.items) {
          return this.props.items.map((item) => <Items key={item.id} item={item} /> )
      } else {
        <Items item={null} /> 
      }
    }

    return (
        <div>
            {renderItems()}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state.user.user.items)
  return {
    items: state.user.user.items
  }
}
export default connect(mapStateToProps)(ItemsComponent);