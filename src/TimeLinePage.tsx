import {NavigationHeader} from './components/NavigationHeader'
import {FirstSubHeader} from "./components/FirstSubHeader";
import {TimeLine} from "./components/TimeLine";

function TimeLinePage() {

    return (
            <>
                <NavigationHeader></NavigationHeader>
                <FirstSubHeader title={'Nossa Historia'} id={'nossa-historia'} invert={true}/>
                <TimeLine/>
            </>
    )
}

export default TimeLinePage
