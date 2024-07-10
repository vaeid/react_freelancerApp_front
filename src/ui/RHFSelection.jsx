export default function RHFSelection({ label, options, name, register, watch, errors, required }) {
  return (
    <div>
      <label htmlFor='{name}' className='mb-2 block text-secondary-700'>
        {label} {required && <span className='text-error'>*</span>}
      </label>
      <select {...register(name)} id='{name}' className='textField__input'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && <span className='text-error block text-sm mt-2'>{errors[name]?.message}</span>}
    </div>
  );
}
