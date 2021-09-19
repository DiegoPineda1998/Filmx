import * as Font from "expo-font";
    
const useFonts = async () => {
    await Font.loadAsync({
        'Montserrat-Regular': { uri: require('../assets/fonts/Montserrat-Regular.otf') },
        'Montserrat-Black': { uri: require('../assets/fonts/Montserrat-Black.otf') },
        'Montserrat-SemiBold': { uri: require('../assets/fonts/Montserrat-SemiBold.otf') },
        'Montserrat-Bold': { uri: require('../assets/fonts/Montserrat-Bold.otf') }
    });
};

export default useFonts;