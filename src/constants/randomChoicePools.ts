// Random choice pools for each category
// Each pool contains many options, and random selections will be made

// The 6 core MASH-IT home options that are always guaranteed
export const MASHIT_HOME_OPTIONS = ['Mansion', 'Apartment', 'Shack', 'House', 'Island', 'Treehouse'];

export const RANDOM_CHOICE_POOLS: Record<string, string[]> = {
  'Home': [
    // Classic MASH-IT options (also in guaranteed list)
    'Mansion', 'Apartment', 'Shack', 'House', 'Island', 'Treehouse',
    // Upscale
    'Penthouse', 'Castle', 'Palace', 'Villa', 'Chateau', 'Estate',
    'Manor', 'Brownstone', 'Townhouse',
    // Cozy
    'Cottage', 'Bungalow', 'Cabin', 'Chalet', 'Farmhouse', 'Ranch House',
    // Modern
    'Condo', 'Duplex', 'Loft', 'Studio', 'Tiny House', 'Smart Home',
    // Alternative
    'RV', 'Houseboat', 'Yurt', 'Camper Van', 'Shipping Container',
    'Geodesic Dome', 'A-Frame', 'Earthship',
    // Unusual
    'Lighthouse', 'Warehouse', 'Boat', 'Cave', 'Igloo', 'Tent',
    'Underground Bunker', 'Commune', 'Monastery',
    // Funny
    'Cardboard Box', 'Parents Basement', 'Dumpster', 'Mall Food Court',
    'Haunted House', 'Bouncy Castle', 'Pillow Fort',
  ],
  'Spouse': [
    // Classic MASH options
    'Celebrity Crush', 'Best Friend', 'Neighbor', 'Coworker',
    // Relationship origins
    'High School Sweetheart', 'College Roommate', 'Gym Buddy', 'Childhood Friend',
    'Mystery Person', 'Online Match', 'Coffee Shop Regular', 'Book Club Member',
    'Travel Buddy', 'Dance Partner', 'Art Class Friend', 'Music Festival Stranger',
    'Pen Pal', 'Rescue Hero', 'Beach Lifeguard', 'Pilot',
    // More relationship types
    'Boss', 'Intern', 'Rival', 'Enemy Turned Lover',
    'Summer Camp Counselor', 'Tutor', 'Study Partner', 'Lab Partner',
    'Yoga Instructor', 'Personal Trainer', 'Barista', 'Bartender',
    'Librarian', 'Park Ranger', 'Tour Guide', 'Flight Attendant',
    'Doctor', 'Nurse', 'Firefighter', 'Police Officer',
    'Chef', 'Food Critic', 'Artist', 'Musician',
    'Actor', 'Director', 'Producer', 'Stunt Double',
    'Athlete', 'Coach', 'Sports Agent', 'Cheerleader',
    'Teacher', 'Professor', 'Principal', 'School Janitor',
    'Landlord', 'Roommate', 'Uber Driver', 'Dog Walker',
    'Wedding Crasher', 'Blind Date', 'Speed Dating Match', 'Wrong Number',
    'Escape Room Partner', 'Karaoke Duet', 'Convention Buddy', 'Gaming Friend',
    'Podcast Co-Host', 'Blog Collaborator', 'TikTok Duet', 'Instagram DM',
    'Dentist', 'Hairdresser', 'Masseuse', 'Therapist',
    'Astronaut', 'Secret Agent', 'Time Traveler', 'Alien',
    'Prince/Princess', 'Billionaire', 'Pirate', 'Vampire',
    'Werewolf', 'Wizard', 'Superhero', 'Villain'
  ],
  'Car': [
    // Luxury & Sports
    'Ferrari', 'Lamborghini', 'Porsche', 'Maserati', 'Bugatti',
    'McLaren', 'Aston Martin', 'Bentley', 'Rolls Royce', 'Maybach',
    'Corvette', 'Mustang', 'Camaro', 'Challenger', 'Viper',
    // Everyday cars
    'Honda Civic', 'Toyota Camry', 'Honda Accord', 'Toyota Corolla',
    'Nissan Altima', 'Ford Focus', 'Chevy Malibu', 'Hyundai Sonata',
    'Kia Optima', 'Mazda 3', 'Subaru Impreza', 'VW Jetta',
    // SUVs & Trucks
    'Jeep Wrangler', 'Ford F-150', 'Chevy Silverado', 'Ram 1500',
    'Toyota 4Runner', 'Land Rover', 'Range Rover', 'Mercedes G-Wagon',
    'Cadillac Escalade', 'Lincoln Navigator', 'Hummer', 'Tesla Model X',
    // Electric & Hybrid
    'Tesla Model S', 'Tesla Model 3', 'Tesla Cybertruck', 'Rivian',
    'Lucid Air', 'Prius', 'Leaf', 'Bolt', 'Electric Bus',
    // Funny & Alternative
    'Minivan', 'Station Wagon', 'PT Cruiser', 'Smart Car',
    'Golf Cart', 'Go-Kart', 'Bumper Car', 'Ice Cream Truck',
    'Monster Truck', 'Monster Jam Truck', 'Garbage Truck', 'Fire Truck',
    'Ambulance', 'Police Car', 'Taxi', 'Uber Black',
    'Limo', 'Party Bus', 'Double Decker Bus', 'School Bus',
    // Two wheels & Alternative
    'Motorcycle', 'Harley Davidson', 'Vespa', 'Moped',
    'Bicycle', 'Tricycle', 'Unicycle', 'Tandem Bike',
    'Skateboard', 'Longboard', 'Scooter', 'Razor Scooter',
    'Segway', 'Hoverboard', 'Electric Scooter', 'Onewheel',
    // Animal & Fantasy
    'Horse', 'Horse & Buggy', 'Donkey', 'Camel',
    'Elephant', 'Dog Sled', 'Reindeer Sleigh', 'Magic Carpet',
    'Broomstick', 'Dragon', 'Unicorn', 'Flying Car',
    // Other
    'Private Jet', 'Helicopter', 'Yacht', 'Submarine',
    'Rocket Ship', 'Time Machine', 'Teleporter', 'Invisible Car',
    'Batmobile', 'DeLorean', 'KITT', 'Mystery Machine',
    'Oscar Mayer Wienermobile', 'Flintstones Car', 'Jetpack', 'Walking'
  ],
  'Number of Kids': [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
  ],
  'Pet': [
    // Common pets
    'Dog', 'Cat', 'Hamster', 'Guinea Pig', 'Rabbit', 'Gerbil',
    'Mouse', 'Rat', 'Chinchilla', 'Ferret', 'Hedgehog',
    // Birds
    'Parrot', 'Parakeet', 'Cockatiel', 'Cockatoo', 'Macaw',
    'Canary', 'Finch', 'Lovebird', 'Owl', 'Falcon', 'Eagle',
    // Reptiles & Amphibians
    'Iguana', 'Gecko', 'Chameleon', 'Bearded Dragon', 'Snake',
    'Python', 'Boa', 'Turtle', 'Tortoise', 'Frog', 'Salamander', 'Axolotl',
    // Fish & Aquatic
    'Goldfish', 'Betta Fish', 'Koi', 'Clownfish', 'Shark',
    'Octopus', 'Seahorse', 'Jellyfish', 'Starfish', 'Dolphin',
    // Insects & Arachnids
    'Tarantula', 'Scorpion', 'Ant Farm', 'Butterfly', 'Beetle',
    'Stick Insect', 'Praying Mantis', 'Hermit Crab',
    // Farm Animals
    'Horse', 'Pony', 'Donkey', 'Goat', 'Sheep', 'Pig',
    'Cow', 'Chicken', 'Rooster', 'Duck', 'Goose', 'Turkey',
    'Llama', 'Alpaca', 'Ostrich', 'Emu',
    // Exotic
    'Monkey', 'Chimpanzee', 'Gorilla', 'Lemur', 'Sloth',
    'Koala', 'Kangaroo', 'Wallaby', 'Sugar Glider', 'Capybara',
    'Raccoon', 'Skunk', 'Opossum', 'Armadillo', 'Porcupine',
    'Lion', 'Tiger', 'Leopard', 'Cheetah', 'Panther',
    'Bear', 'Wolf', 'Fox', 'Coyote', 'Hyena',
    'Elephant', 'Giraffe', 'Zebra', 'Hippo', 'Rhino',
    'Crocodile', 'Alligator', 'Komodo Dragon',
    // Mythical & Fantasy
    'Dragon', 'Unicorn', 'Phoenix', 'Griffin', 'Pegasus',
    'Cerberus', 'Kraken', 'Basilisk', 'Hydra', 'Thunderbird',
    'Fairy', 'Pixie', 'Leprechaun', 'Gremlin', 'Mogwai',
    // Funny options
    'Pet Rock', 'Imaginary Friend', 'Robot Dog', 'AI Cat',
    'None', 'Whole Zoo', '100 Cats', 'Dinosaur', 'T-Rex',
    'Velociraptor', 'Alien', 'Bigfoot', 'Loch Ness Monster'
  ],
  'Career': [
    // Medical
    'Doctor', 'Surgeon', 'Nurse', 'Dentist', 'Veterinarian',
    'Pharmacist', 'Physical Therapist', 'Psychiatrist', 'Paramedic', 'Midwife',
    // Education
    'Teacher', 'Professor', 'Principal', 'Tutor', 'Librarian',
    'School Counselor', 'Dean', 'Superintendent', 'Teaching Assistant',
    // Law & Government
    'Lawyer', 'Judge', 'Paralegal', 'Police Officer', 'Detective',
    'FBI Agent', 'CIA Agent', 'Secret Service', 'Senator', 'Governor',
    'President', 'Mayor', 'Diplomat', 'Ambassador', 'Politician',
    // Emergency Services
    'Firefighter', 'EMT', 'Coast Guard', 'Lifeguard', '911 Dispatcher',
    // Science & Tech
    'Scientist', 'Engineer', 'Software Developer', 'Data Scientist', 'Programmer',
    'Hacker', 'IT Support', 'Web Designer', 'Game Developer', 'App Developer',
    'Robotics Engineer', 'AI Researcher', 'Physicist', 'Chemist', 'Biologist',
    'Marine Biologist', 'Astronomer', 'Archaeologist', 'Geologist', 'Meteorologist',
    // Creative & Arts
    'Artist', 'Painter', 'Sculptor', 'Photographer', 'Graphic Designer',
    'Animator', 'Cartoonist', 'Comic Book Artist', 'Tattoo Artist', 'Muralist',
    'Writer', 'Author', 'Journalist', 'Editor', 'Blogger',
    'Poet', 'Screenwriter', 'Playwright', 'Copywriter',
    'Musician', 'Singer', 'Rapper', 'DJ', 'Composer',
    'Music Producer', 'Sound Engineer', 'Band Member', 'Orchestra Conductor',
    'Actor', 'Actress', 'Voice Actor', 'Stunt Double', 'Movie Star',
    'Director', 'Producer', 'Cinematographer', 'Film Editor',
    'Dancer', 'Choreographer', 'Ballet Dancer', 'Breakdancer',
    // Entertainment & Media
    'YouTuber', 'TikToker', 'Influencer', 'Streamer', 'Podcaster',
    'TV Host', 'News Anchor', 'Radio DJ', 'Talk Show Host',
    'Comedian', 'Stand-up Comic', 'Magician', 'Clown', 'Circus Performer',
    // Sports & Fitness
    'Athlete', 'Professional Athlete', 'Olympic Athlete', 'Coach', 'Referee',
    'Personal Trainer', 'Yoga Instructor', 'Fitness Influencer', 'Nutritionist',
    'Football Player', 'Basketball Player', 'Baseball Player', 'Soccer Player',
    'Tennis Player', 'Golfer', 'Boxer', 'MMA Fighter', 'Wrestler',
    'Race Car Driver', 'Skateboarder', 'Surfer', 'Snowboarder', 'Skier',
    // Business & Finance
    'CEO', 'CFO', 'Entrepreneur', 'Startup Founder', 'Business Owner',
    'Accountant', 'Financial Advisor', 'Investment Banker', 'Stock Trader', 'Hedge Fund Manager',
    'Real Estate Agent', 'Property Manager', 'Landlord',
    'Marketing Manager', 'Sales Representative', 'HR Manager', 'Recruiter',
    'Consultant', 'Business Analyst', 'Project Manager', 'Product Manager',
    // Food & Hospitality
    'Chef', 'Sous Chef', 'Pastry Chef', 'Baker', 'Butcher',
    'Barista', 'Bartender', 'Sommelier', 'Food Critic', 'Restaurant Owner',
    'Waiter', 'Waitress', 'Host', 'Busboy', 'Dishwasher',
    'Hotel Manager', 'Concierge', 'Bellhop', 'Housekeeper',
    // Beauty & Fashion
    'Fashion Designer', 'Model', 'Supermodel', 'Fashion Photographer',
    'Makeup Artist', 'Hair Stylist', 'Nail Technician', 'Esthetician',
    'Personal Stylist', 'Fashion Blogger', 'Runway Model',
    // Trades & Labor
    'Electrician', 'Plumber', 'Carpenter', 'Mechanic', 'Welder',
    'Construction Worker', 'Contractor', 'Architect', 'Interior Designer',
    'Landscaper', 'Farmer', 'Rancher', 'Fisherman',
    // Transportation
    'Pilot', 'Flight Attendant', 'Captain', 'Sailor', 'Cruise Ship Captain',
    'Truck Driver', 'Bus Driver', 'Taxi Driver', 'Uber Driver', 'Train Conductor',
    'Astronaut', 'Space Tourist', 'Rocket Scientist',
    // Unique & Fun
    'Professional Sleeper', 'Mattress Tester', 'Video Game Tester', 'Toy Tester',
    'Ice Cream Taster', 'Chocolate Taster', 'Water Slide Tester', 'Theme Park Tester',
    'Treasure Hunter', 'Bounty Hunter', 'Private Investigator', 'Spy',
    'Stuntman', 'Daredevil', 'Professional Gamer', 'Esports Player',
    'Zookeeper', 'Animal Trainer', 'Dog Whisperer', 'Shark Wrangler',
    // Fantasy & Absurd
    'Superhero', 'Supervillain', 'Wizard', 'Witch', 'Sorcerer',
    'Knight', 'Pirate', 'Ninja', 'Samurai', 'Viking',
    'King', 'Queen', 'Prince', 'Princess', 'Emperor',
    'Dragon Trainer', 'Monster Hunter', 'Ghost Hunter', 'Vampire Hunter',
    'Time Traveler', 'Dimension Hopper', 'Multiverse Explorer',
    'Professional Meme Creator', 'Cat Video Curator', 'Unicorn Wrangler',
    'Retired', 'Unemployed', 'Trust Fund Baby', 'Lottery Winner'
  ],
  'Salary': [
    // Very Low
    '$0/year', '$1/year', '$10/year', '$100/year', '$1,000/year',
    '$5,000/year', '$10,000/year', '$15,000/year',
    // Low
    '$20,000/year', '$25,000/year', '$30,000/year', '$35,000/year',
    // Medium
    '$40,000/year', '$45,000/year', '$50,000/year', '$55,000/year',
    '$60,000/year', '$65,000/year', '$70,000/year', '$75,000/year',
    // Above Average
    '$80,000/year', '$85,000/year', '$90,000/year', '$95,000/year',
    '$100,000/year', '$110,000/year', '$120,000/year', '$130,000/year',
    '$140,000/year', '$150,000/year',
    // High
    '$175,000/year', '$200,000/year', '$250,000/year', '$300,000/year',
    '$350,000/year', '$400,000/year', '$450,000/year', '$500,000/year',
    // Very High
    '$600,000/year', '$750,000/year', '$1,000,000/year', '$1,500,000/year',
    '$2,000,000/year', '$3,000,000/year', '$5,000,000/year',
    // Extreme
    '$10,000,000/year', '$25,000,000/year', '$50,000,000/year', '$100,000,000/year',
    '$1,000,000,000/year', 'Infinite Money', 'Paid in Pizza', 'Paid in Exposure',
    'Paid in Crypto', 'Paid in Gold', 'Minimum Wage', 'Whatever You Want'
  ],
  'Location': [
    // Major US Cities
    'New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin',
    'San Francisco', 'Seattle', 'Denver', 'Boston', 'Miami',
    'Atlanta', 'Las Vegas', 'Portland', 'Nashville', 'New Orleans',
    'Honolulu', 'Anchorage', 'Detroit', 'Minneapolis', 'Cleveland',
    // International Cities
    'Paris', 'London', 'Tokyo', 'Sydney', 'Dubai',
    'Singapore', 'Hong Kong', 'Seoul', 'Mumbai', 'Delhi',
    'Shanghai', 'Beijing', 'Bangkok', 'Istanbul', 'Moscow',
    'Berlin', 'Madrid', 'Rome', 'Barcelona', 'Amsterdam',
    'Vienna', 'Prague', 'Athens', 'Dublin', 'Edinburgh',
    'Toronto', 'Vancouver', 'Montreal', 'Mexico City', 'Buenos Aires',
    'Rio de Janeiro', 'Sao Paulo', 'Cairo', 'Cape Town', 'Johannesburg',
    'Nairobi', 'Lagos', 'Marrakech', 'Jerusalem', 'Tel Aviv',
    // Tropical & Beach
    'Bali', 'Maldives', 'Fiji', 'Tahiti', 'Hawaii',
    'Caribbean Island', 'Bahamas', 'Jamaica', 'Barbados', 'Cancun',
    'Phuket', 'Bora Bora', 'Seychelles', 'Mauritius', 'Key West',
    // Nature & Rural
    'Small Town USA', 'Countryside', 'Mountain Town', 'Beach Town', 'Lake House',
    'Swiss Alps', 'Rocky Mountains', 'Appalachian Mountains', 'Scottish Highlands',
    'Amazon Rainforest', 'African Savanna', 'Australian Outback', 'Alaskan Wilderness',
    'Farm', 'Ranch', 'Vineyard', 'Orchard', 'Forest Cabin',
    // Unusual Living
    'Castle', 'Palace', 'Mansion', 'Penthouse', 'Skyscraper',
    'Houseboat', 'Yacht', 'Cruise Ship', 'Private Island', 'Lighthouse',
    'Treehouse', 'Cave', 'Igloo', 'Tent', 'RV',
    'Tiny House', 'Shipping Container', 'Underground Bunker', 'Commune', 'Monastery',
    // Fantasy & Sci-Fi
    'Space Station', 'Moon Base', 'Mars Colony', 'Underwater City', 'Floating City',
    'Cloud City', 'Atlantis', 'Hogwarts', 'Narnia', 'Middle Earth',
    'Wakanda', 'Gotham City', 'Metropolis', 'Asgard', 'Themyscira',
    // Funny
    'Parents Basement', 'Cardboard Box', 'Under a Bridge', 'Dumpster',
    'Mall Food Court', 'Airport Terminal', 'Gas Station', 'Walmart Parking Lot',
    'Haunted House', 'Abandoned Warehouse', 'Secret Lair', 'Batcave', 'Fortress of Solitude'
  ],
  'Vacation Destination': [
    // Beach & Tropical
    'Hawaii', 'Maldives', 'Bali', 'Fiji', 'Tahiti',
    'Caribbean Cruise', 'Bahamas', 'Jamaica', 'Barbados', 'Aruba',
    'Cancun', 'Puerto Rico', 'Virgin Islands', 'Key West', 'Miami Beach',
    'Phuket', 'Bora Bora', 'Seychelles', 'Mauritius', 'Zanzibar',
    'Greek Islands', 'Santorini', 'Mykonos', 'Amalfi Coast', 'Cinque Terre',
    // Theme Parks & Entertainment
    'Disney World', 'Disneyland', 'Universal Studios', 'Six Flags', 'Legoland',
    'SeaWorld', 'Busch Gardens', 'Cedar Point', 'Dollywood', 'Knott\'s Berry Farm',
    'Tokyo Disneyland', 'Disneyland Paris', 'Shanghai Disney', 'Europa Park',
    'Las Vegas', 'Atlantic City', 'Monte Carlo', 'Macau',
    // Adventure & Nature
    'African Safari', 'Amazon Rainforest', 'Galapagos Islands', 'Great Barrier Reef',
    'Grand Canyon', 'Yellowstone', 'Yosemite', 'Zion', 'Glacier National Park',
    'Niagara Falls', 'Victoria Falls', 'Iguazu Falls', 'Angel Falls',
    'Mount Everest Base Camp', 'Kilimanjaro', 'Swiss Alps', 'Patagonia',
    'Aurora Borealis Tour', 'Antarctica', 'Arctic Circle', 'Alaska Cruise',
    'New Zealand', 'Iceland', 'Norway Fjords', 'Canadian Rockies',
    // Historical & Cultural
    'Europe Tour', 'Italy Tour', 'France Tour', 'Spain Tour', 'UK Tour',
    'Paris', 'Rome', 'London', 'Barcelona', 'Amsterdam',
    'Greece', 'Egypt Pyramids', 'Machu Picchu', 'Petra', 'Angkor Wat',
    'Great Wall of China', 'Taj Mahal', 'Colosseum', 'Eiffel Tower', 'Big Ben',
    'Jerusalem', 'Vatican City', 'Mecca', 'Kyoto', 'Bangkok Temples',
    // Asian Destinations
    'Japan', 'Tokyo', 'Thailand', 'Vietnam', 'Cambodia',
    'Singapore', 'Hong Kong', 'South Korea', 'Taiwan', 'Philippines',
    'China', 'India', 'Nepal', 'Sri Lanka', 'Indonesia',
    // Other Destinations
    'Australia', 'Dubai', 'Morocco', 'South Africa', 'Kenya',
    'Brazil', 'Argentina', 'Peru', 'Chile', 'Colombia',
    'Cuba', 'Costa Rica', 'Panama', 'Belize', 'Guatemala',
    // Unique Experiences
    'World Cruise', 'Transatlantic Cruise', 'Mediterranean Cruise', 'River Cruise',
    'Backpacking Europe', 'Road Trip USA', 'Route 66', 'Pacific Coast Highway',
    'Train Across Europe', 'Trans-Siberian Railway', 'Orient Express',
    'Hot Air Balloon Festival', 'Music Festival Tour', 'Food & Wine Tour',
    'Yoga Retreat', 'Meditation Retreat', 'Spa Resort', 'All-Inclusive Resort',
    // Low-Key
    'Staycation', 'Camping Trip', 'Cabin in Woods', 'Lake House', 'Beach House',
    'National Park Tour', 'State Park', 'Glamping', 'Backyard Camping',
    // Funny & Fantasy
    'Mars', 'Moon', 'Space Station', 'Time Travel', 'Parallel Universe',
    'Hogwarts', 'Westeros', 'Middle Earth', 'Narnia', 'Wonderland',
    'Atlantis', 'El Dorado', 'Shangri-La', 'Jurassic Park', 'Willy Wonka Factory',
    'Nowhere', 'Mom\'s House', 'Couch', 'Imagination Land', 'The Metaverse'
  ]
};

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get random choices from a category pool
// When guaranteedOptions provided: include all guaranteed + 2 extras, shuffled
// Otherwise: return 4 random from pool
export function getRandomChoices(categoryName: string, guaranteedOptions?: string[]): string[] | null {
  const pool = RANDOM_CHOICE_POOLS[categoryName];
  if (!pool) return null;

  if (guaranteedOptions) {
    const extras = shuffleArray(pool.filter(opt => !guaranteedOptions.includes(opt)));
    const total = [...guaranteedOptions, ...extras.slice(0, 2)];
    return shuffleArray(total);
  }

  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, 4);
}
