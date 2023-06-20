import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import NavigatorParamList from '../../../../routes/types';
import { useTheme } from '../../../../styles';
import { useTextStyles, useViewStyles } from '../../../../hooks';

// import * as Device from 'expo-device';

const Second = (): JSX.Element => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<NavigatorParamList>>();

  const buttonStyles = useViewStyles(
    () => [
      {
        backgroundColor: theme.colors.secondaryMain,
        padding: theme.spacings.sXS,
        margin: theme.spacings.sXXS,
        borderRadius: theme.borders.radius.quark,
      },
    ],
    [theme.colors.primaryMain]
  );

  const textStyles = useTextStyles(
    () => [
      {
        color: theme.colors.neutralWhite,
        textAlign: 'center',
      },
    ],
    [theme.colors.primaryMain]
  );

  const handleNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.feedbackError500} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text
            style={{
              color: theme.colors.tertiary400,
              fontSize: 24,
              margin: theme.spacings.sXXS,
            }}
          >
            2° tela com funcionalidades
          </Text>
        </View>

        <TouchableOpacity style={buttonStyles} onPress={handleNavigation}>
          <Text style={textStyles}>Voltar para a 1° tela</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Second;
