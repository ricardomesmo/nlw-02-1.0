import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import LandingImage from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

function Landing() {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((res) => {
      const { total } = res.data;

      setTotalConnections(total);
    });
  }, []);

  function handleNavigateToStudyPages() {
    navigate("Study");
  }

  function handleNavigateToGiveClassesPage() {
    navigate("GiveClasses");
  }
  return (
    <View style={styles.container}>
      <Image source={LandingImage} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo {"\n"}
        <Text style={styles.tittleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {"  "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
