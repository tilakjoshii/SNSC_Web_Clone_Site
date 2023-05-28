function example(names,greet){
    var name="total"
      console.log(names+" "+greet);
  }
  let names="tilak";
  let roll=03;
  let good='tilak is a good boy';
  let morning="good morning";
  example(names,morning);
  example(roll,morning);
  example(good,morning);
  let coach="tilak";
  switch (coach) {
    case "hari":
        console.log("this is a hari");
        break;
    case "krishna":
        console.log("this is a tilak");
        break;
    case "shyam":
        console.log("this is a shyam");
        break;
  
    default:
        console.log("none of the above");
        break;
  }