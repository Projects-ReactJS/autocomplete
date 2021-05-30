import React from 'react';
import './Autocomplete.css';
import List from './list';

class Autocomplete extends React.Component {
	constructor(props) {
		super(props);
		this.onkeypress = this.onkeypress.bind(this);
        this.onkeyDownPress = this.onkeyDownPress.bind(this);
        this.onclicklistitem = this.onclicklistitem.bind(this);
        this.state = {
            isVisible: false,
            searchTerm:"",
            cursor: 0

          }
	}
	onkeypress(evt) {
        
        let fielddata = evt.nativeEvent.srcElement.value;
        let currentinpdata= evt.nativeEvent.data;

            this.setState({
                isVisible:true,
                searchTerm:fielddata
            })

            if(!currentinpdata && fielddata){
                this.setState({
                    isVisible:true
                })   
            }
            else if (!currentinpdata && !fielddata)
            {
                this.setState({
                    isVisible:false
                })  
            }	
	}

    onkeyDownPress(evt){
        var { cursor } = this.state;
var result = evt.nativeEvent.path[1].children[1].children;
     if (evt.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    }else if (evt.keyCode === 40 && cursor < result.length - 1) {
        this.setState( prevState => ({
          cursor: prevState.cursor + 1
        }))
      }

    }
    onclicklistitem(evt){
      
        this.setState({
            searchTerm:evt.target.innerHTML,
            isVisible:false
        })

    }

	render() {
		return (
			<div className="autocomplete">
				<input className="arrangement" type="text" name="search" value={this.state.searchTerm} onInput={this.onkeypress} onKeyDown={this.onkeyDownPress}></input>
				<List isVisible={this.state.isVisible} searchTerm={this.state.searchTerm} onclicklistitem={this.onclicklistitem}
                cursor={this.state.cursor} 
                getdata={this.props.getdata}></List>
			</div>
		);
	}
}

export default Autocomplete;
