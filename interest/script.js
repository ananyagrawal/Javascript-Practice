
const calculateInterest = () => {
    const p = document.getElementById("principal").value;
    const r = document.getElementById("rate").value;
    const t = document.getElementById("time").value;
    if(isNaN(p) || isNaN(r) || isNaN(t) || r>100 || t>15)
    alert("Invalid Input");
    else{
        const si = p*r*t/100;
        document.getElementById("result").textContent = `Simple Interest: Rs.${si}`;
    }
}
