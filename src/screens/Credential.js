import React, { useState } from 'react'
import { Switch, View } from 'react-native'

import CredentialFront from '../components/CredentialFront'
import CredentialBack from '../components/CredentialBack'
import { styles } from '../styles/CredentialStyles'

const Credential = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>
      {isEnabled ? <CredentialBack /> : <CredentialFront />}
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default Credential
