import {NavigationHeader} from './components/NavigationHeader'
import {AboutUs} from "./components/AboutUs";
import {FirstSubHeader} from "./components/FirstSubHeader";

function AboutUsPage() {

    return (
            <>
                <NavigationHeader></NavigationHeader>
                <FirstSubHeader title={'Quem Somos'} id={'quem-somos'} invert={true}/>
                <AboutUs/>
            </>
    )
}

export default AboutUsPage
