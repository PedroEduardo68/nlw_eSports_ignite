
import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { MaterialIcons} from '@expo/vector-icons'
import { THEME } from '../../theme';

interface Props extends ModalProps {
    discord: string,
    onClose: () => void;
}


export function DuoMatch({discord, onClose,...rest}:Props) {
  return (
    <Modal
    transparent
    statusBarTranslucent
        {...rest}
    >
        <View style={styles.container}>
          <View style={styles.content} >
            <TouchableOpacity onPress={onClose} style={styles.closeIcon} >
              <MaterialIcons 
               name="close"
               size={20}
               color={THEME.COLORS.CAPTION_500}
               />
            </TouchableOpacity>
            <Text style={styles.discord} >
              {discord}
            </Text>
          </View>
        </View>
    </Modal>
  );
}