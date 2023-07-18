import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ListItem,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Styles } from "../../assets/css/style";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment/moment";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { GetRegistrationLut } from "../../store/actionTypes/RegistrationLut";
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Registration({ navigation }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const [program, setProgram] = useState("");
  const [branch, setBranch] = useState("");
  const [terms, setTerms] = useState(false);
  const [qualification, setQualification] = React.useState("");
  const [university, setUniversity] = React.useState("");
  const [collegeName, setCollegeName] = React.useState("");
  const [date, setDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pursuing, setPursuing] = React.useState(false);

  const submitButton = () => {
    navigation.navigate("Login", { name: "Srini" });
  };

  const regLUTData = useSelector((state) => state.regReducer.lutData);

  console.log(university, program, "UNIV");

  useEffect(() => {
    dispatch(GetRegistrationLut());
  }, []);

  const backtoHome = () => {
    navigation.navigate("Home");
  };
  const data = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female" },
    { key: "3", value: "Other" },
  ];

  const onChange = (value) => {
    console.log(value, "DATE");
    setShowModal(false);
    setDate(value);
  };

  const termsShow = () => {};

  return (
    <ScrollView>
      <View className="bg-white w-full">
        <Text className="text-3xl font-black pt-2 pb-2 text-center text-blue-800">
          C2Hire.
        </Text>
        <View className="p-5">
          <Text className="text-2xl font-black pb-4 text-blue-900">
            Registration
          </Text>
          <Text className="text-base pb-2">First Name *</Text>
          <TextInput
            className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
            // onChangeText={handleChange("userName")}
            // value={values.userName}
            placeholder="First Name"
          />
          <Text className="text-base pb-2">Middle Name</Text>
          <TextInput
            className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
            // onChangeText={handleChange("userName")}
            // value={values.userName}
            placeholder="Middle Name"
          />
          <Text className="text-base pb-2">Last Name *</Text>
          <TextInput
            className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
            // onChangeText={handleChange("userName")}
            // value={values.userName}
            placeholder="Last Name"
          />
          <View className="mb-4" style={{ position: "relative", zIndex: 1 }}>
            <Text className="text-base pb-2">Gender *</Text>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data.map((item, i) => item.value)}
              search={false}
              save="programType"
              boxStyles={{
                borderRadius: 4,
                borderColor: "#aaa",
                borderWidth: 2,
                backgroundColor: "#ffffff",
              }}
              inputStyles={{
                paddingTop: 2,
                paddingBottom: 2,
                color: "#666",
                fontSize: 16,
              }}
              dropdownStyles={{
                backgroundColor: "white",
                position: "absolute",
                top: 40,
                width: "100%",
              }}
            />
          </View>
          <View className="mb-4">
            <Text className="text-base pb-2">Date of Birth *</Text>
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              style={Styles.calendar}
            >
              <Text style={Styles.calendatInput} placeholder="YYYY-MM-DD">
                {date && moment(date).format("YYYY-MM-DD")}{" "}
              </Text>
              <AntDesign
                name="calendar"
                size={24}
                color="grey"
                style={Styles.alignRight}
                alignRight
              />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={showModal}
              mode="date"
              onConfirm={onChange}
              onCancel={() => setShowModal(false)}
              maximumDate={new Date(moment())}
              minimumDate={new Date(1990, 0, 1)}
            />
          </View>
          <Text className="text-base pb-2">Mobile Number *</Text>
          <TextInput
            className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
            // onChangeText={handleChange("userName")}
            // value={values.userName}
            placeholder="Mobile Number"
          />
          <Text className="text-base pb-2">Email ID *</Text>
          <TextInput
            className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
            // onChangeText={handleChange("userName")}
            // value={values.userName}
            placeholder="Email address"
          />
          <Text className="text-base pb-2">Aadhaar Number *</Text>
          <TextInput
            className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
            // onChangeText={handleChange("userName")}
            // value={values.userName}
            placeholder="Aadhaar Number"
          />
          <View className="mb-4" style={{ position: "relative", zIndex: 1 }}>
            <Text className="text-base pb-2">
              Select your Highest Qualification *
            </Text>
            <SelectList
              setSelected={(val) => setQualification(val)}
              data={regLUTData?.programType?.map((item) => item.programType)}
              search={false}
              save="programType"
              boxStyles={{
                borderRadius: 4,
                borderColor: "#aaa",
                borderWidth: 2,
                backgroundColor: "#ffffff",
              }}
              inputStyles={{
                paddingTop: 2,
                paddingBottom: 2,
                color: "#666",
                fontSize: 16,
              }}
              dropdownStyles={{
                backgroundColor: "white",
                position: "absolute",
                top: 40,
                width: "100%",
              }}
            />
          </View>
          <View className="mb-4" style={{ position: "relative", zIndex: 1 }}>
            <Text className="text-base pb-2">University Name *</Text>
            <View style={Styles.picker}>
              <Picker
                placeholder="Select Item"
                pickerStyleType={{ borderWidth: 1, borderColor: "red" }}
                selectedValue={university}
                onValueChange={(itemValue, itemIndex) =>
                  setUniversity(itemValue)
                }
              >
                {regLUTData?.universityCatalog?.map((item, i) => (
                  <Picker.Item key={i} label={item.name} value={item.code} />
                ))}
              </Picker>
            </View>
          </View>
          <View className="mb-4" style={{ position: "relative", zIndex: 1 }}>
            <Text className="text-base pb-2">College Name *</Text>
            <View style={Styles.picker}>
              <Picker
                placeholder="Select Item"
                pickerStyleType={{ borderWidth: 1, borderColor: "red" }}
                selectedValue={collegeName}
                onValueChange={(itemValue, itemIndex) =>
                  setCollegeName(itemValue)
                }
              >
                {regLUTData?.collegeNames?.map((item, i) =>
                  item.collegeName !== "" ? (
                    <Picker.Item
                      key={i}
                      label={item.collegeName}
                      value={item.collegeID}
                    />
                  ) : null
                )}
              </Picker>
            </View>
          </View>
          <View className="mb-4" style={{ position: "relative", zIndex: 1 }}>
            <Text className="text-base pb-2">Program *</Text>
            <View style={Styles.picker}>
              <Picker
                placeholder="Select Item"
                selectedValue={program}
                onValueChange={(itemValue, itemIndex) => setProgram(itemValue)}
              >
                {regLUTData?.programCatalog?.map((item, i) =>
                  item.collegeName !== "" ? (
                    <Picker.Item
                      key={i}
                      label={item.programName}
                      value={item.programCode}
                    />
                  ) : null
                )}
              </Picker>
            </View>
          </View>
          <View className="mb-4" style={{ position: "relative", zIndex: 1 }}>
            <Text className="text-base pb-2">Branch *</Text>
            <View style={Styles.picker}>
              <Picker
                placeholder="Select Item"
                selectedValue={branch}
                onValueChange={(itemValue, itemIndex) => setBranch(itemValue)}
              >
                {regLUTData?.branchCatalog
                  ?.filter((item) => item.programID === program)
                  .map((items, i) => (
                    <Picker.Item
                      key={i}
                      label={items.branchName}
                      value={items.programID}
                    />
                  ))}
              </Picker>
            </View>
          </View>
          <View className="mb-4">
            <Text className="text-base pb-2">Currently Pursuing *</Text>
            <BouncyCheckbox
              size={25}
              fillColor="red"
              unfillColor="#FFFFFF"
              text={!pursuing ? "No" : "Yes"}
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked) => {
                setPursuing(isChecked);
              }}
            />
          </View>
          <View>
            <Text className="text-base pb-2">Referral Code *</Text>
            <TextInput
              className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
              placeholder="Referralcode ex: CRMU4629"
            />
          </View>

          <Text className="text-base pb-2">Enter Password *</Text>
          <TextInput
            className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
            placeholder="Password"
          />
          <Text className="text-base pb-2">Confirm Password *</Text>
          <TextInput
            className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
            placeholder="Re-enter password"
          />
          <View className="flex-1 flex-row justify-between">
            <TouchableOpacity
              className="p-4 mb-6 rounded w-2/5"
              style={Styles.loginBtn}
              onPress={backtoHome}
            >
              <Text className="text-lg font-bold text-center text-white">
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="p-4 mb-6 rounded w-2/5"
              style={Styles.loginBtn}
            >
              <Text className="text-lg font-bold text-center text-white">
                Next
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-base pb-2 text-center">
            <BouncyCheckbox
              size={25}
              fillColor="blue"
              unfillColor="#FFFFFF"
              disableText
              text={!terms ? "No" : "Yes"}
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked) => {
                setPursuing(isChecked);
              }}
            />
            I hereby accept the{" "}
            <TouchableOpacity onPress={termsShow}>
              <Text className="text-md font-bold text-green-900">
                Terms and conditions.
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
