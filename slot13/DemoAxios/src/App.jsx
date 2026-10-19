import React from 'react';
import AxiosDemo from './components/AxiosDemo';
import AxiosParamsDemo from './components/AxiosParamsDemo';

function App() {
  return (
    <div className="container mt-4 mb-5">
      <h1 className="text-center mb-4 text-primary fw-bold">DemoAxios</h1>
      
      {/* Component bài cũ */}
      <AxiosDemo />

      {/* Component Bài 2.1 */}
      <AxiosParamsDemo />
    </div>
  );
}

export default App;