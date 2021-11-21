import React from 'react';
import { Text, View } from 'react-native';
import SearchableDropDownComponent from '../../Components/Search_Component';
import { GetSearchData } from '../../themes/DataConstants';

const Implement_Searching = () => {
   console.log(GetSearchData(10) ) 
    return(
        <View style={{flex:1,}}>
            <SearchableDropDownComponent/>

        </View>
    )
}

export default Implement_Searching;
