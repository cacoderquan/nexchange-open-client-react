import React from 'react';
import styles from './About.scss';

const About = () => (
  <div id="about" className={styles.about}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="title">About Us</h2>
        </div>

        <div className="col-xs-12 col-sm-6">
          <p>
            N.exchange is a fast, reliable and fully transparent cryptocurrency exchange built by crypto enthusiasts, for crypto
            enthusiasts.
          </p>

          <p>We are a group of multi-national, multi-disciplinary cryptocurrency professionals.</p>

          <p>
            Our team came together to make this platform after seeing firsthand the need for a fast and reliable exchange on the crypto
            market.
          </p>

          <p>We pride ourselves on total transparency:</p>
        </div>

        <div className="col-xs-12 col-sm-6">
          <p>Everything is viewable through our API, starting from order lists and ending with our coin reserves. </p>

          <p>
            N.exchange is built on several core values that guide our team in our day to day operations. Among them are complete
            transparency, a strive to help make cryptocurrency as accessible as possible, and a passion for open source.
          </p>

          <p>
            To support our mission of making crypto accessible to everyone, we’ve made our{' '}
            <a href="https://github.com/onitsoft/nexchange-open-client-react" target="_blank" rel="noopener noreferrer">
              front end client completely open source
            </a>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
