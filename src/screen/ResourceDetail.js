import { View, Text,StyleSheet, StatusBar, ScrollView } from "react-native";
import React from "react";
import Header from "../component/Header";
import OrangeHeading from "../component/OrangeHeading";
import color from "../theme/color";
export default function ResourceDetail() {
  return (
    <View>
        <ScrollView>
        <StatusBar backgroundColor={color.blue}/>
      <Header />
      <OrangeHeading headingText="RV Finance" />
      <Text style={styles.heading}>
        BEST WAYS TO FINANCE YOUR RV 
    </Text>
    <Text> on the wide-open road await you,
        but first you must determine how you will finance your new RV. Financing
        your RV is a process much like working on a mortgage for your home. It
        is important to understand the process involved. When financing your RV,
        you must be sure that you take several steps including checking that it
        works into your budget. These are some steps to help you find the best
        way to finance your new RV. CHECK YOUR CREDIT SCORE Your credit score is
        extremely important in the process of financing an RV. Prior to
        finalizing your plans, be sure to check and see what your current credit
        score is. Many people do not realize that credit scores directly impact
        not only the type of loan you can get, but also the interest rate you
        will be offered. Interest rate changes will cost you money in the end.
        In addition to this, your credit score will help to determine the term
        length and even if a loan is something that will be offered to you. The
        best place to start is with a credit score report to see what your
        credit score is currently at. The highest credit score possible is 800.
        To qualify for the best RV financing, a score of at least 750 is
        optimal. A score above 640 is generally a good credit score and will
        still allow you to get a competitive loan offer. If you score is lower,
        don’t worry just yet. Credit scores between 550 and 600 will likely be
        given financing, but the interest rates will be higher. While rates do
        vary from state to state, someone with lower credit may be offered rate
        with 24% interest. Be sure to check with a tax professional to see how
        financing an RV may be claimed on your taxes as a primary or secondary
        residence. This potential deduction is a reality for many. Since a
        recreational vehicle may be your second home, check what the terms may
        be while in the process of financing. Most will require the RV to have a
        bathroom, area for cooking, and sleeping section. BUDGETING AND GETTING
        THE BEST PRICE When looking to purchase an RV, it’s extremely important
        to know what you are able to comfortably afford. In addition to
        warranties, insurance, and maintenance, you must be aware of how much
        you are able to afford in monthly RV loan payments. Factor in what
        amount of a down payment will be needed. Many times, it will be about 10
        to 20% of the price of the RV. Paying more on the down payment may also
        change the interest rate on your overall financing. All of these factors
        help to save you money in the end. Determine what your overall RV budge
        will be. Make sure you will not go above this amount when you are
        shopping for your new vehicle. It’s important to remember that you are
        not simply budgeting for right now. You will need to think about
        budgeting this amount for the life of your RV loan. Typically, an RV
        loan will be for 10 to 20 years. Take time to see if this is sustainable
        over the life of a potential loan. Making a reasonable now budget means
        that there will be less stress and you know you will be able to afford
        your new RV without any worries. When you are actually shopping for your
        RV, another big factor in financing is making sure you get the best
        price for your vehicle. Do not assume that there is only one price and
        it’s listed. Often times, RV prices are set higher to allow for
        negotiations. It is expected for you to negotiate the price and often be
        able to get a significant price reduction on the RV. Simply asking what
        the lowest price offer would be may be the best approach. The worst
        outcome is they say they can’t work with you and you may have to look at
        another location. Remember that all of this is a huge investment, so
        don’t rush into anything before you are happy with the entire process.
        It’s also important to understand that an RV depreciates in value the
        moment you drive it away. This is why it’s even more important to stay
        within a reasonable budget. INTEREST RATE SHOPPING In the end, the most
        important factor in financing your RV may be the interest rate. An RV
        loan will be a large amount of month, so the lower your interest rate
        the more you will save over time. Look at a variety of places for
        financing options. Check different banks, credit unions, RV finance
        companies, and dealers. Until you look at all options, you will not know
        who will be the most competitive and help you to stay within your
        budget. If interest rates are too high, it could be due to your credit
        score. It may be best to look at your credit score again to see what may
        be making it lower. Look and see what you may be able to fix to get your
        credit score to improve. There are ways to work at this to boost your
        credit score. By doing this. it will help you to get a better interest
        rate on your long-term RV financing. While financing an RV may be a
        daunting task, it is a very important one. It’s something that you can’t
        take lightly from budgeting, credit score checks, to negotiating the
        price on your new RV. The more research you do ahead of time, the better
        prepared you will be one you are traveling and enjoying your new RV.
        SOUTHEAST FINANCIAL Southeast Financial offers Hassle Free, Competitive
        RV financing-Nationwide! We pride ourselves on offering the lowest
        rates, extended terms and same day credit Approvals. Southeast Financial
        has a minimum loan amount of $7,500 and we do extend RV loans for units
        that are more than ten years old. If you are looking to secure RV
        financing on a new or used RV, camper, or motor home you will not find a
        more competitive offer anywhere! We look forward to earning your
        business. If you have questions feel free to contact us toll free at
        866-900-8949.
      </Text>
      </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
    heading:{
        fontWeight:'bold',
    }
})