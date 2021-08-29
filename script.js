//To vanish items when click on Log In
const logInButton = document.getElementById('login');
logInButton.addEventListener('click', function(){
    var hideArea = document.getElementById('logInArea');
    hideArea.style.display = 'none';
    var showArea = document.getElementById('transectionArea');
    showArea.style.display = 'block';
})

//Add event on Deposite button
document.getElementById('btndeposite').addEventListener('click', function (){
    const depositeAmount =document.getElementById('depositeinput').value;
    const depositeNum = parseFloat(depositeAmount);

    const currentDeposite = document.getElementById('currentdeposite').innerText;
    const currentDepositeNum = parseFloat(currentDeposite);

    const totalDeposite = currentDepositeNum + depositeNum;

    document.getElementById('currentdeposite').innerText = totalDeposite;
    document.getElementById('depositeinput').value='';

    const curretBalance = document.getElementById('currentbalance').innerText;
    const currentbalanceNum = parseFloat(curretBalance);

    const totalBalance = currentbalanceNum + depositeNum;
    document.getElementById('currentbalance').innerText = totalBalance;

})

//Add Event on Withdraw button
document.getElementById('btnwithdraw').addEventListener('click', function (){
    const withdrawAmount = document.getElementById('withdrawinput').value;
    const withdrawNum = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById('currentwithdraw').innerText;
    const currentWithdrawNum = parseFloat(currentWithdraw);

    const totalWithdraw = currentWithdrawNum + withdrawNum;

    document.getElementById('currentwithdraw').innerText = totalWithdraw;
    document.getElementById('withdrawinput').value='';

    const curretBalance = document.getElementById('currentbalance').innerText;
    const currentbalanceNum = parseFloat(curretBalance);

    const totalBalance = currentbalanceNum -withdrawNum;
    document.getElementById('currentbalance').innerText = totalBalance;
})