import "./App.css";
import Container from "./components/container";
import Header from "./components/header";

function App() {
  return (
    <>
      <div>
        <Container
          direction="row"
          header="Header Container"
          textPosition="left"
          contentPosition="top"
        >
          <Header header="Hello from Header 1" description="Description 1">
            <p>This is additional content inside the Header component.</p>
          </Header>
        </Container>

        <Container
          direction="column"
          header="Image Container"
          textPosition="right"
          contentPosition="bottom"
        >
          <div className="image-wrapper">
            <img
              alt="turtle"
              src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
            />
            <img
              alt="turtle"
              src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
            />
            <img
              alt="turtle"
              src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
            />
            <img
              alt="turtle"
              src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
