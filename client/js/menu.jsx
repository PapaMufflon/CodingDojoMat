var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="ui inverted menu">
        <a href="index.html" className={this.props.active == "home" ? "active item" : "item"}>
          <i className="home icon"></i> CodingDojoMat
        </a>
        <a href="codingdojo.html" className={this.props.active == "codingdojo" ? "active item" : "item"}>
          <i className="question icon"></i> Coding Dojo
        </a>
        <a href="about.html" className={this.props.active == "about" ? "active item" : "item"}>
          <i className="info icon"></i> Über CodingDojoMat
        </a>
      </div>
    );
  }
});