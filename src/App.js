// import './App.css';
import { Container } from 'components';
import { Case, CaseItem, Company, Product, Service, Tech, Root } from 'pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <div>Page Not Found</div>,
      children: [
        { index: true, element: <Container content={<Product />} /> },
        { path: '/tech', element: <Container content={<Tech />} /> },
        { path: '/company', element: <Container content={<Company />} /> },
        { path: '/case', element: <Container content={<Case />} /> },
        {
          path: '/case/:caseId',
          element: <Container content={<CaseItem />} />,
        },
        { path: '/service', element: <Container content={<Service />} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
