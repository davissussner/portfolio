/* ------------------------------------------------------------------
   ALL THE WORDS AND WORK ON THE SITE LIVE IN THIS FILE.
   Edit text between the quotes, save, refresh the page.
   Anything marked TODO is something only you can fill in.
------------------------------------------------------------------- */

window.CONTENT = {
  site: {
    name: "Davis Sussner",
    major: "Advertising & Public Relations",
    school: "University of Nebraska–Lincoln",
    tagline: "I make campaigns, design, photo and video that people actually stop for.",
    email: "davis@sussner.com",
    linkedin: "https://www.linkedin.com/in/davis-sussner-677b80257/",
    instagram: "",  // TODO paste a portfolio Instagram URL if you have one
  },

  about: {
    headshot: "assets/img/about/headshot.jpg",
    // TODO These paragraphs are a starting draft written from your resume. Make them sound like you.
    bio: [
      "I'm an Advertising and Public Relations major at the University of Nebraska–Lincoln, graduating in May 2027. I grew up in Wayzata, Minnesota, and a Scholastic National Art Award in high school is what pointed me toward a creative career.",
      "My work spans campaign strategy, graphic design, photography and video. Most recently I was on Team 783 for the 2026 AAF National Student Advertising Competition, building a national campaign for NFL PlayGrounds.",
      "Right now I'm a corporate communications intern at HDR in Omaha, editing and producing video for the HDR Foundation, cutting podcasts and writing for social, web and internal channels. Before that I interned in marketing at Sussner Design in Minneapolis.",
    ],
    facts: [
      { label: "Studying", value: "ADPR, UNL '27" },
      { label: "Based in", value: "Lincoln, NE" },
      { label: "Hometown", value: "Wayzata, MN" },
      { label: "Tools", value: "Adobe Illustrator, Photoshop, Premiere" }, // TODO confirm or edit
    ],
  },

  /* PROJECTS
     category must be one of: Campaigns, Video, Design, Photography
     media item types:
       { type: "image", src, alt, caption, wide: true }
       { type: "video", src, poster, caption, vertical: true }      <- file hosted on this site
       { type: "embed", url: "", poster, caption }                  <- YouTube or Vimeo link
     For "embed", paste a YouTube or Vimeo link into url. Until you do,
     the poster shows with a "Video coming soon" label. */
  /* To hide a project without deleting it, add  hidden: true,  to it. */
  projects: [
    {
      id: "nsac-nfl-playgrounds",
      title: "NFL PlayGrounds: Always Room for One More",
      client: "NFL · AAF National Student Advertising Competition",
      category: "Campaigns",
      year: "2026",
      cover: "assets/img/nsac/playgrounds-ecosystem.jpg",
      summary: "Team 783's national campaign uniting the NFL's youth health and wellness programs under one brand, NFL PlayGrounds, to reach the casual-fan families who don't know those programs exist.",
      role: "", // TODO e.g. "Art director: billboards, logo system, landing page"
      team: "Team 783, University of Nebraska–Lincoln",
      badge: "Includes full plans book",
      // The plans book shows as a big feature near the top of the page.
      book: {
        title: "The plans book",
        text: "The full 13-spread campaign plan we submitted to the AAF: research, audience and cultural tension, strategy, manifesto, creative executions, activations, media plan and budget, and measurement.",
        pdf: "assets/docs/nsac-team783-plans-book.pdf",
        pages: Array.from({ length: 13 }, (_, i) => `assets/img/nsac/plans-book/page-${String(i + 1).padStart(2, "0")}.jpg`),
      },
      stats: [
        { value: "1 in 6", label: "casual-fan parents can name an NFL youth program" },
        { value: "2,000+", label: "survey respondents, plus 20 focus group participants and 17 interviews" },
        { value: "$10M", label: "media budget across TV, OOH, social and in-venue" },
      ],
      story: [
        { heading: "The problem", text: "The NFL runs some of the most comprehensive youth wellness programs in American sports, but families credit them to the school, the coach or the community center. Our research showed this isn't a trust problem. It's a visibility problem." },
        { heading: "The insight", text: "Kids have lost about eight hours of free play a week since the 1970s, and the families who need playgrounds most are the least likely to have them. Across every community we spoke with, belonging mattered more than winning." },
        { heading: "The idea", text: "NFL PlayGrounds brings PLAY 60, FLAG, Character Playbook and the league's other youth programs together in one ecosystem with one promise: there's always room for one more. It comes to life through two hero TV spots, a traveling Hometown Huddle festival, a UGC campaign and in-venue activation across 890+ youth sports venues." },
        { heading: "The goals", text: "A 25% lift in aided program awareness among casual fans, a 10-point shift toward seeing the NFL as community-first, and 50,000+ direct program registrations." },
      ],
      media: [
        { type: "embed", url: "https://youtu.be/YcBdccAUACY", poster: "assets/img/video/nsac-manifesto.jpg", caption: "Campaign manifesto", wide: true },
        { type: "embed", url: "https://youtu.be/X9S2Nsi7EwY", poster: "assets/img/video/nsac-tv-spot-1.jpg", caption: "Hero TV spot 1" },
        { type: "embed", url: "https://youtu.be/bGIDyAtLnYk", poster: "assets/img/video/nsac-tv-spot-2.jpg", caption: "Hero TV spot 2" },
        { type: "image", src: "assets/img/nsac/billboard-play-anyway.jpg", alt: "Billboard reading Play Anyway with kids playing football in the rain", caption: "Out of home: “Play Anyway.”", wide: true },
        { type: "image", src: "assets/img/nsac/billboard-play-as-you-are.jpg", alt: "Billboard reading Play As You Are with a football passed between hands", caption: "Out of home: “Play As You Are.”", wide: true },
        { type: "image", src: "assets/img/nsac/billboard-spanish.jpg", alt: "Spanish-language billboard reading Siempre hay lugar para uno más", caption: "Spanish-language OOH for bicultural families" },
        { type: "image", src: "assets/img/nsac/playgrounds-ecosystem.jpg", alt: "NFL PlayGrounds logo at the center of the league's youth programs", caption: "One platform for every youth program" },
        { type: "image", src: "assets/img/nsac/hometown-huddle-event.jpg", alt: "Illustrated mockup of the Hometown Huddle traveling festival with play, learn and give-back zones", caption: "Hometown Huddle traveling festival", wide: true },
        { type: "image", src: "assets/img/nsac/landing-page.jpg", alt: "NFL PlayGrounds landing page with program finder and bus tour map", caption: "Campaign landing page", wide: true },
      ],
      links: [],
    },

    {
      id: "hdr",
      title: "HDR Corporate Communications",
      client: "HDR · Omaha, NE",
      category: "Video",
      year: "2026",
      cover: "assets/img/hdr/hdr-cover.svg",
      summary: "Video and copy for HDR, the employee-owned engineering and architecture firm, made as a corporate communications intern. I edit video for the HDR Foundation and HDR's social channels, and write HDR's “Meet” employee spotlight series on LinkedIn.",
      role: "Video editor and copywriter",
      stats: [],
      story: [],
      media: [],
      /* LinkedIn posts: { type: "linkedin", urn: "urn:li:ugcPost:…", caption, height }
         The urn is the number in the post's link (…ugcPost-1234567890…). */
      groups: [
        {
          title: "Video",
          text: "Since relaunching in 2024, the Tampa office's employee-led Sustainability Stewards Program has become a model for how local offices build sustainability programs that benefit employees and communities. I edited the full YouTube feature and the social cut, plus short-form culture video for LinkedIn.",
          media: [
            { type: "embed", url: "https://www.youtube.com/watch?v=5NISDiHJ6L0", poster: "https://i.ytimg.com/vi/5NISDiHJ6L0/maxresdefault.jpg", caption: "Our Tampa Sustainability Stewards · YouTube · August 2026", wide: true },
          ],
        },
        {
          columns: 3,
          media: [
            { type: "linkedin", urn: "urn:li:ugcPost:7506348066770382848", caption: "Sustainability Stewards · social cut", height: 500 },
            { type: "linkedin", urn: "urn:li:ugcPost:7488594386457481216", caption: "National Intern Day", height: 500 },
            { type: "linkedin", urn: "urn:li:ugcPost:7488951684451262464", caption: "HDR Foundation: Sarah Bellum's Bakery · I wrote the script for this cut", height: 500 },
          ],
        },
        {
          title: "“Meet” employee spotlights",
          text: "I write the copy for HDR's recurring LinkedIn series introducing the people behind the work: veterans, planners, designers and interns, each told through their path to HDR. Open a post to read the full profile.",
          columns: 3,
          media: [
            { type: "linkedin", urn: "urn:li:ugcPost:7524517980173488129", caption: "Cesar Sandoval · project accountant, Marine veteran", height: 780 },
            { type: "linkedin", urn: "urn:li:ugcPost:7508888050446254080", caption: "Stephano Valentin Miranda · senior transportation planner", height: 780 },
            { type: "linkedin", urn: "urn:li:ugcPost:7503505389725036544", caption: "Andrew Elmer · director of sports & recreation", height: 780 },
            { type: "linkedin", urn: "urn:li:ugcPost:7488991381571584001", caption: "Kore Oyelese · water/wastewater intern", height: 780 },
            { type: "linkedin", urn: "urn:li:ugcPost:7482549067449892865", caption: "Ricardo Escobar · design coordinator", height: 780 },
            { type: "linkedin", urn: "urn:li:ugcPost:7474901142930493440", caption: "Kenneth Simmons · Army/USACE managing director", height: 780 },
            { type: "linkedin", urn: "urn:li:ugcPost:7468690820573933568", caption: "Wendy Nero · director of strategic initiatives", height: 780 },
          ],
        },
      ],
      links: [{ label: "Watch on YouTube", href: "https://www.youtube.com/watch?v=5NISDiHJ6L0" }],
    },

    {
      id: "production-house",
      title: "Production House",
      client: "Video production",
      category: "Video",
      year: "2025",
      cover: "assets/img/video/production-house-cover.jpg",
      summary: "Video features produced with Production House.", // TODO describe what Production House is and what you did
      role: "Videographer and editor",
      stats: [],
      story: [],
      media: [
        { type: "embed", url: "https://youtu.be/HEYdGVqnNCU", poster: "assets/img/video/unlpd-hit-and-run.jpg", caption: "UNLPD: Hit and Run · public safety explainer for the University of Nebraska–Lincoln Police Department", wide: true },
        { type: "embed", url: "https://youtu.be/rFnRGBVKP3M", poster: "assets/img/video/orchesis-dance.jpg", caption: "Orchesis Dance Group", wide: true },
        { type: "embed", url: "https://youtu.be/ApB388O3MeE", poster: "assets/img/video/on-farm-nitrogen.jpg", caption: "On-Farm Nitrogen Management", wide: true },
        { type: "video", hidden: true, src: "assets/video/social-sept-7.mp4", poster: "assets/img/video/social-sept-7.jpg", caption: "Social: Labor Day", vertical: true },
        { type: "video", hidden: true, src: "assets/video/social-oct-7.mp4", poster: "assets/img/video/social-oct-7.jpg", caption: "Social: October", vertical: true },
        { type: "video", hidden: true, src: "assets/video/social-nov-2.mp4", poster: "assets/img/video/social-nov-2.jpg", caption: "Social: November", vertical: true },
        { type: "video", hidden: true, src: "assets/video/ending-reel.mp4", poster: "assets/img/video/ending-reel.jpg", caption: "Logo end-card animation" },
      ],
      links: [],
    },

    {
      id: "delta-tau-delta",
      title: "Delta Tau Delta Merch & Rush",
      client: "Delta Tau Delta, Nebraska",
      category: "Design",
      year: "2025",
      cover: "assets/img/design/mash-cover.jpg",
      summary: "Design work for my fraternity: a redesigned hoodie for MASH Week, our philanthropy week benefiting the VA, plus the Summer Rush 2025 recruitment flyer.",
      role: "Designer",
      stats: [],
      story: [],
      /* Groups split a project page into labeled sections.
         layout: "split" puts one image beside the text.
         tone: "dark" shows images on matching dark panels. */
      groups: [
        {
          title: "MASH Week 2025 hoodie",
          text: "MASH Week is our chapter's philanthropy week, with the money raised going to the VA. The previous MASH design was inappropriate, so I rebuilt it from scratch: distressed ΔΤΔ letters on the front, and on the back a custom helmet character inside “MASH: The Delt Way,” something members could wear proudly while supporting veterans.",
          media: [
            { type: "image", src: "assets/img/design/mash-hoodie-front.jpg", alt: "Black hoodie with a distressed white Delta Tau Delta and M*A*S*H 2025 print on the front", caption: "Front" },
            { type: "image", src: "assets/img/design/mash-hoodie-back.jpg", alt: "Back of a black hoodie printed with MASH The Delt Way and a helmet character", caption: "Back" },
          ],
        },
        {
          title: "Before and after",
          text: "The redesign keeps what the chapter recognizes (the bold MASH letters, the helmet, “The Delt Way”) and replaces the old pin-up figure with a character built for a cause about veterans.",
          tone: "compare",
          media: [
            { type: "image", src: "assets/img/design/mash-original-print.jpg", alt: "The original MASH back print on an old gray crewneck", caption: "Before: the original print" },
            { type: "image", src: "assets/img/design/mash-back-print.jpg", alt: "Redesigned MASH The Delt Way lettering with a kicking helmet character", caption: "After: the 2025 redesign" },
          ],
        },
        {
          tone: "dark",
          media: [
            { type: "image", src: "assets/img/design/mash-front-print.jpg", alt: "Distressed Delta Tau Delta letters over M*A*S*H 2025", caption: "Front print" },
            { type: "image", src: "assets/img/design/mash-character.jpg", alt: "Illustrated army helmet with Delta Tau Delta letters and a kicking leg", caption: "Helmet character" },
          ],
        },
        {
          title: "Summer Rush 2025",
          text: "A recruitment flyer for seven summer rush events, from Omaha and Lincoln to Minneapolis and Chicago, set over a gritty, hand-textured race car illustration.",
          layout: "split",
          media: [
            { type: "image", src: "assets/img/design/dtd-summer-rush-2025.jpg", alt: "Summer Rush 2025 flyer with event dates over an illustrated race car" },
          ],
        },
      ],
      media: [],
      links: [],
    },

    {
      id: "photography-level-2",
      hidden: true, // delete this line to show the project again
      title: "Photography: Four Ways to Appeal",
      client: "Photography coursework",
      category: "Photography",
      year: "",
      cover: "assets/img/photo/class/graphically-appealing2.jpg",
      summary: "A series built around four photographic goals: emotionally appealing, graphically appealing, informative and intimate.",
      role: "Photographer",
      stats: [],
      story: [],
      media: [
        { type: "image", src: "assets/img/photo/class/emotionally-appealing1.jpg", alt: "Friend mid-dive onto a backyard slip and slide", caption: "Emotionally appealing" },
        { type: "image", src: "assets/img/photo/class/emotionally-appealing2.jpg", alt: "Friends wrestling in camo on a grass field", caption: "Emotionally appealing" },
        { type: "image", src: "assets/img/photo/class/graphically-appealing1.jpg", alt: "Still pond under a clear evening sky", caption: "Graphically appealing" },
        { type: "image", src: "assets/img/photo/class/graphically-appealing2.jpg", alt: "Small group on a grassy island with reflections in the water", caption: "Graphically appealing" },
        { type: "image", src: "assets/img/photo/class/informative1.jpg", alt: "Students playing a lawn game outside campus houses", caption: "Informative" },
        { type: "image", src: "assets/img/photo/class/informative2.jpg", alt: "Campsite of tents and people beside a lake", caption: "Informative" },
        { type: "image", src: "assets/img/photo/class/intimate1.jpg", alt: "Friends walking arm in arm away from the camera", caption: "Intimate" },
        { type: "image", src: "assets/img/photo/class/intimate2.jpg", alt: "Smiling portrait with face paint at sunset", caption: "Intimate" },
      ],
      links: [],
    },
  ],

  resume: {
    pdf: "", // TODO add a resume PDF (without your phone number) to assets/docs and put its path here
    education: [
      { title: "Advertising & Public Relations", org: "University of Nebraska–Lincoln", dates: "Expected May 2027" },
    ],
    experience: [
      {
        title: "Corporate Communications Intern", org: "HDR · Omaha, NE", dates: "May 2026–Present",
        points: [
          "Edit and produce video for the HDR Foundation, HDR's employee-funded philanthropy, including the Tampa Sustainability Stewards feature",
          "Create employee culture stories, event coverage and short-form social video; ran camera for an architecture event",
          "Edit podcast audio and cut promotional clips for social channels",
          "Write social posts, web and project stories, internal communications, and video and podcast scripts",
        ],
      },
      {
        title: "Marketing Intern", org: "Sussner Design · Minneapolis, MN", dates: "May–Aug 2025",
        points: [
          "Managed email marketing campaigns and optimized content for engagement",
          "Created written, video and image content for the blog, newsletter, website and social",
          "Helped design customer surveys that led to more targeted marketing",
          "Built a database of marketing assets to speed up campaign work",
        ],
      },
      {
        title: "Server & Host", org: "Blue Sushi Sake Grill · Lincoln, NE", dates: "Nov 2024–Present",
        points: ["Keep service calm and personal for large parties during busy shifts"],
      },
      { title: "Laborer", org: "Franklin Press Inc · Plymouth, MN", dates: "2020–2024", points: [] },
    ],
    honors: ["Scholastic National Art Award", "AAF NSAC 2026, Team 783"],
    skills: ["Video production & editing", "Podcast editing", "Copywriting & scriptwriting", "Corporate communications", "Campaign strategy", "Graphic design", "Photography", "Social media", "Email marketing", "Market research"],
  },
};
