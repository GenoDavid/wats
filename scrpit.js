function con(tagname, cls) {
    var ele = document.createElement(tagname);
    ele.setAttribute(cls);
    // ele.setAttribute(attrivalue);
    return ele;
}
function head(tagname, content) {
    var ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}
function lable(tagname, fr, forcls, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(fr, forcls);
    ele.innerHTML = content;
    return ele;
}
function input(tagname, firstcls, type, text, id, idvalue, placeholder, placeholdername) {
    var ele = document.createElement(tagname);
    ele.setAttribute(firstcls);
    ele.setAttribute(type, text);
    ele.setAttribute(id, idvalue);
    ele.setAttribute(placeholder, placeholdername);
    return ele;
}
function brake(tagname) {
    var ele = document.createElement(tagname);
    return ele;
}
// function checkbox(tagname,) {
//     var ele = document.createElement(tagname);
//     ele.setAttribute(attriname);
//     ele.setAttribute(attrvalue);
//     ele.setAttribute(attriname1);
//     ele.setAttribute(attrvalue1);
//     return ele;
// }
function radio(tagname, type, value, id, idvalue) {
    var ele = document.createElement(tagname);
    ele.setAttribute(type);
    ele.setAttribute(value);
    ele.setAttribute(id, idvalue);
    return ele
}
function veg(tagname, attriname, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attriname);
    ele.innerHTML = content;
    return ele
}
function butn(tagname, type, value, id, idvalue, clr, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(type, value);
    ele.setAttribute(id, idvalue);
    ele.setAttribute(clr);
    ele.innerHTML = content;
    return ele;
}
function table(tagname, attrname, attrvalue) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    return ele;
}
function scope(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}

let container = con("div", "container-fluid");
let row = con("div", "row");
let col = con("div", "col");
let form = con("form");
let heading = head("h1", "Form Submission");
let lable1 = lable("lable", "for", "fname", "FirstNmae");
let br = line("br");
let input1 = input("input", "form-control", "type", "text", "id", "fname", "placeholder", "FirstName");
let br1 = line("br");
let lable2 = lable("lable", "for", "lname", "Lastname");
let br2 = line("br");
let input2 = input("input", "form-control", "type", "text", "id", "lname", "placeholder", "Lastnmae");
let br3 = line("br");
let lable3 = lable("lable", "for", "addres1", "Address line 1:");
let br4 = line("br");
let input3 = input("input", "form-control", "type", "text", "id", "addres1", "placeholder", "Address line 1:");
let br5 = line("br");
let lable4 = lable("lable", "for", "addres2", "Address line 2:");
let br6 = line("br");
let input4 = input("input", "form-control", "type", "text", "id", "addres2", "placeholder", "Addre;ss line 2:");
let br7 = line("br")
let lable5 = lable("lable", "for", "pin", "PIN:");
let br8 = line("br");
let input5 = input("input", "form-control", "type", "number", "id", "pin", "placeholder", "PIN:");
let gender = head("h1", "Gender");
let circle = radio("input", "type", "radio", "id", "gender")
let br9 = line("br");
let tag = head("", "Male");
let circle1 = radio("input", "type", "radio", "id", "gender");
let br10 = line("br");
let tag1 = head("", "Female");
let food = head("p", "choice of food: (must choose at least 2 out of 5 options);");
let br11 = line("br");
let box = radio("input", "type", "checkbox", "id", "food");
let br12 = line("br");
let list = head("", "North Indian");
let br13 = line("br");
let box1 = radio("input", "type", "checkbox", "id", "food");
let br14 = line("br");
let list1 = head("", "South Indian");
let br15 = line("br");
let box2 = radio("input", "type", "checkbox", "id", "food");
let br16 = line("br");
let list2 = head("", "Chinese");
let br17 = line("br");
let box3 = radio("input", "type", "checkbox", "id", "food");
let br18 = line("br");
let list3 = head("", "Japanese");
let br19 = line("br");
let box4 = radio("input", "type", "checkbox", "id", "food");
let br20 = line("br");
let list4 = head("", "Seafood");
let lable6 = lable("lable", "for", "state", "State:");
let br21 = line("br");
let input6 = input("input", "form-control", "type", "text", "id", "state", "placeholder", "State:");
let br22 = line("br");
let lable7 = lable("lable", "for", "country", "Country:");
let br23 = line("br");
let input7 = input("input", "form-control", "type", "text", "id", "country", "placeholder", "country:");
let btn = butn("button", "type", "sumit", "id", "btn", "btn-secondary", "Sumit")
let list5 = head("h1", "Temporary Database");
let sec = table("table", "class", "table");
let sec1 = table("thead", "class", "thead-dark");
let tr = line("tr");
let tr1 = scope("th", "scope", "col", "FirstName");
let tr2 = scope("th", "scope", "col", "LastName");
let tr3 = scope("th", "scope", "col", "Address");
let tr4 = scope("th", "scope", "col", "Pincode");
let tr5 = scope("th", "scope", "col", "Gender");
let tr6 = scope("th", "scope", "col", "Food");
let tr7 = scope("th", "scope", "col", "State");
let tr8 = scope("th", "scope", "col", "Country");


container.append(row);
row.append(col);
col.append(form);
form.append(heading, lable1, br, input1, br1, lable2, br2, input2, br3, lable3, br4, input3, br5, lable4, br6, input4, br7, lable5, br8, input5, gender, circle, br9, tag, circle1, br10, tag1, food, br11, box, br12, list, br13, box1, br14, list1, br15, box2, br16, list2, br17, box3, br18, list3, br19, box4, br20, list4, lable6, br21, input6, br22, lable7, br23, input7, btn);
row.append(list5);
row.append(sec);
sec.append(sec1);
sec1.append(tr);
tr.append(tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8)

document.body.append(container)