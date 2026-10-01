import React, { createContext, useContext, useState, useEffect } from 'react';
import { eventsData } from '../data/events';

const RegistrationContext = createContext();

const initialRegistrations = [
  {
    registrationId: 'TH26-982415',
    eventId: 'the-big-hack',
    eventName: 'The Big Hack (Hackathon)',
    studentName: 'Aryan Sharma',
    email: 'aryan.sharma@example.com',
    phone: '+91 98765 12345',
    college: 'Acharya Institute of Technology',
    usn: '1AY22CS045',
    branch: 'Computer Science',
    year: '3rd Year',
    gender: 'Male',
    teamName: 'CyberVanguard',
    teamMembers: [
      { name: 'Pooja Hegde', email: 'pooja@example.com', phone: '+91 98765 12346', college: 'Acharya Institute of Technology', usn: '1AY22CS089' },
      { name: 'Karthik Rao', email: 'karthik@example.com', phone: '+91 98765 12347', college: 'Acharya Institute of Technology', usn: '1AY22IS034' },
      { name: 'Sneha Patil', email: 'sneha@example.com', phone: '+91 98765 12348', college: 'Acharya Institute of Technology', usn: '1AY22AI012' }
    ],
    amount: 500,
    paymentStatus: 'PAYMENT VERIFIED',
    registrationStatus: 'REGISTRATION CONFIRMED',
    paymentId: 'pay_TH26_81923091',
    createdAt: '2026-10-01T10:30:00Z',
    date: '12-13 Nov 2026',
    venue: 'Acharya Central Innovation Hub'
  },
  {
    registrationId: 'TH26-310492',
    eventId: 'competitive-programming',
    eventName: 'CP',
    studentName: 'Aryan Sharma',
    email: 'aryan.sharma@example.com',
    phone: '+91 98765 12345',
    college: 'Acharya Institute of Technology',
    usn: '1AY22CS045',
    branch: 'Computer Science',
    year: '3rd Year',
    gender: 'Male',
    teamName: '',
    teamMembers: [],
    amount: 150,
    paymentStatus: 'PAYMENT VERIFIED',
    registrationStatus: 'REGISTRATION CONFIRMED',
    paymentId: 'pay_TH26_74829101',
    createdAt: '2026-10-01T11:00:00Z',
    date: '12 Nov 2026',
    venue: 'Turing Computer Labs'
  },
  {
    registrationId: 'TH26-559124',
    eventId: 'valorant-clash',
    eventName: 'Valorant',
    studentName: 'Aryan Sharma',
    email: 'aryan.sharma@example.com',
    phone: '+91 98765 12345',
    college: 'Acharya Institute of Technology',
    usn: '1AY22CS045',
    branch: 'Computer Science',
    year: '3rd Year',
    gender: 'Male',
    teamName: 'Phantom Protocol',
    teamMembers: [
      { name: 'Rohan Deshmukh', email: 'rohan@example.com', phone: '+91 98765 99011', college: 'Acharya Institute of Technology', usn: '1AY22CS102' },
      { name: 'Vikas Gowda', email: 'vikas@example.com', phone: '+91 98765 99012', college: 'Acharya Institute of Technology', usn: '1AY22EC055' },
      { name: 'Manish Kumar', email: 'manish@example.com', phone: '+91 98765 99013', college: 'Acharya Institute of Technology', usn: '1AY22ME021' },
      { name: 'Tanvi Shah', email: 'tanvi@example.com', phone: '+91 98765 99014', college: 'Acharya Institute of Technology', usn: '1AY22CS130' }
    ],
    amount: 500,
    paymentStatus: 'PAYMENT PENDING',
    registrationStatus: 'PAYMENT PENDING',
    paymentId: '',
    createdAt: '2026-10-01T11:15:00Z',
    date: '13 Nov 2026',
    venue: 'Pro-Gaming LAN Arena'
  }
];

export const RegistrationProvider = ({ children }) => {
  const [registrations, setRegistrations] = useState(() => {
    const saved = localStorage.getItem('th26_registrations');
    return saved ? JSON.parse(saved) : initialRegistrations;
  });

  const [allEvents, setAllEvents] = useState(() => {
    const saved = localStorage.getItem('th26_events');
    return saved ? JSON.parse(saved) : eventsData;
  });

  const [accommodations, setAccommodations] = useState(() => {
    const saved = localStorage.getItem('th26_accommodations');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('th26_registrations', JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem('th26_events', JSON.stringify(allEvents));
  }, [allEvents]);

  useEffect(() => {
    localStorage.setItem('th26_accommodations', JSON.stringify(accommodations));
  }, [accommodations]);

  const addRegistration = (newReg) => {
    const regWithId = {
      ...newReg,
      registrationId: newReg.registrationId || `TH26-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString()
    };
    setRegistrations(prev => [regWithId, ...prev]);
    return regWithId;
  };

  const updateRegistrationStatus = (regId, statusObj) => {
    setRegistrations(prev => prev.map(r => r.registrationId === regId ? { ...r, ...statusObj } : r));
  };

  const addAccommodation = (booking) => {
    const bookingWithId = {
      ...booking,
      bookingId: `ACC-TH26-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString()
    };
    setAccommodations(prev => [bookingWithId, ...prev]);
    return bookingWithId;
  };

  const addEvent = (newEvent) => {
    setAllEvents(prev => [...prev, { ...newEvent, id: `event-${Date.now()}` }]);
  };

  const updateEvent = (id, updated) => {
    setAllEvents(prev => prev.map(e => e.id === id ? { ...e, ...updated } : e));
  };

  const deleteEvent = (id) => {
    setAllEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <RegistrationContext.Provider value={{
      registrations,
      allEvents,
      accommodations,
      addRegistration,
      updateRegistrationStatus,
      addAccommodation,
      addEvent,
      updateEvent,
      deleteEvent
    }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrations = () => useContext(RegistrationContext);
