var i = 0;
function add() {
    var input = document.getElementById('input1').value;

    var node = document.createElement("LI");
    node.setAttribute("class", "input");
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    var nodeButton = document.createElement("BUTTON");
    var textnodeButton = document.createTextNode("X");
    nodeButton.appendChild(textnodeButton);
    document.getElementsByTagName("LI")[i].appendChild(nodeButton);
    i++;
    nodeButton.setAttribute("class", "buttons")
    nodeButton.style.cursor = "pointer";

    nodeButton.addEventListener("click",function(){
        node.remove(node);
        node.removeChild(nodeButton);
        i--;
    })
    var button2= document.getElementById('b2'); 
        button2.addEventListener("click", function(){
        var j=0;
        for(j=i; j>=0;j--){
             node.remove(node);
        node.removeChild(nodeButton);
        i--;
        }
    })
    document.getElementById("input1").value= " ";
}