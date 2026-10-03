import React, { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "917249466791";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=ShapeUp+Fitness+Club+Laxmi+Chowk+Hinjawadi+Pune";

const programs = [
  {
    number: "01",
    title: "Strength & training",
    description: "Well-maintained equipment, room to move and trainers who can help you work on your form.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=760&q=80",
    alt: "Member working through a strength training session",
    interest: "Gym membership",
  },
  {
    number: "02",
    title: "Yoga, your way",
    description: "Take a breath, make a little space, and let the rest of the day wait outside.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=760&q=80",
    alt: "A calm moment during a yoga practice",
    interest: "Yoga class",
    time: "Monday · 8:00 am · free for members",
  },
  {
    number: "03",
    title: "Zumba, all energy",
    description: "Come for the music. Leave feeling lighter. No dance experience needed.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=760&q=80",
    alt: "A lively group dance-fitness workout",
    interest: "Zumba class",
    time: "Monday · 8:00 pm · free for members",
  },
];

const galleryPhotos = [
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1050&q=85",
    alt: "Wide view of a spacious, well-equipped gym floor",
    label: "Room to move",
    number: "01",
  },
  {
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    alt: "Free weight and strength training area",
    label: "Find your strength",
    number: "02",
  },
  {
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1050&q=85",
    alt: "Bright, spacious fitness centre interior",
    label: "Your neighbourhood club",
    number: "03",
  },
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    alt: "Group movement and dance fitness session",
    label: "Move together",
    number: "04",
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    alt: "A calm yoga and stretching session",
    label: "Take a breath",
    number: "05",
  },
];

const faqs = [
  {
    question: "Can I try the club before deciding?",
    answer: "Absolutely. Send us a WhatsApp or use the visit form and we’ll help arrange a time to come by and see the club.",
  },
  {
    question: "Are yoga and Zumba included?",
    answer: "The weekly Monday yoga and Zumba sessions are free for ShapeUp members. Message us to confirm the latest class details before you come.",
  },
  {
    question: "Where exactly are you located?",
    answer: "We’re on Laxmi Chowk Road, near Eswar Luxury PG, Phase 1, Hinjawadi, Pune 411057. Tap “Get directions” to open the location in Google Maps.",
  },
];

const openingHours = [
  { day: "Monday", opens: 6, closes: 22, label: "6:00 am – 10:00 pm" },
  { day: "Tuesday", opens: 6, closes: 22, label: "6:00 am – 10:00 pm" },
  { day: "Wednesday", opens: 6, closes: 22, label: "6:00 am – 10:00 pm" },
  { day: "Thursday", opens: 6, closes: 22, label: "6:00 am – 10:00 pm" },
  { day: "Friday", opens: 6, closes: 22, label: "6:00 am – 10:00 pm" },
  { day: "Saturday", opens: 6, closes: 22, label: "6:00 am – 10:00 pm" },
  { day: "Sunday", opens: 17, closes: 21, label: "5:00 pm – 9:00 pm" },
];

const googleReviewsUrl = "https://www.google.com/maps/search/?api=1&query=ShapeUp+Fitness+Club+Laxmi+Chowk+Hinjawadi+Pune";

const reviews = [
  {
    name: "Akshay Sawate",
    detail: "6 reviews · 7 photos · 7 months ago",
    quote: "Joining this gym was one of the best decisions I made for my health 💪🔥 A big thank you to Hemant Sir — an amazing trainer who is supportive, motivating and always focuses on correct technique and safety.",
    kind: "member",
  },
  {
    name: "Santosh Sutar",
    detail: "Local Guide · 12 reviews · 35 photos · 2 years ago",
    quote: "Clean area & maintained equipment, maximum available space, evening 6 to 9pm highly crowd because Zumba batch also running this time. 5kg & 10kg dumbbells very less quantity and not easy available, take too long time. 10kg+ dumbbells easy …",
    kind: "honest",
  },
  {
    name: "Shashank Tiwari",
    detail: "1 review · 10 months ago",
    quote: "Great gym with excellent facilities and a motivating environment. Highly recommended!",
    kind: "local",
  },
  {
    name: "Mitesh Supare",
    detail: "6 reviews · 3 months ago",
    quote: "Fantastic gym with a great environment! Huge shoutout to my trainer, Sagar, who is absolutely amazing. He is highly knowledgeable, motivating, and ensures every workout is effective. Highly recommended!",
    kind: "member",
  },
  {
    name: "BHUSHAN BACHATE",
    detail: "2 reviews · 3 photos · 9 months ago",
    quote: "Nice gym with a good atmosphere. The trainer is very helpful and supportive",
    kind: "local",
  },
  {
    name: "Nikshita Burde",
    detail: "1 review · 3 weeks ago",
    quote: "Gym is bigger. And they have good trainer available. Good for women also.",
    kind: "member",
  },
  {
    name: "Akash More",
    detail: "Local Guide · 6 reviews · 34 photos · 9 months ago",
    quote: "Facilities: Cleanliness, equipment quality/variety, space, ventilation, showers. Staff/Trainers: Friendliness, knowledge, helpfulness, motivation. Atmosphere: Supportive, motivating, comfortable, good for all levels.",
    kind: "local",
  },
  {
    name: "priyaranjan Satapathy",
    detail: "1 review · 4 months ago",
    quote: "Very good gym and all trainers are very supportive.but the price is a little bit expensive.",
    kind: "member",
  },
  {
    name: "Piyush Ahir",
    detail: "Local Guide · 11 reviews · 13 photos · 2 years ago",
    quote: "“Shape Up” gym provides a conducive fitness environment with helpful staff and experienced trainers. The facility offers ample open space, along with a diverse range of proper equipment, allowing members to engage in tailored workouts.",
    kind: "local",
  },
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="ShapeUp Fitness Club home">
      <span className="brand-mark">S</span>
      <span className="brand-name">shapeup<span>fitness club · hinjawadi</span></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formError, setFormError] = useState("");
  const [whatsappFallback, setWhatsappFallback] = useState("");
  const [reviewPage, setReviewPage] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const galleryRef = useRef(null);
  const galleryStartedRef = useRef(false);
  const reviewPageCount = Math.ceil(reviews.length / 3);
  const visibleReviews = reviews.slice(reviewPage * 3, reviewPage * 3 + 3);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!galleryStartedRef.current) {
          gallery.scrollLeft = 0;
          galleryStartedRef.current = true;
        }
        setGalleryVisible(true);
      } else {
        setGalleryVisible(false);
      }
    }, { threshold: 0.1 });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || !galleryVisible) return undefined;

    let animationFrame;
    let previousTime = 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pixelsPerMillisecond = prefersReducedMotion ? 0.012 : 0.04;
    const firstCard = gallery.querySelector(".gallery-card:not([aria-hidden='true'])");
    const firstDuplicate = gallery.querySelector(".gallery-card[aria-hidden='true']");
    const loopWidth = firstCard && firstDuplicate ? firstDuplicate.offsetLeft - firstCard.offsetLeft : 0;
    const animate = (time) => {
      if (previousTime && loopWidth > 0) {
        gallery.scrollLeft += (time - previousTime) * pixelsPerMillisecond;
        if (gallery.scrollLeft >= loopWidth) gallery.scrollLeft %= loopWidth;
      }
      previousTime = time;
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [galleryVisible]);

  const closeMenu = () => setMenuOpen(false);

  const goToContactForm = () => {
    setFormError("");
    document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("name")?.focus({ preventScroll: true }), 450);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");
    setWhatsappFallback("");

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const interest = String(formData.get("interest") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!name || !phone) {
      setFormError("Please add your name and phone number so the club can get back to you.");
      return;
    }

    const lines = [
      "Hi ShapeUp Fitness Club! I'd love to know more.",
      "",
      `Name: ${name}`,
      `My number: ${phone}`,
      `I'm interested in: ${interest}`,
      ...(message ? ["", `A little more: ${message}`] : []),
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    const whatsappWindow = window.open(url, "_blank");
    if (!whatsappWindow) {
      setWhatsappFallback(url);
      setFormError("Your browser blocked the new tab. Use this link to continue to WhatsApp.");
    } else {
      whatsappWindow.opener = null;
    }
  };

  return (
    <>
      <div className="announcement">
        A little more movement, a lot more joy. <strong>Yoga + Zumba are free for members.</strong>
      </div>
      <div className="nav-wrap">
        <nav className="nav shell" aria-label="Main navigation">
          <Brand />
          <button
            aria-expanded={menuOpen}
            aria-controls="main-links"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span /><span />
          </button>
          <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="main-links">
            <a href="#programs" onClick={closeMenu}>What we do</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#classes" onClick={closeMenu}>Classes</a>
            <a href="#visit" onClick={closeMenu}>Find us</a>
            <a className="nav-directions" href={MAPS_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M16.25 8.25c0 4.25-6.25 9.25-6.25 9.25S3.75 12.5 3.75 8.25a6.25 6.25 0 1 1 12.5 0Z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Directions <span aria-hidden="true">↗</span>
            </a>
            <a className="nav-cta" href="#visit" onClick={closeMenu}>Come say hello <span className="arrow">↗</span></a>
          </div>
        </nav>
      </div>

      <main>
        <section className="hero shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow">Your neighbourhood fitness club</div>
            <h1>Move better.<br />Feel more <em>like you.</em></h1>
            <p>Good training, good people, and room to find your own pace. Your next chapter starts right here in Hinjawadi.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#visit">Plan your first visit <span className="arrow">↗</span></a>
              <a className="button" href="#programs">Explore the club</a>
            </div>
            <div className="social-proof" aria-label="Rated 4.7 out of 5 from 489 Google reviews">
              <div className="avatars" aria-hidden="true">
                <span className="avatar">A</span><span className="avatar">S</span><span className="avatar">R</span><span className="avatar">M</span>
              </div>
              <div><div className="rating" aria-hidden="true">★★★★★</div><div className="proof-copy"><strong>4.7 out of 5</strong> · 489 Google reviews</div></div>
            </div>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=85" alt="A sunlit, welcoming gym ready for a workout" fetchPriority="high" />
            <div className="photo-caption"><span className="caption-dot" /> Laxmi Chowk, Hinjawadi</div>
            <div className="photo-index"><strong>01</strong><span>show up<br />for yourself</span></div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-line">
            {Array.from({ length: 4 }, (_, index) => (
              <span className="ticker-group" key={index}>
                <span>Find your strength</span><i>✳</i><span>Move with joy</span><i>✳</i><span>Make it a habit</span><i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <section className="section shell" id="programs">
          <div className="section-heading">
            <div><div className="eyebrow">A little something for every body</div><h2>Find your kind<br />of strong.</h2></div>
            <p>From focused strength work to switching off with a stretch or dancing it out, there’s more than one way to feel good here.</p>
          </div>
          <div className="programs">
            {programs.map((program) => (
              <article className="program-card" key={program.number}>
                <img src={program.image} alt={program.alt} loading="lazy" />
                <div className="program-content">
                  <span className="program-number">{program.number}</span>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  {program.time && <span className="program-note">{program.time}</span>}
                  <button className="program-book" onClick={goToContactForm} type="button">
                    Ask about {program.interest === "Gym membership" ? "training" : program.interest.replace(" class", "")} <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
          <div className="shell gallery-heading">
            <div>
              <div className="eyebrow">A little look around</div>
              <h2 id="gallery-title">Come see your<br /><em>new happy place.</em></h2>
            </div>
          </div>
          <div className="gallery-viewport" ref={galleryRef} role="region" aria-label="ShapeUp Fitness Club photo gallery" tabIndex={0}>
            {galleryPhotos.map((photo) => (
              <figure className="gallery-card" key={photo.number}>
                <img src={photo.image} alt={photo.alt} loading="lazy" />
                <figcaption><span>{photo.number}</span><strong>{photo.label}</strong></figcaption>
              </figure>
            ))}
            {galleryPhotos.map((photo) => (
              <figure aria-hidden="true" className="gallery-card gallery-card-duplicate" key={`loop-${photo.number}`}>
                <img src={photo.image} alt="" loading="lazy" />
                <figcaption><span>{photo.number}</span><strong>{photo.label}</strong></figcaption>
              </figure>
            ))}
          </div>
          <div className="shell gallery-footer">
            <p>Training floor, movement classes and space to make yourself at home.</p>
            <span>ShapeUp Fitness Club · Hinjawadi</span>
          </div>
        </section>

        <section className="story">
          <div className="shell story-inner">
            <div className="story-photo-wrap">
              <img className="story-photo" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=85" alt="A look inside a bright, spacious fitness centre" loading="lazy" />
              <div className="story-stamp" aria-hidden="true">feel<br />good</div>
            </div>
            <div className="story-copy">
              <div className="eyebrow">A club that feels like your club</div>
              <h2>Progress looks<br />different on <em>everyone.</em></h2>
              <p>We think the best workout is the one that makes you want to come back. Find good equipment, helpful guidance and a friendly, motivating atmosphere at ShapeUp.</p>
              <div className="benefits">
                <div className="benefit"><span className="check">✓</span> Space to find your rhythm</div>
                <div className="benefit"><span className="check">✓</span> Trainers to guide your form</div>
                <div className="benefit"><span className="check">✓</span> Yoga and Zumba for members</div>
                <div className="benefit"><span className="check">✓</span> A community that keeps you going</div>
              </div>
              <a className="button button-lime" href="#visit">Come meet us <span className="arrow">↗</span></a>
            </div>
          </div>
        </section>

        <section className="schedule shell" id="classes">
          <div className="schedule-intro">
            <div className="eyebrow">Put a little joy in your week</div>
            <h2>Your Monday, but make it move.</h2>
            <p>Members can join our weekly yoga and Zumba sessions at no extra charge. Message us to check in before your first class.</p>
            <button className="text-link" onClick={goToContactForm} type="button">Ask about this week’s schedule <span aria-hidden="true">↗</span></button>
          </div>
          <div>
            <div className="class-list">
              <article className="class-row">
                <div><h3>Yoga</h3><p>Stretch, breathe, reset</p></div>
                <div className="class-time">8:00 am <span className="class-day">· Monday</span></div>
                <button className="free-tag" onClick={goToContactForm} type="button">Free for members <span aria-hidden="true">↗</span></button>
              </article>
              <article className="class-row">
                <div><h3>Zumba</h3><p>Dance it out, together</p></div>
                <div className="class-time">8:00 pm <span className="class-day">· Monday</span></div>
                <button className="free-tag" onClick={goToContactForm} type="button">Free for members <span aria-hidden="true">↗</span></button>
              </article>
            </div>
            <p className="schedule-footnote">Class times and availability can change. Send us a WhatsApp before you come and we’ll confirm the latest details.</p>
          </div>
        </section>

        <section className="hours-reviews">
          <div className="shell hours-reviews-grid">
            <div className="hours-panel">
              <h2>Good hours.<br /><em>Better habits.</em></h2>
              <div className="hours-list" aria-label="Weekly opening hours">
                {openingHours.map(({ day, label }) => (
                  <div className="hours-row" key={day}>
                    <span>{day}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reviews-panel">
              <div className="reviews-heading">
                <div>
                  <div className="eyebrow">From people who show up</div>
                  <h2>Real talk.<br /><em>Real community.</em></h2>
                </div>
                <div className="google-rating" aria-label="Google rating 4.7 out of 5 from 489 reviews">
                  <strong>4.7</strong><span className="rating" aria-hidden="true">★★★★★</span><small>489 Google reviews</small>
                </div>
              </div>
              <div className="review-cards">
                {visibleReviews.map((review) => (
                  <article className={`review-card review-${review.kind}`} key={review.name}>
                    <div className="review-top"><span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span><span className="google-wordmark">Google <span>review</span></span></div>
                    <blockquote>{review.quote}</blockquote>
                    <div className="review-author"><span className="review-avatar">{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.detail}</small></span></div>
                  </article>
                ))}
              </div>
              <div className="reviews-footer">
                <p className="review-note">Review excerpts shared by ShapeUp customers. Read their reviews on Google.</p>
                <div className="reviews-controls">
                  <span className="review-page-count">{reviewPage + 1} / {reviewPageCount}</span>
                  <button aria-label="Previous reviews" className="review-arrow" disabled={reviewPage === 0} onClick={() => setReviewPage(reviewPage - 1)} type="button">←</button>
                  <button aria-label="Next reviews" className="review-arrow" disabled={reviewPage === reviewPageCount - 1} onClick={() => setReviewPage(reviewPage + 1)} type="button">→</button>
                </div>
              </div>
              <a className="reviews-link" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">See ShapeUp’s Google profile <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="shell faq-layout">
            <div className="faq-intro">
              <div className="eyebrow">A few good-to-knows</div>
              <h2>Questions?<br /><em>We’re here.</em></h2>
              <p>Still wondering about something? Send us a message. A real person at the club will help you out.</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi ShapeUp Fitness Club! I have a question about the club.")}`} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details className="faq-item" key={item.question} open={index === 0}>
                  <summary>{item.question}<span className="faq-toggle" aria-hidden="true" /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact shell" id="visit">
          <div className="contact-copy">
            <div className="eyebrow">Your next good decision</div>
            <h2>Let’s get you through the door.</h2>
            <p>Have a question, want to check out the club, or just want to know where to start? Leave us a note and we’ll open a WhatsApp message for you.</p>
            <div className="contact-detail">
              <span className="detail-icon" aria-hidden="true">⌖</span>
              <div><small>Come find us</small><a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Laxmi Chowk Road, near Eswar Luxury PG,<br />Phase 1, Hinjawadi, Pune 411057 ↗</a></div>
            </div>
            <div className="contact-detail">
              <span className="detail-icon" aria-hidden="true">↗</span>
              <div><small>Call or WhatsApp</small><a href="tel:+917249466791">+91 72494 66791</a></div>
            </div>
            <a className="directions-link" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a>
          </div>
          <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="off" placeholder="What should we call you?" required /></div>
              <div className="field"><label htmlFor="phone">Your number</label><input id="phone" name="phone" type="tel" autoComplete="off" placeholder="So we can get back to you" required /></div>
            </div>
            <div className="field">
              <label htmlFor="interest">What are you curious about?</label>
              <select id="interest" name="interest" defaultValue="" autoComplete="off" required>
                <option value="" disabled>Select an enquiry</option>
                <option value="Visiting the club">A first visit</option>
                <option value="Gym membership">Gym membership</option>
                <option value="Yoga class">Yoga class</option>
                <option value="Zumba class">Zumba class</option>
                <option value="Personal training">Training and guidance</option>
                <option value="Class schedule">This week’s class schedule</option>
                <option value="Something else">Something else</option>
              </select>
            </div>
            <div className="field"><label htmlFor="message">Anything else? <span className="optional">(optional)</span></label><textarea id="message" name="message" placeholder="Tell us a little about what you’re looking for..." /></div>
            {formError && <p className="form-error" role="alert" aria-live="polite">{formError} {whatsappFallback && <a href={whatsappFallback} target="_blank" rel="noopener noreferrer">Open WhatsApp ↗</a>}</p>}
            <button className="button button-dark form-submit" type="submit">Send Message <span className="arrow">↗</span></button>
            <p className="form-note">Your message opens in WhatsApp so you can review it and send it directly to the club.</p>
          </form>
        </section>
      </main>

      <footer className="footer shell">
        <div className="footer-inner">
          <Brand />
          <span className="footer-copy">A little stronger, a little happier. © {new Date().getFullYear()} ShapeUp Fitness Club</span>
          <div className="footer-links"><a href="#programs">The club</a><a href="#classes">Classes</a><a href="#visit">Contact</a></div>
        </div>
      </footer>

      <a className="whatsapp-float" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi ShapeUp Fitness Club! I'd love to know more about the club.")}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with ShapeUp Fitness Club on WhatsApp">
        <span aria-hidden="true">◉</span><span className="whatsapp-label">Let’s chat</span>
      </a>
      <a className="mobile-visit" href="#visit">Plan your first visit <span aria-hidden="true">↗</span></a>
    </>
  );
}

export default App;
