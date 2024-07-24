import React from "react";
import { details } from "./Details.js";
import "./Body.css";
import { useNavigate } from "react-router-dom";
import LocalKnowledge from "../icons/LocalKnowledge.svg";
import CustomerSatisfactionGuarantee from "../icons/CustomerSatisfactionGuarantee.svg";
import CompetitivePrices from "../icons/CompetitivePrices.svg";

export const ContentPage = () => {
  return (
    <div>
      <img src={clikedCard.image} alt={clikedCard.name} />
    </div>
  );
};

export const Carousel = () => {
  const detail1 = details[0];
  const detail2 = details[1];
  const detail3 = details[2];
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={detail1.image}
            className="d-block w-100"
            alt={detail1.image}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{detail1.name}</h5>
            <p>{detail1.highlights}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={detail2.image}
            className="d-block w-100"
            alt={detail2.name}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{detail2.name}</h5>
            <p>{detail2.highlights}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={detail3.image}
            className="d-block w-100"
            alt={detail3.name}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{detail3.name}</h5>
            <p>{detail3.highlights}</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export const Service = () => {
  const data = [
    {
      id: 0,
      image: CustomerSatisfactionGuarantee,
      desc: "Your happiness is our priority. We go the extra mile to ensure every detail is perfect, from crafting personalized itineraries to providing exceptional service throughout your trip.",
    },
    {
      id: 1,
      image: CompetitivePrices,
      desc: "We won't just meet your budget, we'll exceed your expectations. We offer exceptional tours at attractive prices, ensuring you get the most value for your money.",
    },
    {
      id: 2,
      image: LocalKnowledge,
      desc: "Our team isn't just Sri Lankan, they are Sri Lanka. We have a deep understanding of the local culture, hidden gems, and off-the-beaten-path adventures. Let us guide you beyond the tourist traps and into the heart of Sri Lanka.",
    },
  ];
  const content = data.map((data) => (
    <div key={data.id} className="ImageCard text-center">
      <img src={data.image} alt="icons" />
      <div className="cardBody">
        <p className="cardText">{data.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="bg-light">
      <div className="container p-4">
        <h1 className="text-center mb-5 text-primary-emphasis">
          Why Choose US
        </h1>
        <div className="row row-cols-lg-3 row-cols-sm-1">{content}</div>
      </div>
    </div>
  );
};

let clikedCard;

export const Cards = () => {
  const navigate = useNavigate();
  const content = details.map((details) => (
    <div
      onClick={() => {
        clikedCard = details;
        navigate("/ZimaTravels/content-page");
      }}
      key={details.id}
      className="col-lg p-3"
    >
      <div className="card">
        <img src={details.image} className="img-fluid" alt={details.name} />
        <div className="card-body">
          <h5 className="card-title">{details.name}</h5>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="bg-light cards">
      <div className="container ">
        <h1 className="text-center mb-5 text-primary-emphasis">
          Top Visited Places
        </h1>
        <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
          {content}
        </div>
      </div>
    </div>
  );
};

export const SpecificAspects = () => {
  return (
    <div className="speacific p-5">
      <div className="container ">
        <p className="display-1 text-center">Explore Sri Lanka</p>
        <hr className="border-2" />
        <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
          <div className="col">
            <p className="text-light h-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium maxime iusto magni necessitatibus aut amet quis
              cupiditate nostrum harum. Perspiciatis adipisci incidunt vitae
              veniam velit accusamus dolor, natus voluptatem sequi.
            </p>
            <button className="btn btn-outline-info">See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Subscription = () => {
  return (
    <div className="bg-light">
      <div className="container ">
        <p className="text-center pt-5 text-primary-emphasis h1">
          Get speacial offers and more from Zima Travels and Tours
        </p>
        <form className="row d-flex justify-content-center gap-3 p-3">
          <div className="col-auto">
            <input
              type="email"
              className="form-control"
              id="mail"
              placeholder="Enter your email"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
