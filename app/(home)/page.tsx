import {
  About,
  Header,
  Navbar,
  Contact,
  Footer,
  Work,
  Skills,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
