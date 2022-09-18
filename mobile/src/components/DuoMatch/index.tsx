
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { MaterialIcons} from '@expo/vector-icons'
import { THEME } from '../../theme';
import {CheckCircle} from 'phosphor-react-native'
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard' 
import { useState } from 'react';

interface Props extends ModalProps {
    discord: string,
    onClose: () => void;
}




export function DuoMatch({discord, onClose,...rest}:Props) {
  const [isCopping, setIsCopping] = useState(false)


  const handleCopyDiscordtoClipboard = async () =>{
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)

    Alert.alert('Discord Copiado!', 'Usuario Copiado para voce colocar no discord e achar essa pessoa.')
    setIsCopping(false)
  }

  return (
    <Modal
    transparent
    animationType='fade'
    statusBarTranslucent
        {...rest}
    >
        <View style={styles.container}>
          <View style={styles.content} >
            <TouchableOpacity 
            onPress={onClose} 
            style={styles.closeIcon} 
            >
              <MaterialIcons 
               name="close"
               size={20}
               color={THEME.COLORS.CAPTION_500}
               />
            </TouchableOpacity>

            <CheckCircle 
              size={64}
              color={THEME.COLORS.SUCCESS}
              weight="bold"
            />

            <Heading 
              title="Let's play!"
              subtitle='Agora é so começar a jogar!'
              style={{alignItems: "center", marginTop:24 }}
           />
            <Text 
            style={styles.label}
            >
              Adicione no discord!
            </Text>

            <TouchableOpacity 
            disabled={isCopping}
            onPress={handleCopyDiscordtoClipboard}
            style={styles.discordButtom}
            >
              <Text style={styles.discord} >
                {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
              </Text>
            </TouchableOpacity>

          </View>
        </View>
    </Modal>
  );
}