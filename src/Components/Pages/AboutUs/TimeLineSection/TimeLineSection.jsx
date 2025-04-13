import './TimelineSection.css';

export default function TimelineSection() {
  return (
    <section className="timeline-section my-5 py-5">
      <div className="container">
        <h2 className="text-center mb-5">Nuestra <span className="text-primary">Historia</span></h2>
        <div className="timeline">
          {[{
            year: "2025",
            event: "Fundación de Solaris IQ",
            detail: "Nace como proyecto bootcamp."
          }].map((item, i) => (
            <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
              <div className="timeline-content p-4 shadow-sm">
                <h5>{item.year}</h5>
                <h6 className="text-primary">{item.event}</h6>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}