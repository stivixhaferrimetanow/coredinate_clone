import React , {useState , useEffect} from 'react'
import {View , Text  ,SafeAreaView , StyleSheet , ScrollView} from 'react-native'


export default function measure(){
    return(
        <SafeAreaView style={styles.view}>
        <ScrollView>
            <View>
                <Text>Measure</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    view:{
        flex: 1,

    }
})