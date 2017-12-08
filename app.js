class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Home</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about">About</a></li>
                        <li><a href="#tech">Tech</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <div className="area">
                <div id="about" className="title">About</div>
                <div className="content name">Lee Yunseok</div>
                <div className="content">Web Developer</div>
            </div>
        );
    }
}

class Tech extends React.Component {
    render() {
        return (
            <div className="area tech">
                <div id="tech" className="title">Tech</div>
                <div className="content">JavaScript</div>
                <div className="content">React</div>
                <div className="content">Redux</div>
                <div className="content">HTML</div>
                <div className="content">CSS</div>
                <div className="content">Atom</div>
                <div className="content">jQuery</div>
                <div className="content">Java</div>
                <div className="content">JSP, Servlet</div>
                <div className="content">Eclipse plug-in & RCP</div>
            </div>
        );
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div className="area">
                <div id="contact" className="title">Contact</div>
                <div className="row">
                    <div className="col-md-6 content">
                        <div className="row">
                            <svg height="36" viewBox="0 0 512 512" width="36">
                                <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path>
                            </svg>
                        </div>
                        <div className="row">
                            <a href="mailto:yserzero@gmail.com">yserzero@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-md-6 content">
                        <div className="row">
                            <svg aria-hidden="true" height="32" viewBox="0 0 16 16" width="32">
                                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </div>
                        <div className="row">
                            <a href="https://github.com/yserlee">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const element = (
    <div>
        <Navbar></Navbar>
        <About></About>
        <Tech></Tech>
        <Contact></Contact>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
