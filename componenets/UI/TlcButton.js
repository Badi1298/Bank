import classes from '../../styles/TlcButton.module.css';

function TlcButton(props) {
  return (
    <button type={props.type} onClick={props.onClick} className={classes.btn}>
      →
    </button>
  );
}

export default TlcButton;
