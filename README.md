                                                App Name: Tournamented


Tournamented is designed to replace an aging monster of an excel file that has been used since 2002 to run middle and high school debate tournaments around the United States. The file, overflowing with macros, allows a tournament director or scorekeeper to input schools, assign each school's students to teams, and pairs teams against each other. It tracks individual scores and team wins, and lists which students/teams will win awards at the tournament's conclusion. While it's been the engine of debate tournaments for over 15 years, it breaks often, and can often cause more problems than it solves.

Tournamented is essentially a JavaScript port of the existing technology, designed to be lighter, faster, and more reliable.

                                                Technologies Used

The back-end is written in Javascript, using Node.JS, Express, and MongoDB.

BodyParser is used as middleware to communicate with the front-end

The front-end is dynamically-generated with JQuery, with a static HTML frame.

Stylistically, the site is designed to be clean, minimalist, and user-friendly. Debate tournament directors and scorekeepers are often parents or teachers generously donating their time and energy, and don't have the patience to grapple with any confusing technologies.

                                                Existing Features

User can add a school to a database, and enter judges and teams of students for that school.

When entries are complete, the user can pair teams.

In current version, teams are paired against each other based on their index position in an array of all teams, with even indices assigned to proposition and odd numbers placed on opposition.

User can then view these pairings, and use this information to commence a round.

Current version only allows for a single round

                                                Planned Features

Team pairings will need to be much more complex, with the pairing function taking into account a team's number of wins (so high-scoring teams and low-scoring teams are not matched in later rounds).

Pairings will also have to ensure that teams do not face the same opponent twice, or any team from their own school.

User will require ability to enter scores and round-results for more than one round to take place.

Local storage should be implemented so that AJAX get-request data persists between refreshes.

User should have ability to view tournament information while tournament is still in progress (team standings, past round-pairings, etc)

User authentication should allow debate coaches to log in after tournaments end and view their school's data.

Student identifying information, due to student age, should be anonymized before being sent to back-end
