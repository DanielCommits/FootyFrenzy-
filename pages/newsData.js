const newsData = [
  {
    id: 2,
    logo: "https://static.vecteezy.com/system/resources/thumbnails/018/930/572/small/youtube-logo-youtube-icon-transparent-free-png.png",
    title: "Flick refutes claim that Barcelona have a Champions League problem",
    source: "Youtube",
    description: [
      {
        type: "video",
        content: "https://www.youtube.com/embed/gp1UxLtD7wI", // Replace with your video URL
      },
      {
        type: "twitter",
        content: "https://twitter.com/jack/status/20", // Example Twitter post URL
      },
    ],
    date: "12 hrs ago",
  },
  {
    id: 3,
    logo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2022/6/1656507538717-blob",
    image:
      "https://image-service.onefootball.com/transform?w=336&h=252&dpr=2&image=https%3A%2F%2Fstatic.independent.co.uk%2F2024%2F09%2F19%2F22%2F2024-09-19T205724Z_29786767_UP1EK9J1M7MRM_RTRMADP_3_SOCCER-CHAMPIONS-ATA-ARS-REPORT.jpg%3Fquality%3D75%26width%3D1200%26auto%3Dwebp",
    title:
      "David Raya magic rescues Arsenal but Champions League draw raises further questions",
    subtitle:
      "A double save reflects a double-edged display. It could have been worse for Arsenal, it never really looked like getting much better. That may be more of an issue for this new Champions League than Mikel Arteta, who seemed content enough to come from Atalanta with a 0-0 draw and an opening point. That was largely thanks to both the intelligence and instinct of David Raya.",
    source: "The Independent",
    description: [
      {
        type: "paragraph",
        content: `The goalkeeper first saved Mateo Retegui's penalty after a quick run to goalkeeping coach Inaki Cana during a check, before somehow getting up to palm away the forward’s rebound. It ensured yet another clean sheet for Arsenal, their fourth in five games this season. If such defensive assurance is going to bring a lot of nils on one side of the scoreboard, though, the increasing question is whether a certain attacking predictability without Martin Odegaard will also lead to more nils on the other side, too.`,
      },
      {
        type: "paragraph",
        content: `This game was perhaps a warning for the next few months – maybe months – although the context inevitably made Arteta more conservative. It was of a piece with the 1-0 win over Tottenham in that sense.`,
      },
      {
        type: "image",
        src: "https://image-service.onefootball.com/transform?w=336&h=189&dpr=2&image=https%3A%2F%2Fstatic.independent.co.uk%2F2024%2F09%2F19%2F22%2F2024-09-19T205353Z_1927031554_UP1EK9J1KA1QB_RTRMADP_3_SOCCER-CHAMPIONS-ATA-ARS-REPORT.jpg%3Fquality%3D75%26width%3D640%26auto%3Dwebp",
        alt: "Raya",
      },
      {
        type: "paragraph",
        content: `Given this was the opening game of a fairly forgiving “Super League” group stage, to add to recent injuries, Arsenal were always going to play it tight around their own box and refuse to commit too many players forward. That inevitably took away invention but a question that is going to rise is whether they are overly dependent on Odegaard for creativity – at least until they just blow away a few teams again. Raheem Sterling, who did offer Arsenal’s best pass of the game on coming on as a sub, may be increasingly important.`,
      },
      {
        type: "paragraph",
        content: `This can’t be divorced from the nature of the new Champions League, either. It said much that it took a second-half penalty to finally set things off a bit. The decision was soft, which led to a long check – and possibly worked against Atalanta. After Ederson went down under a needless but soft pull by Thomas Partey at the edge of the box, referee Clement Turpin had no choice but to get the call checked. That gave Raya the time to run right over to goalkeeping coach Cana right on the halfway line, and have a long chat with his mouth covered. Raya later claimed he “got lucky” only to instantly reveal luck had nothing to do with it as he said he went to Cana “to get a better sense of what to do and what not to do”.`,
      },
      {
        type: "image",
        src: "https://image-service.onefootball.com/transform?w=336&h=189&dpr=2&image=https%3A%2F%2Fstatic.independent.co.uk%2F2024%2F09%2F19%2F22%2F1a588e23b5db5f619d6da80acd48e0d9Y29udGVudHNlYXJjaGFwaSwxNzI2ODY1NzAz-2.77515733.jpg%3Fquality%3D75%26width%3D640%26auto%3Dwebp",
        alt: "Raya",
      },
      {
        type: "paragraph",
        content: `The moment still stood out all the more, and dominates discussion of this match, because there was so little else. This is where the concerns about Odegaard’s injury increase. Arsenal were always going to lack imagination without their playmaker but what has been pronounced about the two games so far has been just how more one-dimensional they have been in attack. There has been an even greater reliance on set-pieces and counters than expected. They were the source of their two best opportunities – although it was notable that substitute Sterling was central to setting up the second. Bukayo Saka tested Marco Carnesecchi with that fine low free-kick after just 13 minutes, the goalkeeper doing enough to also prevent Partey pouncing. It wasn’t far off Raya’s stop in terms of quality and necessity. Arsenal evidently didn’t feel much necessity to get forward, though, as that was about it for close to an hour. They barely troubled Carnesecchi’s goal until the game started to be stretched late on. Then, of course on a quick break, Sterling did so well to slip Gabriel Martinelli through. The Brazilian instead took it too far wide then blazed it over the bar. He really should have scored. The Martinelli of 2022-23 surely would have scored.`,
      },

      {
        type: "image",
        src: "https://image-service.onefootball.com/transform?w=336&h=189&dpr=2&image=https%3A%2F%2Fstatic.independent.co.uk%2F2024%2F09%2F19%2F22%2F2024-09-19T203504Z_571239953_UP1EK9J1L6FR6_RTRMADP_3_SOCCER-CHAMPIONS-ATA-ARS-REPORT.jpg%3Fquality%3D75%26width%3D640%26auto%3Dwebp",
        alt: "idk",
      },
      {
        type: "paragraph",
        content: `It didn’t look like anyone on either side felt it mattered much at the final whistle, certainly not amid the hugs, waves and smiles. The match did crystallise another core issue with this new Champions League, that is the kind of element that can only be registered as you experience the reality of the competition as it is played. That is the dilution of intensity that comes with this vaunted virtue of teams playing eight different opponents once rather than three opponents twice.`,
      },
      {
        type: "paragraph",
        content: `As intriguing as that variety is – although that is something else that may change if it’s usually the same teams – it does actually mean there is less intrigue to the fixtures.That is because they are no longer zero-sum games. Arsenal getting a result at Atalanta doesn’t mean as much as it would if they were both in the same group, because there would be direct consequence both ways.Now, both can simply look to other fixtures. It was similar with Manchester City and Internazionale and some of the other matches, where teams seemed content enough not to lose.`,
      },
      {
        type: "paragraph",
        content: `The clubs being part of one massive league has had the ironic effect of making everything seem smaller and more blinkered. They will spend a lot of the first few games in their own bubble, rather than looking to other results and what they might mean. That will probably change towards the end, when teams realise what they have to do. For now, the tone of this game fitted with the tepid tone of the week.`,
      },
    ],
    date: "12 hrs ago",
  },
  {
    id: 4,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEXwcFrxcFrzclvla1bIXUvCWklDHxkiDw0nEg4+HRcfDgxlLyaiTDyrUD+VRTjobFfrblh1NiuJQDOYRzneZ1PSYk9vMyleKyNUJyAwFhKMQTXUY0+xUkI2GRQAAAB+Oi8WDAqYdywaAAAArElEQVR4AeWQAwLEMBAAwypGzf9/8q72Dzpx1gu+A0SvwFmGCX2B4EmKSBBGD8KYoElIE8ZvCM4SughDqcCI1vMad2SsCzeh0wgRP64UaQ+8R5nhJyGIgpyzoqzqpBFGI3i2TNvUMIN9KTvreg31Lhykxq0sWMZlELCc5QJrOcxCWFuqUVM5Qquq4b6RtveA2hqCCTUlqDVCY9IaaaXweKqtf/MG5zXvcPv8CH97RgrPkt+UTAAAAABJRU5ErkJggg==",
    image:
      "https://assets.goal.com/images/v3/blt0d3ea0afab8391e0/Zirkzee%20needs%20Hojlund%20to%20reach%20full%20potential.jpg?auto=webp&format=pjpg&width=828&quality=60",
    title:
      "Joshua Zirkzee already 'looks a bit like' Zlatan Ibrahimovic - but Man Utd's £36m man desperately needs return of Rasmus Hojlund to unlock full potential",
    subtitle:
      "The Dutchman showed off his unique skillset at Southampton, and could become a fan favourite with a partner-in-crime up front",
    source: "GOAL",
    description: [
      {
        type: "paragraph",
        content:
          "Joshua Zirkzee was handed only his second start for the club since his £36m ($48m) switch from Bologna, and grabbed the opportunity with both hands. All of United's best attacks went through the 23-year-old as the Saints toiled in vain to pin him down. Zirkzee was also guilty of some wasteful finishing again, but he wasn't signed to be the Red Devils' primary marksman. For so much of last season, United lacked a creative spark; that's what Zirkzee provides. Rasmus Hojlund will certainly have been rubbing his hands together watching Zirkzee's latest outing because the Dutchman looks like the perfect foil for the Dane, who Ten Hag desperately needs to welcome back from injury heading into a make-or-break run of games...",
      },
      {
        type: "paragraph",
        content:
          "As per Sofascore, Zirkzee completed 82 percent of his passes against the Saints, the majority of which went forward, won seven of his 11 duels and racked up an impressive expected goals (xG) total of 1.14. The talented youngster scored on his debut to give his new club victory against Fulham on the opening weekend of the new season, but he properly announced himself as a United player at St Mary's. This was the version of Zirkzee who became a cult hero at Bologna. He doesn't have the selfish mindset to be a prolific goal-scorer, and that's okay; United have signed a technically-gifted forward who always wants to be involved in the build-up play and gets more of a kick out of providing chances for his team-mates. ",
      },
      {
        type: "image",
        src: "https://assets.goal.com/images/v3/getty-2171945423/crop/MM5DKMBUGQ5DEOBTG45G433XMU5DCNRZHIYA====/GettyImages-2171945423.jpg?auto=webp&format=pjpg&width=828&quality=60",
        alt: "Zirkzee",
      },
      {
        type: "paragraph",
        content:
          "I am what I call a false striker, Zirkzee told the Daily Mirror in August. Not a No.9, not a No.10. I am a 9.5! That's my game. Maybe I'm a little different than others. But being different is good, right? It certainly is for United, who only scored 57 Premier League goals last season - the joint-worst record in the top 10. Zirkzee gives them a whole new dimension in attack, and crucially, he's not afraid to take risks. I want to play a pure game, the Netherlands international added. Nutmegs, chops and backheels are moments that belong in football. That style has value for me. It's the soccer kid in me because it’s supposed to be fun too. You have to pick the right moments. It's intuition. I think I have excellent skills. I spent a lot of time on that as a kid. But if I lose the ball, I want to regain it immediately with the team. But the fancy footwork is part of my game at the end of the day.",
      },
      {
        type: "image",
        src: "https://assets.goal.com/images/v3/blt4d97c31dbac23c7b/GOAL%20-%20Multiple%20Images%20-%202%20Split%20-%20Facebook%20(100).jpg?auto=webp&format=pjpg&width=828&quality=60",
        alt: "Zirkzee, Zlatan",
      },
      {
        type: "paragraph",
        content:
          "It also helps that he idolises a certain Swede who did the same thing during his time in Manchester. I would love it if, in a few years’ time, people said that my game looks a bit like Zlatan Ibrahimovic, Zirkzee told reporters last week. The start, with the winning goal against Fulham, was nice. Then we lost twice - and you know that at a big club like Manchester United the attention then comes full on. I believe it will be fine. I've always had that. I never doubted it would still work out with my career. Ibrahimovic scored a very respectable 29 goals in two seasons with the Red Devils, but the truth is, they signed him too late at 34. The best years of Ibrahimovic's career came at Juventus, Inter and AC Milan between 2004 and 2012, at which stage he was a masterful playmaker as well as a deadly marksman.",
      },
      {
        type: "paragraph",
        content:
          "Zirkzee doesn't possess the same instincts in front of goal as Ibrahimovic, but he is equally as imaginative on the ball. And just like the Swedish icon in his prime, Zirkzee uses his imposing physical frame and deceptive turn of pace to barge past defenders at will. The arrogant streak that helped bolster the Ibrahimovic brand is not so prominent in Zirkzee, but he doesn't want for self-confidence either. In the Southampton game, there were real signs that the Dutch ace could become a similarly inspirational figure for United, especially when Ten Hag can field his strongest team. ",
      },
      {
        type: "image",
        src: "https://assets.goal.com/images/v3/getty-2163344407/crop/MM5DENRSGA5DCNBXGQ5G433XMU5DAORRGI4Q====/GettyImages-2163344407.jpg?auto=webp&format=pjpg&width=1080&quality=60",
        alt: "Hojlund",
      },
      {
        type: "paragraph",
        content:
          "Zirkzee and Hojlund could lead the line with Fernandes and either Alejandro Garnacho or Amad backing them up, while Kobbie Mainoo and new addition Manuel Ugarte sit at the base of the midfield in a compact shape that doesn't leave United exposed to swift counters. There is enough firepower there to blow most teams away, too. Hojlund was starved of service in his debut season at United but still scored 16 goals, so imagine what he could do with Zirkzee next to him. The former Bologna star will hold the ball up and look to pick out the intelligent runs in behind that Hojlund made so often in 2023-24. ",
      },
      {
        type: "paragraph",
        content:
          "Indeed, Ten Hag has already admitted that is his ideal gameplan, telling Viaplay Sports in the summer: Joshua Zirkzee & Rasmus Hojlund can play together. They compliment each other. They look like a match made in heaven on paper. Hojlund's finishing is still quite erratic, but he gets in the right positions and will see a lot more chances with Zirkzee on hand to provide stellar service. The only concern is whether Hojlund can avoid any further injury setbacks, because United don't have another centre-forward to call upon, which has seriously hampered their progress in recent weeks. ",
      },
    ],
    date: "20 Sept 2024",
  },
  {
    id: 5,
    logo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2022/3/1647627159464-blob",
    image:
      "https://image-service.onefootball.com/transform?w=336&h=252&dpr=2&image=https%3A%2F%2Fimages2.minutemediacdn.com%2Fimage%2Fupload%2Fc_crop%2Cw_3737%2Ch_2102%2Cx_0%2Cy_170%2Fc_fill%2Cw_1440%2Car_16%3A9%2Cf_auto%2Cq_auto%2Cg_auto%2Fimages%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01j85dtam3sycss9wrnz.jpg",
    title:
      "Cristiano Ronaldo makes huge predictions for Lamine Yamal & Jude Bellingham",
    subtitle:
      "Cristiano Ronaldo has backed Lamine Yamal and Jude Bellingham to be generation-defining talents in the future. The pair, who represent El Clasico rivals Barcelona and Real Madrid, are already seen as two of the top players in the world at the tender ages of 17 and 21 respectively, having dazzled at both club and international level.",
    source: "90min",
    description: [
      {
        type: "paragraph",
        content: [
          "Just how far Yamal and Bellingham can go remains to be seen, but Ronaldo believes the young stars will reach the very top of football if fate is kind to them.",
          "Beginning with Yamal, Ronaldo told his YouTube channel: I see huge potential and great talent. He needs luck, because he is very young. I hope he doesn't get any problems.",
          "He has competition that helps him a lot. The Spain national team is really, really good, and I think he has huge potential. Let's see what's going to happen. I believe he's going to be one of the best players for this new generation.",
        ],
      },
      {
        type: "image",
        src: "https://image-service.onefootball.com/transform?w=336&h=189&dpr=2&image=https%3A%2F%2Fimages2.minutemediacdn.com%2Fimage%2Fupload%2Fc_crop%2Cw_1023%2Ch_682%2Cx_0%2Cy_0%2Fc_fill%2Cw_720%2Car_3%3A2%2Cf_auto%2Cq_auto%2Cg_auto%2Fimages%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01j85dve9kapwdzth1fr.jpg",
        alt: "Cristiano Ronaldo",
      },
      {
        type: "paragraph",
        content:
          "Ronaldo has high hopes for the pair. Keen to show some praise for Bellingham as well, Ronaldo admitted moving to Madrid this summer helped the England international take his game to the next level. Huge potential, Ronaldo said of Bellingham. Huge talent. ",
      },
      {
        type: "paragraph",
        content:
          "He's come to the club when the environment was clean, was good, and he's grown like the other ones, like [Eduardo] Camavinga, Rodrygo, Vinicius...He's in a team that helps him to be a top player and I also believe he'll be one of the best of the next generation. Yamal and Bellingham are slated to butt heads on October 26, when Barcelona travel to the Santiago Bernabeu to face Madrid.",
      },
    ],
    date: "17 Sept 2024",
  },
  {
    id: 6,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEXwcFrxcFrzclvla1bIXUvCWklDHxkiDw0nEg4+HRcfDgxlLyaiTDyrUD+VRTjobFfrblh1NiuJQDOYRzneZ1PSYk9vMyleKyNUJyAwFhKMQTXUY0+xUkI2GRQAAAB+Oi8WDAqYdywaAAAArElEQVR4AeWQAwLEMBAAwypGzf9/8q72Dzpx1gu+A0SvwFmGCX2B4EmKSBBGD8KYoElIE8ZvCM4SughDqcCI1vMad2SsCzeh0wgRP64UaQ+8R5nhJyGIgpyzoqzqpBFGI3i2TNvUMIN9KTvreg31Lhykxq0sWMZlELCc5QJrOcxCWFuqUVM5Qquq4b6RtveA2hqCCTUlqDVCY9IaaaXweKqtf/MG5zXvcPv8CH97RgrPkt+UTAAAAABJRU5ErkJggg==",
    image:
      "https://assets.goal.com/images/v3/blt33ad0352f798650a/Teboho%20Mokoena%20of%20Bafana%20Bafana-2.jpg?auto=webp&format=pjpg&width=1080&quality=60",
    title:
      "Hugo Broos' Bafana Bafana drop on latest Fifa rankings as Nigeria's Super Eagles learn new position after 2025 Afcon qualifiers",
    subtitle:
      "Both Bafana Bafana and the Super Eagles were in action during the recent qualifiers for Africa's most prestigious football tournament.",
    source: "GOAL",
    description: [
      {
        type: "paragraph",
        content:
          "Bafana Bafana have dropped on the latest Fifa world rankings and are now number 59 worldwide from 57. On the African continent, Hugo Broos' side slid one run down from position 10 to 11.",
      },
      {
        type: "paragraph",
        content:
          "This follows the recent 2025 Africa Cup of Nations qualifiers in which they drew 2-2 with Sudan before beating South Sudan 3-2. While South Africa moved, their continental rivals Nigeria remain at number sixth on the continent and 39th in the world.",
      },
      {
        type: "image",
        src: "https://assets.goal.com/images/v3/bltfe6b491764a48b46/Evidence_Makgopa.jpg?auto=webp&format=pjpg&width=750&quality=60",
      },
      {
        type: "paragraph",
        content: [
          "AFRICA'S TOP-RANKED TEAMS",
          "1. Morocco",
          "2. Senegal",
          "3. Egypt",
          "4. Ivory Coast",
          "5. Tunisia",
          "6. Nigeria",
          "7. Algeria",
          "8. Cameroon",
          "9. Mali",
          "10. DR Congo",
        ],
      },
      {
        type: "image",
        src: "https://assets.goal.com/images/v3/blt1a99c5029d48cef4/Thapelo%20Morena%20&%20Khuliso%20Mudau.jpg?auto=webp&format=pjpg&width=1080&quality=60",
      },
      {
        type: "paragraph",
        content:
          "Getting out of the top 10 might give Broos and his men the pressure to up their socks in their next international assignments. They would want to be one of the best teams in Africa so that they will be top seeds when the draw for the 2025 Afcon finals is conducted in the event they qualify for the tournament. That way, they will avoid other top-seeded teams.",
      },
      {
        type: "paragraph",
        content:
          "As for the Super Eagles, they will be happy to maintain their position in the top 40 in the world and top 10 in African. The Nigerian Football Federation's search for a new head coach continues with the 2025 Afcon qualifiers set to resume next month.",
      },
    ],
    date: "4 hrs ago",
  },
  {
    id: 7,
    logo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://images.onefootball.com/blogs_logos/circle_onefootball.png",
    image:
      "https://image-service.onefootball.com/transform?w=336&h=252&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F10%2F2024%2F09%2FFulham-FC-v-Leicester-City-FC-Premier-League-1726754527-1000x667.jpg",
    title:
      "🗣️ Leicester confront PL for answers after 'false image' VAR controversy",
    subtitle:
      "Leicester City boss Steve Cooper has expressed his frustrations with the Premier League regarding what he considers an incorrect VAR decision during last week’s 2-2 draw with Crystal Palace.",
    source: "One Football",
    description: [
      {
        type: "paragraph",
        content: `The 44-year-old confirmed on Thursday that the Foxes have already contacted the league about the incident, seeking more answers. For Cooper and his team, allowing Palace’s first goal was a mistake because a “false image” was used and the decision needs to be confronted.`,
      },
      {
        type: "paragraph",
        content: `“It was an awful human error that we believe has been hidden a little bit,” Cooper said on the incident. “That’s been as disappointing as the decision. We didn’t feel it was right, asked for clarity and have seen images that showed he was clearly offside.`,
      },
      // {
      //   type: "video",
      //   content: "https://path-to-video.mp4", // Replace with your video URL
      // },
      {
        type: "paragraph",
        content: `“Everything that has been seen has been a false image. We’ve had a massive error go against us and we don’t want it to go under the radar because that’s not fair on the players or the supporters. “Errors like that should never happen, especially with VAR. We felt very let down by it and we needed to stand up for the club and tell them what we thought.`,
      },
      {
        type: "paragraph",
        content: `“We’ll be on the end of good and bad decisions, that’s football. But don’t hide away from mistakes.” It remains to be seen whether the Premier League will comment. Meanwhile, Leicester aim to claim all three points this weekend as they welcome Everton to town on Saturday.`,
      },
    ],
    date: "12 hrs ago",
  },
  {
    id: 8,
    logo: "https://image-service.onefootball.com/transform?w=48&dpr=2&image=https://filebucket.onefootball.com/2024/1/1705342796853-blob",
    image:
      "https://image-service.onefootball.com/transform?w=336&h=252&dpr=2&image=https%3A%2F%2Ficdn.football-italia.net%2Fwp-content%2Fuploads%2F2024%2F09%2FFrancesco-Acerbi-Erling-Haaland-Manchester-City-Inter.jpg",
    title:
      "Acerbi jokes over shirt request to Haaland: ‘He didn’t give it to me’",
    subtitle:
      "Francesco Acerbi asked for Erling Haaland’s shirt after Inter’s 0-0 draw against Manchester City but joked on social media that the Norway striker didn’t give it to him. Acerbi nullified Haaland in Inter’s 0-0 draw against Manchester City on Wednesday on their 2024-25 Champions League debut.",
    source: "Football Italia",
    description: [
      {
        type: "paragraph",
        content: `The Italian defender had already given a hard time to the Norway international in the 2023 Champions League Final, but Manchester City still won 1-0 in Istanbul thanks to a Rodri goal in the second half.`,
      },
      {
        type: "paragraph",
        content: `After being instrumental in Spain's drive for the 2024 European Championship championship, it would have been understandable for Yamal to experience burnout; nevertheless, he has just continued where he left off in Germany. At this age, not even the legendary Messi could reach the heights that Yamal is reaching. Time will tell if Michel's predictions come true, but Barcelona is once again the best team in La Liga, mostly because of Yamal's genius. And for the first time since Messi left the team, he's the major reason fans are dreaming of continental victory ahead of the Blaugrana's return to Champions League activity.`,
      },
      {
        type: "paragraph",
        content: `Acerbi had swapped shirts with Haaland after the Istanbul Final, but this time, the Manchester City striker refused to give his jersey to the Nerazzurri defender. The Inter star posted pictures from last night’s game on his official Instagram account and commented: ‘I asked Haaland for his shirt, but he didn’t give it to me. Just joking!’`,
      },
      {
        type: "paragraph",
        content: `Inter’s next competitive match is against Milan in Serie A on Sunday, September 22. Their next Champions League match is against Crvena Zvezda at San Siro on October 1, 2024.`,
      },
    ],
    date: "1 day ago",
  },
  {
    id: 9,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEXwcFrxcFrzclvla1bIXUvCWklDHxkiDw0nEg4+HRcfDgxlLyaiTDyrUD+VRTjobFfrblh1NiuJQDOYRzneZ1PSYk9vMyleKyNUJyAwFhKMQTXUY0+xUkI2GRQAAAB+Oi8WDAqYdywaAAAArElEQVR4AeWQAwLEMBAAwypGzf9/8q72Dzpx1gu+A0SvwFmGCX2B4EmKSBBGD8KYoElIE8ZvCM4SughDqcCI1vMad2SsCzeh0wgRP64UaQ+8R5nhJyGIgpyzoqzqpBFGI3i2TNvUMIN9KTvreg31Lhykxq0sWMZlELCc5QJrOcxCWFuqUVM5Qquq4b6RtveA2hqCCTUlqDVCY9IaaaXweKqtf/MG5zXvcPv8CH97RgrPkt+UTAAAAABJRU5ErkJggg==",
    image:
      "https://assets.goal.com/images/v3/bltcd0748b823e57e98/GOAL%20-%20Multiple%20Images%20-%203%20Stacked%20-%20Facebook%20-%202024-08-16T143707.282.png?auto=webp&format=pjpg&width=1080&quality=60",
    title:
      "Man City players told to be 'very calm' about 115 FFP charges as club insists 'not one rule has been broken' amid potential threat of Premier League expulsion",
    subtitle:
      "The reigning Premier League champions are set to see a hearing into their protracted Financial Fair Play case open on Monday. With proceedings finally getting underway, it is expected that all evidence will have to be heard over the course of the next 10 weeks.",
    source: "Goal",
    description: [
      {
        type: "paragraph",
        content:
          "A final judgement will then be made, although any appeals against those rulings will drag the long-running saga on into 2025. City have always maintained their innocence – after seeing the charges brought to light in February 2023 – and the official line coming out of the Etihad Stadium is that they have nothing to worry about.",
      },
      {
        type: "paragraph",
        content:
          "That is according to former City defender Aymeric Laporte, who now plies his club trade alongside Cristiano Ronaldo at Saudi Pro League side Al-Nassr, with the Spain international defender telling the Daily Mail: “When I was there and the news broke, the sporting director (Txiki Begiristain) and the CEO (Ferran Soriano) came and told all the players and staff that we can all be very calm because not one rule has been broken by Man City. “They told us everything was fine so that’s why we all think City will be fine. I don’t think there will be any issues. Like Pep Guardiola always says, if something wrong has been done, they will have to pay for it.”",
      },
      {
        type: "image",
        src: "https://assets.goal.com/images/v3/blt8e1905640f2f2555/laporte.jpg?auto=webp&format=pjpg&width=1080&quality=60",
        alt: "Laporte",
      },
      {
        type: "paragraph",
        content:
          "Speculation has raged regarding potential sanctions for City – who have enjoyed an era of dominance under Guardiola – with it suggested that they could face points deductions, hefty fines or even demotion out of the English top-flight.",
      },
    ],
    date: "15 Sept 2024",
  },
  {
    id: 10,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEXwcFrxcFrzclvla1bIXUvCWklDHxkiDw0nEg4+HRcfDgxlLyaiTDyrUD+VRTjobFfrblh1NiuJQDOYRzneZ1PSYk9vMyleKyNUJyAwFhKMQTXUY0+xUkI2GRQAAAB+Oi8WDAqYdywaAAAArElEQVR4AeWQAwLEMBAAwypGzf9/8q72Dzpx1gu+A0SvwFmGCX2B4EmKSBBGD8KYoElIE8ZvCM4SughDqcCI1vMad2SsCzeh0wgRP64UaQ+8R5nhJyGIgpyzoqzqpBFGI3i2TNvUMIN9KTvreg31Lhykxq0sWMZlELCc5QJrOcxCWFuqUVM5Qquq4b6RtveA2hqCCTUlqDVCY9IaaaXweKqtf/MG5zXvcPv8CH97RgrPkt+UTAAAAABJRU5ErkJggg==",
    image:
      "https://image-service.onefootball.com/transform?w=840&h=561&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F10%2F2024%2F09%2FWolverhampton-Wanderers-FC-v-Newcastle-United-FC-Premier-League-1726421280.jpg",
    title:
      "Although Lamine Yamal won't replace Lionel Messi, Hansi Flick is the ideal person to supervise the development of the teenage phenomenon, and analogies to the Barcelona star are fair.",
    subtitle:
      "The Spain wonderkid has opened the new season in spectacular fashion, and the sky is the limit if he doesn't get carried away with his own hype",
    source: "GOAL",
    description: [
      {
        type: "paragraph",
        content: `Girona manager Michel declared, "Lamine is a difference-maker," following his team's embarrassing defeat in La Liga on Sunday by Barcelona's striker. "At just 17 years old, he is already among the greatest players in the world, in my opinion. It is hard to think that someone [similar to Lionel] Messi will emerge after him, but I hope Lamine continues to develop since he is a player capable of that caliber." At Estadi Montilivi, Yamal scored his first away brace for Barcelona, helping to cap off an amazing 4-1 victory. This brings his goal involvement total for the 2024–25 season to seven in three games, which is second best in Europe's top five leagues behind Erling Haaland, and just two fewer than he managed in the whole of last season. That is not normal for a kid who only turned 17 in July.`,
      },
      {
        type: "paragraph",
        content: `After being instrumental in Spain's drive for the 2024 European Championship championship, it would have been understandable for Yamal to experience burnout; nevertheless, he has just continued where he left off in Germany. At this age, not even the legendary Messi could reach the heights that Yamal is reaching. Time will tell if Michel's predictions come true, but Barcelona is once again the best team in La Liga, mostly because of Yamal's genius. And for the first time since Messi left the team, he's the major reason fans are dreaming of continental victory ahead of the Blaugrana's return to Champions League activity.`,
      },
      {
        type: "image",
        src: "https://assets.goal.com/images/v3/blt7cc1872190ca8622/Lamine%20Yamal%20Barcelona%202024-25.jpg?auto=webp&format=pjpg&width=828&quality=60",
      },
      {
        type: "paragraph",
        content: `As good as Yamal was for Barca in his breakthrough year, he was clearly still a rough diamond. La Masia's academy graduate sparkled in fits and starts instead of delivering consistently in Xavi's possession-orientated system. However, Luis de la Fuente's tactical approach allowed Yamal to unleash the full scope of his talent at the Euros, and he's now doing the same at club level under Hansi Flick. "The key has been to be direct. When we recover, we only think about scoring," Yamal told Barca One after the Girona win. That philosophy is reaping great rewards, as Barca have hit 17 goals in their opening five league games for the first time since 2017-18.`,
      },
      {
        type: "paragraph",
        content: `Girona deservedly beat Barca 4-2 home and away in 2023-24, but they were completely overpowered this time around. Yamal broke the deadlock on the half-hour mark with a composed first-time finish after picking the pocket of a Girona defender just outside the box, and doubled Barca's lead seven minutes later with a perfectly placed first-time shot from a loose ball. These goals looked simple, but only because of the supremely confident manner in which the teenager dispatched them. Yamal now has the end product to match his crowd-pleasing skill and fearlessness on the ball. He's also grafting relentlessly off it, having won the ball back in the final third on eight occasions already this season - more than any other player in La Liga.`,
      },
      {
        type: "paragraph",
        content: `"I'm very happy about Lamine's two goals, he's very young but he's really incredible" Flick said to Movistar Plus. "Having him is key for us not only because of his quality. but he also presses very well high. He combines talent and pressure and that's massive for us. He is outstanding."`,
      },
    ],
    date: "19 Sept 2024",
  },
];

export default newsData;
