var React = require('react');
var Menu = require('./menu.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Menu active="codingdojo"/>
        <div className='container'>
          <h1>Coding Dojo</h1>
          <p>Ein Coding Dojo ist ein wiederkehrendes Teamevent, das den <b>Zusammenhalt</b> und die <b>Kommunikation</b> untereinander stärkt.
          Dadurch bildet sich zum Beispiel ganz von alleine ein einheitlicher coding style aus. Ebenso wird das <b>Fachwissen</b> im
          Allgemeinen und <b>Test Driven Development</b> im Besonderen gefördert.</p>
          <p>Erfahrungsgemäß ist ein Serientermin einmal pro Woche mit einer Dauer von einer Stunde am idealsten.</p>
          <h2>Ablauf</h2>
          <div className="ui list">
            <div className="item">
              <i className="huge circular options icon" />
              <div className="content">
                <div className="header">Auswählen</div>
                <div className="description">
                  <p>Zuerst wird festgelegt, was gemacht wird. Es wird sich für ein <b>Format</b>, eine <b>Kata</b> und eine <b>Aufgabe</b> entschieden.
                  Die Profi-Variante ist per Zufall mit dem <b>CodingDojoMat</b>. Nicht so Wagemutige können natürlich auch durchblättern
                  und ihr Lieblingsthema auswählen. Wurde die Kata beim letzten Mal nicht gelöst, kann dort auch einfach weitergecoded
                  werden. Oder es wird zu den gleichen Konditionen wieder von vorne angefangen - damit das Muscle Memory gefüttert wird.</p>
                  <p>Anfänger sollten als Format Randori oder PingPong wählen, irgendeine Kata und erstmal keine zusätzliche Aufgabe.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <i className="huge circular idea icon" />
              <div className="content">
                <div className="header">Verstehen</div>
                <div className="description">In den ersten <b>5-10 Minuten</b> wird die Kata und Aufgabe gelesen. Am besten ist es, wenn sie im Team
                besprochen wird. Ein <b>Whiteboard</b> oder Blatt Papier mit ein paar Stiften, um den <b>Masterplan</b> aufzumalen, runden das Vorgeplänkel ab.</div>
              </div>
            </div>
            <div className="item">
              <i className="huge circular code icon" />
              <div className="content">
                <div className="header">Ausführen</div>
                <div className="description">In den nächsten <b>45 Minuten</b> wird die Kata nun im ausgewählten Format unter Berücksichtigung der
                gestellten Aufgabe bearbeitet. Es geht nicht darum, die Kata wirklich in der Dreiviertelstunde zu lösen. Das die meisten Entwickler
                die leichten Problemstellungen lösen können, ist klar - niemand muss hier etwas beweisen. Sie sollte eher als Beiwerk angesehen werden,
                das das <b>Üben</b> von Test Driven Development oder der gestellten Aufgabe versüßt. <b>Der Weg ist das Ziel</b>.</div>
              </div>
            </div>
            <div className="item">
              <i className="huge circular comments icon" />
              <div className="content">
                <div className="header">Reflektieren</div>
                <div className="description">Die letzten <b>5-10 Minuten</b> sind für eine kleine <b>Retrospektive</b> reserviert. Was lief gut,
                was kann verbessert werden. Soll beim nächsten Mal etwas anderes bearbeitet werden oder gibt es beim jetzigen Setup noch
                Verbesserungspotential? Ein kontinuierlicher Verbesserungsprozess tut auch dem Coding Dojo gut!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.body)