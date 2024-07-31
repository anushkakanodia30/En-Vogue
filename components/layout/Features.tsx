import React from 'react';

function Features() {
  return (
    <div style={{margin:"65px"}}>
        <h2 className="pb-2 pt--7 border-bottom  px-4 py-5">OUR FEATURES</h2>
      <div className="row featurette">
        <div className="col-md-7 align-self-center">
          <h2 className="featurette-heading fw-normal lh-1">
          UNPARALLELED  <span className="text-body-secondary">STRESS-FREE</span>
          </h2>
          <p className="lead"> Our full-service event planning and design team will guide you every step of the way, ensuring a stress-free experience from start to finish.
          </p></div>
        <div className="col-md-5" style={{paddingLeft:"100px", paddingTop:"30px"}}>
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/dda4e41e-6f23-408c-a9d5-5b259b3d0a36/52438123974_4a904d120b_o.jpg?format=1500w"
            role="img"
            aria-label="Placeholder: 500x500"
            //preserveAspectRatio="xMidYMid slice"
            //focusable="false"
            alt=""
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2 align-self-center">
          <h2 className="featurette-heading fw-normal lh-1">
          We are <span className="text-body-secondary">Brilliant</span>
          </h2>
          <p className="lead">
          We draw our inspiration from YOU and your story to create one-of-a-kind weddings and events. We work collaboratively to ensure your event is cohesive and thoughtful and believe that even the smallest details can have a huge impact. We pride ourselves on our comprehensive event management so that you can have a flawless and stress-free planning experience! </p>
        </div>
        <div className="col-md-5 order-md-1">
        <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src="https://img.freepik.com/free-photo/people-planning-trip-with-map-full-shot_23-2148925826.jpg?w=826&t=st=1700590820~exp=1700591420~hmac=8e853991d34af9dd9d0c930a2bcb4b183f3900c1b788139333cce62454b33ddd"
            role="img"
            aria-label="Placeholder: 500x500"
            //preserveAspectRatio="xMidYMid slice"
            //focusable="false"
            alt=""
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 align-self-center">
          <h2 className="featurette-heading fw-normal lh-1">
          Effortless <span className="text-body-secondary">Elegance </span>
          </h2>
          <p className="lead">We create bespoke weddings and events that are inspired by our clients. We work collaboratively to ensure your event is cohesive and thoughtful. At Brilliant Event Planning, we believe that even the smallest details can have a huge impact.</p>
        </div>
        <div className="col-md-5"  style={{paddingLeft:"100px", paddingBottom:"10px"}}>
        <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england?format=1500w"
            role="img"
            aria-label="Placeholder: 500x500"
            //preserveAspectRatio="xMidYMid slice"
            //focusable="false"
            alt=""
          />
        </div>

        <hr className="featurette-divider" />
      </div>
    </div>
  );
}

export default Features;
