import classes from '../../../styles/Testimonials.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';

import SectionTitle from '../../layout/SectionTitle';

function Testimonials(props) {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    props.onTestimonials(testimonialsRef.current, 'testimonials');
  }, []);

  const testimonials = useSelector(state => state.testimonials);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = function () {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide(prevState => prevState + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = function () {
    if (currentSlide > 0) {
      setCurrentSlide(prevState => prevState - 1);
    } else {
      setCurrentSlide(testimonials.length - 1);
    }
  };

  return (
    <section className={classes.section} ref={testimonialsRef}>
      <SectionTitle
        title="NOT SURE YET?"
        description="Millions of Bankists are already making their lives simpler."
      />
      <div className={classes.container}>
        <button className={classes.prev} onClick={prevSlide}>
          ←
        </button>
        <button className={classes.next} onClick={nextSlide}>
          →
        </button>
        <div className={classes.testimonials}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={classes.testimonial}
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
              }}
            >
              <h2>{testimonial.title}</h2>
              <p>{testimonial.content}</p>
              <div className={classes.info}>
                <Image
                  src={testimonial.photoURL}
                  blurDataURL={testimonial.photoURL}
                  placeholder="blur"
                  width="65"
                  height="65"
                  layout="fixed"
                  style={{ borderRadius: '50%' }}
                />
                <div className={classes.personalInfo}>
                  <h3>{testimonial.name}</h3>
                  <p className={classes.address}>{testimonial.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
