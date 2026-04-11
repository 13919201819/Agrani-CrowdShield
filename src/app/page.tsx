// // import Hero from "../components/landing/Hero";
// export default function Page() {
//   return (
//     <main className="bg-white text-black">
//       {/* <Hero /> */}
//     </main>
//   );
// }

import Hero from "@/components/landing/Hero";
import About from "@/components/landing/about/About";
import Applications from "@/components/landing/applications/Applications";
import Contact from "@/components/landing/contact/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Applications />
      <Contact />
    </main>
  );
}