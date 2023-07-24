import React, { useState } from "react";
import { Styles } from "../../assets/css/style";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function DashboardMain(props) {
  const [searchModal, setSearchModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  const handleMenu = () => {
    props.navigation.openDrawer();
  };
  return (
    <View className="h-full">
      <View className="p-3 flex-row items-center justify-between border-b border-slate-200 bg-white">
        <TouchableOpacity onPress={handleMenu}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
        <View className="w-8/12">
          <Text className="ml-5 text-3xl font-black text-blue-800">
            C2Hire.
          </Text>
        </View>
        <TouchableOpacity
          className="flex-auto"
          onPress={() => setSearchModal(true)}
        >
          <View className="h-10 w-10 flex justify-center items-center">
            <FontAwesome5 name="search" size={22} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setNotificationModal(true)}>
          <View className="h-10 w-10 flex justify-center items-center">
            <MaterialCommunityIcons name="bell" size={26} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView className="p-3 pb-24 bg-white ">
        <Modal
          animationType="slide"
          transparent={false}
          visible={searchModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setSearchModal(!searchModal);
          }}
        >
          <View className="p-2 flex-row items-center justify-between border-b border-slate-300">
            <TouchableOpacity onPress={() => setSearchModal(!searchModal)}>
              <View className="flex justify-center items-start">
                <Ionicons name="caret-back-outline" size={25} color="black" />
              </View>
            </TouchableOpacity>
            <TextInput
              className="p-3 w-11/12 text-base"
              //onChangeText={handleChange("userName")}
              //value={values.userName}
              placeholder="Seach Universities / Colleges"
            />
          </View>
          <ScrollView className="p-3">
            <View className="flex-row justify-around">
              <View className="p-2 w-fit mr-4 bg-blue-100 rounded-full border-2 border-blue-700">
                <Text className="text-blue-500 text-xs font-semibold">
                  Universities
                </Text>
              </View>
              <View className="p-2 w-fit mr-4  rounded-full border-2 border-blue-700">
                <Text className="text-blue-500 text-xs font-semibold">
                  Corporates
                </Text>
              </View>
            </View>
            <View className="p-1 mb-5">
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
              <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google</Text>
                  <Text className="text-md font-b uppercase">Technology</Text>
                </View>
                <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
              </View>
            </View>
          </ScrollView>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={notificationModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setNotificationModal(!notificationModal);
          }}
        >
          <View className="p-2 flex-row items-center">
            <TouchableOpacity onPress={() => setNotificationModal(!notificationModal)}>
              <View className="flex justify-center items-start">
                <Ionicons name="caret-back-outline" size={25} color="black" />
              </View>
            </TouchableOpacity>
            <Text className='text-lg font-semibold'>
              Dasboard
            </Text>
          </View>
          <ScrollView className="p-3">
            <View className="p-1 mb-2">
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Tata Motors :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published profiled a job.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Pineapple :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
              <View className="p-3 mb-1 flex-row justify-between bg-blue-100 border border-slate-400 rounded-md">
                <View className="flex justify-center items-start">
                  <Text className="text-lg font-bold">Google :</Text>
                  <Text className="text-lg font-b text-slate-600">Just published their profile.</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </Modal>
        <Text className="mt-2 p-2 text-xl font-black">On-Campus Jobs</Text>
        <ScrollView horizontal={true} className="m-0">
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
        </ScrollView>
        <Text className="mt-4 p-2 text-xl font-black">Off-Campus Jobs</Text>
        <ScrollView horizontal={true} className="m-0">
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
        </ScrollView>
        <Text className="mt-4 p-2 text-xl font-black">Off-Campus Drives</Text>
        <ScrollView horizontal={true} className="m-0">
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
          <View className="mt-2 mr-2 w-64 p-3 flex-row justify-between border border-slate-500 rounded-md">
            <View className="flex justify-center items-start">
              <Text className="text-lg font-bold">Google</Text>
              <Text className="text-md font-b uppercase">Technology</Text>
            </View>
            <View className="w-14 h-14 bg-blue-500 rounded-md"></View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
