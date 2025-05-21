export default function Form({ data, setData }) {
  return (
    <form>
      <input
        type="text"
        value={data.name}
        onChange={(e) => {
          const newData = { ...data };
          newData.name = e.target.value;
          setData(newData);
        }}
      />
    </form>
  );
}
