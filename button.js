AFRAME.registerComponent("create-buttons",{
    init:function () {
        // button1
        var b1=document.createElement('button');
        b1.innerHTML="rate us";
        b1.setAttribute('id','rating-button');
        b1.setAttribute('class','btn btn-warning' )

        // button2
        var b2=document.createElement('button');
        b2.innerHTML="order now";
        b2.setAttribute('id','order-button');
        b2.setAttribute('class','btn btn-warning' )

        // append button elements
        var buttonDiv=document.getElementById('button-div')
        buttonDiv.appendChild(b1)
        buttonDiv.appendChild(b2)
    },

})