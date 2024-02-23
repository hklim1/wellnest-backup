import * as Pics from "./userIcons";

export type MemberType = {
    id: number;
    name: string;
    image: string;
    email: string;
    color: string;
};

const members = [
    {
        id: 1,
        name: "Me",
        image: "Koala",
        email: "maria@gmail.com",
        color: Pics.Bear.color,
    },
    {
        id: 2,
        name: "Dave",
        image: "lion",
        color: Pics.Dog.color,
        email: "dave@gmail.com",
    },
    {
        id: 3,
        name: "Mia",
        image: "penguin",
        color: Pics.Fox.color,
        email: "mia@gmail.com",
    },
    {
        id: 4,
        name: "Susie",
        image: "pig",
        color: Pics.Frog.color,
        email: "susie@gmail.com",
    },
];

export default members;
