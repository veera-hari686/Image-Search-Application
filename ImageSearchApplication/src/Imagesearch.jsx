import React from "react";
import "./styles.css";

class Imagesearch extends React.Component {
  render() {
    const handleChange = (e) => {
      this.props.getSearch(e.target.value);
    };
    const handleClick = (e) => {
      e.preventDefault();
      this.props.getData();
    };
    return (
      <div className="imageSearch">
        <form onSubmit={handleClick} className="imageSearch__form">
          <input
            name="searchValue"
            type="text"
            placeholder="search for images.."
            onChange={handleChange}
          />
          <button>search</button>
        </form>
      </div>
    );
  }
}

export default Imagesearch;
