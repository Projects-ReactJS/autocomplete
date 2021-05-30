import React from "react";
import DataList from "./DataList";
import "./list.css";
import "./common.css";
class List extends React.Component {
   
  
	render() {

       let myclass="list-inactive";
        if(this.props.isVisible){
            myclass="";
            myclass += 'list-active';
        }
        

        
		return (
        
            <ul  className={myclass}>
              <DataList cursor={this.props.cursor} searchTerm={this.props.searchTerm} getdata={this.props.getdata} keydown={this.props.keydown} onclicklistitem={this.props.onclicklistitem}></DataList>
            </ul>
        
		);
	}
}

export default List;


