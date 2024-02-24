import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import FilterCards from "./sections/FilterCards";
import Footer from "./sections/Footer";
import FilterSection from "./sections/FilterSection";
import DataSection from "./sections/DataSection";
export default function Home() {
  return (
    <main className="relative">
      <Nav></Nav>
      <div className="min-h-screen overflow-x-hidden flex flex-col justify-start relative ">
        <section className="bg-gray-50 overflow-hidden relative px-5 sm:px-20 lg:px-20">
          <Hero></Hero>
        </section>
        <section className="padding">
          <FilterCards/>
          <section className="sm:py-10 lg:py-8 w-full">
            <div className="w-full flex items-start gap-6 self-center md:max-w-maxScreen mx-auto relative">
              <div className="hidden lg:flex flex-col gap-6 sticky top-0">
                <FilterSection/>
              </div>
              <div className="w-full">
                <DataSection></DataSection>
              </div>
            </div>
          </section>
        </section>
      </div>
      <section className="padding pb-8 bg-orange-500 text-white">
        <Footer></Footer>
      </section>
    </main>
  );
}
