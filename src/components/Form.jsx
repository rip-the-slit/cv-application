function Entry({ label, type, value, onChange, min, max }) {
  const id = label.replace(/ /g, "-").toLowerCase();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ? type : "text"}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}

export default function Form({ data, setData }) {
  return (
    <form>
      <Section title="General Information">
        <Entry
          label="Name"
          value={data.name}
          onChange={(e) => {
            const newData = { ...data };
            newData.name = e.target.value;
            setData(newData);
          }}
        ></Entry>
        <Entry
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => {
            const newData = { ...data };
            newData.email = e.target.value;
            setData(newData);
          }}
        ></Entry>
        <Entry
          label="Phone Number"
          type="tel"
          value={data.phone}
          onChange={(e) => {
            const newData = { ...data };
            newData.phone = e.target.value;
            setData(newData);
          }}
        ></Entry>
      </Section>
      <Section title="Educational Experience">
        <Entry
          label="School Name"
          value={data.school}
          onChange={(e) => {
            const newData = { ...data };
            newData.school = e.target.value;
            setData(newData);
          }}
        ></Entry>
        <Entry
          label="Title of Study"
          value={data.studyTitle}
          onChange={(e) => {
            const newData = { ...data };
            newData.studyTitle = e.target.value;
            setData(newData);
          }}
        ></Entry>
        <Section title="Date of Study">
          <Entry
            label="From"
            type="date"
            value={data.studyDate.from}
            max={data.studyDate.to}
            onChange={(e) => {
              const newData = { ...data };
              newData.studyDate.from = e.target.value;
              setData(newData);
            }}
          ></Entry>
          <Entry
            label="To"
            type="date"
            value={data.studyDate.to}
            min={data.studyDate.from}
            onChange={(e) => {
              const newData = { ...data };
              newData.studyDate.to = e.target.value;
              setData(newData);
            }}
          ></Entry>
        </Section>
      </Section>
    </form>
  );
}
