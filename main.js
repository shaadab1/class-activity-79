var snames= [];

function SUBMIT()
{

    var n1= document.getElementById("student1").Value;
    var n2= document.getElementById("student2").Value;
    var n3= document.getElementById("student3").Value;
    var n4= document.getElementById("student4").Value;

    snames.push(n1);
    snames.push(n2);
    snames.push(n3);
    snames.push(n4);
    console.log(snames);

    document.getElementById("Display1").innerHTML = snames;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline";

}

function SORT()
{
    snames.sort();
    console.log(snames);
    document.getElementById("Display1").innerHTML = snames;
}