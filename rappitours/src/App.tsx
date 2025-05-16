import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent';
import {ThemeProvider} from "@/components/theme-provider.tsx";

function App() {
  return (
    <>
        <ThemeProvider>
        <Header/>
        <MainContent/>
        <Footer/>
        </ThemeProvider>
    </>
  )
}

export default App
