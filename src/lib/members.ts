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
        image: Pics.Bear.img,
        email: "maria@gmail.com",
        color: Pics.Bear.color,
    },
    {
        id: 2,
        name: "Dave",
        image: Pics.Dog.img,
        color: Pics.Dog.color,
        email: "dave@gmail.com",
    },
    {
        id: 3,
        name: "Mia",
        image: Pics.Fox.img,
        color: Pics.Fox.color,
        email: "mia@gmail.com",
    },
    {
        id: 4,
        name: "Susie",
        image: Pics.Frog.img,
        color: Pics.Frog.color,
        email: "susie@gmail.com",
    },
];

export default members;
