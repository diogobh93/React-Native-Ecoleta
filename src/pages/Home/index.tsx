import React, { useState } from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';


const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points', {uf, city});
  }

  function handleSelectOption(value: string) {
    if(value == 'Belo Horizonte' || value == 'MG'){
      setUf('MG');
      setCity('Belo Horizonte');
    } else if (value == 'São Paulo' || value == 'SP') {
      setUf('SP');
      setCity('São Paulo');
    } else {
      setUf('RJ');
      setCity('Rio de Janeiro');
    }
  }

    return (
      <ImageBackground
        style={styles.container}
        source={require('../../assets/home-background.png')}
        imageStyle={{ height: 368, width: 274 }}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')}></Image>
          <Text style={styles.title}>
            Seu marketplace de coleta de resíduos
          </Text>
          <Text style={styles.description}>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.input}>
            <RNPickerSelect
              style={{ inputIOS: { color: '#34CB79' },inputAndroid: { color: '#34CB79' }}}
              onValueChange={(value) => handleSelectOption(value)}
              placeholder={{ label: uf !== '' ? uf : 'Estado', value: null }}
              items={[
                { label: 'Minas Gerais', value: 'MG' },
                { label: 'São Paulo', value: 'SP' },
                { label: 'Rio de Janeiro', value: 'RJ' },
              ]}
            />
          </View>
          <View style={styles.input}>
            <RNPickerSelect
              style={{ inputIOS: { color: '#34CB79' }, inputAndroid: { color: '#34CB79' }}}
              onValueChange={(value) => handleSelectOption(value)}
              placeholder={{ label: city !== '' ? city : 'Cidade', value: null }}
              items={[
                { label: 'Belo Horizonte', value: 'Belo Horizonte' },
                { label: 'São Paulo', value: 'São Paulo' },
                { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
              ]}
            />
          </View>
          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name='arrow-right' color='#FFF' size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}> Entrar </Text>
          </RectButton>
        </View>
      </ImageBackground>
    );
};

export default Home;