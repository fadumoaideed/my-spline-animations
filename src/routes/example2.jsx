import Spline from '@splinetool/react-spline';
import './spline.css';

export default function Example2() {
  return (
    <div>
      <main>
        <Spline scene="https://prod.spline.design/vZ-aMubFDyZxDOFH/scene.splinecode" />{' '}
      </main>
      <a href={`/example3`}>Next</a>
    </div>
  );
}
