import AppImages from "./AppImages";
import { RandomStringData } from "./StringConstants";

export const searchListData=[]


 function randomString(length, chars) {
     
    let result = '';
    let imageNumber=0;
    const imageData=[AppImages.image1,AppImages.image2,AppImages.image3,]
    for (let i = length; i > 0; --i)
     {
         result += chars[Math.floor(Math.random() * chars.length)];
         imageNumber=Math.floor(Math.random() * imageData.length)

        //  searchListData.push( {value:i,label:result,image:AppImages.checkBox_checked}) 
         searchListData.push( {value:i,label:result,image:imageData[imageNumber]}) 
        }
    return result;
}


export const GetSearchData=(count)=>{
     randomString(12, RandomStringData);
     return searchListData
    

}