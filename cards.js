const cardList = [
    {
        "name": "Gun",
        "btnName": "gun-btn",
        "beats": ["Rock", "Fire", "Scissors", "Snake", "Human", "Tree", "Wolf"],
        "beatenBy": ["Sponge", "Paper", "Air", "Water", "Dragon", "Devil", "Lightning"]
    },
    {
        "name": "Lightning",
        "btnName": "lightning-btn",
        "beats": ["Gun", "Rock", "Fire", "Scissors", "Snake", "Human", "Tree"],
        "beatenBy": ["Wolf", "Sponge", "Paper", "Air", "Water", "Dragon", "Devil"]
    },
    {
        "name": "Devil",
        "btnName": "devil-btn",
        "beats": ["Lightning", "Gun", "Rock", "Fire", "Scissors", "Snake", "Human"],
        "beatenBy": ["Tree", "Wolf", "Sponge", "Paper", "Air", "Water", "Dragon"]
    },
    {
        "name": "Dragon",
        "btnName": "dragon-btn",
        "beats": ["Devil", "Lightning", "Gun", "Rock", "Fire", "Scissors", "Snake"],
        "beatenBy": ["Human", "Tree", "Wolf", "Sponge", "Paper", "Air", "Water"]
    },
    {
        "name": "Water",
        "btnName": "water-btn",
        "beats": ["Dragon", "Devil", "Lightning", "Gun", "Rock", "Fire", "Scissors"],
        "beatenBy": ["Snake", "Human", "Tree", "Wolf", "Sponge", "Paper", "Air"]
    },
    {
        "name": "Air",
        "btnName": "air-btn",
        "beats": ["Water", "Dragon", "Devil", "Lightning", "Gun", "Rock", "Fire"],
        "beatenBy": ["Scissors", "Snake", "Human", "Tree", "Wolf", "Sponge", "Paper"]
    },
    {
        "name": "Paper",
        "btnName": "paper-btn",
        "beats": ["Air", "Water", "Dragon", "Devil", "Lightning", "Gun", "Rock"],
        "beatenBy": ["Fire", "Scissors", "Snake", "Human", "Tree", "Wolf", "Sponge"]
    },
    {
        "name": "Sponge",
        "btnName": "sponge-btn",
        "beats": ["Paper", "Air", "Water", "Dragon", "Devil", "Lightning", "Gun"],
        "beatenBy": ["Rock", "Fire", "Scissors", "Snake", "Human", "Tree", "Wolf"]
    },
    {
        "name": "Wolf",
        "btnName": "wolf-btn",
        "beats": ["Sponge", "Paper", "Air", "Water", "Dragon", "Devil", "Lightning"],
        "beatenBy": ["Gun", "Rock", "Fire", "Scissors", "Snake", "Human", "Tree"]
    },
    {
        "name": "Tree",
        "btnName": "tree-btn",
        "beats": ["Wolf", "Sponge", "Paper", "Air", "Water", "Dragon", "Devil"],
        "beatenBy": ["Lightning", "Gun", "Rock", "Fire", "Scissors", "Snake", "Human"]
    },
    {
        "name": "Human",
        "btnName": "human-btn",
        "beats": ["Tree", "Wolf", "Sponge", "Paper", "Air", "Water", "Dragon"],
        "beatenBy": ["Devil", "Lightning", "Gun", "Rock", "Fire", "Scissors", "Snake"]
    },
    {
        "name": "Snake",
        "btnName": "snake-btn",
        "beats": ["Human", "Tree", "Wolf", "Sponge", "Paper", "Air", "Water"],
        "beatenBy": ["Dragon", "Devil", "Lightning", "Gun", "Rock", "Fire", "Scissors"]
    },
    {
        "name": "Scissors",
        "btnName": "scissors-btn",
        "beats": ["Snake", "Human", "Tree", "Wolf", "Sponge", "Paper", "Air"],
        "beatenBy": ["Water", "Dragon", "Devil", "Lightning", "Gun", "Rock", "Fire"]
    },
    {
        "name": "Fire",
        "btnName": "fire-btn",
        "beats": ["Scissors", "Snake", "Human", "Tree", "Wolf", "Sponge", "Paper"],
        "beatenBy": ["Air", "Water", "Dragon", "Devil", "Lightning", "Gun", "Rock"]
    },
    {
        "name": "Rock",
        "btnName": "rock-btn",
        "beats": ["Fire", "Scissors", "Snake", "Human", "Tree", "Wolf", "Sponge"],
        "beatenBy": ["Paper", "Air", "Water", "Dragon", "Devil", "Lightning", "Gun"]
    }
]

export default cardList