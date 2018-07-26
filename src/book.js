import React, { Component } from 'react';

class Book extends Component {
	// constructor(props) {
	//     super(props);
	//     this.selectShelf = this.selectShelf.bind(this);
	//   }

	render() {
		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ this.props.res.imageLinks.smallThumbnail +')' }}></div>
                <div className="book-shelf-changer">
                  <select onChange={(e, r) => this.props.selectShelf(e.target.value, this.props.bookItem)}>
                    <option value="none">Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.res.title}</div>
              <div className="book-authors">{this.props.res.authors}</div>
            </div>
		);
	}
}

export default Book;

