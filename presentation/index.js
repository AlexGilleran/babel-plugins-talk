// Import React
import React from "react";

import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';

import 'font-awesome/css/font-awesome.css';
require('../index.css');
require('prismjs/themes/prism-tomorrow.css');

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Fit,
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

import CodeSlide from '../spectacle-code-slide/lib';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

import Helmet from 'react-helmet';

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
    now: require("../assets/now.jpg"),
    visualizer: require("../assets/transform-render-visualizer.gif"),
    hotReload: require("../assets/hot-reload.gif"),
    onErrorResumeNext: require("../assets/on-error.png"),
    esTree: require("../assets/estree.png"),
    cats: require("../assets/cats.gif"),
    deeper: require("../assets/deeper.jpg"),
    error: require("../assets/error.png")
};

preloader(images);

const theme = createTheme({
    primary: "#311B92",
    secondary: "#FFFFFF",
    tertiary: "#5C6BC0",
    quartenary: "#FFEB3B"
});

export default class Presentation extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

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
                        <Text textSize="1.5em" style={{marginTop: '20px'}} bold textColor="quartenary">Alex
                            Gilleran</Text>
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
                        <Heading lineHeight={1.5} caps textColor="secondary">Now</Heading>
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
                            But what can we do with it?
                        </Heading>
                    </Slide>

                    <Slide>
                        <Heading textColor="secondary" fit caps margin="0 0 15px 0">Transpile ES6 (duh)</Heading>
                        <CodePane style={{overflow: 'hidden'}} source={require('raw!../examples/es6.txt')} lang="js"/>
                        <CodePane style={{overflow: 'hidden', marginTop: '10px'}}
                                  source={require('raw!../examples/es6-converted.txt')} lang="js"/>
                    </Slide>

                    <Slide>
                        <Heading textColor="secondary" fit caps margin="0 0 15px 0">Transform JSX (more duh)</Heading>
                        <CodePane style={{overflow: 'hidden'}} source={require('raw!../examples/jsx.txt')} lang="jsx"/>
                        <CodePane style={{overflow: 'hidden', marginTop: '10px'}}
                                  source={require('raw!../examples/jsx-converted.txt')} lang="js"/>
                    </Slide>

                    <Slide>
                        <Heading textColor="secondary" fit caps margin="0 0 15px 0">Turn GraphQL To Javascript</Heading>
                        <CodePane style={{overflow: 'hidden'}} source={require('raw!../examples/graphql.txt')}
                                  lang="js"/>
                        <CodePane style={{overflow: 'hidden', marginTop: '10px', marginBottom: '10px'}}
                                  source={require('raw!../examples/graphql-converted.txt')} lang="js"/>
                        <Link textColor="quartenary" href="https://github.com/ooflorent/babel-plugin-graphql">github.com/ooflorent/babel-plugin-graphql</Link>
                    </Slide>

                    <Slide>
                        <Heading textColor="secondary" fit caps>Next-Gen Hot Reloading</Heading>
                        <Image src={images.hotReload} style={{marginTop: '10px'}}/>
                        <Link textColor="quartenary" href="https://github.com/danmartinez101/babel-preset-react-hmre">github.com/danmartinez101/babel-preset-react-hmre</Link>
                    </Slide>

                    <Slide>
                        <Heading textColor="secondary" fit caps>Highlight All Changed Regions</Heading>
                        <CodePane style={{overflow: 'hidden', marginTop: '10px'}}
                                  source={require('raw!../examples/transform.txt')}
                                  lang="json"/>
                        <Image src={images.visualizer} style={{marginTop: '20px', display: 'block'}}/>
                        <Link textColor="quartenary"
                              href="https://github.com/spredfast/react-transform-render-visualizer">github.com/spredfast/react-transform-render-visualizer</Link>
                    </Slide>

                    <Slide>
                        <Heading textColor="secondary" fit caps>Control Flow in JSX</Heading>
                        <CodePane style={{overflow: 'hidden', marginTop: '15px'}}
                                  source={require('raw!../examples/jcs.txt')}
                                  lang="js"/>
                        <CodePane style={{overflow: 'hidden', marginTop: '10px', marginBottom: '10px'}}
                                  source={require('raw!../examples/jcs-converted.txt')} lang="js"/>
                        <Link textColor="quartenary" href="https://github.com/AlexGilleran/jsx-control-statements">github.com/AlexGilleran/jsx-control-statements</Link>
                    </Slide>

                    <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
                        <Heading fit caps textColor="secondary">
                            So how does it work?
                        </Heading>
                    </Slide>

                    <Slide bgColor="primary" notes="Cats">
                        <Layout>
                            <Fill style={{'align-self': 'center'}}>Parse to AST</Fill>
                            <Fit style={{'align-self': 'center'}}>
                                <Text textColor="quartenary">
                                    <i className="fa fa-arrow-circle-right" style={{margin: '10px'}}/>
                                </Text>
                            </Fit>
                            <Fill style={{'align-self': 'center'}}>Transform with Visitors</Fill>
                            <Fit style={{'align-self': 'center'}}>
                                <Text textColor="quartenary">
                                    <i className="fa fa-arrow-circle-right" style={{margin: '10px'}}/>
                                </Text>
                            </Fit>
                            <Fill style={{'align-self': 'center'}}>Generate</Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
                        <Heading textColor="secondary" fit caps margin="0 0 10px 0">Abstract Syntax Tree ?</Heading>
                        <Layout>
                            <Fill style={{'align-self': 'center'}}>
                                <CodePane style={{overflow: 'hidden'}} source={require('raw!../examples/ast-raw.txt')}
                                          lang="js"/>
                            </Fill>
                            <Fit style={{'align-self': 'center'}}>
                                <Text textColor="quartenary">
                                    <i className="fa fa-arrow-circle-right" style={{margin: '10px'}}/>
                                </Text>
                            </Fit>
                            <Fill style={{'align-self': 'center'}}>
                                <CodePane style={{overflow: 'hidden'}} source={require('raw!../examples/ast.txt')}
                                          lang="js"/>
                            </Fill>
                        </Layout>
                        <Link textColor="quartenary" href="http://astexplorer.net">astexplorer.net</Link>
                    </Slide>

                    <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
                        <Heading textColor="secondary" caps margin="0 0 10px 0">Visitors</Heading>
                        <Layout>
                            <Fill style={{'align-self': 'center'}}>
                                <CodePane style={{overflow: 'hidden'}} source={require('raw!../examples/ast.txt')}
                                          lang="js" dataLine="5,17-18"/>
                            </Fill>
                            <Fit style={{'align-self': 'center'}}>
                                <Text textColor="quartenary">
                                    <i className="fa fa-arrow-circle-right" style={{margin: '10px'}}/>
                                </Text>
                            </Fit>
                            <Fill style={{'align-self': 'center'}}>
                                <CodePane style={{overflow: 'hidden'}}
                                          source={require('raw!../examples/ast-transform.txt')}
                                          lang="js" dataLine="5,17-18"/>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide align="center center" bgColor="primary"
                           notes="You can even put notes on your slide. How awesome is that?">
                        <Heading textColor="secondary" caps margin="0 0 10px 0">Generation</Heading>
                        <Layout>
                            <Fill style={{'align-self': 'center'}}>
                                <CodePane style={{overflow: 'hidden'}}
                                          source={require('raw!../examples/ast-transform.txt')}
                                          lang="js"/>
                            </Fill>
                            <Fit style={{'align-self': 'center'}}>
                                <Text textColor="quartenary">
                                    <i className="fa fa-arrow-circle-right" style={{margin: '10px'}}/>
                                </Text>
                            </Fit>
                            <Fill style={{'align-self': 'center'}}>
                                <CodePane style={{overflow: 'hidden'}}
                                          source={require('raw!../examples/ast-generated.txt')}
                                          lang="js"/>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
                        <Heading fit caps textColor="secondary">
                            Let's make one!
                        </Heading>
                    </Slide>

                    <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
                        <Heading caps textColor="secondary">Step 1</Heading>
                        <Text textColor="quartenary">
                            Pick a problem!
                        </Text>
                        <Appear>
                            <Image src={images.onErrorResumeNext}/>
                        </Appear>
                    </Slide>

                    <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
                        <Heading caps textColor="secondary">Step 2</Heading>
                        <Text textColor="quartenary">
                            What Exactly Am I Changing?
                        </Text>
                        <div style={{marginTop: '20px'}}/>
                        <Appear>
                            <CodePane
                                textSize='0.55em' style={{overflow: 'hidden'}}
                                source={require('raw!../examples/transform-before.txt')}
                                lang="js"/>
                        </Appear>
                        <Appear><Text textColor="quartenary">
                            <i className="fa fa-arrow-circle-down" style={{margin: '10px'}}/>
                        </Text>
                        </Appear>
                        <Appear>
                            <CodePane
                                textSize='0.55em' style={{overflow: 'hidden'}}
                                source={require('raw!../examples/transform-after.txt')}
                                lang="js"/>
                        </Appear>
                    </Slide>

                    <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
                        <Heading caps textColor="secondary">Step 3</Heading>
                        <Text textColor="quartenary">
                            To ESTree!
                        </Text>
                        <Image src={images.esTree}/>
                        <Link textColor="quartenary"
                              href="https://github.com/estree/estree">github.com/estree/estree</Link>
                    </Slide>

                    <CodeSlide
                        transition={[]}
                        lang="js"
                        code={require("!raw!../plugin.simple.js")}
                        ranges={[
              { loc: [0, 1], title: 'Step 4', note: "Export a function that accepts babel" },
              { loc: [1, 2], note: "Constructors for expressions"},
              { loc: [3, 4]},
              { loc: [4, 5], note: "Each key is an expression that will be visited"},
              { loc: [5, 6], note: "Allows you to change the AST"},
              { loc: [6, 8]},
              { loc: [8, 11]},
              { loc: [12, 16], note: "Arguments passed to console.error()"},
              { loc: [21, 24]},
            ]}/>

                    <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
                        <Heading caps textColor="secondary">Let's Take A Break</Heading>
                        <If condition={!this.state.showCat}>
                            <div>
                                <CodePane
                                    textSize='0.55em' style={{overflow: 'hidden'}}
                                    source={require('!raw!../examples/catslide.js')}
                                    lang="js"/>
                                <button
                                    onClick={require('../examples/catslide.js').bind(this)}
                                    style={{background: 'none', border: '1px solid #FFEB3B', color: '#FFEB3B', marginTop: '10px'}}>
                                    Click Here For a Cat
                                </button>
                            </div>
                        </If>
                        <If condition={this.state.showCat}>
                            <Image src={images.cats}/>
                        </If>
                    </Slide>

                    <Slide bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
                        <Heading caps textColor="secondary">React Transform</Heading>
                        <List>
                            <Appear><ListItem>By Dan Abramov</ListItem></Appear>
                            <Appear><ListItem>Allows you to easily create transforms that "wrap"
                                components</ListItem></Appear>
                            <Appear><ListItem>Your transform receives a monkey-patchable ReactClass object, and a set of
                                options
                                including
                                imports, variables, filename etc.</ListItem></Appear>
                            <Appear><ListItem>Experimental - intended to play around with ideas for a more stable,
                                React-specific
                                technology</ListItem></Appear>
                        </List>
                        <Link textColor="quartenary" href="https://github.com/gaearon/babel-plugin-react-transform">github.com/gaearon/babel-plugin-react-transform</Link>
                    </Slide>

                    <CodeSlide
                        transition={[]}
                        lang="js"
                        code={require("!raw!../examples/react-transform.js")}
                        ranges={[
              { loc: [0, 1], title: 'Example (from the readme)', note: 'options for Babel data'},
              { loc: [1, 2], note: 'ReactClass for transformation'},
              { loc: [2, 5], note: 'Get the display name out of the Babel options'},
              { loc: [6, 8], note: 'Grab the original componentDidUpdate function so we can wrap our own around it'},
              { loc: [9, 19], note: 'Replace componentDidUpdate with a function that logs the update state, then calls the original'},
              { loc: [20, 21], note: 'Return the modified ReactClass'}
            ]}
                    />

                    <Slide bgImage={images.deeper} bgDarken={0.9}>
                        <Heading textColor="secondary" caps>Deeper into JSX</Heading>
                        <List textColor="quartenary">
                            <Appear><ListItem>
                                React Transform will cover a lot of React transformation cases, but won't modify JSX
                                itself
                            </ListItem></Appear>
                            <Appear><ListItem>
                                Fortunately you can modify JSX with the same mechanisms as regular Javascript.
                            </ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide bgColor="primary">
                        <Heading textColor="secondary" fit caps>Let's make an If statement</Heading>
                        <Text textColor="quartenary" style={{textAlign: 'left'}}>Say we want to make this:</Text>
                        <CodePane style={{overflow: 'hidden', marginTop: '15px', marginBottom: '10px'}}
                                  source={require('!raw!../examples/if-jsx-guard.jsx')}
                                  lang="js"/>
                        <Text textColor="quartenary" style={{textAlign: 'left'}}>We could do this:</Text>
                        <CodePane style={{overflow: 'hidden', marginTop: '15px', marginBottom: '10px'}}
                                  source={require('!raw!../examples/naive-if.jsx')}
                                  lang="js"/>

                    </Slide>

                    <Slide bgColor="primary">
                        <Text textColor="quartenary" style={{textAlign: 'left'}}>But it compiles to this:</Text>
                        <CodePane style={{overflow: 'hidden', marginTop: '15px', marginBottom: '10px'}}
                                  source={require('!raw!../examples/if-js-guard.js')}
                                  dataLine="7"
                                  lang="js"/>
                        <Text textColor="quartenary" style={{textAlign: 'left'}}>Which causes this:</Text>
                        <Image src={images.error}/>
                    </Slide>

                    <Slide>
                        <Text textColor="quartenary" style={{textAlign: 'left'}}>So Let's Do This:</Text>
                        <CodePane style={{overflow: 'hidden', marginTop: '15px'}}
                                  source={require('!raw!../examples/if-jsx.jsx')}
                                  lang="js"/>
                        <Text textColor="quartenary">
                            <i className="fa fa-arrow-circle-down" style={{margin: '10px'}}/>
                        </Text>
                        <CodePane style={{overflow: 'hidden', marginTop: '10px', marginBottom: '10px'}}
                                  source={require('!raw!../examples/if-js.js')} lang="js"/>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
