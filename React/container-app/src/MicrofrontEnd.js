import React, {Component} from 'react';

class MicrofrontEnd extends Component {

  componentDidMount() {
    const { host, name, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      console.log("renderMF");
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          this.renderMicroFrontend();
        };
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;
    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window } = this.props;
    window[`render${name}`](`${name}-container`);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicrofrontEnd.defaultProps = {
  document,
  window,
};

export default MicrofrontEnd;