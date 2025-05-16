import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent';
import {ThemeProvider} from "@/components/theme-provider.tsx";
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header/>
        <MainContent/>
        <Footer/>
        <Toaster />
      </ThemeProvider>
    </>
  )
}

export default App
