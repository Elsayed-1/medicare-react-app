import {
  LuShieldCheck,
  LuClock,
  LuStethoscope,
  LuHeartPulse,
  LuCalendarCheck,
  LuCheck,
} from "react-icons/lu";
import "./Aboutsection.css";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Verified doctors" },
  { value: "50k+", label: "Patients cared for" },
  { value: "20+", label: "Medical specialties" },
  { value: "4.8/5", label: "Average patient rating" },
];

const values = [
  {
    icon: LuShieldCheck,
    title: "Verified doctors",
    text: "Every doctor's license and experience is checked before they join.",
  },
  {
    icon: LuClock,
    title: "Booking in minutes",
    text: "Pick a specialty, choose a time, and you're booked. No phone calls.",
  },
  {
    icon: LuStethoscope,
    title: "Every specialty",
    text: "From pediatrics to cardiology, find the right doctor in one place.",
  },
  {
    icon: LuHeartPulse,
    title: "Care that continues",
    text: "Keep your visits, favorites, and health history together.",
  },
];

const points = [
  "Compare doctors by specialty, experience, and availability",
  "Save your favorite doctors for next time",
  "Your health data stays private and secure",
];

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        {/* ---------- Top: text + visual ---------- */}
        <div className="about__top">
          <div className="about__text">
            <h2 id="about-title" className="about__title">
              Healthcare that fits around your day
            </h2>
            <p className="about__lead">
              MedCare connects patients with trusted doctors across Egypt. We
              built it so finding the right specialist, booking a visit, and
              keeping track of your care is simple from your phone.
            </p>

            <ul className="about__points">
              {points.map((p) => (
                <li key={p}>
                  <span className="about__check" aria-hidden="true">
                    <LuCheck size={14} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
<Link to="/doctors">
<p  style={{color:"white"}} className="about__btn">
              Find a doctor
            </p>
</Link>
            
          </div>

           
        </div>

        {/* ---------- Stats ---------- */}
        <dl className="about__stats">
          {stats.map((s) => (
            <div key={s.label} className="about__stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>

        {/* ---------- Values ---------- */}
        <div className="about__values">
          <h3 className="about__values-title">Why patients choose MedCare</h3>
          <div className="about__values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="about__value">
                <span className="about__icon">
                  <Icon size={20} />
                </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}