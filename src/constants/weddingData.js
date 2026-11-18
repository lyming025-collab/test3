// src/constants/weddingData.js
import groomImage from "../assets/images/groom.jpg";
import brideImage from "../assets/images/bride.jpg";

export const WEDDING_DATA = {
  groom: {
    khmerName: "ថាន​ សេងហួត",
    englishName: "Than Senghouth",
    avatar: groomImage,
    parents: "លោក ថែ វ៉ាន់ថាន និង លោកស្រី សែម សារឿន"
  },
  bride: {
    khmerName: "សៀង រីវ៉ូហ្សា",
    englishName: "Seang Viroza",
    avatar: brideImage,
    parents: "លោក ឆោម សៀង និង លោកស្រី ហុង ចន្ធា"
  },
  eventDate: "2027-01-17T07:00:00",
  venue: {
    nameKhmer: "ព្រែកតាមាក់ ខេត្តកណ្តាល",
    nameEn: "Grand Ballroom, Garden City Hotel, Phnom Penh",
    mapLink: "https://maps.google.com/?q=Garden+City+Hotel+Phnom+Penh"
  },
  bankAccounts: [
    {
      bank: "ABA Bank",
      accountName: "Seang Viroza",
      accountNumber: "000 123 456",
      qrImage: "/assets/images/khqr-aba.png"
    },
    
  ]
};