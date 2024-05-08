import React , {useState , useEffect} from 'react'
import { StyleSheet, Button , ScrollView, View, Text, SafeAreaView , Image , InputAccessoryView ,  TextInput , TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';





export default function feed(){
  return(
  
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <View style={styles.nav}>
        <View style={styles.emptyView}></View>
        <View style={styles.nonemptyView}><Text style={styles.nonemptyText}>Starseite</Text></View>
        <View style={styles.emptyView}>
          <AntDesign style={styles.menuIcon} name="menuunfold" size={24} color="white" fontWeight="500" />
          </View>
          
      </View>


      <View style={styles.profileView}>
        <View style={styles.prifleImgView}>
          <View style={styles.round}>
            <Entypo name="user" size={36} color="white" />
          </View>
          
        </View>
        <View style={styles.profileImgText}>
          <Text style={styles.text1}>Jana Dietrich</Text>
          <Text style={styles.text2}>Arbeitszeit: 03:24:33</Text>
          <Text style={styles.text2}>Pausenzeit: 00:36:00</Text>
        </View>
      </View>




      <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.headerText}>Funktionen</Text>
          </View>



          <View style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Ionicons name="globe-outline" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Bereich suchen</Text>
            </View>
          </View>

          
          <View style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <FontAwesome6 name="clock" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Arbeitszeiterfassung</Text>
            </View>
          </View>


          
          <View style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Feather name="book-open" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Terminubersicht</Text>
            </View>
          </View>


          
          <View style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Feather name="folder" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Dateien</Text>
            </View>
          </View>


          
          <View style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Ionicons name="key" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Schlusselverwaltung</Text>
            </View>
          </View>


          
          <View style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <AntDesign name="setting" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Administration</Text>
            </View>
          </View>


          
          <View style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Ionicons name="arrow-undo-outline" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Abmelden</Text>
            </View>
          </View>
      </View>


      

      <View style={styles.list}>
          <View style={styles.listItem} >
            <View style={styles.listItemIcon}>
            <Ionicons name="globe-outline" size={24} color="white" />
            </View>
            <View style={styles.listItemText}>
              <Text style={styles.itemText}>Bereich suchen</Text>
            </View>
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    
      
   
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C37',
    paddingTop: 40
  
  },
  feedBody:{
    backgroundColor: '#282C37',
    flex: 1,

  },
  nav:{
    backgroundColor: '#3E424B',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    
  },
  emptyView:{
    width: "20%",
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  nonemptyView:{
    width: '60%',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row'
  },
  nonemptyText:{
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '500'
  },
  profileView:{
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 40,
    backgroundColor: '#3E424B',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  prifleImgView:{
    width: "20%",
    padding: 10
  },
  prifleImgText:{
    width: "80%",
    padding: 4
  },
  round:{
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 50,
    width: 50
  },
  text1:{
    paddingHorizontal: 11,
    color:'white',
    fontSize: 18,
    fontWeight: '500'
  },
  text2:{
    paddingHorizontal: 11,
    color: 'white'
  },
  profileImgText:{
    paddingVertical: 10
  },
  list:{
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'column',
    marginTop: 30,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 30
  },
  listHeader: {
    padding: 16,
    backgroundColor: '#3E424B',
    
  },
  headerText:{
    color:"white"
  },
  listItem:{
    padding: 16,
    flexDirection: 'row',
    backgroundColor: '#3E424B',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#282C37'
  },
  listItemIcon:{
    width: '10%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText:{
    color:'white',
    paddingHorizontal: 6,
    fontSize: 18,
    fontWeight: '500',
  },
  menuIcon:{
    paddingRight: 14
  }
})