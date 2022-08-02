import classes from "../styles/Inputbox.module.css";

export default function Inputbox({ icon, ...rest }) {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
