import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text,View , SafeAreaView,Image,Button, TextInput,FlatList} from 'react-native';


export default function App(){
  const [text,setText]=useState('')
  const [list,setList]=useState([])
  const listing =()=>{
     if(text != "" )
     {
      setList([...list,{key:Math.random().toString(),value:text}])
     }
     
     
   }
  const clear=id=>{
    setList(list.filter(todo => todo.key !== id));
  }   
  return(
  
    <View >
      <View style={{flexDirection:'row',justifyContent:'left' ,borderColor:'black',borderWidth:1}}>
        <TextInput 
         style={{borderWidth:2,padding:4,borderColor:'',width:300,marginRight:4}}
         placeholder="Enter Todo Item"
         onChangeText={text=>{setText(text)}}
         defaultValue={text}
        />
      
      <Button 
        title="Click to Add"
        onPress={listing}
        
        />
        <Button 
        color='red'
        title="Delete All"
        onPress={()=>setList([])}
        />
      </View>

      <View >
      <FlatList
      
      data={list}
      renderItem={
        itemData => (
         <View style={{flexDirection:'row',justifyContent:'left' ,borderColor:'black',borderWidth:1}}> 
          <Text>
            {/* {itemData.item.key} */}
            {itemData.index}
            {') '}
            {itemData.item.value}
          </Text>
          <Button
          title="Clear"
          onPress={()=>clear(itemData.item.key)}
          />
         </View> 
        
        )
      }
      />   
        </View>  
    </View>

);

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });


}















