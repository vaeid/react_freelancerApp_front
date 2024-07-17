export default function Select({ value, onChange, options }) {
  return (
    <select className='textField__input py-2 text-xs bg-secondary-0' value={value} onChange={onChange}>
      {options.map((item) => {
        return (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}
