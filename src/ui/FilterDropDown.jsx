import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function FilterDropDown({ options, filterField }) {
  const [searchparams, setSearchparams] = useSearchParams();
  const value = searchparams.get(filterField || '');
  function handelChange(e) {
    searchparams.set(filterField, e.target.value);
    setSearchparams(searchparams);
  }
  return <Select value={value} onChange={handelChange} options={options} />;
}

export default FilterDropDown;
