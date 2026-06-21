export type Review = {
  name: string;
  rating: number;
  content: string;
};

export type ClientMeta = {
  role: string;
  image: string;
  linkedin?: string;
};

export const reviews: Review[] = [
  {
    name: 'Darren Youngleson',
    rating: 5,
    content:
      'Marc is an absolute winner. No limits to his depth of expertise, unwavering customer service and quality of his product and creativity. Highly recommend working with Marc.',
  },
  {
    name: 'Royi Mazor',
    rating: 5,
    content:
      'Very professional wonderful customer service, thank you Marc for all the work you put in, will definitely be using for future projects!',
  },
  {
    name: 'Omar Turner',
    rating: 5,
    content:
      "Marc was able to execute the vision perfectly! He's big on communication and easy to speak with. Marc dedicates his time to the client, ensuring the client is completely satisfied at each step of the process. I highly recommend Marc's services to anyone who needs a web developer who can execute on a vision and provide a professional finished product!",
  },
  {
    name: 'Bradley Thompson',
    rating: 5,
    content:
      "Marc is an incredible ally. We found him to be highly responsive with quick solutions as he built our landing page. This was a high-stakes project for us that did not lend itself to a template solution. Marc is that rare creative that excels at design AND wordsmithing. He's the real deal, a true professional.",
  },
  {
    name: 'Jayden Youngleson',
    rating: 5,
    content:
      'It has been an absolute pleasure working alongside Marc. His deep knowledge, strong work ethic, and commitment to delivering results have made a significant impact on our team. Marc consistently went above and beyond.',
  },
  {
    name: 'Yaron Peretz',
    rating: 5,
    content:
      'Marc was absolutely phenomenal in building the landing page for my business. His care for client satisfaction is unparalleled. He was timely, and took great attention to learning my business & my brand thoroughly.',
  },
  {
    name: 'Guneet K. Singh',
    rating: 5,
    content:
      "My team and I loved working with Marc!! He took the time to understand our goals with our website and adapt as needed. His professionalism, patience and openness to our feedback at every stage made the entire process a seamless collaboration.",
  },
  {
    name: 'Ezra Rubinson',
    rating: 5,
    content: 'Fantastic work Marc, thank you for building my dream website!!',
  },
  {
    name: 'Elior Daniely',
    rating: 5,
    content:
      'Marc did an amazing job on my website! He was professional, responsive, and delivered a design that exceeded my expectations. Highly recommend!',
  },
  {
    name: 'Benny Even Ari',
    rating: 5,
    content:
      'Marc demonstrated exceptional skill in creating a sophisticated platform that perfectly aligns with our investment and real estate needs.',
  },
  {
    name: 'Hilla Dayan',
    rating: 5,
    content:
      'Working with him was professional, precise, and enjoyable from the very first moment. He built a website that exceeded my expectations and has a great eye for design.',
  },
  {
    name: 'Bar Levy',
    rating: 5,
    content:
      'Marc did a great job studying and elaborating about the various solutions offered nowadays. He initiated and led UX & UI tasks and provided valuable insights during the entire process.',
  },
  {
    name: 'Stallone Sweeney',
    rating: 5,
    content:
      'Loved working with Marc. He listened carefully to my ideas and needs, ensuring that the final website perfectly reflected my vision. His attention to detail is incredible.',
  },
  {
    name: 'Lior Shimon',
    rating: 5,
    content: 'Marc built my dream website, he is great at what he does and a great guy.',
  },
  {
    name: 'Yosi Lugassy',
    rating: 5,
    content:
      'Marc built me the website I dreamed of. He was patient, timely, and professional. Thank you and good luck.',
  },
  {
    name: 'Shalom Landman',
    rating: 5,
    content:
      "Marc designed and created my website, and I couldn't be happier with the result! The site looks absolutely amazing, runs smoothly, and perfectly captures what I was looking for.",
  },
  {
    name: 'Julia Friedman',
    rating: 5,
    content:
      'Marc is super helpful, very knowledgeable and an expert in field. I highly recommend him.',
  },
];

export const clientInfo: Record<string, ClientMeta> = {
  'Omar Turner': {
    role: 'CEO, Binns Media Group · New York',
    image: '/images/clients/NKjkUC9.jpeg',
    linkedin: 'https://www.linkedin.com/in/omar-turner-92b188130',
  },
  'Gabriel Sher': {
    role: 'CEO, Untapped Africa',
    image: 'https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073',
    linkedin: 'https://www.linkedin.com/in/gabriel-sher-3503a4202/',
  },
  'Darren Youngleson': {
    role: 'Serial Entrepreneur',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png?updatedAt=1754023286922',
    linkedin: 'https://www.linkedin.com/in/darren-youngleson-27a17310/',
  },
  'Royi Mazor': {
    role: 'Owner, A Secure Annapolis Locksmith',
    image: '',
  },
  'Bradley Thompson': {
    role: 'Marketing Director',
    image: 'https://ik.imagekit.io/qcvroy8xpd/1517778443427%20(1).jpeg?updatedAt=1749336939344',
    linkedin: 'https://www.linkedin.com/in/bradleethompson/',
  },
  'Bar Levy': {
    role: 'Co-Founder & PM at Sumit-AI',
    image: '/images/clients/ja6oGvJ.jpg',
    linkedin: 'https://www.linkedin.com/in/bar-levy',
  },
  'Ezra Rubinson': {
    role: 'Digital Marketing Agency Owner · Boston',
    image: '/images/clients/rkHCwAv.jpeg',
    linkedin: 'https://www.linkedin.com/in/ezra-rubinson/',
  },
  'Yaron Peretz': {
    role: 'CEO, Tech Startup',
    image: '/images/clients/cP2GDPD.jpg',
    linkedin: 'https://www.linkedin.com/in/yaron-peretz-ghostwriter',
  },
  'Stallone Sweeney': {
    role: 'Attorney · Founder of LegalContent',
    image: 'https://ik.imagekit.io/qcvroy8xpd/1689101716225.jpeg?updatedAt=1749337009395',
    linkedin: 'https://www.linkedin.com/in/stallone-sweeney-39301b198/',
  },
  'Lior Shimon': {
    role: 'Algorithm Engineer · AI',
    image: '/images/clients/vYZWYcu.jpeg',
    linkedin: 'https://www.linkedin.com/in/liorshimon',
  },
  'Yosi Lugassy': {
    role: 'Restaurant Owner',
    image: '',
  },
  'Elior Daniely': {
    role: 'Real Estate Entrepreneur',
    image: '/images/clients/EDJ9b8P.jpeg',
    linkedin: 'https://www.linkedin.com/in/elior-daniely-59b554237',
  },
  'Shalom Landman': {
    role: 'Real Estate Developer · Florida',
    image: '/images/clients/N6MTFbh.jpeg',
    linkedin: 'https://www.linkedin.com/in/shalom-landman-74a492220',
  },
  'Julia Friedman': {
    role: 'Holistic Wellness Coach',
    image: '/images/clients/wCpW4uW.jpg',
    linkedin: 'https://www.linkedin.com/in/julia-friedman-9b374b53',
  },
  'Hilla Dayan': {
    role: 'Founder of Wellness',
    image: '',
  },
  'Benny Even Ari': {
    role: 'Investment Banker · Real Estate',
    image: '/images/clients/s3S0EXG.jpg',
    linkedin: 'https://www.linkedin.com/in/benny-even-ari',
  },
  'Jayden Youngleson': {
    role: 'CEO of Tanj Capital',
    image:
      'https://res.cloudinary.com/dadgglcaq/image/upload/v1749040855/Jayden_1_yovgde.png',
  },
  'Guneet K. Singh': {
    role: 'TV Producer · Binns Media Group',
    image:
      'https://res.cloudinary.com/dadgglcaq/image/upload/v1749337731/1732338426448_1_veqlnh.jpg',
    linkedin: 'https://www.linkedin.com/company/binns-media-group/',
  },
};
