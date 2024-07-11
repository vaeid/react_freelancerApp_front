import { Switch, Field } from '@headlessui/react';
export default function Toggle({
  enabled,
  onChange,
  text = { enabled: '', disable: '' },
  color = { enabled: 'bg-rose-400', disable: 'bg-green-400' },
}) {
  return (
    <Field>
      <Switch
        checked={enabled}
        onChange={onChange}
        className={`group inline-flex h-6 w-14 items-center rounded-full  transition ${color.enabled} data-[checked]:${color.disable} `}
      >
        <span className='size-4 -translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-9' />
        <span className='text-secondary-0 -translate-x-2  group-data-[checked]:translate-x-1'>
          {enabled ? text.enabled : text.disable}
        </span>
      </Switch>
    </Field>
  );
}
