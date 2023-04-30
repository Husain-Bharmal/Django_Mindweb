var wrods = document.getElementById("writing");

function spellings(id,spell){   
    let num_id = document.getElementById(`${id}`)
    if("speechSynthesis" in window){
        num_id.onclick =()=>{
            let msg = new SpeechSynthesisUtterance(`${spell}`);
            speechSynthesis.speak(msg);
            wrods.innerHTML = `${spell}`
        }
    }
}


spellings("num1","ONE")
spellings("num2","TWO")
spellings("num3","THREE")
spellings("num4","FOUR")
spellings("num5","FIVE")
spellings("num6","SIX")
spellings("num7","SEVEN")
spellings("num8","EIGHT")
spellings("num9","NINE")
spellings("num10","TEN")
spellings("num11","ELEVEN")
spellings("num12","TWELVE")
spellings("num13","THIRTEEN")
spellings("num14","FOURTEEN")
spellings("num15","FIFTEEN")
spellings("num16","SIXTEEN")
spellings("num17","SEVENTEEN")
spellings("num18","EIGHTEEN")
spellings("num19","NINETEEN")
spellings("num20","TWENTY")
spellings("num21","TWENTY-ONE")
spellings("num22","TWENTY-TWO")
spellings("num23","TWENTY-THREE")
spellings("num24","TWENTY-FOUR")
spellings("num25","TWENTY-FIVE")
spellings("num26","TWENTY-SIX")
spellings("num27","TWENTY-SEVEN")
spellings("num28","TWENTY-EIGHT")
spellings("num29","TWENTY-NINE")
spellings("num30","THIRTY")
spellings("num31","THIRTY-ONE")
spellings("num32","THIRTY-TWO")
spellings("num33","THIRTY-THREE")
spellings("num34","THIRTY-FOUR")
spellings("num35","THIRTY-FIVE")
spellings("num36","THIRTY-SIX")
spellings("num37","THIRTY-SEVEN")
spellings("num38","THIRTY-EIGHT")
spellings("num39","THIRTY-NINE")
spellings("num40","FOURTY")
spellings("num41","FOURTY-ONE")
spellings("num42","FOURTY-TWO")
spellings("num43","FOURTY-THREE")
spellings("num44","FOURTY-FOUR")
spellings("num45","FOURTY-FIVE")
spellings("num46","FOURTY-SIX")
spellings("num47","FOURTY-SEVEN")
spellings("num48","FOURTY-EIGHT")
spellings("num49","FOURTY-NINE")
spellings("num50","FIFTY")



