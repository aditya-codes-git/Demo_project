import NavHeader from "@/components/ui/nav-header"

function HomeDemo() {
  return (
    <header className="fixed top-8 left-0 right-0 z-[60] flex justify-center items-center px-6 pointer-events-none">
        <div className="pointer-events-auto">
            <NavHeader />
        </div>
    </header>
  );
}

export { HomeDemo }
