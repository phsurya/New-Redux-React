import React , {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return(
        <li
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'
          key={book.title} >

          Title is : {book.title}

        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <ul className = "list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}


function mapStateToProps({books}){
  return{ books};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
