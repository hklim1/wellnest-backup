const data = [
    {
        memberId: 3,
        title: "Dentist",
        location: "Einstein Medical Center",
        date: "Fri, February 2, 2024",
        phone: "(347)-647-5779",
        _id: 1,
        time: "9:30 AM",
    },
    {
        memberId: 0,
        title: "Doctor",
        location: "General Hospital",
        date: "Sat, February 3, 2024",
        phone: "(215)-123-4567",
        _id: 2,
        time: "10:00 AM",
    },
    {
        memberId: 2,
        title: "Physiotherapist",
        location: "Rehabilitation Clinic",
        date: "Sun, February 4, 2024",
        phone: "(610)-789-0123",
        _id: 3,
        time: "11:15 AM",
    },
    {
        memberId: 1,
        title: "Optometrist",
        location: "Eye Care Center",
        date: "Mon, February 5, 2024",
        phone: "(267)-543-2109",
        _id: 4,
        time: "2:45 PM",
    },
    {
        memberId: 2,
        title: "Orthopedic Surgeon",
        location: "Ortho Clinic",
        date: "Tue, February 6, 2024",
        phone: "(484)-876-5432",
        _id: 5,
        time: "4:30 PM",
    },
    {
        memberId: 3,
        title: "Psychiatrist",
        location: "Mental Health Center",
        date: "Wed, February 7, 2024",
        phone: "(609)-234-5678",
        _id: 6,
        time: "1:00 PM",
    },
    {
        memberId: 0,
        title: "Dermatologist",
        location: "Skin Care Clinic",
        date: "Thu, February 8, 2024",
        phone: "(215)-987-6543",
        _id: 7,
        time: "3:20 PM",
    },
    {
        memberId: 1,
        title: "Cardiologist",
        location: "Heart Health Center",
        date: "Fri, February 9, 2024",
        phone: "(267)-876-5432",
        _id: 8,
        time: "12:45 PM",
    },
    {
        memberId: 2,
        title: "Gynecologist",
        location: "Women's Health Clinic",
        date: "Sat, February 10, 2024",
        phone: "(610)-123-4567",
        _id: 9,
        time: "9:00 AM",
    },
    {
        memberId: 3,
        title: "Podiatrist",
        location: "Foot Care Clinic",
        date: "Sun, February 11, 2024",
        phone: "(484)-234-5678",
        _id: 10,
        time: "11:30 AM",
    },
];

export default data;

type AppointmentType = {
    memberId: number;
    title: string;
    location: string;
    date: string;
    phone: string;
    _id: number;
    time: string;
};

export { AppointmentType };
