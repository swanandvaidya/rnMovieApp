import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const bgImage = require('../assets/bg_movie_splash.png');

const WelcomeScreen = () => {
  return (
    <View style={{backgroundColor: '#1F1D2B', flex: 1}}>
      <ImageBackground
        source={bgImage}
        style={styles.imgContainer}
        resizeMode="cover">
        <View
          style={{
            backgroundColor: '#1F1D2B',
            width: '100%',
            padding: 10,
            position: 'absolute',
            justifyContent: 'flex-end',
          }}>
          <Text style={styles.whiteHeader}>Discover Your</Text>
          <Text style={styles.orangeHeader}>Favourite Show</Text>
          <Text style={styles.whiteHeader}>Watch Now or Watch Later</Text>
          <Text style={styles.txtDesc}>
            You can browse movies and shows by genre, search for specific title,
            or check out our recommendation for you.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#FA6207',
              padding: 10,
              borderRadius: 100,
              margin: 10,
            }}>
            <Text style={styles.txtSignup}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  whiteHeader: {
    fontSize: 32,
    color: 'white',
    fontWeight: '500',
    marginHorizontal: 10,
  },
  orangeHeader: {
    fontSize: 32,
    color: '#FA6207',
    fontWeight: '500',
    marginHorizontal: 10,
  },
  txtSignup: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  txtDesc: {
    color: 'gray',
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default WelcomeScreen;
