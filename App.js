import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Signup from './src/screen/Signup'
import ForgetPassword from './src/screen/ForgetPassword'; 
import Checkemail from './src/screen/CheckeMail';
import Login from './src/screen/Login';
import useFonts from './src/api/useFonts';
import Home from "./src/screen/Home";
import Location from './src/screen/Location';
import LocationDetails from './src/screen/LocationDetails';
import RvDetailpage from './src/screen/RvDetailpage';
import SendEmail from './src/screen/SendEmail';
import Filter from './src/component/Filter';
import FavouriteListing from './src/screen/FavouriteListing';
import ListingDetailPage from './src/screen/ListingDetailPage';
import SellRvListing from './src/screen/SellRvListing';
import SellRvdetailpage from "./src/screen/SellRvdetailpage"
import ResourceDetail from "./src/screen/ResourceDetail"
import Resource from './src/screen/Resource';
import LoanCalculator from './src/screen/LoanCalculator';
import Advertising from './src/screen/Advertising';
// import { ADVERTISING } from './src/component/String';
import PaymentMethod from './src/screen/PaymentMethod';
export default function App () {
  useEffect(()=> {
    useFonts();
  }, []);
  return (
    <View>
      {/* <Checkemail/>  */}
      {/*<ForgetPassword/>*/}
      {/* <Signup/>     */}
      {/*<Home/>*/}
      {/* <Login/>  */}
      {/* <Location/> */}
      {/* <LocationDetails/>   */}
      {/* <RvDetailpage/>  */}
      {/* <Filter/> */}
      {/* <SendEmail/>     */}
      {/* <FavouriteListing /> */}
      {/* <ListingDetailPage/> */}
      {/* <SellRvListing/> */}
      {/* <SellRvdetailpage/> */}
      {/* <ResourceDetail/> */}
      {/* <LoanCalculator/> */}
      {/* <Resource /> */}
      <Advertising/>
      {/* <PaymentMethod/> */}
    </View>
  );
}
