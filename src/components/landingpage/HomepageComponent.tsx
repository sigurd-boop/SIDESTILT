

const HomePageComponent = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Velkommen til Sidestilt AS</h1>
        <p className="lead">
          Utforsk vårt unike utvalg av russebuss-tjenester og tilbehør. Sidestilt AS sørger for minneverdige russefeiringer!
        </p>
        <hr className="my-4" />
        <p>
          Vi tilbyr skreddersydde løsninger som gjør din russefeiring til noe helt spesielt.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/Russebuss" role="button">Utforsk våre tjenester</a>
        </p>
      </div>

      <div className="row">
        <div className="col-md-4">
          <h2>Våre Russedesign</h2>
          <p>Oppdag vårt unike utvalg av russebusser og tilbehør. Skap ditt eget unike design!</p>
          <p><a className="btn btn-secondary" href="/russedesign" role="button">Se våre design &raquo;</a></p>
        </div>
        <div className="col-md-4">
          <h2>Russedeler og Utstyr</h2>
          <p>Finn alt du trenger for å gjøre din russefeiring komplett. Fra bussdekor til festutstyr.</p>
          <p><a className="btn btn-secondary" href="/russedeler" role="button">Se vårt utstyr &raquo;</a></p>
        </div>
        <div className="col-md-4">
          <h2>Kontakt Oss</h2>
          <p>Har du spørsmål eller ønsker mer informasjon? Kontakt Sidestilt AS for personlig service.</p>
          <p><a className="btn btn-secondary" href="/contact" role="button">Kontakt oss &raquo;</a></p>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
