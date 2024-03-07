import ReactDOM from 'react-dom/client'
import './global.css'
import InterviewPage from './pages/interview/interview'
import { ThemeProvider } from './pages/interview/context/provider/ThemeProvider'
// import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from './AppRoutes';
// import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';
// import { QueryClient, QueryClientProvider } from "react-query";
// import { Toaster } from 'sonner';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(

  <ThemeProvider>
    <InterviewPage></InterviewPage>
  </ThemeProvider>
  // <React.StrictMode>
  //   <Router>
  //     <QueryClientProvider client={queryClient}>
  //       <Auth0ProviderWithNavigate>
  //         <AppRoutes></AppRoutes>
  //         <Toaster visibleToasts={1} position="top-right" richColors />
  //       </Auth0ProviderWithNavigate>
  //     </QueryClientProvider>
  //   </Router>
  // </React.StrictMode>,
    // <Router>
    //   <AppRoutes></AppRoutes>
    // </Router>

)
