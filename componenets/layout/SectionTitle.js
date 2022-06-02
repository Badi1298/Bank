import classes from '../../styles/SectionTitle.module.css';

function SectionTitle(props) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p>{props.title}</p>
        <h2>{props.description}</h2>
      </div>
    </div>
  );
}

export default SectionTitle;
