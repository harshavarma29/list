var btn =  document.getElementById("enter");

var inc = document.getElementById("inp");

var enter = 0;

var i = 0;

var arr;
var oeder;
var ol;

function length() {
    return inc.value.length;
} 

function list() {
    var x = i.toString();
    if(enter==0) {
        arr = document.querySelectorAll("div")[5];
        console.log(arr); 

        order = document.createElement("ol");
        arr.appendChild(order);
        ol = document.querySelector('ol');
        ol.id = 'parent';
        enter=1;
    }

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inc.value));
    li.id="child".concat(x);
    ol.appendChild(li);

    var bt = document.createElement("button");
    bt.appendChild(document.createTextNode("Delete"));
    bt.id = "delButton".concat(x);
    bt.className = "delete";
    li.appendChild(bt);

    var und = document.createElement("p"); 
    und.id = "para".concat(x);
    und.className="under";
    ol.appendChild(und); 

    var del = document.getElementById("delButton".concat(x));
    del.addEventListener("click", function() {
        var rem = document.getElementById("child".concat(x));
        var paraRem = document.getElementById("para".concat(x));
        if(document.querySelectorAll("li").length==1) {
            var last = document.getElementById("parent");
            last.remove();
            console.log(document.querySelectorAll("li").length);
        }
        else {
            paraRem.remove();
            rem.remove();
            console.log(document.querySelectorAll("li").length);
        }
        enter=0;
    }); 
    var delAll = document.getElementById("delBut");

    var par = document.getElementById("parent");

    function deleteList() {
        par.remove();
        enter=0;
    }
    delAll.addEventListener("click", deleteList);
    i++;
    inc.value='';
}

function addList() { 
    if(length()) {
        list();
    }
}

function addKey(eve) {
    if(length() && eve.keyCode === 13) {
        list();
    }
}

btn.addEventListener("click", addList);

inc.addEventListener("keypress", addKey);