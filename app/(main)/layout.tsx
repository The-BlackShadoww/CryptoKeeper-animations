import MainNav from "@/components/MainNav";

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <main className="max-w-[1280px] mx-auto px-4 relative">
                <MainNav />
                {children}
            </main>
        </>
    );
};

export default MainLayout;
