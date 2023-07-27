import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../../assets/css/style";
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import ProfileInfo from "./Components/ProfileInfo";
import Academics from "./Components/Academics";
import Internships from "./Components/Internships";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Assessments from "./Components/Assessments";
import Skills from "./Components/Skills";
import Awards from "./Components/Awards";
import Events from "./Components/Events";

export default function Profile() {
  return (
    <ScrollView className="p-4">
      <TouchableOpacity
        className="p-4 mb-4 rounded w-full"
        style={Styles.loginBtn}
      >
        <Text className="text-lg font-bold text-center text-white">
          Generate Resume{" "}{" "}{" "}<AntDesign name="profile" size={18} color="white" />
        </Text>
      </TouchableOpacity>
      <ProfileInfo />
      <Academics />
      <Certificates />
      <Projects />
      <Internships />
      <Assessments />
      <Skills />
      <Awards />
      <Events />
    </ScrollView>
  );
}
