import { CustomerReview, Footer, Specialoffer, SuperQuality, Subscribe, Hero, Services, Popularproduct,  } from "./sections"
import  Nav from "./Components/Nav"

const App = () =>(
  <main className="relative">
    <Nav/>
    <section className=" xl:padding-l wide:padding-r padding-b bg-hero bg-cover bg-center">
        <Hero/>
    </section>
    <section className="padding">
        <Popularproduct/>
    </section>
    <section className="padding">
        <SuperQuality/>
    </section>
    <section className="padding-x py-10">
        <Services/>
    </section>
    <section className="padding">
        <Specialoffer/>
    </section>
    <section className="padding bg-pale-blue">
        <CustomerReview/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
    </section>
    <section className="padding-x bg-black padding-t pb-8">
        <Footer/>
    </section>
  </main>

)

export default App