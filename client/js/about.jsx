var React = require('react');
var Menu = require('./menu.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Menu active="about"/>
        <div className='container'>
          <h1>Über CodingDojoMat</h1>
          <div>Der CodingDojoMat wurde gebaut, weil:</div>
          <div className="ui list">
            <div className="item">
              <i className="big circular heartbeat icon" />
              <div className="content">
                <div className="description">
                  <p>ich schon seit Jahren vom Coding Dojo als ein Teamwerkzeug überzeugt bin</p>
                </div>
              </div>
            </div>
            <div className="item">
              <i className="big circular checkmark icon" />
              <div className="content">
                <div className="description">
                  <p>es mehrere Leute, Teams und user groups gibt, die genauso denken</p>
                </div>
              </div>
            </div>
            <div className="item">
              <i className="big circular gift icon" />
              <div className="content">
                <div className="description">
                  <p>ich mein aktuelles Team viel zu schnell verlassen muss (betrachtet den CodingDojoMat als billiges Abschiedsgeschenk)</p>
                </div>
              </div>
            </div>
            <div className="item">
              <i className="big circular facebook icon" />
              <div className="content">
                <div className="description">
                  <p>React.js ausprobiert werden wollte</p>
                </div>
              </div>
            </div>
            <div className="item">
              <i className="big circular fork icon" />
              <div className="content">
                <div className="description">
                  <p>mir der <a href="http://plans-for-retrospectives.com/">Retromat</a> sehr gefällt (und wenn man so will der CodingDojoMat eine profane Kopie ist)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.body)