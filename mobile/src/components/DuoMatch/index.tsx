
import { View, Modal, ModalProps, Text } from 'react-native';

import { styles } from './styles';

interface Props extends ModalProps {
    discord: string,
}


export function DuoMatch({discord, ...rest}:Props) {
  return (
    <Modal
    transparent
    statusBarTranslucent
        {...rest}
    >
        <View style={styles.container}>
          <View style={styles.content} >
            <Text style={styles.discord} >
              {discord}
            </Text>
          </View>
        </View>
    </Modal>
  );
}