import React from 'react';
import "./list.css";

class DataList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pagedata: {},
		};
		this.data = '';
		this.getdata = this.getdata.bind(this);
	}

	getdata(prop) {
		let url = 'http://localhost:4001/search?term=' + prop.searchTerm;
		prop.getdata(url).then((response) => {
			this.setState(() => ({
				pagedata: response,
			}));
		});
	}

	componentDidUpdate(prevProps) {
		
		if (this.props.searchTerm !== prevProps.searchTerm) {
			this.getdata(this.props);
		}
	}

	render() {
		if (this.state.pagedata[0]) {
			const { pagedata } = this.state;
                        const {cursor} = this.props;
			return pagedata.map((item, index) => {
                                let classnam = null;
                                if(cursor === index){
                                        classnam = 'item-active';
                                }
				return <li className= {classnam} onClick={this.props.onclicklistitem}>{item.pagename}</li>;
			});
		}
		return <div></div>;
	}
}

export default DataList;
