import React from 'react';

export default function TextField({ lable, value, onChange, name }) {
  return (
    <div>
      <label htmlFor={name} className='m-2 block'>
        {lable}:
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className='textField__input'
        type='text'
        placeholder={lable}
      />
    </div>
  );
}
