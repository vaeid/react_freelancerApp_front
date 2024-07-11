import Loading from './Loading';

export default function ConfirmDelete({ resourceName, onclose, disabled, onConfirm, isDeleting }) {
  return (
    <div>
      <h2 className='text-bold text-base mb-8'>
        آیا از حذف
        <span className='text-xl text-primary-900'> {resourceName} </span>
        مطمئن هستید؟
      </h2>
      <div className='flex justify-between items-center gap-x-6'>
        <button className='btn btn--primary  flex-1' onClick={onclose} disabled={disabled}>
          لغو
        </button>
        {isDeleting ? (
          <Loading spinner='InfinitySpin' />
        ) : (
          <button className='btn btn--danger flex-1 ' disabled={disabled} onClick={onConfirm}>
            حذف
          </button>
        )}
      </div>
    </div>
  );
}
