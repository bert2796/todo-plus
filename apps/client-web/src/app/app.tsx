// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link,Route, Routes } from 'react-router-dom';

import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="client-web" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
          path="/"
        />
        <Route
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
          path="/page-2"
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
