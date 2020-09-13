import React from "react";

class View extends React.Component {
  render() {
    const { image } = this.props.location.state;
    return (
      <div>
        <img src={image.largeImageURL} alt="" />
      </div>
    );
  }
}

export default View;
