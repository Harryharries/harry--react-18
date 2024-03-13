import ReactDOM from 'react-dom/client'
import './global.css'
// import { ThemeProvider } from './pages/interview/context/provider/ThemeProvider'
// import InterviewPage from './pages/interview/interview'
// import Playground from './pages/test/Playground'
import { PageSearch } from './pages/interview/pageSearch'
import { ProductProvider } from './pages/interview/context/provider/ProductProvider'


// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductProvider>
    <PageSearch></PageSearch>
  </ProductProvider>

  // <ThemeProvider>
  //   <InterviewPage></InterviewPage>
  // </ThemeProvider>
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
    // <Playground></Playground>

)
