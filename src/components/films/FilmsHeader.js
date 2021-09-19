import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

import colors from '../../res/colors';

const FilmsHeader = () => {

    return(
        <View style={styles.header}>
            <Image
                style={styles.imageHeader}
                source={require(('../../assets/logo.png'))}
            />
            <Text style={styles.text}>¡Find your favorite film or serie!</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    imageHeader:{
        width: 107,
        height: 25,
        marginTop: 10,
    },
    text:{
        color: colors.white,
        fontSize: 10,
        marginTop: 5,
        fontFamily: 'Montserrat-Regular'
    }
});

export default FilmsHeader;