import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen');

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];

interface DataType {
  key: string;
  title: string;
  description: string;
  image: string;
}

const DATA: DataType[] = [
  {
    key: '3571572',
    title: 'Multi-lateral intermediate moratorium',
    description: "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: 'https://cdn-icons-png.flaticon.com/512/3588/3588204.png'
  },
  {
    key: '3571747',
    title: 'Automated radical data-warehouse',
    description: 'Use the optical SAS system, then you can navigate the auxiliary alarm!',
    image: 'https://cdn-icons-png.flaticon.com/512/1078/1078312.png'
  },
  {
    key: '3571680',
    title: 'Inverse attitude-oriented system engine',
    description: 'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
    image: 'https://cdn-icons-png.flaticon.com/512/2693/2693521.png'
  },
  {
    key: '3571603',
    title: 'Monitored global data-warehouse',
    description: 'We need to program the open-source IB interface!',
    image: 'https://cdn-icons-png.flaticon.com/512/2917/2917042.png'
  }
];

interface IndicatorProps {
  scrollX: Animated.Value;
}

const Indicator: React.FC<IndicatorProps> = ({ scrollX }) => {
  return (
    <View style={{ position: 'absolute', bottom: 50, flexDirection: 'row' }}>
      {DATA.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1, 0.8],
          extrapolate: 'clamp'
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp'
        });
        return (
          <Animated.View
            key={`indicator-${index}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              opacity,
              margin: 10,
              transform: [{ scale }]
            }}
          />
        );
      })}
    </View>
  );
};

interface BackdropProps {
  scrollX: Animated.Value;
}

const Backdrop: React.FC<BackdropProps> = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });

  return <Animated.View style={[StyleSheet.absoluteFillObject, { backgroundColor }]} />;
};

interface SquareProps {
  scrollX: Animated.Value;
}

const Square: React.FC<SquareProps> = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg']
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0]
  });

  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: '#fff',
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [{ rotate }, { translateX }]
      }}
    />
  );
};

const App: React.FC = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        contentContainerStyle={{ paddingBottom: 100 }}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: 'center', padding: 20 }}>
              <View style={{ flex: 0.7, justifyContent: 'center' }}>
                <Image source={{ uri: item.image }} style={{ width: width / 2, height: width / 2, resizeMode: 'contain' }} />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text style={{ color: '#fff', fontWeight: '800', fontSize: 28, marginBottom: 10 }}>{item.title}</Text>
                <Text style={{ color: '#fff', fontWeight: '300' }}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />

      {/* Botões de Login e Criar Conta */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.createAccountButton]}>
          <Text style={[styles.buttonText, { color: '#000' }]}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <Indicator scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  createAccountButton: {
    backgroundColor: '#ffe4e1',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  }
});

export default App;
