import React from 'react';
import Hero from '../Components/Hero';
import Feature from '../Components/Feature';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import iconMoney from '../designs/img/icon-money.webp';
import iconChat from '../designs/img/icon-chat.webp';
import iconSecurity from '../designs/img/icon-security.webp';


import '../designs/css/main.css';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            iconSrc={iconChat}
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <Feature
            iconSrc={iconMoney}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <Feature
            iconSrc={iconSecurity}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
      <Footer />

    </>
  );
}

export default Home;
