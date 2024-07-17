import { useSearchParams } from 'react-router-dom';

function Filter({ filterField, options }) {
  const [searchparams, setSearchparams] = useSearchParams();
  const currentFilter = searchparams.get(filterField || options.at(0).value);
  function handelChange(value) {
    searchparams.set(filterField, value);
    setSearchparams(searchparams);
  }

  return (
    <div className='flex justify-center items-center gap-2 text-xs'>
      <span className='text-secondary-700'>وضعیت</span>
      <div className=' flex justify-center items-center gap-1 border border-secondary-100 bg-secondary-0 p-1 rounded-2xl'>
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              disabled={isActive}
              onClick={() => handelChange(value)}
              key={value}
              className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300  ${
                isActive ? '!bg-primary-900 text-white' : 'bg-secondary-100 text-secondary-900'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
