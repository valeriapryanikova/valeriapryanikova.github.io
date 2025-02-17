const ind = {
	drawing: 0,
	alt: 1,
	date: 2,
}

const best = `atsv-miles.png|an illustration of Miles Morales from "Spider-Man: Across the Spider-Verse" movie; the image features a portrait of the Prowler Miles on the background and a simplistic drawing of Spider-Man Miles on the foreground; text on the image reads: "Everyone keeps telling me how my story is supposed to go. Nah. I'm gonna do my own thing."|2023-08-11
choices.png|a pixel art flowchart depicting all of the choices for "In Space With Markiplier part 1" with references to the videos in the background|2022-04-11
choices2.png|a pixel art flowchart depicting all of the choices for "In Space With Markiplier part 2" with references to the videos in the background|2022-05-06
cozy-grian.png|an illustration of Grian leisurely reading a book while siting on a beanbag; behind him is a tall bookshelf filled with books and different trinkets from SMPs; to the right of him is a window, a soft light is pouring in through it|2022-12-04
deathloop.png|a pixel art of Colt Vahn and Julianna Blake from a video game "Deathloop" shooting at eachother; Colt is holding a pistol, his hand is glowing with a magic ability; Julianna is depicted upside down, she is holding a shotgun|2024-07-06
from-the-archives.png|an illustraition for "From the Archives" series written by Sixteenthdays on AO3; it depicts a fractured glass with 5 main parts to it, each of which shows one of the main characters|2022-08-04
fucked-up-fish-merchant.png|an illustration of GeminiTay sitting at a table filled with various deformed sea creatures, seemingly laid out for purchase; Gem is almost entirely shadowed in the darkness, only her glowing spiral eyes and sharp teeth are visible|2025-01-09
game-master.gif|an animation of Grian as a game master for Life Series season 6 "Wild Life"; first shot shows his iris as a game die that rolls a 4, second shot shows him shuffling a deck of cards with a chosen sard being a 7, third shot shows him stopping a roulette with his foot landing on a 1; programming code is seen scrolling on the left side|2024-12-04
glitchbeans.png|an illustration of SmallishBeans depicting him sideways, neon green microchip-esque pattern of his right hand and face spills over down the image|2024-08-04
grian-eyes.png|an illustration of Grian with a lot of eyes on and around his face|2022-08-24
grian-view.png|an illustration of Grian standing in the forest with bright light spilling over him from above|2022-09-08
helen-the-distortion.png|an illustration of Helen The Distortion from "The Magnus Archives" podcast; slightly ajar yellow door can be seen on the background|2022-10-30
life-series-winners.png|an illustration with five vertical panels depicting the winners of first five seasons of Life Series: Grian, SMajor, PearlescentMoon, InTheLittleWood, and GoodTimesWithScar; every panel is largely greyscale with red pops of colour|2024-01-23
mined.png|an illustration with five horizontal panels depicting outside and inside views of Mined, a fictional research facility created by MumboJumbo on Hermitcraft|2024-12-27
pinioning.png|an illustration for "From the Archives" series written by Sixteenthdays on AO3; it depicts Grian, with newly attached wings and eyes, looking menacingly at ZombieCleo on the foreground|2023-06-03
pixel-smth.png|a pixel art of a human standing under a street light on a path in the middle of the night; the text above them reads "alone"|2022-03-29
pixelsyndicate.png|a pixel art of The Syndicate members: Philza, Ranboo, Technoblade, and Nihachu|2021-11-16
return-of-the-gemini-tay.gif|a pixel art animation of GeminiTay sitting on a side of a ship and looking towards the shore on the background; both her face scar and the moon are bright red|2025-01-30
what-did-you-bring-me.png|a pixel art redraw of a scene from "The Edge of Sleep" series; it depicts Dave Torres stading on a hill and a whale floating in the air in front of him|2024-10-18`


function getArr() {
	var lines = best.split('\n')
	var info_arr = []
	lines.forEach(l => { info_arr.push(l.split('|')) })
	return info_arr.sort(compareDate)
}

function compareDate(a, b) {
	if (a[ind.date] === b[ind.date]) return 0
	else return (a[ind.date] < b[ind.date]) ? 1 : -1
}