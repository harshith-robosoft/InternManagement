let object = {
    name: "Prasad R G",
    dob: "2022-12-23",
    number: 7829943641,
    emailId: "prg@gmail.com",
    jobLoaction: "banglore",
    gender: "male",
    position: "SDE",
    expYear: "1",
    expMonth: "2",
    contactPerson: "Test Name",
    languagesKnown: "English",
    workHistories: [
      {
        company: "Test Name",
        position: "Position",
        fromDate: "2022-12-08",
        toDate: "2022-12-24",
        location: "UDupi",
      },
    ],
    educations: [
      {
        institution: "PDA College of Engineering",
        grade: "A",
        location: "Test Location",
        fromDate: "2022-12-24",
        toDate: "2022-12-24",
      },
    ],
    address: {
      content: "Test Location Content",
      state: "Karnataka",
      pinCode: 585101,
    },
    softwareWorked: "React native, React Js",
    skills: "DevOps",
    about: "This is about You Container",
    currentCTC: 213456543,
    expectedCTC: 234567543,
    links: [
      {
        website: "TEst Name",
        url: "Test Link",
      },
    ],
  };
  
  export const createAndGetFormData = (jsonObject) => {
    let formData = new FormData();
    for (let key in jsonObject) {
      if (Array.isArray(jsonObject[key])) {
        jsonObject[key].forEach((item, index) => {
          for (let arrayObject in item) {
            formData.append(
              `${key}[${index}].${arrayObject}`,
              `${item[arrayObject]}`
            );
          }
        });
      } else if (key === "address") {
        for (let item in jsonObject["address"]) {
          formData.append(`address.${item}`, jsonObject.address[item]);
        }
      } else {
        formData.append(`${key}`, `${jsonObject[key]}`);
      }
    }
    //   console.log(formData);
    return formData;
  };
  
  // createAndGetFormData(object);
  