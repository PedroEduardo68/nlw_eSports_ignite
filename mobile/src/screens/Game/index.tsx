
import {SafeAreaView} from 'react-native-safe-area-context'
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native';




import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps} from '../../components/DuoCard';
import { useEffect, useState } from 'react';





export function Game() {
  const [duos,setDous] = useState<DuoCardProps[]>([])

  const route = useRoute();
  const game = route.params as GameParams;
  const navigation =useNavigation();

  const handleGoBack = () =>{
    navigation.goBack();
  }


  useEffect(() =>{
    fetch(`http://192.168.18.145:3333/games/${game.id}/ads`)
      .then(response =>response.json())
      .then(data =>setDous(data))
  }, [])

  return (
    <Background>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo 
                name='chevron-thin-left'
                color={THEME.COLORS.CAPTION_300}
                size={20}
              />
            </TouchableOpacity>

            <Image
              source={logoImg} 
              style={styles.logo} 
            />

            <View style={styles.right} />


          
          </View>


          <Image 
            source={{uri: game.bannerUrl}}
            style={styles.cover}
          />


          <Heading 
              title={game.title}
              subtitle="Conecte-se e comece a jogar!"   
          />
          


        <FlatList 
          data={duos}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          ListEmptyComponent={()=>(
            <Text style={styles.emptyListText}>
              Não há anuncios publicados para esse jogo
            </Text>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
              <DuoCard 
              data={item}
              onConnect={()=>{}}
            />
          )}
        />


        </SafeAreaView>
    </Background>
  );
}