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
import {
  GetRegistrationLut,
  StudentRegistrationDataPost,
  ValidateReferalCode,
} from "../../store/actionTypes/RegistrationLut";
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from "formik";
import * as Yup from "yup";
import CryptoJS from "crypto-js";

export default function Registration({ navigation }) {
  const dispatch = useDispatch();
  const [terms, setTerms] = useState(false);
  const [dateofBir, setDateofBirth] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pursuing, setPursuing] = useState(null);
  const refCoderesp = useSelector((state) => state.regReducer.refCode);
  const regLUTData = useSelector((state) => state.regReducer.lutData);
  const [proName, setProName] = useState("");
  const [branName, setBranName] = useState("");
  const [univName, setUniversityName] = useState("");
  const [collName, setCollegeName] = useState("");
  useEffect(() => {
    dispatch(GetRegistrationLut());
  }, []);

  useEffect(() => {
    if (refCoderesp) {
      console.log(refCoderesp, "REFdone");
    }
  }, [refCoderesp]);

  const backtoHome = () => {
    navigation.navigate("Home");
  };

  const data = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female" },
    { key: "3", value: "Other" },
  ];

  useEffect(() => {}, [pursuing]);

  const termsShow = () => {};

  const userRegistration = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("Required")
      .min(10, "must be at least 10 numbers long")
      .max(10, "must be at least 10 numbers long"),
    personalEmail: Yup.string().email().required("Required"),
    aadharNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Aadhar number is not valid"
      )
      .required("Required")
      .min(12, "must be at least 12 numbers long")
      .max(12, "must be at least 12 numbers long"),
    highestQualification: Yup.string().required("Required"),
    universityID: Yup.string().required("Required"),
    collegeID: Yup.string().required("Required"),
    programID: Yup.string().required("Required"),
    branchID: Yup.string().required("Required"),
    currentlyPursuing: Yup.boolean().oneOf([true, false]).required("Required"),
    referredCode: Yup.string().required(
      "If you do not have a referral code, please use CRMU4629"
    ),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    repeatpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const showCalendar = (val) => {
    setShowModal(val);
  };

  const submitRegistrationData = (values) => {
    const {
      firstName,
      lastName,
      personalEmail,
      phoneNumber,
      aadharNumber,
      dateOfBirth,
      universityName,
      collegeID,
      universityID,
      collegeName,
      programName,
      programID,
      branchName,
      branchID,
      referredCode,
      highestQualification,
      currentlyPursuing,
      repeatpassword,
    } = values;

    console.log(dateOfBirth, "BIR");

    let iv = CryptoJS.enc.Utf8.parse("1234567812345678");
    let key = CryptoJS.enc.Utf8.parse("5v8y/B?E(G+KbPeShVmYq3t6w9z$C&12");
    let hashedPassword = CryptoJS.AES.encrypt(values.password, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
    //Setting here PW and U name and C name which is required
    delete values.repeatpassword;
    values.password = hashedPassword;
    values.universityName = univName;
    values.collegeName = collName;
    values.programName = proName;
    values.branName = branName;
    values.dateOfBirth = new Date(dateOfBirth).toISOString();
    values.phoneNumber =
      phoneNumber.substring(0, 3) === "+91" ? phoneNumber : "+91" + phoneNumber;

    const finalData = Object.assign(values);
    dispatch(
      ValidateReferalCode({
        code: referredCode,
        callback: (data) => onSuccessValidatingRefCode(data, finalData),
      })
    );
  };

  const onSuccessValidatingRefCode = (response, values) => {
    if (response) {
      console.log(response, values, "THUNKRET");
      dispatch(
        StudentRegistrationDataPost({
          apiPayloadRequest: values,
          callback: onSuccesssubmitRegForm,
        })
      );
    }
  };
  const onSuccesssubmitRegForm = (data) => {
    console.log(data, "SUCCESS");
  };

  console.log(collName, univName, "NAMES");

  const RegisterStudent = () => {};

  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        phoneNumber: "",
        personalEmail: "",
        aadharNumber: "",
        highestQualification: "",
        universityName: "",
        collegeName: "",
        collegeID: "",
        programName: "",
        programID: "",
        branchName: "",
        branchID: "",
        currentlyPursuing: null,
        referredCode: "",
        password: "",
        repeatpassword: "",
      }}
      onSubmit={(values) => submitRegistrationData(values)}
      validationSchema={userRegistration}
    >
      {({
        handleChange,
        handleSubmit,
        setFieldValue,
        handleReset,
        isValid,
        values,
        errors,
        touched,
      }) => (
        <ScrollView>
          <View className="bg-white w-full">
            <Text className="text-3xl font-black pt-2 pb-2 text-center text-blue-800">
              C2Hire.
            </Text>
            <View className="p-5">
              <Text className="text-2xl font-black pb-4 text-blue-900">
                Registration
              </Text>
              <View>
                <Text className="text-base pb-2">First Name *</Text>
                <TextInput
                  className="p-3 mb-1 text-base border-solid border-gray-400 border-2 rounded"
                  onChangeText={handleChange("firstName")}
                  value={values.firstName}
                  placeholder="First Name"
                />
                {errors.firstName && touched.firstName && (
                  <Text className="m-0 text-red-500">{errors.firstName}</Text>
                )}
              </View>
              <View>
                <Text className="text-base pb-2">Middle Name</Text>
                <TextInput
                  className="p-3 mb-1 text-base border-solid border-gray-400 border-2 rounded"
                  onChangeText={handleChange("middleName")}
                  value={values.middleName}
                  placeholder="Middle Name"
                />
                {errors.middleName && touched.middleName && (
                  <Text className="m-0 text-red-500">{errors.middleName}</Text>
                )}
              </View>
              <View>
                <Text className="text-base pb-2">Last Name *</Text>
                <TextInput
                  className="p-3 mb-1 text-base border-solid border-gray-400 border-2 rounded"
                  onChangeText={handleChange("lastName")}
                  value={values.lastName}
                  placeholder="Last Name"
                />
                {errors.lastName && touched.lastName && (
                  <Text className="m-0 text-red-500">{errors.lastName}</Text>
                )}
              </View>
              <View
                className="mb-4"
                style={{ position: "relative", zIndex: 1 }}
              >
                <Text className="text-base pb-2">Gender *</Text>
                <View style={Styles.picker}>
                  <Picker
                    placeholder="Select Item"
                    selectedValue={values.gender}
                    onValueChange={handleChange("gender")}
                  >
                    <Picker.Item label="Please select an option..." />
                    {data?.map((items, i) => (
                      <Picker.Item
                        key={i}
                        label={items.value}
                        value={items.value}
                      />
                    ))}
                  </Picker>
                </View>
                {errors.gender && touched.gender && (
                  <Text className="m-0 text-red-500">{errors.gender}</Text>
                )}
              </View>
              <View className="mb-4">
                <Text className="text-base pb-2">Date of Birth *</Text>
                <TouchableOpacity
                  onPress={() => showCalendar(true)}
                  style={Styles.calendar}
                >
                  <Text
                    style={Styles.calendatInput}
                    placeholder="YYYY-MM-DD"
                    selectedValue={values.dateOfBirth}
                  >
                    {dateofBir && moment(dateofBir).format("YYYY-MM-DD")}
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
                  onConfirm={(event) => {
                    setFieldValue("dateOfBirth", event);
                    console.log(event, "DOB");
                    setDateofBirth(event);
                    showCalendar(false);
                  }}
                  onCancel={() => showCalendar(false)}
                  maximumDate={new Date(moment())}
                  minimumDate={new Date(1990, 0, 1)}
                />
                {errors.dateOfBirth && touched.dateOfBirth && (
                  <Text className="m-0 text-red-500">{errors.dateOfBirth}</Text>
                )}
              </View>
              <View className="mb-4">
                <Text className="text-base pb-2">Mobile Number *</Text>
                <TextInput
                  className="p-3 text-base border-solid border-gray-400 border-2 rounded"
                  onChangeText={handleChange("phoneNumber")}
                  value={values.phoneNumber}
                  placeholder="Mobile Number"
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <Text className="m-0 text-red-500">{errors.phoneNumber}</Text>
                )}
              </View>
              <View className="mb-4">
                <Text className="text-base pb-2">Email ID *</Text>
                <TextInput
                  className="p-3 text-base border-solid border-gray-400 border-2 rounded"
                  onChangeText={handleChange("personalEmail")}
                  value={values.personalEmail}
                  placeholder="Email address"
                />
                {errors.personalEmail && touched.personalEmail && (
                  <Text className="m-0 text-red-500">
                    {errors.personalEmail}
                  </Text>
                )}
              </View>
              <View className="mb-4">
                <Text className="text-base pb-2">Aadhaar Number *</Text>
                <TextInput
                  className="p-3 text-base border-solid border-gray-400 border-2 rounded"
                  onChangeText={handleChange("aadharNumber")}
                  value={values.aadharNumber}
                  placeholder="Aadhaar Number"
                />
                {errors.aadharNumber && touched.aadharNumber && (
                  <Text className="m-0 text-red-500">
                    {errors.aadharNumber}
                  </Text>
                )}
              </View>
              <View
                className="mb-4"
                style={{ position: "relative", zIndex: 1 }}
              >
                <Text className="text-base pb-2">
                  Select your Highest Qualification *
                </Text>
                <View style={Styles.picker}>
                  <Picker
                    placeholder="Select Item"
                    selectedValue={values.highestQualification}
                    onValueChange={handleChange("highestQualification")}
                  >
                    <Picker.Item label="Please select an option..." />
                    {regLUTData?.programType?.map((item, i) => (
                      <Picker.Item
                        key={i}
                        label={item.programType}
                        value={item.programType}
                      />
                    ))}
                  </Picker>
                </View>
                {errors.highestQualification &&
                  touched.highestQualification && (
                    <Text className="m-0 text-red-500">
                      {errors.highestQualification}
                    </Text>
                  )}
              </View>
              <View
                className="mb-4"
                style={{ position: "relative", zIndex: 1 }}
              >
                <Text className="text-base pb-2">University Name *</Text>
                <View style={Styles.picker}>
                  <Picker
                    placeholder="Select Item"
                    pickerStyleType={{ borderWidth: 1, borderColor: "red" }}
                    selectedValue={values.universityID}
                    onValueChange={(val) => {
                      setFieldValue("universityID", val);
                      const univName = regLUTData?.universityCatalog?.filter(
                        (item) => item.code === val
                      );
                      setUniversityName(univName[0].name);
                    }}
                  >
                    <Picker.Item label="Please select an option..." />
                    {regLUTData?.universityCatalog?.map((item, i) =>
                      item.name !== "" ? (
                        <Picker.Item
                          key={i}
                          label={item.name}
                          value={item.code}
                        />
                      ) : null
                    )}
                  </Picker>
                </View>
                {errors.universityID && touched.universityID && (
                  <Text className="m-0 text-red-500">
                    {errors.universityID}
                  </Text>
                )}
              </View>
              <View
                className="mb-4"
                style={{ position: "relative", zIndex: 1 }}
              >
                <Text className="text-base pb-2">College Name *</Text>
                <View style={Styles.picker}>
                  <Picker
                    placeholder="Select Item"
                    pickerStyleType={{ borderWidth: 1, borderColor: "red" }}
                    selectedValue={values.collegeID}
                    onValueChange={(val) => {
                      setFieldValue("collegeID", val);
                      const collegeName = regLUTData?.collegeNames?.filter(
                        (item) => item.collegeID === val
                      );
                      setCollegeName(collegeName[0].collegeName);
                    }}
                  >
                    <Picker.Item label="Please select an option..." />
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
                {errors.collegeID && touched.collegeID && (
                  <Text className="m-0 text-red-500">{errors.collegeID}</Text>
                )}
              </View>
              <View
                className="mb-4"
                style={{ position: "relative", zIndex: 1 }}
              >
                <Text className="text-base pb-2">Program *</Text>
                <View style={Styles.picker}>
                  <Picker
                    placeholder="Select Item"
                    selectedValue={values.programID}
                    setProgramID
                    onValueChange={(val) => {
                      setFieldValue("programID", val);
                      const programName = regLUTData?.programCatalog?.filter(
                        (item) => item.programCode === val
                      );
                      console.log(programName, "POD");
                      setProName(programName[0].programName);
                    }}
                  >
                    <Picker.Item label="Please select an option..." />
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
                {errors.programID && touched.programID && (
                  <Text className="m-0 text-red-500">{errors.programID}</Text>
                )}
              </View>
              <View
                className="mb-4"
                style={{ position: "relative", zIndex: 1 }}
              >
                <Text className="text-base pb-2">Branch *</Text>
                <View style={Styles.picker}>
                  <Picker
                    placeholder="Select Item"
                    selectedValue={values.branchID}
                    onValueChange={(val) => {
                      setFieldValue("branchID", val);
                      const branName = regLUTData?.branchCatalog?.filter(
                        (item) => item.branchID === val
                      );
                      console.log(branName, "POD3");
                      setBranName(branName[0].branchName);
                    }}
                  >
                    <Picker.Item label="Please select an option..." />
                    {regLUTData?.branchCatalog
                      ?.filter((item) => item.programID === values.programID)
                      .map((items, i) => (
                        <Picker.Item
                          key={i}
                          label={items.branchName}
                          value={items.branchID}
                        />
                      ))}
                  </Picker>
                </View>
                {errors.branchID && touched.branchID && (
                  <Text className="m-0 text-red-500">{errors.branchID}</Text>
                )}
              </View>
              <View className="mb-4">
                <Text className="text-base pb-2">Currently Pursuing *</Text>
                <View style={Styles.pursuing}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="blue"
                    disableText
                    unfillColor="#FFFFFF"
                    isChecked={values.currentlyPursuing}
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    onPress={(event) => {
                      setFieldValue("currentlyPursuing", event);
                      setPursuing(event);
                    }}
                  />
                  <Text className="text-base pb-2 pl-5">
                    {pursuing ? "Yes" : "No"}
                  </Text>
                </View>
                {errors.currentlyPursuing && touched.currentlyPursuing && (
                  <Text className="m-0 text-red-500">
                    {errors.currentlyPursuing}
                  </Text>
                )}
              </View>
              <View className="mb-4">
                <Text className="text-base pb-2">Referral Code *</Text>
                <TextInput
                  className="p-3 text-base border-solid border-gray-400 border-2 rounded"
                  onChangeText={handleChange("referredCode")}
                  value={values.referredCode}
                  placeholder="Referral Code ex:CRMU4629"
                />
                {errors.referredCode && touched.referredCode && (
                  <Text className="m-0 text-red-500">
                    {errors.referredCode}
                  </Text>
                )}
              </View>
              <View className="mb-4">
                <Text className="text-base pb-2">Password *</Text>
                <TextInput
                  className="p-3 mb-1 text-base border-solid border-gray-400 border-2 rounded"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  placeholder="Password"
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text className="m-0 text-red-500">{errors.password}</Text>
                )}
              </View>
              <View className="mb-4">
                <Text className="text-base pb-2">Repeat the Password *</Text>
                <TextInput
                  className="p-3 mb-1 text-base border-solid border-gray-400 border-2 rounded"
                  onChangeText={handleChange("repeatpassword")}
                  value={values.repeatpassword}
                  placeholder="Repeat Password"
                  secureTextEntry
                />
                {errors.repeatpassword && touched.repeatpassword && (
                  <Text className="m-0 text-red-500">
                    {errors.repeatpassword}
                  </Text>
                )}
              </View>
              <View className="mb-4" style={Styles.inline}>
                <View style={Styles.pursuing}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="blue"
                    disableText
                    unfillColor="#FFFFFF"
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    onPress={(event) => {
                      setTerms(event);
                    }}
                  />
                  <Text className="text-gray-600 text-xs pl-3 pt-1">
                    I hereby accept theTerms & Conditions of the Platform.
                  </Text>
                </View>
              </View>

              <View className="flex-1 flex-row justify-between">
                <TouchableOpacity
                  className="p-4 mb-3 ml-1 mr-1 rounded"
                  style={Styles.loginBtn}
                >
                  <Text className="text-lg font-bold text-center text-white">
                    Back
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="p-4 mb-3 ml-1 mr-1 rounded"
                  style={Styles.loginBtn}
                  disabled={!isValid && !terms}
                  onPress={handleSubmit}
                >
                  <Text className="text-lg font-bold text-center text-white">
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}
