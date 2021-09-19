import React from 'react';
import { Image, StyleSheet} from 'react-native';

const Logo = () => {
    return (
        <Image
            style={styles.imageHeader}
            source={require(('../../assets/logo.png'))}
        />
    );
}

const styles = StyleSheet.create({
    imageHeader: {
        width: 102,
        height: 24,
        marginRight: 15
    }
});

export default Logo;