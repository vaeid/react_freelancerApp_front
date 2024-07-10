import { TagsInput } from 'react-tag-input-component';
import RHFSelection from '../../ui/RHFSelection';
import TextField from '../../ui/TextField';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import DatePickerField from '../../ui/DatePickerField';
import useCategories from '../../hooks/useCategories';
export default function CreateProjectForm() {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories } = useCategories();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name='title'
        validationSchema={{
          required: 'عنوان ضروری است',
          minLength: { value: 10, message: 'حداقل 10 کاراکتر' },
        }}
        label='عنوان پروژه'
        required
        errors={errors}
        register={register}
      />
      <TextField
        name='description'
        validationSchema={{
          required: 'توضیحات ضروری است',
          minLength: { value: 10, message: 'حداقل 10 کاراکتر' },
        }}
        label='توضیحات پروژه'
        required
        errors={errors}
        register={register}
      />
      <TextField
        type='number'
        name='budget'
        validationSchema={{
          required: 'بودجه ضروری است',
        }}
        label='بودجه پروژه'
        required
        errors={errors}
        register={register}
      />
      <RHFSelection
        name='category'
        validationSchema={{
          required: 'دسته بندی ضروری است',
        }}
        label=' دسته بندی'
        required
        options={categories}
        errors={errors}
        register={register}
      />
      <div>
        <label className='mb-2 block text-secondary-700'>تگ</label>
        <TagsInput value={tags} onChange={setTags} name='tags' placeHolder='تگ ها را وارد کنید' />
      </div>
      <DatePickerField date={date} setDate={setDate} label='ددلاین' />
      <button className='btn btn--primary btn--block ' type='submit'>
        ذخیره
      </button>
    </form>
  );
}
