import "../styles/Form.css";
import { Company } from "./Display.jsx"

function Entry({ label, type, value, onChange, min, max, placeholder }) {
  const id = label.replace(/ /g, "-").toLowerCase();

  return (
    <div className="entry">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ? type : "text"}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

function CompanyEntry({ data, setData, index, returnCompaniesView }) {
  const company = data["companies"][index];
  const setCompanyData = (dataKey, newValue) => {
    const newData = { ...data };
    newData["companies"][index][dataKey] = newValue;
    setData(newData);
  };

  return (
    <div className="company-entry">
      <div>
        <button className="return" onClick={returnCompaniesView}>
          &lt;
        </button>
        <Entry
          label="Company Name"
          value={company.name}
          placeholder="Nabisco"
          onChange={(e) => {
            setCompanyData("name", e.target.value);
          }}
        ></Entry>
        <Entry
          label="Position Title"
          value={company.position}
          placeholder="CEO"
          onChange={(e) => {
            setCompanyData("position", e.target.value);
          }}
        ></Entry>
        <Section title="Main Job Responsabilities" className="responsabilities">
          <ul>
            {company.responsabilities.map((responsability, index) => {
              return (
                <li key={responsability.id}>
                  {
                    <>
                      <Entry
                        label={"Responsability: "}
                        value={responsability.value}
                        placeholder="Tasting Oreos"
                        onChange={(e) => {
                          const newResponsabilities = [
                            ...company.responsabilities,
                          ];
                          newResponsabilities[index]["value"] = e.target.value;
                          setCompanyData(
                            "responsabilities",
                            newResponsabilities
                          );
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
                          setCompanyData(
                            "responsabilities",
                            newResponsabilities
                          );
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
        <Section title="Dates Worked" className="date">
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
      </div>

      <div className="company-buttons">
        <button
          className="remove-company"
          onClick={(e) => {
            e.preventDefault();
            const newData = { ...data };
            newData.companies.splice(index, 1);
            returnCompaniesView();
            setData(newData);
          }}
        >
          Delete
        </button>
        <button className="submit-company" onClick={returnCompaniesView}>
          Submit Company
        </button>
      </div>
    </div>
  );
}

function Section({ title, children, className }) {
  return (
    <fieldset className={className}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}

export default function Form({ data, setData, editCompanyIndex, setEditCompanyIndex }) {
  const returnCompaniesView = () => {
    setEditCompanyIndex(null);
  };

  return (
    <form>
      <div>
        <Section title="General Information">
          <Entry
            label="Name"
            value={data.name}
            placeholder="Linda Martell"
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
            placeholder="toobusy@memail.com"
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
            placeholder="0210398301"
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
            placeholder="University of Servington"
            onChange={(e) => {
              const newData = { ...data };
              newData.school = e.target.value;
              setData(newData);
            }}
          ></Entry>
          <Entry
            label="Title of Study"
            value={data.studyTitle}
            placeholder="Biotech & Genetic Engineering"
            onChange={(e) => {
              const newData = { ...data };
              newData.studyTitle = e.target.value;
              setData(newData);
            }}
          ></Entry>
          <Section title="Date of Study" className="date">
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
      </div>
      <Section title="Practical Experience" className="practical-exp">
        {editCompanyIndex != null ? (
          <CompanyEntry
            data={data}
            setData={setData}
            index={editCompanyIndex}
            returnCompaniesView={returnCompaniesView}
          ></CompanyEntry>
        ) : (
          <>
            <div className="companies">
              {data.companies.map((company, index) => {
                return (
                  <Company
                    key={company.id}
                    data={data}
                    index={index}
                    setEditCompanyIndex={setEditCompanyIndex}
                  ></Company>
                );
              })}
            </div>

            <button
              className="add-company"
              onClick={(e) => {
                e.preventDefault();
                if (data.companies.length < 6) {
                  const newData = { ...data };
                  newData.companies.push(data.newCompany());
                  setData(newData);
                }
              }}
            >
              Add Company
            </button>
          </>
        )}
      </Section>
    </form>
  );
}
