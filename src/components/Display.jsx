export default function Display({ data }) {
  return (
    <main>
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
        <h2>Educational Experience</h2>
        <ul>
          <li>School: {data.school}</li>
          <li>Title of Study: {data.studyTitle}</li>
          <li>
            Date of Study: {data.studyDate.from} - {data.studyDate.to}
          </li>
        </ul>
      </section>
    </main>
  );
}
