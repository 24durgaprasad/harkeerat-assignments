
function isAnagram(str1, str2) {

  str1 = "care" 
  str2 = "race"

  let newstr1 = str1.split("").sort().join("")
 let  newstr2 = str2.split("").sort().join("")

  if(newstr1 == newstr2){
    console.log("is anagaram")
  }
  else{
    console.log("not an anagaram")
  }

}

isAnagram()

module.exports = isAnagram;