import { ListToolContainer, SortControl } from "./HotelsList.style";
function ListTool({ data, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const results = data.length;
  return (
    <ListToolContainer>
      <span>
        {results} <i>hotels in </i> <strong>Sydney.</strong>
      </span>
      <SortControl>
        <label htmlFor="sortBy">Sort By </label>
        <select
          name="sortBy"
          id="sortBySelect"
          onChange={handleChange}
          defaultValue={"default"}
        >
          <option value="default" disabled>
            Select...
          </option>
          <option value="high">Price hight-low</option>
          <option value="low">Price low-high</option>
        </select>
      </SortControl>
    </ListToolContainer>
  );
}

export default ListTool;
