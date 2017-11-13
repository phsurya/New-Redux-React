import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class BookDetail extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    render() {
      if (!this.props.activeBook){
        return(<div> Please select a book to get started </div>);
      }
        return (
            <div>
              <h3>
              Selected Book Details:
              </h3>

              Title: {this.props.activeBook.title} <br/>
              Pages: {this.props.activeBook.pages}
            </div>
        );
    }
}

function mapStateToProps({activeBook}){
    return {activeBook};
}



export default connect (mapStateToProps)(BookDetail);
