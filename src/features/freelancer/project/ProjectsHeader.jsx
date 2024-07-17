import useCategories from '../../../hooks/useCategories';
import Filter from '../../../ui/Filter';
import FilterDropDown from '../../../ui/FilterDropDown';

function ProjectsHeader() {
  const { transformCategories } = useCategories();
  const categoryOptions = [{ value: 'All', label: 'دسته بندی (همه)' }, ...transformCategories];
  const sortOptions = [
    { value: 'earliest', label: ' مرتب سازی (جدیدترین)' },
    { value: 'latest', label: ' مرتب سازی (قدیمی ترین)' },
  ];
  const statusOptions = [
    { value: 'All', label: ' همه' },
    { value: 'OPEN', label: ' باز' },
    { value: 'CLOSE', label: ' بسته' },
  ];

  return (
    <div className='flex items-center justify-center text-slate-700 mb-8 gap-4'>
      <Filter filterField='status' options={statusOptions} />
      <FilterDropDown filterField='category' options={categoryOptions} />
      <FilterDropDown filterField='sort' options={sortOptions} />
    </div>
  );
}

export default ProjectsHeader;
