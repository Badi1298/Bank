import classes from '../../styles/Home.module.css';
import Image from 'next/image';

function Home() {
  const learnMore = () => {
    scrollTo({
      top: 902,
      behavior: 'smooth',
    });
  };

  return (
    <div className={classes.outer}>
      <div className={classes.container}>
        <div className={classes.content}>
          <h1>
            When <span className={classes.title_highlight}>banking</span> meets
            <br />
            <span className={classes.title_highlight}>minimalist</span>
          </h1>
          <p>A simpler banking experience for a simpler life</p>
          <button onClick={learnMore}>Learn more &#x2193;</button>
        </div>
        <Image
          src="/hero.png"
          layout="fixed"
          placeholder="blur"
          blurDataURL="/hero.png"
          width="460"
          height="360"
          quality="100"
        />
      </div>
    </div>
  );
}

export default Home;
