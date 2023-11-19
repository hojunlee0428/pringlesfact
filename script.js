const pringlesFacts = [
    "Pringles, introduced in 1968 by Procter & Gamble, are technically not potato chips. They are made from a unique 'potato dough.'",
    "The original flavor of Pringles is known as 'Pringle Original,' and they come in a variety of flavors like Sour Cream & Onion, BBQ, and Cheddar Cheese.",
    "The unique saddle shape of Pringles is designed to ensure a consistent flavor in every bite, while traditional potato chips vary in shape.",
    "The Pringles mascot, 'Julius Pringles,' is a recognizable face featured on the logo, adding a playful touch to the brand.",
    "In 2012, Pringles became a part of the Kellogg Company after being sold by Procter & Gamble.",
    "The canister packaging for Pringles was designed to prevent the chips from breaking during shipping, a practical solution for snack lovers on the go.",
    "The 'Pringles Ringle' is a viral trend where people create a ring out of Pringles chips, showcasing the fun and creativity associated with the brand."
];

const potatoChipsFacts = [
    "The potato chip was accidentally invented in 1853 by George Crum in Saratoga Springs, New York.",
    "The term 'Saratoga Chips' was first used for potato chips in the 19th century, reflecting their early origins.",
    "The first potato chips were thinly sliced and fried by accident when a customer complained that their French fries were too thick.",
    "In the UK, potato chips are referred to as 'crisps,' and the first flavored crisps were invented in the 1950s by Joe 'Spud' Murphy.",
    "Americans consume more than 1.6 billion pounds of potato chips each year, contributing to the massive $15 billion global potato chip industry.",
    "Potato chips were the first snack food ever made in 1895, marking the beginning of the snack revolution.",
    "The process of making potato chips is called 'cubing' in the industry, highlighting the precision and craftsmanship involved in chip production."
];

function generateFunFact() {
    const randomCategory = Math.random() < 0.5 ? pringlesFacts : potatoChipsFacts;
    const factIndex = Math.floor(Math.random() * randomCategory.length);
    const fact = randomCategory[factIndex];
    document.getElementById('funFact').innerText = fact;
}
