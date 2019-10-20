import React, { Component } from "react";

export default class MemeGenerator extends Component {
  constructor() {
    super();

    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data.data.memes);
        this.setState({
          allMemeImgs: data.data.memes
        });
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let index = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const memeUrl = this.state.allMemeImgs[index].url;
    this.setState({ randomImage: memeUrl });
  };

  render() {
    return (
      <div className="container">
        <form className="form-group mt-5" onSubmit={this.handleSubmit}>
          <div className="d-flex">
            <input
              className="form-control"
              type="text"
              name="topText"
              value={this.state.topText}
              placeholder="Top Text"
              onChange={this.handleChange}
            />

            <input
              className="form-control"
              type="text"
              name="bottomText"
              value={this.state.bottomText}
              placeholder="Bottom Text"
              onChange={this.handleChange}
            />
            <button className="btn btn-primary">Gen</button>
          </div>
        </form>
        <div
          className="d-flex box"
          style={{
            width: "100%",
            position: "relative",
            display: "inline-block"
          }}
        >
          <img
            style={{ width: "100%", height: "700px" }}
            src={this.state.randomImage}
            alt=""
          />
          <div className="top-text">
            <h2>{this.state.topText}</h2>
          </div>
          <div className="bottom-text">
            <h2>{this.state.bottomText}</h2>
          </div>
        </div>
      </div>
    );
  }
}
