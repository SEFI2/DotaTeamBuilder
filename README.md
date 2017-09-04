# DotaTeamBuilder
Dota2 is a world wide played game, which has a userbase of up to 10 millions nowadays. The most played and original of Dota2 mode is ’All Pick’ mode. In this mode a game consists of 2 teams(teams are called Radiant and Dire), located on opposite corners of the map. The green team located on the bottom left(Radiant), while red team located on the top right corner (Dire). The main goal of each team is to attack and destroy the main building of enemy team. Each team has 5 players and each player has to choose a hero out of 112 heroes and controls it, focusing on leveling up that hero. Each hero has its own characteristics and abilities. A purpose of game is very simple, but the game itself not so easy. To become a good player, you should spent a lot of time practising with good players and learning game tips. There is a big community of dota gamers now, and still there is a big flow of new comers to the world of dota2.

It is well known among players that to be a strong team you do not have to have a collection of the strongest or the best heroes but you must consider how a heroes can help each other and be effective against enemy team. But how do players know which hero to choose to be effective? Let me explain 3 techniques that players usually use when choosing a hero:

- Experience - most powerful thing to use. For example, if you have played a 100 games against ’Zeus’ before, you will probably know which player will be good against ’Zeus’ now. if you have played 1000 games against ’Zeus’, it will be more probably that you will choose the most optimal hero against him. Most used by professionals, obviously. 

- Logic. For example, if you know that your enemy chosen ’Rikimaru’ which can be invisible and its his most important ability. Then you will probably choose ’Silencer’ which has an ability to show invisible heroes for a while, but it can not be always good reason to rely. 

- Recommendation tools. There some websites and mobile application that offer heroes to choose in your situation. For example, if you know that 2 of your enemies already chosen heroes and 4 of your allies also chosen heroes(number of heroes does not matter), these applications shows you some heroes to choose, which is considered to be an optimal heroes, but it is not known how do their apps work to predict optimal heroes. 
	
	
My approach for algorithm is dealing with relations between heroes and prioritizing heroes by numbers of ’bad relations’ subtracted from ’good relations’. priority = GR − BR. 
- How did I compute it? Took all unselected heroes and for each of that heroes I counted number of ’Work’ edges between ally team and number of ’Good’ , ’Bad’ edges for enemy team. Number of ’Work’ edges considered ’good relation’ and ’Good’ , ’Bad’ edges are considered as ’bad relation’. Then I counted a priority from formula above. 
- Why this algorithm is said to be correct? As mentioned previously, a team is strong when heroes in team could function collectively by sharing their abilities. Similarly to ’Win Prediction’ paper I used game data to compute pairwise win rate between each heroes and win rate of each hero against other heroes. For chosen ally team, I computed pairwise win rate of each ally hero with mouseovered hero and added result to priority. Similarly, I computed win rate of mouseovered hero against each hero in enemy team. Now final priority equals to 
	**priorty = GR − BR + winwith + winagainst**  

Heatmap shows the win rate of team when ith hero and jth hero are played in that team. So we can see in this heatmap enough blue and red colors, it means that certain pair of heroes are not very compatible with each other and some are good when played in one team. So this experiment could strengthen our assumption by real results.

DEMO:
	https://www.youtube.com/watch?v=tavPIC5Ch30
