export default function Table({ children }) {
  return (
    <div className='bg-secondary-0 overflow-x-auto'>
      <table className='border-collapse table-auto w-full'>{children}</table>
    </div>
  );
}
function TableHeader({ children }) {
  return (
    <thead className=''>
      <tr className='title-row'>{children}</tr>
    </thead>
  );
}
function TableBody({ children }) {
  return <tbody className=''>{children}</tbody>;
}
function TableRow({ children }) {
  return <tr className=' bg-secondary-0 border-b-2 shadow-inner hover:bg-primary-100/50'>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
