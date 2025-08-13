import './App.css';
import GlobalStyle from '@/styles/global.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/user/Home.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/styles/Layout.tsx';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme/theme.ts';
import Header from '@/components/Header.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Layout>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
