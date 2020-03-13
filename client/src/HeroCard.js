import React, { Component } from "react";
import axios from "axios";

class HeroCard extends Component {
  state = {
    posts: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    axios
      .get("/punk")
      .then(res => {
        const posts = res.data.map(obj => obj);
        //console.log("data: ", posts);
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }
  ReadMore() {
    alert("chillax dude, what is worth having is worth waiting for");
  }
  renderPosts() {
    if (this.state.error) {
      return this.renderError();
    }
    return (
      <div className="row columns is-multiline">
        {this.state.posts.map((post, index) => (
          <div className="column is-one-third #fff" key={index}>
            <div className="card small">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={post.image_url} alt="pics" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4 no-padding">{post.name}</p>
                    <p>
                      <span className="title is-6">
                        <a>{post.name}</a>
                      </span>
                    </p>
                    <p className="subtitle is-6">{post.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

export default HeroCard;
