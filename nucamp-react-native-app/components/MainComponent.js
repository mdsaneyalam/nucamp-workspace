import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import { View } from 'react-native';
import CampsiteInfo from './CampsiteInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          campsites: CAMPSITES,
          selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory campsites={this.state.campsites} onPress={campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
            </View>
        );
    }
}

export default Main;