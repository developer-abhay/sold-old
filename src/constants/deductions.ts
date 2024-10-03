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
