import React from "react";
import { Link } from "react-router-dom";

function Images({ images }) {
  return (
    <div className="imageList_container">
      {images.map((image) => {
        return (
          <div
            key={image.id}
            className="single__image"
            style={{ marginBottom: "2rem" }}
          >
            <div className="imageList__container">
              <img
                className="imageList__image"
                src={image.largeImageURL}
                alt={image.tags}
              />
            </div>
            <div className="image__details">
              <Link
                to={{
                  pathname: `/${image.id}`,
                  state: { image }
                }}
              >
             <button>View</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Images;
