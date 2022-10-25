let inputFromUserInternal;

let tarMedStoreBokstaver = false;

let teller = 0;

const pullInput = () => {
  inputFromUserInternal = document.getElementById("inputFromUser").value;
  console.log(inputFromUserInternal);
};

const storeBokstaver = () => {
  if (tarMedStoreBokstaver == false) {
    tarMedStoreBokstaver = true;
  } else {
    tarMedStoreBokstaver = false;
  }
};

const gjørAlt = () => {
  teller = 0;
  pullInput();
  if (tarMedStoreBokstaver == false) {
    //hvis noe går til helvette start her
    inputFromUserInternal = inputFromUserInternal.toLowerCase();
  }
  for (let i = 0; i < inputFromUserInternal.length; i++) {
    if (inputFromUserInternal.charAt(i) == "a") {
      teller++;
    }
  }
  console.log(teller);
};
