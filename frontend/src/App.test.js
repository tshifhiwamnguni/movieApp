import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

 {/* <Route path='/' element={<Splash/>}></Route>
            <Route path='log' element={<Login/>}></Route>
            <Route path='forgot' element={<ForgotPassword/>}></Route>
            <Route path='reset' element={<ResetPassword/>}></Route>
            <Route path='dashboard' element={<Home/>}></Route>
            <Route path="/" element={<Splash />}></Route>
            <Route path="/admin/login/" element={<Login />}></Route>
            <Route path="/admin/" element={<Home />}></Route>
            <Route path='/admin/profile/' element={<AdminProfile/>}></Route> */}
  
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
