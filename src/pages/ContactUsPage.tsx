//import av nødvendige komponenter vi skal bruke på siden
import Footer from '../components/shared/Footer';
import KontaktOss from '../components/shared/KontaktOss';

// Definerer 'ContactPage' som en funksjonell komponent og returnerer litt enkel contact information, lagd for å simulere en ekte nettside.
const ContactUsPage = () => {
    return (
        <>
       <KontaktOss />
       <Footer />
       </>
    );
};

//Eksport for bruk andre steder i applikasjonen
export default ContactUsPage;
