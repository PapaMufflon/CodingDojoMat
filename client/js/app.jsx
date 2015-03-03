var React = require('react');
var Slider = require('react-slick');
var Menu = require('./menu.jsx');

var formats = [
  {
    header: "Randori",
    text: <p>Der Klassiker: es gibt einen Driver, der die Tastatur okkupiert und einen Navigator,
          der Anweisungen gibt. Beide bearbeiten die Kata - am besten über einen Beamer, so dass
          das restliche Team zusehen kann. Nach 5 Minuten wird gewechselt: der Navigator wird der
          Driver, der Driver setzt sich zum restlichen Team; dafür darf ein anderer vom Team nun
          den Navigator spielen. Die 5-Minuten-Schlitze fließen dahin und irgendwann ist die
          Stunde rum oder die Kata gelöst.</p>
  },
  {
    header: "Ping Pong",
    text: <p>Pair Programming gemischt mit Test Driven Development. Und das geht so: Entwickler 1
          schreibt einen Test und gibt die Tastatur Entwickler 2. Dieser versucht mit so wenig code
          wie möglich, den Test zu erfüllen. Danach darf er refaktorisieren. Sieht alles schön aus,
          schreibt Entwickler 2 einen neuen (fehlschlagenden) Test und schiebt die Tastatur wieder
          Entwickler 1 hin. Das Muster ist erkennbar: Entwickler 1 fixt, refaktorisiert und schreibt
          wieder einen kaputten Test und so weiter, bis keiner mehr Lust hat!</p>
  },
  {
    header: "Jeder für sich",
    text: <p>Jeder schnappt sich einen Rechner und legt los. Keine Kompromisse mehr! Kämpfe ums Recht
          sind passé: Du kannst frei aufprogrammieren und Deine Teamkollegen links liegen lassen.
          Damit ein Austausch dennoch gegeben ist, stellt jeder seine Lösung in den letzten 10 Minuten vor.</p>
  },
  {
    header: "Fishbowl",
    text: <p>Für selbstbewusste Teams ist das der richtige Modus: 1 Rechner und einer sitzt davor. Er werkelt so
          lange, bis ihn jemand vom Stuhl schubst, der es besser weiß. So kann das gesamte Team an einer Aufgabe
          arbeiten. Jedoch vorsicht: ruhigere Zeitgenossen oder Anfängern fällt es so schwer mitzuspielen.</p>
  },
  {
    header: "Jerusalem",
    text: <p>Jeder Entwickler sitzt vor seinem Rechner und beginnt die Kata. Nach 5 oder 10 Minuten - je nach
          Erfahrung - werden die Plätze reihum gewechselt (wer mag, kann dazu Musik spielen). Der Charme an diesem
          Modus ist, dass man sich erst in den unbekannten Quelltext einlesen muss, ehe man weitercoden kann.</p>
  }
];

var katas = [
  {
    header: <a href="http://en.wikipedia.org/wiki/Fizz_buzz">FizzBuzz</a>,
    text: <p>Wer kennt es nicht, das alte Trinkspiel. Hier eine auf die Softwareentwicklung angepasste Version:
          Gebe die Zahlen von 1 bis 100 aus.
          Bei allen Zahlen, die durch 3 teilbar sind, soll statt der Zahl "Fizz" ausgegeben werden.
          Bei allen Zahlen, die durch 5 teilbar sind, soll statt der Zahl "Buzz" ausgegeben werden.
          Sind Zahlen durch 3 und durch 5 teilbar, soll "FizzBuzz" ausgegeben werden.
          Wer mag, darf bei jedem fehlschlagenden Test einen Schnaps trinken...</p>
  },
  {
    header: <a href="http://osherove.com/tdd-kata-1/">String-Calculator</a>,
    text: <div><p>Erzeuge einen String-Rechner mit folgenden Anforderungen (für maximalen Spaß der Reihe nach implementieren):</p>
          <li>- gebe die Summe von 0, 1 oder 2 Zahlen, durch Komma getrennt, zurück; z.B. "" = 0, "2" = 2, "4,2" = 6</li>
          <li>- gebe die Summe von beliebig vielen Zahlen zurück; z.B. "1,2,3,4,5,6" = 21</li>
          <li>- Erlaube auch newlines als Trennzeichen; z.B. "1\n2,3" = 6</li>
          <li>- Erlaube beliebige Trennzeichen. Format: "//[delimiter]\n[numbers]"; z.B. "//;\n1;2" = 3</li>
          <p>Weitere Anforderungen findest Du beim Erfinder der Kata, Roy Osherove: <a href="http://osherove.com/tdd-kata-1/">String Calculator</a></p></div>
  },
  {
    header: <a href="http://www.codingdojo.org/cgi-bin/index.pl?KataRomanNumerals">Roman Numerals</a>,
    text: <p>Konvertiere arabische Zahlen (1, 2, 3, usw.) in römische zahlen (I, II, III, usw.).
          Die besonders fiesen Zahlen sind die gedrehten, also IV oder XXXIX.
          Bevor der erste Test geschrieben wird, tut man gut daran, sich in Wikipedia die Regeln anzuschauen.</p>
  },
  {
    header: <a href="http://codingdojo.org/cgi-bin/index.pl/index.pl?KataBankOCR">Bank OCR</a>,
    text: <p>Die Arbeit bei der Bank soll vereinfacht werden: anstatt Kontonummern händisch einzugeben,
          werden sie jetzt per OCR-Software eingescannt. Doch der Entwickler hat sich ein Scherz erlaubt:
          anstatt Ziffern werden Ascii-Zeichen, die Zahlen darstellen, ausgegeben.
          Es wird ein Programm erwartet, welches die Ascii-Zahlen in Integers umwandelt. Jede Zahl ist
          neunstellig, hat 3 Zeilen und jede Zeile besteht aus 27 Zeichen: Pipes |, Underscores _ oder Leerzeichen.
          Beispiel:
<pre>{'    _  _     _  _  _  _  _ \n'}
     {'  | _| _||_||_ |_   ||_||_|\n'}
     {'  ||_  _|  | _||_|  ||_| _|'}</pre>
          Die Scann-Resultate werden in Dateien zu jeweils 500 Kontonummern, durch Leerzeile getrennt, geschrieben.</p>
  },
  {
    header: <a href="http://www.codingdojo.org/cgi-bin/index.pl?KataTennis">Tennis</a>,
    text: <p>Implementiere eine Tennis-Spielstands-Anzeige. Starte mit der Berechnung eines Spiels.
          Nach jedem Punkt eines Spielers soll der Spielstand ausgegeben werden. Z.B. 15-0, dann 30-0,
          dann 30-15, usw. Hast Du das geschafft und hast noch Zeit, berechne auch noch Sätze und
          danach ein gesamtes Match.</p>
  },
  {
    header: <a href="http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata">Bowling</a>,
    text: <p>Für Außenstehende mag die Zählweise beim Bowling wie Magie erscheinen. Lies Dich in
          die einfachen Regeln ein, falls Du solch ein Außenstehender bist, und implementiere eine Bowling-Zähl-Maschine.</p>
  },
  {
    header: <a href="http://codekata.com/kata/kata13-counting-code-lines/">Lines of Code</a>,
    text: <p>Stell Dir vor, Du wirst nach lines of code bezahlt. Schaufle Dein eigenes Grab und schreibe ein Programm,
          welches die lines of code einer Datei in Deiner Programmiersprache zählt. Damit es einfach bleibt, zählt
          jede Zeilen als eine line of code, in der code steht; also Kommentarzeilen und Leerzeilen ausgenommen
          (Kommentar am Ende von code zählt dennoch als line of code).</p>
  },
  {
    header: <a href="http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata">Primfaktoren</a>,
    text: <p>Zerlege eine Zahl in ihre Primfaktoren. Für eine Eingabe von z.B. 45 sollte die
          Ausgabe 3*3*5 sein. Wenn Du magst, kannst Du auch das Blumenduett aus der Oper Lakmé auflegen...</p>
  },
];

var tasks = [
  {
    header: "Verwende eine funktionale Sprache",
    text: <div><p>Mit einer funktionalen Denkweise lassen sich prägnante, intelligente und einfache Lösungen zu komplexen Fragestellungen erreichen.</p>
          <p>In absteigender Reihenfolge - von strikt funktional bis zur Mainstream-Funktionalität - sind nachfolgend populäre funktionale Programmiersprachen
             aufgelistet, die ruhig mehr als einen Versuch wert sind:</p>
          <li><a href="https://www.haskell.org/">Haskell</a></li>
          <li><a href="http://racket-lang.org/">Racket</a></li>
          <li><a href="https://ocaml.org/">OCaml</a></li>
          <li><a href="http://elixir-lang.org/">elixir</a></li>
          <li><a href="http://fsharp.org/">F#</a></li>
          <li><a href="http://clojure.org/">Clojure</a></li>
          <li><a href="http://www.scala-lang.org/">Scala</a></li></div>
  },
  {
    header: "Verwende eine Mainstream-Sprache",
    text: <div><p>Entdecke eine etablierte Sprache neu oder vielleicht sogar zum ersten Mal.
          Bestimmt gibt es die eine oder andere Bibliothek, die Du noch nicht kennst.
          Versuche etwas neues an den abgehangenen Sprachen zu entdecken. Hier ein paar Anregungen:</p>
          <li><a href="http://facebook.github.io/react/index.html">React</a></li>
          <li><a href="http://rx.codeplex.com/">Rx</a></li>
          <li><a href="http://www.w3schools.com/js/">JavaScript</a></li>
          <li><a href="http://php.net/">PHP</a></li>
          <li><a href="https://www.java.com">Java</a></li>
          <li><a href="https://www.ruby-lang.org">Ruby</a></li>
          <li><a href="https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html">Objective-C</a></li></div>
  },
  {
    header: "Verwende eine brandneue Sprache",
    text: <div><p>Neue Sprachen werden nicht ohne Grund entwickelt: meistens wird versucht, etwas noch besser zu machen oder
          etwas komplett Neues zu erfinden. Schaue Dir zum Beispiel eine der nachfolgenden Sprachen an und versuche
          ein schönes Feature zu entdecken, mit dem Du auf der nächsten Konferenz angeben kannst:</p>
          <li><a href="http://elixir-lang.org/">elixir</a></li>
          <li><a href="https://developer.apple.com/swift/">Swift</a></li>
          <li><a href="http://julialang.org/">julia</a></li>
          <li><a href="http://www.rust-lang.org/">Rust</a></li>
          <li><a href="http://kotlinlang.org/docs/">Kotlin</a></li>
          <li><a href="https://golang.org/">Go</a></li></div>
  },
  {
    header: "Verwende eine ganz komische Sprache",
    text: <div><p>Etwas Spaß muss sein!</p>
          <li><a href="http://lolcode.org/">LOLCODE</a></li>
          <li><a href="http://alx2002.free.fr/esoterism/brainfuck/brainfuck_en.html">Brainfuck</a></li>
          <li><a href="http://shakespearelang.sourceforge.net/">Shakespeare</a></li>
          <li><a href="http://compsoc.dur.ac.uk/whitespace/">Whitespace</a></li></div>
  },
  {
    header: "Verwende eine untypische Sprache",
    text: <div><p>Es gibt schon interessante Sprachen da draussen. Hole Dir ein paar Anregungen von einer
          nicht alltäglichen Sprache:</p>
          <li><a href="http://iolanguage.org/">io</a></li>
          <li><a href="http://www.learnprolognow.org/">Prolog</a></li>
          <li><a href="https://coq.inria.fr/">Coq</a></li>
          <li><a href="http://www.r-project.org/">R</a></li>
          <li><a href="http://www.lua.org/">Lua</a></li>
          <li><a href="http://www.forth.com/forth/">Forth</a></li></div>
  },
  {
    header: "Entstöpsle die Maus",
    text: <div><p>Lass Deine Maus rechts liegen und versuche mindestens einen neuen Shortcut zu lernen.
          Die Stärke der Tastatur ist die Geschwindigkeit: wenn Du Deine Ideen schneller eingeben kannst,
          stockt Dein Gedankenfluss seltener und Du kommst öfter in den heißgeliebten Flow.</p>
          <p>Schaue Dir hier einige Shortcuts zu Deinem Editor an:</p>
          <li><a href="https://wiki.eclipse.org/FAQ_What_editor_keyboard_shortcuts_are_available%3F">Eclipse</a></li>
          <li><a href="http://visualstudioshortcuts.com/2015/">Visual Studio</a></li>
          <li><a href="http://vim.wikia.com/wiki/Category:Getting_started">Vim</a></li>
          <li><a href="http://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf">Emacs</a></li>
          <li><a href="https://gist.github.com/eteanga/1736542">Sublime Text</a></li>
          <li><a href="https://bugsnag.com/blog/atom-editor-cheat-sheet">Atom</a></li></div>
  },
  {
    header: "Refaktorisiere penibel",
    text: <p>Der unscheinbare Bruder des grünen Tests, das Refactoring, kommt heute ganz groß raus:
          lege besonders viel Wert darauf, nachdem alle Tests erfolgreich ablaufen, Deinen code aufzuräumen.
          Erst wenn alles blitzt und blinkt darf ein neuer Test geschrieben werden!</p>
  },
  {
    header: "Baby Steps",
    text: <p>Selbst wenn Du ein Schachgroßmeister bist und 30 Züge im Vorraus denken kannst, wird heute
          der Schwerpunkt auf kleine Codeänderungen gelegt. Schreibe nur soviel code, wie nötig ist,
          damit alle Tests grün werden. Im Refactoring-Schritt darfst Du dann aufräumen -
          aber auch wieder mit Baby Steps: nach jeder kleinen Änderung schauen, ob noch alle Tests funktionieren.</p>
  },
  {
    header: "Vim oder Emacs?",
    text: <p>Komme aus Deiner Komfortzone und verwende für die Kata einen anderen Editor.
          Zur Auswahl stehen Evergreens wie <a href="http://www.vim.org/">vim</a> und
          <a href="http://www.gnu.org/software/emacs/">emacs</a> oder teste die new kids on the block
          <a href="http://www.sublimetext.com/">sublime text</a>, <a href="https://atom.io/">atom</a>
          oder <a href="http://brackets.io/">brackets</a>. Bestimmt gibt es noch den einen oder anderen
          ultimativen Editor, der noch nicht genannt wurde. Dann bitte nicht in einen
          flame-war übergehen, sondern einen nach den anderen ausprobieren :)</p>
  },
  {
    header: "Neue Tests braucht das Land",
    text: <div><p>Andere Mütter haben auch schöne Töchter: verwende ein anderes Test-Framework -
    vielleicht hat die Konkurrenz ungeahnte Eleganz? Hier ein paar Anregungen:</p>
    <li><a href="https://code.google.com/p/googletest/">googletest</a></li>
    <li><a href="http://jasmine.github.io/">Jasmine</a></li>
    <li><a href="http://rspec.info/">RSpec</a></li>
    <li><a href="https://github.com/xunit/xunit">xUnit</a></li></div>
  },
  {
    header: "Behavior Driven Development",
    text: <div><p>Behavior Driven Development ist quasi der link zwischen code und Anforderung:
    Akzeptanzkriterien als ausführbare Tests. Versuche statt TDD BDD zu machen. Wenn Du magst,
    kannst Du auch beides vereinen: zuerst mit BDD eine Anforderung definieren, danach diese
    mittels TDD implementieren. Hier einige Frameworks, die Dich auf den richtigen Kurs bringen:</p>
    <li><a href="http://rspec.info/">RSpec</a></li>
    <li><a href="http://jbehave.org/">JBehave</a></li>
    <li><a href="https://cukes.info/">Cucumber</a></li>
    <li><a href="https://github.com/machine/machine.specifications">machine.specifications</a></li>
    <li><a href="http://concordion.org/">Concordion</a></li></div>
  },
  {
    header: "Baue Dir eine Mocking-Aufgabe",
    text: <div><p>Manchmal ist die Welt ganz gemein: sie tut nicht das, was man will. Spiele Pipi
    Langstrumpf und mache Dir die Welt, widewide wie sie Dir gefällt - und zwar mit Inversion
    of Control und einem Mocking Framework Deiner Wahl (falls Deine Sprache so etwas nicht benötigt:
    Glück gehabt!). Bohre die Kata so auf, dass es auch was zum Mocken gibt - zum Beispiel die
    aktuelle Zeit, Benutzerein- oder ausgabe, Kommunikation, Datenbank, etc.</p>
    <p>Hier ein paar Frameworks um Dich auf Trab zu bringen:</p>
    <li><a href="https://github.com/Moq/moq4">moq</a></li>
    <li><a href="https://github.com/mockito/mockito">mockito</a></li>
    <li><a href="http://scalamock.org/">ScalaMock</a></li>
    <li><a href="http://www.voidspace.org.uk/python/mock/">Mock</a></li></div>
  },
  {
    header: "Wechsle das Betriebssystem",
    text: <p>Der moderne Polyglott-Entwickler kann nicht nur mehrere Programmiersprachen fließend
    coden, sondern findet sich auch auf mehreren Betriebssystemen zurecht. Sei es ein Linux für
    den Server oder das IoT device, Windows oder Mac OS für den Desktop, Android oder iOS für das
    Smartphone - wir können alles. Falls nicht, gib Dir nun die Möglichkeit, Deine Wissenslücke zu schließen.</p>
  },
  {
    header: "Flansche eine UI an",
    text: <div><p>Erstelle eine einfache Benutzeroberfläche für die ausgewählte Kata. Entweder in der Technologie,
    in der Du am sichersten bist, oder versuche etwas Neues aus: ein Desktop-Programm, Webapplikation oder
    Smartphone-App. Oder eine andere UI-Technologie. Kennst Du schon:</p>
    <li><a href="http://facebook.github.io/react/">React.js</a></li>
    <li><a href="https://msdn.microsoft.com/en-us/library/aa970268%28v=vs.110%29.aspx">WPF</a></li>
    <li><a href="https://github.com/daveray/seesaw">Seesaw</a></li>
    <p>Wenn Du magst, kannst Du auch Oberflächentests dafür schreiben (für eine 1+ mit Sternchen).</p></div>
  },
  {
    header: "Baue ein Design Pattern ein",
    text: <p>Todo</p>
  },
  {
    header: "Extreme Committing",
    text: <p>Todo</p>
  },
  {
    header: "Zwei Entscheidungswege",
    text: <p>Todo</p>
  },
  {
    header: "Docker",
    text: <p>Todo</p>
  },
  {
    header: "Concurrency",
    text: <p>Todo</p>
  },
  {
    header: "Continuous Integration",
    text: <p>Todo</p>
  },
  {
    header: "Code Golf",
    text: <p>Beim <a href="http://de.wikipedia.org/wiki/Golf_%28Programmierung%29">Code Golf</a>
          gibt es nur ein Ziel: jedesmal, wenn alle Tests grün sind,
          so wenig wie möglich Zeichen Produktivcode zu haben.</p>
  }
];

var Item = React.createClass({
  render: function() {
    return (
      <div className="content">
        <h1>{this.props.header}</h1>
        <div className="description">
          {this.props.text}
        </div>
      </div>
    );
  }
});

var ItemsSlider = React.createClass({
  render: function() {
    var settings = {
      dots: false,
      initialSlide: this.props.initialSlide
    }

    return (
      <div>
        <Slider {...settings}>
        {
          this.props.items.map(function (item) {
            return (
              <div><Item header={item.header} text={item.text} /></div>
            );
          })
        }
        </Slider>
      </div>
    );
  }
});

function shuffle () {
  return {
    format: Math.floor(Math.random() * formats.length),
    kata: Math.floor(Math.random() * katas.length),
    task: Math.floor(Math.random() * tasks.length)
  }
}

var ShuffleButton = React.createClass({
  render: function() {
    return (
      <div className="massive fluid ui button" onClick={this.props.reshuffle}>
        Neu Mischeln
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    var shuffled = shuffle();

    return {
      formatSlide: shuffled.format,
      kataSlide: shuffled.kata,
      taskSlide: shuffled.task
    };
  },
  reshuffle: function () {
    this.setState(this.getInitialState());
  },
  render: function () {
    return (
      <div>
        <Menu active="home"/>

        <a href="https://github.com/PapaMufflon/CodingDojoMat">
          <img className="forkMe"
               src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
               alt="Fork me on GitHub"
               data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png">
          </img>
        </a>

        <div className='container'>
          <div className="ui relaxed divided items">
            <div className="item">
              <div className="ui medium image">
                <div className="ui blue ribbon label">Format</div>
                <i className="massive bordered users icon format" />
              </div>
              <ItemsSlider items={formats} initialSlide={this.state.formatSlide} />
            </div>
            <div className="item">
              <div className="ui medium image">
                <div className="ui blue ribbon label">Kata</div>
                <i className="massive bordered book icon kata" />
              </div>
              <ItemsSlider items={katas} initialSlide={this.state.kataSlide} />
            </div>
            <div className="item">
              <div className="ui medium image">
                <div className="ui blue ribbon label">Aufgabe</div>
                <i className="massive bordered wizard icon task" />
              </div>
              <ItemsSlider items={tasks} initialSlide={this.state.taskSlide} />
            </div>
          </div>
        </div>

        <ShuffleButton reshuffle={this.reshuffle} />
      </div>
    );
  }
});

React.render(<App />, document.body)