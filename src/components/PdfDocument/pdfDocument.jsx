import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";



const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    transaction: {
        margin: 20,
    },
    trans: {
        padding: 2,
        fontWeight: 700,
    },
    date: {
        marginLeft: 18,
        fontSize: 14,
        padding: 1,
        paddingLeft: 5,
        paddingBottom: 3,
        color: "gray",
    },
    amount: {
        marginLeft: 20,
        padding: 2,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },


});

export function PdfDocument(props) {
    console.log("pdf props", props.data);
    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.header} fixed>
                    ~ Created from Expense Tracker ~
      </Text>
                <View >
                    <Text style={styles.title}>Transactions Report</Text>
                    <Text>Income : ${props.income}</Text>
                    <Text>Expense : ${props.expense}</Text>
                    <Text>Balance : ${props.income - props.expense}</Text>
                    {props.data
                        ? props.data.map((transaction, index) => {
                            return (
                                <View key={index} style={styles.transaction}>
                                    <Text style={styles.trans}>{index + 1}. Transaction Name : {transaction.name}</Text>
                                    <Text style={styles.date} s>Date : {transaction.date.getDate()}-{transaction.date.getMonth() + 1}-{transaction.date.getFullYear()}</Text>
                                    <Text style={styles.amount}>Amount : {transaction.amount}$</Text>
                                </View>
                            );
                        })
                        : ""}
                </View>
            </Page>
        </Document>
    );
}
