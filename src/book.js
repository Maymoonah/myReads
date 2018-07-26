import React, { Component } from 'react';

class Book extends Component {
	render() {
		const { res, bookItem, selectShelf } = this.props;
		return (
			<li key={res.id}>
				<div className="book">
	              <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ res.imageLinks.smallThumbnail +')' }}></div>
	                <div className="book-shelf-changer">
	                  <select onChange={(e, r) => selectShelf(e.target.value, bookItem)}>
	                    <option value="none">Move to...</option>
	                    <option value="currentlyReading">Currently Reading</option>
	                    <option value="wantToRead">Want to Read</option>
	                    <option value="read">Read</option>
	                    <option value="none">None</option>
	                  </select>
	                </div>
	              </div>
	              <div className="book-title">{res.title}</div>
	              <div className="book-authors">{res.authors}</div>
	            </div>
            </li>
		);
	}
}

export default Book;

