import colorsData from "./colors";
import App from "./App.css";

function ColorRender() {
  return (
    <div className="container">
      {colorsData.map(({ id, color }) => {
        return (
          <div className="mini_container" style={{ backgroundColor: color }}>
            <h1 className="name">This color is {id}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default ColorRender;
