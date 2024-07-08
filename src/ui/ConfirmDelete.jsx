export default function ConfirmDelete({ resourcename, onclose }) {
  return (
    <div>
      <h2 className='text-bold text-base mb-8'>
        آیا از حذف
        {resourcename} مطمئن هستید؟
      </h2>
      <div className='flex justify-between items-center gap-x-6'>
        <button className='btn btn--primary  flex-1' onClick={onclose}>
          لغو
        </button>
        <button className='btn btn--danger flex-1 '>حذف</button>
      </div>
    </div>
  );
}
