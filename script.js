const provider = new ethers.providers.Web3Provider(window.ethereum);

var MoodContractAddress = "0xB44C91280a8aE0A57452dC5a23D0d5B440a9E891";
var MoodContractAbi = [
{
   "inputs": [],
   "name": "getMood",
   "outputs": [
       {
           "internalType": "string",
           "name": "",
           "type": "string"
       }
   ],
   "stateMutability": "view",
   "type": "function"
},
{
   "inputs": [],
   "name": "mood",
   "outputs": [
       {
           "internalType": "string",
           "name": "",
           "type": "string"
       }
   ],
   "stateMutability": "view",
   "type": "function"
},
{
   "inputs": [
       {
           "internalType": "string",
           "name": "_mood",
           "type": "string"
       }
   ],
   "name": "setMood",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
}
];

var MoodContract;
var signer;

provider.listAccounts().then(function (accounts) {
signer = provider.getSigner(accounts[0]);
MoodContract = new ethers.Contract(
MoodContractAddress,
MoodContractAbi,
signer
);
});

console.log(MoodContract);

async function getmood() {
    var  getMoodPromise = MoodContract.getMood();
    var Mood = await getMoodPromise;    
    console.log(Mood);
}

async function setmood() {
 let mood = document.getElementById("mood").value;
 var setMoodPromise = MoodContract.setMood(mood);
 await setMoodPromise;
}