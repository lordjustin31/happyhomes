// frontend/my-app/src/api.ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// --------------------- PINS ---------------------
export const getPins = async () => {
  const response = await api.get("/pins/");
  return response.data;
};

// --------------------- REVIEWS ---------------------
export const getReviews = async () => {
  const response = await api.get("/reviews/");
  return response.data;
};

// --------------------- SUBDIVISIONS ---------------------
export const getSubdivisions = async () => {
  const response = await api.get("/subdivisions/");
  return response.data;
};

// --------------------- BOOKINGS ---------------------
export const getBookings = async () => {
  const response = await api.get("/bookings/");
  return response.data;
};

// --------------------- FACILITIES ---------------------
export const getFacilities = async () => {
  const response = await api.get("/facilities/");
  return response.data;
};

// --------------------- AVAILABLE SLOTS ---------------------
export const getAvailableSlots = async () => {
  const response = await api.get("/available-slots/");
  return response.data;
};

// --------------------- MAINTENANCE ---------------------
export const getMaintenance = async () => {
  const response = await api.get("/maintenance/");
  return response.data;
};

// --------------------- NEWS ---------------------
export const getNews = async () => {
  const response = await api.get("/news/");
  return response.data;
};

// --------------------- ALERTS ---------------------
export const getAlerts = async () => {
  const response = await api.get("/alerts/");
  return response.data;
};

// --------------------- CONTACT INFO ---------------------
export const getContactInfo = async () => {
  const response = await api.get("/contact-info/");
  return response.data;
};

// --------------------- CONTACT MESSAGES ---------------------
export const sendContactMessage = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const response = await api.post("/contact-messages/", data);
  return response.data;
};

// --------------------- VISITOR ---------------------
export const getVisitors = async () => {
  const response = await api.get("/visitor/");
  return response.data;
};

// --------------------- RESIDENT PIN ---------------------
export const getResidentPin = async () => {
  const response = await api.get("/resident-pin/");
  return response.data;
};

// --------------------- RESIDENTS ---------------------
export const getResidents = async () => {
  const response = await api.get("/residents/");
  return response.data;
};

// --------------------- ADMIN VISITORS ---------------------
export const getAdminVisitors = async () => {
  const response = await api.get("/admin/visitors/");
  return response.data;
};

// --------------------- HOUSES ---------------------
export const getHouses = async () => {
  const response = await api.get("/houses/");
  return response.data;
};

// --------------------- FAQ ---------------------
export const getFAQ = async () => {
  const response = await api.get("/faq/");
  return response.data;
};

// --------------------- SERVICE FEES ---------------------
export const getServiceFees = async () => {
  const response = await api.get("/service-fees/");
  return response.data;
};

// --------------------- BLOG COMMENTS ---------------------
export const getBlogComments = async () => {
  const response = await api.get("/blog-comments/");
  return response.data;
};

// --------------------- BULLETINS ---------------------
export const getBulletins = async () => {
  const response = await api.get("/bulletins/");
  return response.data;
};

// --------------------- BULLETIN COMMENTS ---------------------
export const getBulletinComments = async () => {
  const response = await api.get("/bulletin-comments/");
  return response.data;
};

// --------------------- COMMUNITY MEDIA ---------------------
export const getCommunityMedia = async () => {
  const response = await api.get("/community-media/");
  return response.data;
};

// --------------------- VISITOR REQUESTS ---------------------
export const getVisitorRequests = async () => {
  const response = await api.get("/visitor-requests/");
  return response.data;
};

export default api;
