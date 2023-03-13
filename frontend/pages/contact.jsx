import React from 'react';
import Map from '@/components/Map';
import Social from '@/components/Social';

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        Welkom bij BCP&lsquo; het auto bedrijf waar u terecht kunt voor al uw autozaken.
        Bij BCP hebben we een passie voor auto&apos;s en staan we altijd klaar om u te helpen bij de aankoop&lsquo; verkoop&lsquo; inruil&lsquo; onderhoud en reparatie van uw auto.
        Of u nu op zoek bent naar een betrouwbare tweedehands auto&lsquo; uw huidige auto wilt inruilen voor een ander model&lsquo; of uw auto wilt laten onderhouden door ervaren monteurs&lsquo; bij BCP bent u aan het juiste adres.
        Wij bieden een persoonlijke aanpak&lsquo; een uitgebreide service en eerlijke prijzen.
        Ontdek ons ruime aanbod aan tweedehands auto&apos;s en onze professionele diensten op onze website en neem contact met ons op voor meer informatie.
        <div className="social">
          <Social/>
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  )
}
