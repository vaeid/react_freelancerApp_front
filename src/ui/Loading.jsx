import { ThreeDots } from 'react-loader-spinner';
export default function Loading({ width = '75', height = '40' }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color='rgb(var(--color-primary-900))'
      wrapperStyle={{
        diplay: 'flex',
        justifyContent: 'center',
      }}
    />
  );
}
