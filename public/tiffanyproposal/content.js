/* Tiffany Chen's research proposal, as a reading page.

   The sibling of /landscape-portfolio/: that page is the work, this one is
   the proposal that goes with it. Like the portfolio it is not a lesson, so
   it is English only — no 中 chip, no 🔊, nothing to practise, nothing saved.

   THE TEXT IS HERS, REPRODUCED WORD FOR WORD from "Tiffany Chen - Revised
   Research Proposal.pdf" (16 Nov 2026). Nothing was reworded, cut or added.
   The only things this file adds are the structure marks: which paragraph is
   a research question, which line is a sub-heading, and where the source set
   a phrase in bold (**…**) or a title in italics (*…*).

   Three things in the source look unfinished and were left exactly as they
   are, because they are hers to settle:

     - the chapters are numbered 5 to 15 (there is no Chapter 1 to 4);
     - one reference is dated 2026 (Toshima City);
     - the reference list ends with a note that more official documentation
       "should be incorporated" — kept as `refsNote`, set quietly.

   If she sends a new revision, change the words here and nowhere else.
*/

const PROPOSAL = {
  kicker: "Proposed Research Title",
  title: "Climate-Responsive Pedestrian Connectivity in Station-Area Regeneration",
  subtitle: "Landscape Planning around Kaohsiung Main Station and Lessons from Japan",
  author: "Tiffany Chen",

  sections: [

    {
      id: "abstract",
      title: "Abstract",
      blocks: [
        { t: "p", text: "Major railway station redevelopment can transform a city's transportation system and public image, but improvements within a station do not necessarily create a better pedestrian environment in the surrounding neighborhoods. This research examines how the redevelopment of Kaohsiung Main Station can improve pedestrian connections between the station, nearby commercial streets, and older residential neighborhoods while responding to Kaohsiung's hot subtropical climate and preserving the existing urban character." },
        { t: "p", text: "The study will combine literature review, field observation, GIS-based spatial analysis, and comparative case studies in Japan. Fieldwork around Kaohsiung Main Station will examine sidewalk continuity, pedestrian crossings, shade and weather protection, access to local shops and public transportation, resting opportunities, and other conditions affecting everyday walking. Selected Japanese cases will be studied for different lessons: Futako-Tamagawa Rise for station-to-neighborhood connectivity, Minami-Ikebukuro Park for everyday public-space use and management, and Toyama Grand Plaza for weather-protected public space and city-center regeneration. The Shinsei Green Waterway in Taichung will provide a supplementary Taiwanese example of landscape-based urban regeneration." },
        { t: "p", text: "The expected outcome is a set of landscape planning strategies for creating a more continuous, comfortable, and context-sensitive pedestrian network around Kaohsiung Main Station. The research aims to demonstrate how landscape architecture can function not only as the design of individual green spaces, but also as connective infrastructure between major redevelopment projects and the everyday life of surrounding neighborhoods." },
        { t: "keywords", items: ["Urban Regeneration", "Landscape Architecture", "Pedestrian Connectivity", "Thermal Comfort", "Railway Station", "Kaohsiung"] },
      ],
    },

    {
      id: "background",
      chapter: 5,
      title: "Background and Research Motivation",
      blocks: [
        { t: "p", text: "Urban regeneration involves more than replacing old buildings or constructing new infrastructure. Successful regeneration also needs to consider how people move through a neighborhood, how they use public spaces, how transportation connects with everyday destinations, and how existing communities are affected by physical change. Roberts, Sykes, and Granger (2016) emphasize that urban regeneration involves physical, environmental, social, and economic dimensions rather than redevelopment alone." },
        { t: "p", text: "My interest in this topic developed through my studies in Landscape Architecture and through observing urban spaces in Taiwan and other countries. I have become particularly interested in the relationship between transportation infrastructure and the streets and public spaces surrounding it. A railway station may be close to shops, parks, or residential neighborhoods on a map, but physical distance alone does not determine whether people will find the journey comfortable or convenient. Sidewalk conditions, crossings, shade, traffic, greenery, and the quality of the surrounding public realm can all influence the experience of walking." },
        { t: "p", text: "Kaohsiung Main Station is an important opportunity to study this relationship. The railway underground project and the redevelopment of the station have substantially changed the center of Kaohsiung. One of the most distinctive features of the new station is **Kaohsiung Green Hill**, a large landscaped space that extends across the station structure. It demonstrates how transportation infrastructure can also become part of the city's landscape and public-space network." },
        { t: "p", text: "However, a major station does not function independently from the city around it. People leaving Kaohsiung Main Station still need to walk to local shops, bus stops, hotels, workplaces, and older residential areas. The quality of these connections influences whether the redevelopment benefits only the station itself or contributes to the regeneration of the wider neighborhood." },
        { t: "p", text: "Climate makes this issue especially important in Kaohsiung. During the hot summer months, even a relatively short walk can become uncomfortable when sidewalks have little shade or weather protection. Trees, covered walkways, building edges, resting places, and the configuration of streets may therefore affect not only the appearance of the area but also its practical walkability." },
        { t: "p", text: "I am interested in understanding how Landscape Architecture can help connect the new station with the existing city. Rather than treating Green Hill as an isolated public space, I want to examine whether landscape strategies can extend beyond the station and create a more comfortable pedestrian network into the surrounding neighborhoods." },
      ],
    },

    {
      id: "problem",
      chapter: 6,
      title: "Research Problem",
      blocks: [
        { t: "p", text: "Large-scale transportation projects are often evaluated according to the quality and efficiency of the new infrastructure. However, the experience of pedestrians does not end when they leave the station building." },
        { t: "p", text: "Around Kaohsiung Main Station, the redevelopment has created significant new public space, but the surrounding streets contain a mixture of older buildings, local businesses, major roads, smaller streets, and existing residential areas. Pedestrian conditions can therefore change considerably within a short distance." },
        { t: "p", text: "A destination may be geographically close to the station but still be difficult or uncomfortable to reach because of narrow or interrupted sidewalks, inconvenient crossings, traffic conflicts, insufficient shade, or limited places to rest. Kaohsiung's hot climate may make these problems more significant, particularly during summer." },
        { t: "p", text: "At the same time, improving pedestrian conditions cannot simply mean removing older buildings and replacing existing streets with an entirely new urban environment. Local shops, older streets, and everyday destinations contribute to the identity and function of the neighborhood. Changes therefore need to work with the existing urban fabric rather than erase it." },
        { t: "p", text: "This creates the central problem of the research:" },
        { t: "ask", main: true, text: "How can a major railway-station redevelopment extend its benefits beyond the station boundary and improve everyday pedestrian connections to existing neighborhoods while responding to local climate and urban character?" },
        { t: "p", text: "Kaohsiung Main Station provides a useful case for examining this question because the contrast between a major new landscape-oriented transportation project and the surrounding existing city is particularly visible." },
      ],
    },

    {
      id: "aim",
      chapter: 7,
      title: "Research Aim",
      blocks: [
        { t: "p", text: "The main aim of this research is to investigate how landscape planning can improve pedestrian connectivity between Kaohsiung Main Station and its surrounding older commercial and residential areas." },
        { t: "p", text: "The research will examine both physical connectivity and pedestrian comfort. Physical connectivity includes sidewalk continuity, crossings, route directness, access to public transportation, and connections to everyday destinations. Pedestrian comfort includes shade, greenery, weather protection, opportunities to rest, and the overall quality of the walking environment." },
        { t: "p", text: "A second aim is to investigate how selected Japanese urban projects address similar relationships among railway stations, public spaces, pedestrian routes, commercial areas, and existing neighborhoods." },
        { t: "p", text: "The research will not attempt to copy Japanese projects directly. Instead, it will identify strategies that may be transferable to Kaohsiung and examine how they would need to be modified for Kaohsiung's subtropical climate, street conditions, commercial activity, and existing urban fabric." },
        { t: "p", text: "Ultimately, the study aims to develop landscape and planning recommendations that could improve the connection between Kaohsiung Main Station, Green Hill, and the surrounding city without sacrificing the character and daily functions of the existing neighborhoods." },
      ],
    },

    {
      id: "questions",
      chapter: 8,
      title: "Research Questions",
      blocks: [
        { t: "ask", main: true, label: "Main Research Question", text: "How can climate-responsive and human-centered landscape planning improve pedestrian connectivity between Kaohsiung Main Station and its surrounding older neighborhoods while preserving local urban character?" },
        { t: "ask", label: "Sub-Question 1", text: "What physical and environmental conditions currently affect pedestrian movement between Kaohsiung Main Station and nearby commercial and residential areas?" },
        { t: "p", text: "This question will examine sidewalk continuity, crossings, route directness, traffic conflicts, shade, greenery, resting opportunities, and connections to local destinations." },
        { t: "ask", label: "Sub-Question 2", text: "How do selected Japanese urban regeneration projects integrate pedestrian routes, public spaces, transportation, commercial activity, and climate protection?" },
        { t: "p", text: "Rather than treating all Japanese cases as the same type of project, the research will examine the specific contribution of each case to pedestrian connectivity and public-space design." },
        { t: "ask", label: "Sub-Question 3", text: "Which strategies identified through the Japanese cases could be adapted to Kaohsiung Main Station, and how would they need to be modified for Kaohsiung's climate and existing urban fabric?" },
        { t: "p", text: "This question will focus on practical transferability. Strategies may include trees, covered pedestrian routes, connected public spaces, resting areas, improved crossings, and better integration between station spaces and existing commercial streets." },
      ],
    },

    {
      id: "framework",
      chapter: 9,
      title: "Theoretical Framework and Literature Review",
      blocks: [
        { t: "h", n: "9.1", text: "Urban Regeneration and Station-Area Integration" },
        { t: "p", text: "Urban regeneration provides the broader framework for this research. Roberts, Sykes, and Granger (2016) describe regeneration as an integrated process involving physical, environmental, economic, and social conditions." },
        { t: "p", text: "This perspective is important because Kaohsiung Main Station should not be considered only as a transportation facility or architectural project. Its redevelopment has the potential to influence nearby streets, commercial activity, public spaces, transportation connections, and neighborhood life." },
        { t: "p", text: "The research therefore considers the station and its surrounding neighborhoods as parts of a connected urban system. The key question is not simply whether the new station is successful, but whether its redevelopment contributes to improvements beyond the project boundary." },

        { t: "h", n: "9.2", text: "Human-Centered Urban Design and Walkability" },
        { t: "p", text: "Gehl (2010) argues that cities should be understood at the scale and speed of people using them. Walking, sitting, meeting others, observing the surroundings, and spending time outdoors are fundamental parts of urban life." },
        { t: "p", text: "Southworth (2005) similarly identifies pedestrian-network connectivity, connections with other transportation modes, safety, path quality, and the surrounding context as important characteristics of a walkable environment." },
        { t: "p", text: "These concepts provide useful criteria for analyzing Kaohsiung Main Station. A pedestrian route should therefore not be evaluated only by its distance. The research will also consider whether the route is continuous, safe, understandable, comfortable, and connected to places that people actually need to reach." },
        { t: "p", text: "This human-centered perspective is particularly relevant to the streets immediately outside railway stations, where transportation planning and everyday pedestrian activity meet." },

        { t: "h", n: "9.3", text: "Compact Cities and the Japanese Planning Context" },
        { t: "p", text: "Japan provides an important context for studying relationships among public transportation, walking, and urban development. Japanese municipalities have increasingly used compact-city planning approaches to maintain access to public services and transportation while responding to demographic change." },
        { t: "p", text: "Hino et al. (2024) show that Japanese compact-city planning increasingly considers access to everyday facilities, public transportation, walking, cycling, and physical activity. Their research also demonstrates that compactness alone is not sufficient; the quality of pedestrian infrastructure remains important." },
        { t: "p", text: "This distinction is relevant to Kaohsiung. Locating housing or shops near a railway station creates potential accessibility, but people still need a practical and comfortable pedestrian route between these destinations." },
        { t: "p", text: "The Japanese cases in this research will therefore be examined not because Japanese cities should automatically serve as models for Taiwan, but because their experience with railway-centered development, compact urban planning, public-space design, and long-term management can provide useful points of comparison." },

        { t: "h", n: "9.4", text: "Climate-Responsive Landscape Design and Landscape Sustainability" },
        { t: "p", text: "Landscape Architecture can influence both environmental conditions and everyday human experience." },
        { t: "p", text: "Wu (2013) describes landscape sustainability as involving the relationship between ecological processes, ecosystem services, and human well-being. Zhou, Wu, and Anderies (2019) further emphasize that sustainable landscapes must be understood through ecological, social, and management dimensions." },
        { t: "p", text: "For this research, one important ecosystem service is thermal regulation. Street trees and vegetation can provide shade, while landscape structures and covered spaces can reduce exposure to direct sunlight and rain. In a subtropical city such as Kaohsiung, these functions can directly affect whether people are comfortable walking outdoors." },
        { t: "p", text: "Steiner's (2011) concept of landscape ecological urbanism also supports the idea that landscape should be integrated into urban planning rather than added only after buildings and roads have been designed." },
        { t: "p", text: "This research therefore considers landscape infrastructure as part of pedestrian infrastructure. Trees, planting, shade structures, open spaces, and resting areas are not only visual improvements; they can influence how comfortably and continuously people move through the city." },
      ],
    },

    {
      id: "cases",
      chapter: 10,
      title: "Preliminary Case Studies",
      blocks: [
        { t: "h", n: "10.1", text: "Japanese Case Studies" },

        { t: "hh", n: "10.1.1", text: "Futako-Tamagawa Rise, Tokyo" },
        { t: "p", text: "Futako-Tamagawa Rise will be the most directly comparable Japanese station-area case." },
        { t: "p", text: "The redevelopment integrates Futako-Tamagawa Station with commercial facilities, residential development, pedestrian spaces, landscaped routes, Futako-Tamagawa Park, and the nearby Tama River. A continuous pedestrian network helps connect transportation, shopping, public space, and the natural landscape." },
        { t: "p", text: "For this research, the most important aspect of Futako-Tamagawa Rise is not its architectural scale but its **continuity**. I will examine how pedestrians move from the station through commercial areas toward public spaces and surrounding destinations, how pedestrian and vehicle movement are separated, and how planting contributes to the walking environment." },
        { t: "p", text: "The case will help me consider how a major station can function as part of a larger pedestrian and landscape network rather than as an isolated transportation facility." },

        { t: "hh", n: "10.1.2", text: "Minami-Ikebukuro Park, Tokyo" },
        { t: "p", text: "Minami-Ikebukuro Park is located approximately five minutes on foot from Ikebukuro Station. Its value to this research is different from Futako-Tamagawa Rise." },
        { t: "p", text: "The park combines a large lawn, seating areas, a café-restaurant, children's facilities, and spaces used for everyday recreation. Importantly, its management involves cooperation among the local government, community organizations, businesses, park-management organizations, and the café operator." },
        { t: "p", text: "I am interested in how the park functions as part of daily neighborhood life rather than only as a destination for special events. The case will help me examine how public-space design and long-term management can encourage people to stay, rest, and return to a space regularly." },
        { t: "p", text: "For Kaohsiung Main Station, this raises an important question about Green Hill: can it become a public space used by surrounding residents as part of their everyday lives, rather than mainly by passengers or visitors?" },

        { t: "hh", n: "10.1.3", text: "Toyama Grand Plaza" },
        { t: "p", text: "Toyama Grand Plaza is not a railway-station redevelopment project, and it will therefore serve a different purpose in the comparative analysis." },
        { t: "p", text: "It is an all-weather public square in central Toyama, with a large glass roof that allows the space to support markets, community events, social activities, and everyday use under different weather conditions." },
        { t: "p", text: "The case is relevant to my interest in climate-responsive public space. Kaohsiung's climatic problem is different from Toyama's, but both examples raise the same design question: **how can public space remain usable when weather conditions are uncomfortable?**" },
        { t: "p", text: "I will therefore examine how weather protection, flexible space, seating, surrounding commercial activity, and public transportation work together at Grand Plaza." },
        { t: "p", text: "Rather than copying its roof design, I want to understand the broader principle of designing public space for everyday use under challenging weather conditions." },

        { t: "h", n: "10.2", text: "Taiwan Case Studies" },

        { t: "hh", n: "10.2.1", text: "Kaohsiung Main Station and Kaohsiung Green Hill" },
        { t: "p", text: "Kaohsiung Main Station will be the primary study site." },
        { t: "p", text: "The redevelopment has transformed the station into more than a transportation facility. Kaohsiung Green Hill creates a major landscaped public space above the transportation infrastructure and connects with the city's wider green corridor." },
        { t: "p", text: "My research will focus particularly on what happens at the edges of this project." },
        { t: "p", text: "I will examine how pedestrians move from the station and Green Hill into surrounding streets, older commercial areas, public transportation connections, and residential neighborhoods. The analysis will identify where the quality of the pedestrian environment changes and where barriers such as exposed sidewalks, difficult crossings, interruptions, or insufficient resting opportunities appear." },
        { t: "p", text: "The purpose is not to evaluate whether Green Hill itself is successful or unsuccessful. Instead, I want to examine how its landscape benefits could be extended into the surrounding neighborhood." },

        { t: "hh", n: "10.2.2", text: "Shinsei Green Waterway, Taichung" },
        { t: "p", text: "The Shinsei Green Waterway will serve as a supplementary Taiwanese landscape-regeneration case." },
        { t: "p", text: "The project transformed a highly engineered and polluted urban waterway through water-quality improvement, ecological treatment, public-space design, planting, walking areas, and connections with the surrounding historic city center." },
        { t: "p", text: "This case is relevant because it demonstrates how landscape infrastructure can perform several functions simultaneously: environmental improvement, recreation, pedestrian movement, urban identity, and regeneration." },
        { t: "p", text: "I will use the project mainly to examine how landscape interventions can support the regeneration of an existing urban district without requiring the entire neighborhood to be rebuilt." },
      ],
    },

    {
      id: "methodology",
      chapter: 11,
      title: "Research Methodology",
      blocks: [
        { t: "p", text: "This research will use a qualitative and spatial case-study approach combining literature review, field observation, GIS analysis, comparative analysis, and design synthesis." },

        { t: "h", n: "11.1", text: "Literature Review" },
        { t: "p", text: "The literature review will establish the research framework and identify appropriate criteria for evaluating pedestrian environments." },
        { t: "p", text: "The main areas of literature will include urban regeneration, human-centered urban design, walkability, station-area development, compact-city planning, landscape sustainability, and climate-responsive pedestrian design." },
        { t: "p", text: "The literature review will also help determine how pedestrian conditions such as connectivity, sidewalk quality, crossings, shade, weather protection, greenery, and access to destinations can be systematically observed and mapped." },

        { t: "h", n: "11.2", text: "Study-Area Mapping" },
        { t: "p", text: "The study will first identify important pedestrian routes connecting Kaohsiung Main Station with nearby commercial streets, public transportation, public spaces, and older residential areas." },
        { t: "p", text: "Rather than examining every street around the station equally, several representative walking routes will be selected according to their connection with important everyday destinations." },
        { t: "p", text: "GIS will be used to map the street network, pedestrian routes, crossings, public transportation access, public spaces, green spaces, commercial destinations, and other relevant urban features." },
        { t: "p", text: "This initial mapping will provide the spatial framework for field observation." },

        { t: "h", n: "11.3", text: "Field Observation" },
        { t: "p", text: "Field surveys will examine actual pedestrian conditions along the selected routes." },
        { t: "p", text: "Observations will focus on sidewalk width and continuity, physical obstacles, pedestrian crossings, conflicts with vehicles, shade and weather protection, street trees and vegetation, seating and resting opportunities, connections to shop entrances, and the relationship between the street and surrounding land uses." },
        { t: "p", text: "Because thermal conditions are central to the research, the survey will also identify sections where pedestrians are exposed to direct sunlight and sections where shade is provided by trees, buildings, arcades, canopies, or other structures." },
        { t: "p", text: "Where possible, observations will be conducted at different times and on both weekdays and weekends so that the research does not rely on a single visit." },
        { t: "p", text: "The purpose is not only to identify physical problems but also to understand how these conditions affect the continuity of the overall walking experience." },

        { t: "h", n: "11.4", text: "GIS and Spatial Analysis" },
        { t: "p", text: "The findings from field surveys will be transferred into GIS." },
        { t: "p", text: "Each selected pedestrian route can then be divided into segments and analyzed according to characteristics such as sidewalk continuity, crossings, shade availability, public-space access, local destinations, and pedestrian barriers." },
        { t: "p", text: "GIS will allow apparently short routes to be compared with their actual walking conditions. For example, two destinations may be similar distances from the station, but one route may contain continuous shade and convenient crossings while another may require pedestrians to cross major roads or walk for long sections in direct sunlight." },
        { t: "p", text: "The resulting maps will help identify priority areas where relatively small landscape or pedestrian improvements could create significant improvements in connectivity." },

        { t: "h", n: "11.5", text: "Comparative Case Analysis" },
        { t: "p", text: "The Japanese cases will be analyzed using the same general framework rather than being described independently." },
        { t: "p", text: "Futako-Tamagawa Rise will be examined primarily for pedestrian continuity and station-area integration. Minami-Ikebukuro Park will be examined for everyday public-space use and management. Toyama Grand Plaza will be examined for weather protection and flexible public-space design." },
        { t: "p", text: "Across the cases, I will compare pedestrian connectivity, integration with surrounding commercial areas, shade and weather protection, landscape elements, opportunities to rest or stay, relationships with transportation, and long-term management." },
        { t: "p", text: "This structure will make it possible to identify principles that may be transferable even when the physical form of each project is different." },

        { t: "h", n: "11.6", text: "Design and Planning Synthesis" },
        { t: "p", text: "The final phase of the research will translate the analysis into landscape and planning strategies for Kaohsiung Main Station." },
        { t: "p", text: "Recommendations will focus primarily on improving the existing urban fabric rather than proposing large-scale demolition and reconstruction." },
        { t: "p", text: "Possible interventions may include additional street trees, small-scale shade structures, covered pedestrian connections, improved crossings, resting nodes, clearer pedestrian routes, and stronger connections between Green Hill and surrounding streets." },
        { t: "p", text: "Each intervention will need to consider existing shop entrances, sidewalk space, traffic requirements, maintenance, visibility, and local character." },
        { t: "p", text: "The final recommendations will therefore be based on both spatial performance and contextual suitability." },
      ],
    },

    {
      id: "outcomes",
      chapter: 12,
      title: "Expected Outcomes",
      blocks: [
        { t: "p", text: "The first expected outcome will be a spatial assessment of pedestrian conditions around Kaohsiung Main Station." },
        { t: "p", text: "This will identify important routes connecting the station with surrounding neighborhoods and show where problems such as interrupted sidewalks, difficult crossings, insufficient shade, or weak connections occur." },
        { t: "p", text: "The second outcome will be a comparative framework showing how selected Japanese projects address different aspects of pedestrian connectivity and public-space design." },
        { t: "p", text: "Rather than producing a list of attractive Japanese examples, the comparison will identify specific principles and explain which conditions make them successful." },
        { t: "p", text: "The third outcome will be a set of context-sensitive landscape strategies for Kaohsiung Main Station." },
        { t: "p", text: "These strategies will aim to create a more continuous pedestrian network extending from Green Hill into surrounding streets and neighborhoods. Particular attention will be given to thermal comfort, shade, everyday destinations, public-space continuity, and compatibility with existing local businesses and buildings." },
        { t: "p", text: "The research is not expected to produce a complete redevelopment master plan. Instead, it will identify strategic interventions that demonstrate how landscape design can strengthen connections between a major transportation project and the existing city." },
      ],
    },

    {
      id: "significance",
      chapter: 13,
      title: "Research Significance",
      blocks: [
        { t: "p", text: "This research is significant because it shifts attention from the design of a major redevelopment project itself to the **connections between the project and its surroundings**." },
        { t: "p", text: "Kaohsiung Main Station represents a substantial investment in transportation infrastructure, architecture, and landscape. However, the long-term urban value of the project will also depend on how easily people can move between the station and the neighborhoods around it." },
        { t: "p", text: "This research argues that Landscape Architecture can play an important role in this transition zone." },
        { t: "p", text: "A tree, shaded walkway, crossing, small public space, or resting place may appear minor compared with the scale of a new railway station. However, together these elements can determine whether a pedestrian network is comfortable and continuous." },
        { t: "p", text: "The study also contributes a climate-responsive perspective to station-area planning. In subtropical cities, pedestrian accessibility cannot be understood only through distance and connectivity. Exposure to heat and direct sunlight can significantly influence the experience of walking." },
        { t: "p", text: "Finally, the study emphasizes adaptation rather than replacement. By examining how pedestrian and landscape improvements can be introduced into existing streets, the research aims to support urban regeneration while respecting local shops, older buildings, and neighborhood identity." },
        { t: "p", text: "For me, this also reflects the role I hope to have as a future landscape architect: working at the scale of major urban systems while still paying attention to the everyday experience of the people who use them." },
      ],
    },

    {
      id: "why-japan",
      chapter: 14,
      title: "Why Japan?",
      blocks: [
        { t: "p", text: "Japan is especially relevant to this research because railway stations play an important role in the organization of many Japanese cities." },
        { t: "p", text: "Station areas often combine public transportation, commercial activity, public space, pedestrian networks, and residential development. This makes Japan a valuable environment in which to study how transportation infrastructure connects with everyday urban life." },
        { t: "p", text: "Japan has also been responding to population aging and population decline for longer than Taiwan. These demographic changes have encouraged many municipalities to consider compact urban development, access to public transportation, and the ability of residents to reach everyday services without depending entirely on private cars." },
        { t: "p", text: "However, my purpose in studying Japan is not to assume that Japanese planning is superior to planning in Taiwan." },
        { t: "p", text: "Japan and Taiwan have different climates, street patterns, development systems, and everyday habits. A covered walkway or landscape strategy that works successfully in Tokyo or Toyama may require substantial modification before it can work in Kaohsiung." },
        { t: "p", text: "This difference is precisely what makes the comparison useful." },
        { t: "p", text: "By studying projects directly in Japan, I can examine details that are difficult to understand from plans and photographs alone: how pedestrians actually move through a space, how public spaces connect with surrounding streets, where people choose to stop, how planting and weather protection are arranged, and how older neighborhoods interact with newer development." },
        { t: "p", text: "I hope that studying these places will help me develop a more critical understanding of what can be transferred between cities and what must remain locally specific." },
      ],
    },

    {
      id: "development",
      chapter: 15,
      title: "Expected Academic Development",
      blocks: [
        { t: "p", text: "Graduate study will allow me to move from observing urban problems to studying them systematically." },
        { t: "p", text: "My undergraduate education in Landscape Architecture has taught me how to develop design ideas and communicate them through drawings, models, and spatial thinking. The next step for me is to strengthen the analytical process that comes before design." },
        { t: "p", text: "Through this research, I want to improve my skills in field observation, GIS, spatial analysis, comparative case-study research, and urban-scale landscape planning. In particular, I want to learn how evidence gathered from a site can be translated into design decisions." },
        { t: "p", text: "I also want to develop a stronger understanding of the relationship between Landscape Architecture and larger urban systems. Streets, railway stations, parks, drainage systems, commercial areas, transportation, and green infrastructure should not be planned as completely separate elements." },
        { t: "p", text: "Studying in Japan will allow me to observe how these relationships are approached in different cities and to compare them critically with Taiwan." },
        { t: "p", text: "After graduate school, I hope to work as a landscape architect on urban-scale projects. I want to be able to look at both the larger structure of a city and the smaller experiences that determine how people actually use it." },
        { t: "p", text: "A major transportation project may transform an entire district, but the success of that transformation can still depend on something as simple as whether a person can comfortably walk from the station to a nearby shop." },
        { t: "p", text: "That relationship between large-scale planning and everyday experience is what I hope to continue studying through my graduate education and professional career." },
      ],
    },
  ],

  /* APA, as in the source. `doi` is kept apart from the text so the link is
     never cut by a regex — one of these DOIs has brackets in it. */
  refs: [
    { text: "Gehl, J. (2010). *Cities for people*. Island Press." },
    { text: "Hino, K., Takeuchi, M., Fukushima, K., Kikuchi, H., Inoue, S., Lowe, M., & Cerin, E. (2024). Planning strategies and infrastructure development supporting physical activity: Analyzing municipal compact city plans in Japan. *Frontiers of Urban and Rural Planning, 2*, 21.", doi: "10.1007/s44243-024-00049-8" },
    { text: "Roberts, P., Sykes, H., & Granger, R. (Eds.). (2016). *Urban regeneration* (2nd ed.). SAGE Publications." },
    { text: "Southworth, M. (2005). Designing the walkable city. *Journal of Urban Planning and Development, 131*(4), 246–257.", doi: "10.1061/(ASCE)0733-9488(2005)131:4(246)" },
    { text: "Steiner, F. (2011). Landscape ecological urbanism: Origins and trajectories. *Landscape and Urban Planning, 100*(4), 333–337.", doi: "10.1016/j.landurbplan.2011.01.020" },
    { text: "Wu, J. (2013). Landscape sustainability science: Ecosystem services and human well-being in changing landscapes. *Landscape Ecology, 28*(6), 999–1023.", doi: "10.1007/s10980-013-9894-9" },
    { text: "Zhou, B.-B., Wu, J., & Anderies, J. M. (2019). Sustainable landscapes and landscape sustainability: A tale of two concepts. *Landscape and Urban Planning, 189*, 274–284.", doi: "10.1016/j.landurbplan.2019.05.005" },
    { text: "Ministry of Land, Infrastructure, Transport and Tourism, Japan. (2017). *Town development of Futako Tamagawa Rise*." },
    { text: "Toshima City. (2026). *Minami-Ikebukuro Park*." },
    { text: "Taichung City Government. (2017). *Shinsei Green Waterway*." },
  ],

  refsNote: "Additional official project documentation for Toyama Grand Plaza, Kaohsiung Main Station, and the Japanese case studies should be incorporated into the final reference list according to the university's required citation style.",
};
