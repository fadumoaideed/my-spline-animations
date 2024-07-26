import Spline from '@splinetool/react-spline';
import './spline.css';

export default function Example3() {
  return (
    <div>
      <main>
        <Spline scene="https://prod.spline.design/ttMtGrsjIYY1o6pK/scene.splinecode" />{' '}
      </main>

      <a href={`/example3`}>Next</a>
    </div>
  );
}
