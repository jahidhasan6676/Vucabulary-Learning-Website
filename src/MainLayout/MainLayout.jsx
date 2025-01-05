import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            
            <header className="mb-20">
                <Header></Header>
            </header>
            <main className="w-10/12 mx-auto min-h-[calc(100vh-390px)]">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
           
        </div>
    );
};

export default MainLayout;