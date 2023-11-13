import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://ares.shiftdelete.net/2023/10/tesla-model-y-istanbul-yangin-KAPAK.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex : '1'}} >{source}</span>
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-footer">
              <small className="text-muted">Last updated {date} mins ago by {author}</small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
