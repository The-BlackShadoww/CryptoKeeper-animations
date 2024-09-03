import MainNav from "@/components/MainNav";

const MainLayout = ({ children }) => {
    return (
        <>
            <main className="max-w-[1280px] mx-auto">
                <MainNav />
                {children}
            </main>
        </>
    );
};

export default MainLayout;
