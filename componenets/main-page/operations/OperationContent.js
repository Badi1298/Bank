import classes from '../../../styles/OperationContent.module.css';

function OperationContent(props) {
  return (
    <div className={classes.container}>
      <div className={classes[props.iconClass]}>
        <svg>
          <use xlinkHref={props.svg} />
        </svg>
      </div>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default OperationContent;
