import classes from '../../../styles/Info.module.css';
import Image from 'next/image';

import { Fragment } from 'react';

function InfoRight(props) {
  return (
    <Fragment>
      <div className={classes.text}>
        <div className={classes.icon}>
          <svg>
            <use xlinkHref={props.svg}></use>
          </svg>
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <Image
        src={props.src}
        width="781"
        height="469"
        placeholder="blur"
        blurDataURL={props.src}
        quality="100"
      />
    </Fragment>
  );
}

export default InfoRight;
