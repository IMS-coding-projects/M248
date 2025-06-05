import "@/App.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent.tsx';
import {ThemeProvider} from "@/components/ui/theme-provider.tsx";
import {Toaster} from './components/ui/sonner';

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <ThemeProvider>
                    <Header/>
                    <MainContent/>
                    <Footer/>
                    <Toaster/>
                </ThemeProvider>
            </div>
        </>
    )
}

export default App
