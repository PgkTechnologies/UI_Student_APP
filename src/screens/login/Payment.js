import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Styles } from "../../assets/css/style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  CreatePaymentRequest,
  GetRegistrationAmount,
} from "../../store/actionTypes/RegistrationLut";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import RazorpayCheckout from "react-native-razorpay";
import { REACT_APP_REGISTER } from "@env";

export default function Payment() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.regReducer.regSuccessData);
  const registrationFee = useSelector((state) => state.regReducer.regFee);
  const [discount, setDiscount] = useState(0);
  const [ischeckOne, setischeckOne] = useState(null);
  const [ischeckTwo, setischeckTwo] = useState(null);
  const [GST, setGST] = useState(null);
  const [couponCode, setCouponCode] = useState(null);
  const [renewalYears, setrenewalYears] = useState(1);
  const orderID = useSelector((state) => state.regReducer.orderID);

  console.log(orderID, "ORDERID");

  const years = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
  ];

  const getRegTokendata = async () => {
    return await AsyncStorage.getItem("tokenreg");
  };

  useEffect(() => {
    getPaymentData();
  }, []);

  const getPaymentData = () => {
    dispatch(GetRegistrationAmount({ callback: onGetRegamount }));
  };

  const onGetRegamount = (data) => {
    console.log(data, "REGFEE");
  };

  useEffect(() => {
    if (registrationFee) {
      console.log("OK");
      GSTCalculate(registrationFee?.fee);
    }
  }, [discount, renewalYears]);

  const GSTCalculate = (amount) => {
    if (amount) {
      const val = Number(amount * renewalYears);
      const calacdiscount = ((discount * val) / 100).toFixed(2);
      const calcGst =
        discount > 0
          ? ((val - (discount * val) / 100) * 0.18).toFixed(2)
          : (val * 0.18).toFixed(2);
      const afterDiscount = parseFloat(val - calacdiscount);
      console.log(afterDiscount, calcGst, "AD");
      const totalAmount =
        discount > 0
          ? Number(afterDiscount) + Number(calcGst)
          : (val + val * 0.18).toFixed(2);
      setGST({
        amount: Number(val),
        discountVal: calacdiscount,
        gst: calcGst,
        total: totalAmount,
      });
    }
  };

  const handleSubmit = () => {
    const modal = {
      payType: "REG_FEE",
      renewalYears: renewalYears,
      couponCode: couponCode,
    };
    dispatch(
      CreatePaymentRequest({
        apiPayloadRequest: modal,
        callback: onSuccessResponse,
      })
    );
  };

  const onSuccessResponse = (data) => {
    if (data.orderID) {
      OpenRazorPayModal(data.orderID);
      console.log(REACT_APP_REGISTER, "KEY");
    }
  };

  const OpenRazorPayModal = (orderID, years) => {
    console.log(orderID, "RAZOR");
    var options = {
      description: "Credits towards consultation",
      image: "https://i.imgur.com/3g7nmJC.png",
      currency: "INR",
      key: "rzp_test_K2RKGeaPcOsqjX", // Your api key
      amount: "5000",
      name: "foo",
      prefill: {
        email: "void@razorpay.com",
        contact: "9191919191",
        name: "Razorpay Software",
      },
      theme: { color: "#F37254" },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  console.log(ischeckOne, ischeckTwo, "CHE");
  return (
    <ScrollView className="p-3">
      <TouchableOpacity
        className="mb-3"
        //onPress={() => setSearchModal(!searchModal)}
      >
        <View className="flex justify-center items-start">
          <Ionicons name="caret-back-outline" size={25} color="black" />
        </View>
      </TouchableOpacity>
      <Text className="p-2 pt-0 text-blue-950 font-black text-base">
        Details
      </Text>
      <View className="p-5 mb-4 flex-row justify-between bg-white rounded-lg">
        <Text className="font-semibold">Registration Fee</Text>

        <Text className="font-semibold">
          {" "}
          <FontAwesome name="rupee" size={12} color="black" />{" "}
          {registrationFee?.fee}
        </Text>
      </View>
      <Text className="p-2 text-blue-950 font-black text-base">
        Offers & Benefits
      </Text>
      <View className="p-5 mb-4 bg-white rounded-lg">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="font-semibold">C2Hire05</Text>
            <Text className="text-xs text-slate-600">Get 5% discount.</Text>
          </View>
          <View className="h-5 w-5">
            <BouncyCheckbox
              size={22}
              fillColor="blue"
              disableText
              disableBuiltInState
              unfillColor="#FFFFFF"
              isChecked={ischeckOne}
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={() => {
                setDiscount(5);
                setischeckOne(true);
                setischeckTwo(false);
                setCouponCode("C2Hire05");
              }}
            />
          </View>
        </View>
        <View className="mt-5 flex-row items-center justify-between">
          <View>
            <Text className="font-semibold">C2Hire10</Text>
            <Text className="text-xs text-slate-600">Get 10% discount.</Text>
          </View>
          <View className="h-5 w-5">
            <BouncyCheckbox
              size={22}
              disableBuiltInState
              fillColor="blue"
              disableText
              unfillColor="#FFFFFF"
              isChecked={ischeckTwo}
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={() => {
                setDiscount(10);
                setischeckOne(false);
                setischeckTwo(true);
                setCouponCode("C2Hire10");
              }}
            />
          </View>
        </View>
      </View>
      <Text className="p-2 text-blue-950 font-black text-base">
        Subcription Time
      </Text>
      <View className="p-5 mb-4 flex-row justify-between bg-white rounded-lg">
        <Text className="font-semibold">Subcription in years</Text>
        <View style={Styles.picker}>
          <Picker
            style={{ width: 100 }}
            placeholder="Select Item"
            selectedValue={renewalYears}
            onValueChange={(val) => setrenewalYears(val)}
          >
            {years?.map((items, i) => (
              <Picker.Item key={i} label={items.value} value={items.value} />
            ))}
          </Picker>
        </View>
      </View>
      <Text className="p-2 text-blue-950 font-black text-base">
        Bill Details
      </Text>
      <View className="p-5 mb-4 bg-white rounded-lg">
        <View className="mb-5 flex-row items-center justify-between">
          <Text className="font-semibold">Catalogue Price</Text>
          <Text className="font-semibold line-through">
            <FontAwesome name="rupee" size={12} color="black" /> 2400
          </Text>
        </View>
        <View className="mb-4 flex-row items-center justify-between">
          <View>
            <Text className="font-semibold">Offer Price</Text>
            <Text className="text-xs text-slate-600">
              (C2Hire. + Assessments)
            </Text>
          </View>
          <Text className="font-semibold">
            <FontAwesome name="rupee" size={12} color="black" />{" "}
            {registrationFee?.fee}
          </Text>
        </View>
        <View className="mb-4 flex-row items-center justify-between">
          <View>
            <Text className="font-semibold text-green-700">
              Discount {discount}
            </Text>
          </View>
          <Text className="font-semibold text-green-700">
            - <FontAwesome name="rupee" size={12} color="green" />{" "}
            {GST?.discountVal}
          </Text>
        </View>
        <View className="mb-5 flex-row items-center justify-between">
          <Text className="font-semibold">GST 18%</Text>
          <Text className="font-semibold">
            <FontAwesome name="rupee" size={12} color="black" /> {GST?.gst}
          </Text>
        </View>
        <View className="mb-4 border-b border-slate-300 bo flex-row items-center justify-between"></View>
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold">Total Amount</Text>
          <Text className="font-semibold">
            <FontAwesome name="rupee" size={12} color="black" /> {GST?.total}
          </Text>
        </View>
      </View>
      <View className="p-3 w-full flex-row items-center justify-center ">
        <TouchableOpacity
          className="p-4 mb-6 ml-2 mr-2 rounded w-full"
          style={Styles.loginBtn}
          onPress={handleSubmit}
        >
          <Text className="text-lg font-bold text-center text-white">
            Proceed to Pay
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
