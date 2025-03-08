type TDatabase = {
  characters: TCharacter[];
};

type TCharacter = {
  id: string;
  firstName: string;
  lastName: string;
  previousNames?: { firstName: string; lastName: string }[];
  aliases?: string[];
  nicknames?: string[];
  dateOfBirth?: Date;
  death?: {
    age?: number;
    description?: string;
  };
  height?: number;
  weight?: number;
  gender: "male" | "female";
};

const database: TDatabase = {
  characters: [
    {
      id: "1",
      firstName: "Dexter",
      lastName: "Morgan",
      previousNames: [{ firstName: "Dexter", lastName: "Moser" }],
      aliases: ["Kyle Butler", "Bob"],
      nicknames: ["Bay Harbor Butcher", "Dex"],
      dateOfBirth: new Date("02-01-1971"),
      height: 180,
      weight: 79,
      gender: "male",
    },
    {
      id: "2",
      firstName: "Brian",
      lastName: "Moser",
      aliases: ["Rudy Cooper"],
      nicknames: ["Ice Truck Killer", "Biney"],
      dateOfBirth: new Date("07-17-1966"),
      death: {
        age: 40,
      },
      height: 185,
      weight: 75,
      gender: "male",
    },
  ],
};

export default database;
