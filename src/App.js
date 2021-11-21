import './App.css';
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Shortlisted from './pages/Shortlisted/Shortlisted';
import Rejected from './pages/Rejected/Rejected';
import EditCandidate from './pages/EditCandidateStatus/EditCandidate';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shortlisted" element={<Shortlisted />} />
        <Route exact path="/rejected" element={<Rejected />} />
        <Route exact path="/editCandidate/:id" element={<EditCandidate />} />
      </Routes>
    </Fragment>
  )
}

export default App;
