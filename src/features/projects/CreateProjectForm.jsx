import { TagsInput } from 'react-tag-input-component';
import RHFSelection from '../../ui/RHFSelection';
import TextField from '../../ui/TextField';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import DatePickerField from '../../ui/DatePickerField';
import useCategories from '../../hooks/useCategories';
import useCreateProject from './useCreateProject';
import Loading from '../../ui/Loading';
import useEditProject from './useEditProject';
export default function CreateProjectForm({ projectToEdit = {}, onClose }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const { title, description, budget, category, tags: prevTags, deadline } = projectToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = { title, description, budget, category: category._id };
  }
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ''));
  const { categories } = useCategories();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });
  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditing } = useEditProject();
  const onSubmit = (data) => {
    const newProject = { ...data, tags, deadline: new Date(date).toISOString() };
    if (isEditSession) {
      editProject(
        { newProject, id: editId },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
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
      <div className='!mt-8'>
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <button type='submit' className='btn btn--primary w-full'>
            ذخیره
          </button>
        )}
      </div>
    </form>
  );
}
