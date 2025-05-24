import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-1 pt-[120px]">
                {children}
            </main>
            <Footer/>
        </div>
    );
}
 
export default Layout;