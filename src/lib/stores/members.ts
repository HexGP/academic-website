import { writable } from 'svelte/store';

export const members = writable([
    {
        name: "John Doe",
        role: "PhD Student",
        image: "/people/member.jpg",
        interests: "Machine Learning, NLP",
        link: "#" // Add personal page link here
      },
      {
        name: "Hussein Rajabu",
        role: "Graduate Researcher",
        image: "/people/member.jpg", 
        interests: "Computer Vision, Neural Networks",
        link: "https://github.com/HexGP"
      },
      {
        name: "Afsana Nasrin",
        role: "Graduate Researcher",
        image: "/people/member.jpg", 
        interests: "Machine Learning, Robotics",
        link: "#"
      }
]);
