export default function RadioInput({ label, name, value, onchange, checked }) {
  return (
    <div className='flex item-center gap-x-2 text-secondary-600 '>
      <input
        type='radio'
        name={name}
        id={value}
        value={value}
        onChange={() => onchange(value)}
        className='cursor-pointer w-4 h-4 form-radio focus:ring-primary-600'
        checked={checked}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}
