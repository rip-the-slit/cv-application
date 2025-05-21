export default function Display({ data }) {
  return <main>
    <section id="general-information">
        <h1>{data.name}</h1>
        <address>
            <ul>
                <li><a href={"mailto:" + data.email}>{data.email}</a></li>
                <li><a href={"tel:" + data.phone}>{data.phone}</a></li>
            </ul>
        </address>
    </section>
  </ main>;
}
