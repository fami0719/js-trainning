function orderList() {
    let select = [];
    let order = document.getElementsByClassName("order");
    for (let i = 0; i < order.length; i++) {
    let selectHtml = "<select id=select" + i + ">";
    for (let j = 0; j < 10; j++) {
        selectHtml = selectHtml + "<option>" + j + "</option>";
    }
    order[i].innerHTML = selectHtml + "</select>";
    select[i] = document.getElementById("select" + i);
    select[i].addEventListener("change", calc);
    }
}
function calc() {
    let goukei = 0; //合計金額(円)
    let elements; //form内の要素
    let orderNumber; //要素の値(注文数)
    let kingakuElement; //金額を表示する要素
    let price; //一覧表の値段(円)
    let order = document.getElementsByClassName("order");
    let shopTable = document.getElementById("shopTable");
    let goukeiElement = document.getElementById("goukei");
    for (let i = 0; i < order.length; i++) {
    elements = document.forms[0].elements[i];
    orderNumber = elements.value;
    price = shopTable.rows[i + 1].cells[2].innerText;
    kingakuElement = document.getElementById("kingaku" + i);
    if (orderNumber > 0) {
        kingakuElement.innerHTML = orderNumber * price;
    } else {
        kingakuElement.innerHTML = "";
    }
    goukei += orderNumber * price;
    goukeiElement.innerHTML = "合計支払い金額：" + goukei + "円";
    }
}
