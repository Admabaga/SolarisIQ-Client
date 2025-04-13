import './TeamSection.css';
import LogoCeo from '../../../Images/businessman-svgrepo-com.svg';

export default function TeamSection() {
  return (
    <section className="team-section my-5 py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Nuestro <span className="text-primary">Equipo</span></h2>
        <div className="row justify-content-center">
          {[{
            name: "Adrian Barrera Garcia",
            role: "CEO",
            img: LogoCeo,
            quote: "¡La energía sostenible debe ser accesible!"
          }].map((member, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card team-card h-100 border-0 shadow-sm">
                <div className="rounded-circle mx-auto mt-4 bg-light" style={{ width: "150px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                  <p className="card-text font-italic">"{member.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}