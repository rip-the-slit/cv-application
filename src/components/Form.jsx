function Entry({ label, type, value, onChange }) {
  const id = label.replace(/ /g, "-").toLowerCase();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ? type : "text"}
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
    </form>
  );
}
