import banner from "../assets/img/3.jpg";
import classes from "../styles/video.module.css";

export default function Video() {
  return (
    <div className={classes.video}>
      <img src={banner} alt="this is banner" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
}
