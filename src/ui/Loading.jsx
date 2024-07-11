import { InfinitySpin, ThreeDots } from 'react-loader-spinner';
/**
 *
 * @param width = '75', height = '40', spinner =InfinitySpin ,ThreeDots
 * @returns
 */
export default function Loading({
  width = '75',
  height = '40',
  spinner = '',
  color = 'rgb(var(--color-primary-900))',
}) {
  switch (spinner) {
    case 'InfinitySpin':
      return <InfinitySpin visible={true} width={width} color={color} ariaLabel='infinity-spin-loading' />;

    default:
      return (
        <ThreeDots
          height={height}
          width={width}
          radius={9}
          color={color}
          wrapperStyle={{
            diplay: 'flex',
            justifyContent: 'center',
          }}
        />
      );
  }
}
