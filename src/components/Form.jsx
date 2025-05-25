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

function CompanyEntry({ data, setData, index }) {
  const company = data["companies"][index];
  const setCompanyData = (dataKey, newValue) => {
    const newData = { ...data };
    newData["companies"][index][dataKey] = newValue;
    setData(newData);
  };

  return (
    <div className="company">
      <Entry
        label="Company Name"
        value={company.name}
        onChange={(e) => {
          setCompanyData("name", e.target.value);
        }}
      ></Entry>
      <Entry
        label="Position Title"
        value={company.position}
        onChange={(e) => {
          setCompanyData("position", e.target.value);
        }}
      ></Entry>
      <Section title="Main Job Responsabilities">
        <ul>
          {company.responsabilities.map((responsability, index) => {
            return (
              <li key={responsability.id}>
                {
                  <>
                    <Entry
                      label={"Responsability " + (index + 1)}
                      value={responsability.value}
                      onChange={(e) => {
                        const newResponsabilities = [
                          ...company.responsabilities,
                        ];
                        newResponsabilities[index]["value"] = e.target.value;
                        setCompanyData("responsabilities", newResponsabilities);
                      }}
                    ></Entry>
                    <button
                      className="remove-responsability"
                      onClick={(e) => {
                        e.preventDefault();
                        const newResponsabilities = [
                          ...company.responsabilities,
                        ];
                        newResponsabilities.splice(index, 1);
                        setCompanyData("responsabilities", newResponsabilities);
                      }}
                    >
                      Delete
                    </button>
                  </>
                }
              </li>
            );
          })}
        </ul>
        <button
          className="add-responsability"
          onClick={(e) => {
            e.preventDefault();
            const newResponsabilities = [...company.responsabilities];
            newResponsabilities.push(company.newResponsability());
            setCompanyData("responsabilities", newResponsabilities);
          }}
        >
          Add Responsability
        </button>
      </Section>
      <Section title="Dates Worked">
        <Entry
          label="From"
          type="date"
          value={company.workedDate.from}
          max={company.workedDate.to}
          onChange={(e) => {
            setCompanyData("workedDate", {
              ...company.workedDate,
              from: e.target.value,
            });
          }}
        ></Entry>
        <Entry
          label="To"
          type="date"
          value={company.workedDate.to}
          min={company.workedDate.from}
          onChange={(e) => {
            setCompanyData("workedDate", {
              ...company.workedDate,
              to: e.target.value,
            });
          }}
        ></Entry>
      </Section>
      <button
        className="remove-company"
        onClick={(e) => {
          e.preventDefault();
          const newData = { ...data };
          newData.companies.splice(index, 1);
          setData(newData);
        }}
      >
        Delete
      </button>
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
      <Section title="Practical Experience">
        {data.companies.map((company, index) => {
          return (
            <CompanyEntry
              key={company.id}
              data={data}
              setData={setData}
              index={index}
            ></CompanyEntry>
          );
        })}
        <button
          className="add-company"
          onClick={(e) => {
            e.preventDefault();
            const newData = { ...data };
            newData.companies.push(data.newCompany());
            setData(newData);
          }}
        >
          Add Company
        </button>
      </Section>
    </form>
  );
}
