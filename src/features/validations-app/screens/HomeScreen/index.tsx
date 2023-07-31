import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import NavigatorParamList from '../../../../routes/types';
import { useTheme } from '../../../../styles';
import { useTextStyles, useViewStyles } from '../../../../hooks';
import { service, UserType } from '../../../../service/RequestDefaultService';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

const Section = ({ children, title }: SectionProps): JSX.Element => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const HomeScreen = (): JSX.Element => {
  const theme = useTheme();
  const [userData, setUserData] = useState<UserType[]>();
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
    navigation.navigate('Second');
  };

  const getUser = useCallback(async () => {
    const response = await service.getAllUsersData();
    if (!response?.data) return null;
    setUserData(response.data);
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  const renderUserData = () => {
    if (!userData) return null;

    return <Section title="TELA 2">FIRST NAME: {userData[0].first_name}</Section>;
  };

  return (
    <SafeAreaView>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.feedbackError500}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View testID="first-screen">
          <Section title="TELA 1">Tela com funcionalidades</Section>
          {renderUserData()}
        </View>

        <TouchableOpacity style={buttonStyles} onPress={handleNavigation}>
          <Text testID="navigate-button" style={textStyles}>
            Acessa 2° Tela
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
