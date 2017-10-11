// Rover Object Goes Here
// ======================
var rover={
  direction: "N",
  travelLog: [],
  x:0,
  y:0,
}

var grid = [
["rover", null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null]
]

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "W"
    console.log("Rover is now facing West")
    break;
    case "W":
    rover.direction = "S"
    console.log("Rover is now facing South")
    break;
    case "S":
    rover.direction = "E"
    console.log("Rover is now facing East")
    break;
    case "E":
    rover.direction = "N"
    console.log("Rover is now facing North")
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E"
    console.log("Rover is now facing East")
    break;
    case "W":
    rover.direction = "N"
    console.log("rover is now facing North")
    break;
    case "S":
    rover.direction = "W"
    console.log("Rover is now facing West")
    break;
    case "E":
    rover.direction = "S"
    console.log("Rover is now facing South")
    break;
  }
}

function moveForward(rover){

  console.log("moveForward was called!");
  if(rover.direction == "N"){
    rover.y -=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if (rover.direction == "W"){
    rover.x -=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if(rover.direction == "S"){
    rover.y +=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if(rover.direction == "E"){
    rover.x +=1;
    rover.travelLog.push([rover.x,rover.y]);
  }else{
    console.log("Rover can't move forward!")
  }
console.log ("Rover's position is [" + rover.x + "," + rover.y + "]");
console.log('\n');
}

function moveBackward(rover){

  console.log("moveBackward was called");
  if(rover.direction == "N"){
    rover.y +=1;
  } else if (rover.direction == "W"){
    rover.x +=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if(rover.direction == "S"){
    rover.y -=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if(rover.direction == "E"){
    rover.x -=1;
    rover.travelLog.push([rover.x,rover.y]);
  }else{
    console.log("Rover can't move backward!")
  }

console.log ("Rover's position is [" + rover.x + "," + rover.y + "]");
console.log('\n');
}

var command = "rffrfflfrff";

for (var i = 0; i < command.length; i++){
var firstLetter = command.charAt(i);
    switch(firstLetter){
      case 'r': turnRight(rover);
      break;
      case 'l': turnLeft(rover);
      break;
      case 'f': moveForward(rover);
      break;
      case 'b': moveBackward(rover);
      break;
      default:
        console.log("Non existent command. Please try with 'r', 'l', 'f' or 'b'")
      break;
}
}

console.log(rover.travelLog);
