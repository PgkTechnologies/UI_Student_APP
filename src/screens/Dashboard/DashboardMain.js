import React, { useState } from "react";
import { Styles } from "../../assets/css/style";
import { Text, ScrollView, View, TouchableOpacity, Modal, Alert, TextInput } from "react-native";

export default function DashboardMain(props) {

  const [searchModal, setSearchModal] = useState(false);


  const handleMenu = () => {
    props.navigation.openDrawer();
  };
  return (
    <ScrollView className="p-3">
      <Modal
        animationType="slide"
        transparent={false}
        visible={searchModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setSearchModal(!searchModal);
        }}>
        <ScrollView className="p-3">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity onPress={() => setSearchModal(!searchModal)}>
              <View className="h-10 w-10 bg-slate-400">
              </View>
            </TouchableOpacity>
            <TextInput
              className="p-2 w-10/12 text-base text-center border-solid border-blue-400 border rounded"
              //onChangeText={handleChange("userName")}
              //value={values.userName}
              placeholder="Seach Universities / Colleges"
            />
          </View>
          <View className="mt-2 p-2 flex-row justify-between">
            <View className="p-2 w-5/12 bg-red-400 ">
              <Text>
                Universities
              </Text>
            </View>
            <View className="p-2 w-5/12 bg-red-400 ">
              <Text>
                Corporates
              </Text>
            </View>
          </View>
          <View className="p-1 mb-5">
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
            <View className="mt-2 p-3 flex-row justify-between border border-slate-500 rounded-md">
              <View className="flex justify-center items-start">
                <Text className="text-lg font-bold">
                  Google
                </Text>
                <Text className="text-md font-b uppercase">
                  Technology
                </Text>
              </View>
              <View className="w-14 h-14 bg-blue-500 rounded-md">
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={handleMenu}>
          <View className="h-10 w-10 bg-slate-500">
          </View>
        </TouchableOpacity>
        <View className="rounded-full w-4/6 p-2 border-solid border-slate-400 border ">
          <TouchableOpacity className="flex-auto" onPress={() => setSearchModal(true)}>
            <Text className="text-xl text-center text-blod text-gray-600">
              Seach here . . .
            </Text>
          </TouchableOpacity>
        </View>
        <View className="h-10 w-10 bg-slate-500">
        </View>
      </View>

    </ScrollView>
  );
}
