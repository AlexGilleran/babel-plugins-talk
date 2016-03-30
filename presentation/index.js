// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "../spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  markdown: require("../assets/markdown.png"),
  netscape: require("../assets/ns404.png"),
  jsmin: require("../assets/jsmin.png"),
  gwt: require("../assets/gwt.png"),
  coffeescript: require("../assets/coffeescript.png"),
  grunt: require("../assets/grunt.png"),
  jsx: require("../assets/jsx.png"),
  babel: require("../assets/babel.png"),
  now: require("../assets/now.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#311B92",
  secondary: "#FFFFFF",
  tertiary: "#5C6BC0",
  quartenary: "#FFEB3B"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="pacman">

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
              Control Statements
            </Heading>
            <Heading size={1} fit caps textColor="secondary">
              And Other React Impossibilities
            </Heading>
            <Heading size={1} fit caps textColor="quartenary">
              With Babel Plugins
            </Heading>
            <Text textSize="1.5em" style={{marginTop: '20px'}} bold textColor="quartenary">Alex Gilleran</Text>
          </Slide>

          <Slide bgColor="#primary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading fit caps textColor="secondary">
              The Journey So Far
            </Heading>
          </Slide>

          <Slide bgImage={images.jsmin} bgDarken={0.9}>
            <Heading textColor="secondary">2001</Heading>
            <Text textColor="quartenary">Douglas Crockford's JSMin introduces minification</Text>
          </Slide>

          <Slide bgImage={images.gwt} bgDarken={0.9}
                 notes="http://google-web-toolkit-doc-1-5.googlecode.com/files/diagram.png">
            <Heading textColor="secondary">2006</Heading>
            <Text textColor="quartenary">GWT pioneers compiling other languages to JS</Text>

          </Slide>

          <Slide bgImage={images.coffeescript} bgDarken={0.9}>
            <Heading textColor="secondary">2009</Heading>
            <Text textColor="quartenary">Coffeescript popularises transpiling from a nicer JS</Text>
          </Slide>

          <Slide bgImage={images.grunt} bgDarken={0.9}>
            <Heading textColor="secondary">2011</Heading>
            <Text textColor="quartenary">Grunt makes having a front-end build process mainstream</Text>
          </Slide>

          <Slide bgImage={images.jsx} bgDarken={0.9}>
            <Heading textColor="secondary">2013</Heading>
            <Text textColor="quartenary">JSX forces transpilation on all of us</Text>
          </Slide>

          <Slide bgImage={images.babel} bgDarken={0.9}>
            <Heading textColor="secondary">2015</Heading>
            <Text textColor="quartenary">6to5 becomes Babel, a general Javascript transpiler</Text>
          </Slide>

          <Slide bgImage={images.now} bgDarken={0.9}>
            <Heading lineHeight={1.5} textColor="secondary">Now</Heading>
            <Appear>
              <Text lineHeight={1.5} textColor="quartenary">Babel is ubiquitous.</Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5} textColor="quartenary">Plugin support is great.</Text>
            </Appear>
            <Appear>
              <Text lineHeight={1.5} textColor="quartenary">The documentation is (finally) there.</Text>
            </Appear>
          </Slide>

          <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading fit caps textColor="secondary">
              So what can we do with it?
            </Heading>
          </Slide>

          <Slide>
            <Heading textColor="secondary" margin="0 0 30px 0">Transpile ES6 (duh)</Heading>
            <CodePane style={{overflow: 'hidden'}} source={require('raw!../examples/es6.txt')} lang="js"/>
            <CodePane style={{overflow: 'hidden', marginTop: '10px'}} source={require('raw!../examples/es6-converted.txt')} lang="js"/>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Transform JSX (duh)</Heading>
          </Slide>

          <Slide>
            <Heading textColor="secondary">Transform JSX (duh)</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
