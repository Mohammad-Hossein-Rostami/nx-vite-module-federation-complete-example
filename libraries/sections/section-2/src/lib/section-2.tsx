import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

export function Section2() {
  const Home = lazy(() => import('./pages/home'));
  const Page1 = lazy(() => import('./pages/page-1'));
  const Page2 = lazy(() => import('./pages/page-2'));

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="section-1-page-1" element={<Page1 />} />
      <Route path="section-1-page-2" element={<Page2 />} />
    </Routes>
  );
}

export default Section2;
