//1 - Get Object
//2- Get Perameters/Properys
//3- Action(shapes Lines)

function makeCanvas(){
    var PI_TWO = Math.PI * 2;
      //1 0 Get Object

      var canvas = document.getElementById('canvas1');
      var ctxl= canvas.getContext('2d');

      //2 -Set Properties
      ctxl.font = '32pt Arial';
      ctxl.fillStyle ='Blue';
      ctxl.strokeStyle='black';

      //3 action
      ctxl.fillText ("I love html5", 45,150);
      ctxl.strokeText("I love html5 ", 45, 150);

      //Canvas 2
      //1 get object
      var canvas2 =document.getElementById('canvas2');
      var ctx2= canvas2.getContext('2d');
//create properties
      ctx2.fillStyle="#ff0000";
      ctx2.strokeStyle="#000000";
      ctx2.lineWidth=10;
      //make react
      ctx2.fillRect(45,5,135,135);
      ctx2.strokeRect(45,5,135,135);

      ctx2.fillStyle="grey";
      ctx2.fillRect(200,0,135,135);
     
      ctx2.fillStyle="grey";
      ctx2.fillRect(45,150,135,135);

      ctx2.fillStyle="#ff0000";
      ctx2.strokeStyle="#000000";
      ctx2.lineWidth=10;
      
      ctx2.fillRect(200,150,135,135);
      ctx2.strokeRect(200,150,135,135);

      ////LINES////
    /////get object////
      var canvas3 =document.getElementById('canvas3');
      var ctx3= canvas3.getContext('2d');

      ctx3.strokeStyle="grey";
      ctx3.fillStyle="red";
      ctx3.lineWidth= 5;

      ctx3.beginPath();     
      ctx3.moveTo(100,100);
      ctx3.lineTo(150,200);
      ctx3.lineTo(200,200);
      ctx3.lineTo(200,290);
      ctx3.lineTo(290,290);
      ctx3.lineTo(290,100);
      ctx3.lineTo(100,100);
      ctx3.stroke();
      ctx3.fill();
      ctx3.closePath();


      ///circles///

      var canvas4 =document.getElementById('canvas4');
      var ctx4= canvas4.getContext('2d');

      ctx4.fillStyle="blue";

      ctx4.beginPath();     
      ctx4.arc(200,30,25,0,Math.PI * 2);
      ctx4.fill();
      ctx3.closePath();

      ctx4.fillStyle="red";
      ctx4.beginPath();     
      ctx4.arc(200,100,45,0,Math.PI * 2);
      ctx4.fill();
      ctx4.closePath();

      ctx4.fillStyle="black";
      ctx4.beginPath();     
      ctx4.arc(200,220,75,0,Math.PI * 2);
      ctx4.fill();
      ctx4.closePath();

      ///ANIMATION//

      var canvas5 =document.getElementById('canvas5');
      var ctx5= canvas5.getContext('2d');

      var posX=0;
      var posY=0;
      setInterval(function(){
          posX +=1;
          posY +=1;
        ctx5.fillStyle="black";
        ctx5.fillRect(0,0,canvas5.width, canvas5.height);
        ctx5.fill();

        ctx5.fillStyle="white";
        ctx5.beginPath();
        ctx5.arc(posX,120,55,0,PI_TWO);
        ctx5.fill();
        ctx5.closePath();

        ctx5.fillStyle="red";
        ctx5.beginPath();
        ctx5.arc(150,posY,55,0,PI_TWO);
        ctx5.fill();
        ctx5.closePath();

        ctx5.fillStyle="blue";
        ctx5.beginPath();
        ctx5.arc(350,posY,55,0,PI_TWO);
        ctx5.fill();
        ctx5.closePath();



  
      },30);
    

}