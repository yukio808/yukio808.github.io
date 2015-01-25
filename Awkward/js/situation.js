   var situations = ["You laugh and a little bit comes out.",
     "Your crush walks up and asks the person behind you out.",
     "Your date has a giant booger in their nose.",
     "You were just told, \"Oh, was this a date?\"",
     "The bride, groom, and six other people are talking about a wedding that you\'re not invited to.",
     "Someone actually told you to \"Bing It\"",
     "Your one night stand asks you, \"What\'s for breakfast?\"",
     "You just walked into a pole.",
     "Your mom walks in during the sex scene.",
     "You just responded to someone asking a question",
     "The person you were talking to just got too close.",
     "Two of the three people in the elevator are making out. You\'re not one of them.",
     "The person next to you on the bus falls asleep on you.",
     "You get caught on the kiss cam with the person to your left.",
     "Your partner just called out your mom\'s name during sex.",
     "You just scored a goal... for the other team.",
     "Say out loud: \"Is it in yet?\"",
     "Your joke just failed.",
     "You tell your customers, \"Enjoy your meal.\" They respond, \"Thanks, you too.\"",
     "The only person at the party you knew just left.",
     "You just waved at the person waving to someone behind you.",
     "The person to your right starts grinding on you.",
     "After saying \"goodbye,\" you leave the same direction.",
     "You just opened the dick in a box...",
     "The hand you\'re shaking is wet...",
     "People are having sex in the stall next to you..."];
   
var randomsit = Math.floor(Math.random()* situations.length);

$( "#card_scenario" ).html( situations[randomsit] );
console.log(situations[randomsit]);