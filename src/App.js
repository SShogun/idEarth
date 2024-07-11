import Spline from "@splinetool/react-spline";
import "./App.css";
import PrimaryButton from "./components/PrimaryButton";
export default function App() {
  return (
    <>
      <div className="content">
        <nav>
          <div className="navText">
            <p className="navTitle dm-sans-500">idEarth</p>
          </div>
          <div className="navLinks">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Research</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <PrimaryButton>More</PrimaryButton>
              </li>
            </ul>
          </div>
        </nav>
        <main></main>
      </div>
      <div id="wrapper">
        <Spline
          className="spline"
          scene="https://prod.spline.design/JiIU5OCa9m73w5qM/scene.splinecode"
        />
      </div>
    </>
  );
}
