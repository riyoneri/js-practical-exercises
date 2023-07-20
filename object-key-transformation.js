const personProfile = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "Male",
  email: "john.doe@example.com",
  phone: "+1 (555) 555-5555",
  address: "123 Main Street, City, Country",
  occupation: "Software Engineer",
  company: "TechCorp",
  hobbies: ["Reading", "Hiking", "Photography"],
  education: {
    degree: "Bachelor of Science",
    major: "Computer Science",
    university: "ABC University",
  },
  languages: ["English", "Spanish"],
  socialMedia: {
    twitter: "@john_doe",
    linkedIn: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
  },
  isMarried: false,
  hasPets: true,
};

function transformKeys(obj, func) {
  for (let prop in obj) {
    obj[func(prop)] = obj[prop];
    delete obj[prop];
  }

  return obj
}

const transformFunction = (key) => key.toUpperCase();
const transformedObject = transformKeys(personProfile, transformFunction);
console.log(transformedObject);
