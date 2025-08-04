import { useState } from "react";
import "../styles/Display.css";
export { Company, Display };

function Company({ data, index, setEditCompanyIndex, animating }) {
  const company = data["companies"][index];

  return (
    <div
      className={
        "company" +
        (animating ? " animating" : setEditCompanyIndex ? " appear" : "")
      }
      style={{
        transform: `translateY(-${index * 35}px) rotate3d(-0.2, 0, 0, 45deg)`,
        animationDelay: `${index * 70}ms`,
        opacity: setEditCompanyIndex ? 0 : 1,
      }}
      onClick={() => (setEditCompanyIndex ? setEditCompanyIndex(index) : null)}
    >
      <div>
        <h2>{company.name ? company.name : "Nabisco"}</h2>
        <p>{company.position ? company.position : "CEO"}</p>
        <p>
          {company.workedDate.from ? company.workedDate.from : "mm/dd/yyyy"} -{" "}
          {company.workedDate.to ? company.workedDate.to : "mm/dd/yyyy"}
        </p>
      </div>
      <ul>
        {company.responsabilities.map((responsability) => {
          return (
            <li key={responsability.id}>
              {responsability.value ? responsability.value : "Tasting Oreos"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Display({ data }) {
  const [animatedCompany, setAnimatedCompany] = useState(0);

  setTimeout(() => {
    if (animatedCompany < data.companies.length - 1) {
      setAnimatedCompany(animatedCompany + 1);
    } else {
      setAnimatedCompany(0);
    }
  }, 5000);

  return (
    <main>
      <div>
        <section id="general-information">
          <h1>{data.name}</h1>
          <address>
            <ul>
              <li>
                <a href={"mailto:" + data.email}>{data.email}</a>
              </li>
              <li>
                <a href={"tel:" + data.phone}>{data.phone}</a>
              </li>
            </ul>
          </address>
        </section>
        <section id="educational-experience">
          <h2>Studied at...</h2>
          <ul>
            <li>School: {data.school}</li>
            <li>Title of Study: {data.studyTitle}</li>
            <li>
              Date of Study: {data.studyDate.from} - {data.studyDate.to}
            </li>
          </ul>
        </section>
      </div>
      <section id="practical-experience">
        <h2>Worked at...</h2>
        <div className="companies">
          {data.companies.map((company, index) => {
            return (
              <Company
                key={company.id}
                data={data}
                index={index}
                animating={index == animatedCompany}
              ></Company>
            );
          })}
        </div>
      </section>
    </main>
  );
}
