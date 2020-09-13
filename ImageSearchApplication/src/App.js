import React from "react";
import "./styles.css";
import Imagesearch from "/src/Imagesearch.jsx";
import ImageList from "/src/Images.jsx";

class App extends React.Component {
  state = {
    query: "",
    search: "",
    images: []
  };

  render() {
    const getdata = async () => {
      await this.setState({
        query: this.state.search
      });
      console.log(this.state.query);
      const url = `https://pixabay.com/api/?key=18187514-0e47ddd9f35cfb539749117a4&q=${this.state.query}&image_type=photo`;
      const req = await fetch(url);
      const res = await req.json();
      await this.setState({
        images: res.hits
      });
    };

    const getsearch = async (item) => {
      await this.setState({
        search: item
      });
    };

    return (
      <div className="App">
        <h3>Image Search Application </h3>
        <Imagesearch getSearch={getsearch} getData={getdata} />
        <br />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
