//import av alle nødvendige komponenter som skal på siden
import Footer from '../components/shared/Footer';
import OmOss from '../components/shared/OmOss';

// Definerer 'ApiDocumentationPage' som en funksjonell komponent.
const AboutPage = () => {
    return (
        <>
        <OmOss />
        <Footer />
        </>
    );
};
//Eksport for bruk andre steder i applikasjonen
export default AboutPage;
