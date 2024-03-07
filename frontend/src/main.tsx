import ReactDOM from 'react-dom/client'
import './global.css'
import { ThemeProvider } from './pages/interview/context/provider/ThemeProvider'
import InterviewPage from './pages/interview/interview'


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
    //<Playground></Playground>

)
