const DEVICE_INFO2 = [
  {
    _id: 0,
    message: "Are You Able To Make Calls ?",
  },
  {
    _id: 1,
    message: "Is Your Device's Touch Screen Working Properly ?",
  },
  {
    _id: 2,
    message: "Is Your Phone's Screen Original ?",
  },
  {
    _id: 3,
    message: "Broken/Scratch On The Device Screen",
  },
  {
    _id: 4,
    message: "Scratch/Dent On Device Body",
  },
  {
    _id: 5,
    message: "Dead Spot/Visible Line On Screen",
  },
  {
    _id: 6,
    message: "Device Panel Missing/Broken",
  },
  {
    _id: 7,
    message: "Front Camera Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 8,
    message: "Volume Button Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 9,
    message: "Finger Touch Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 10,
    message: "Speaker Faulty",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 11,
    message: "Power Button Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 12,
    message: "Silent Button Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 13,
    message: "Camera Glass Broken",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 14,
    message: "Vibrator Is Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 15,
    message: "Proximity Sensor Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 16,
    message: "Back Camera Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 17,
    message: "Wifi Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 18,
    message: "Batter In Service (less than 80%)",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 19,
    message: "Charging Port Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 20,
    message: "Face Sensor Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 21,
    message: "Audio Receiver Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 22,
    message: "Bluetooth Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 23,
    message: "Microphone Not Working",
    favourableValue: false,
    deductionPercentage: 1,
  },
  {
    _id: 24,
    message: "Original Charger Of Device",
    favourableValue: true,
    deductionPercentage: 1,
  },
  {
    _id: 25,
    message: "Box With Same IMEI",
    favourableValue: true,
    deductionPercentage: 1,
  },
];

const DEVICE_INFO = {
  normalCondition: [
    "Are You Able To Make Calls ?",
    "Is Your Device's Touch Screen Working Properly ?",
    "Is Your Phone's Screen Original ?",
  ],
  physicalCondition: [
    "Broken/Scratch On The Device Screen",
    "Scratch/Dent On Device Body",
    "Dead Spot/Visible Line On Screen",
    "Device Panel Missing/Broken",
  ],
  functionalCondition: [
    "Front Camera Not Working",
    "Volume Button Not Working",
    "Finger Touch Not Working",
    "Speaker Faulty",
    "Power Button Not Working",
    "Silent Button Not Working",
    "Camera Glass Broken",
    "Vibrator Is Not Working",
    "Proximity Sensor Not Working",
    "Back Camera Not Working",
    "Wifi Not Working",
    "Batter In Service (less than 80%)",
    "Charging Port Not Working",
    "Face Sensor Not Working",
    "Audio Receiver Not Working",
    "Bluetooth Not Working",
    "Microphone Not Working",
  ],
  accessories: ["Original Charger Of Device", "Box With Same IMEI"],
} as const;

export { DEVICE_INFO };
