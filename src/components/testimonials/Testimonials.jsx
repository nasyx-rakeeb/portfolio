import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Client 1",
    review: "Lori and I am a MERN stack developer and an web app Penetration Tester I am a MERN stack developer and an web app Penetration Tester I am a MERN"
  },
    {
    avatar: AVTR2,
    name: "Client 2",
    review: "Lori and I am a MERN stack developer and an web app Penetration Tester I am a MERN stack developer and an web app Penetration Tester I am a MERN"
  },
    {
    avatar: AVTR3,
    name: "Client 3",
    review: "Lori and I am a MERN stack developer and an web app Penetration Tester I am a MERN stack developer and an web app Penetration Tester I am a MERN"
  },
    {
    avatar: AVTR4,
    name: "Client 4",
    review: "Lori and I am a MERN stack developer and an web app Penetration Tester I am a MERN stack developer and an web app Penetration Tester I am a MERN"
  }
  ]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" modules={[Pagination]} spaceBetween={40} slidePerView={1} pagination={{clickable: true}}>
        {
          data.map( ({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="error" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small> 
             </SwiperSlide>
              )
          })
        }
      </Swiper>
    </section>
    )
}

export default Testimonials








































