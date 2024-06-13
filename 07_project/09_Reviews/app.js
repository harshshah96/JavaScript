// local reviews data
const reviews = [
    {
      id: 1,
      name: 'John Doe',
      job: 'Software Engineer',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      text: "John is a skilled software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
    },
    {
      id: 2,
      name: 'Jane Smith',
      job: 'Graphic Designer',
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
      text: 'Jane has a keen eye for design and a deep understanding of color theory. She excels in creating visually appealing and user-friendly designs.',
    },
    {
      id: 3,
      name: 'Sam Brown',
      job: 'Data Scientist',
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
      text: 'Sam is a data scientist with expertise in machine learning and statistical analysis. He enjoys turning raw data into actionable insights.',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      job: 'Product Manager',
      img: 'https://randomuser.me/api/portraits/women/4.jpg',
      text: 'Alice is a product manager with a strong background in tech and a knack for bringing cross-functional teams together to deliver great products.',
    },
    {
      id: 5,
      name: 'Michael White',
      job: 'UX/UI Designer',
      img: 'https://randomuser.me/api/portraits/men/5.jpg',
      text: 'Michael specializes in creating intuitive and engaging user experiences. He believes that good design is both beautiful and functional.',
    },
    {
      id: 6,
      name: 'Jessica Williams',
      job: 'Marketing Specialist',
      img: 'https://randomuser.me/api/portraits/women/6.jpg',
      text: 'Jessica is a marketing specialist with a talent for creating compelling campaigns that drive customer engagement and sales.',
    },
    {
      id: 7,
      name: 'David Harris',
      job: 'Cybersecurity Analyst',
      img: 'https://randomuser.me/api/portraits/men/7.jpg',
      text: 'David is a cybersecurity analyst who is dedicated to protecting organizations from cyber threats and ensuring data integrity.',
    },
    {
      id: 8,
      name: 'Emily Clark',
      job: 'HR Manager',
      img: 'https://randomuser.me/api/portraits/women/8.jpg',
      text: 'Emily is an HR manager who excels in employee relations, talent acquisition, and fostering a positive workplace culture.',
    },
    {
      id: 9,
      name: 'Chris Lee',
      job: 'Mobile Developer',
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      text: 'Chris is a mobile developer with a passion for building seamless and responsive mobile applications for iOS and Android platforms.',
    },
    {
      id: 10,
      name: 'Sarah Martinez',
      job: 'Content Writer',
      img: 'https://randomuser.me/api/portraits/women/10.jpg',
      text: 'Sarah is a content writer who creates engaging and informative content across various platforms, specializing in tech and lifestyle topics.',
    },
    {
      id: 11,
      name: 'Brian Wilson',
      job: 'DevOps Engineer',
      img: 'https://randomuser.me/api/portraits/men/11.jpg',
      text: 'Brian is a DevOps engineer with a strong background in system administration and automation, ensuring smooth and efficient software deployments.',
    },
    {
      id: 12,
      name: 'Olivia Thomas',
      job: 'Business Analyst',
      img: 'https://randomuser.me/api/portraits/women/12.jpg',
      text: 'Olivia is a business analyst who excels in bridging the gap between business needs and technical solutions, ensuring project success.',
    },
    {
      id: 13,
      name: 'Daniel Anderson',
      job: 'Backend Developer',
      img: 'https://randomuser.me/api/portraits/men/13.jpg',
      text: 'Daniel is a backend developer who specializes in creating robust and scalable server-side applications and APIs.',
    },
    {
      id: 14,
      name: 'Sophia King',
      job: 'Project Manager',
      img: 'https://randomuser.me/api/portraits/women/14.jpg',
      text: 'Sophia is a project manager with a track record of delivering projects on time and within budget, while maintaining high quality standards.',
    },
    {
      id: 15,
      name: 'James Wright',
      job: 'Systems Analyst',
      img: 'https://randomuser.me/api/portraits/men/15.jpg',
      text: 'James is a systems analyst who excels in understanding complex systems and improving their efficiency and effectiveness.',
    },
    {
      id: 16,
      name: 'Ava Martinez',
      job: 'SEO Specialist',
      img: 'https://randomuser.me/api/portraits/women/16.jpg',
      text: 'Ava is an SEO specialist who helps businesses increase their online visibility and drive organic traffic through strategic optimization.',
    },
    {
      id: 17,
      name: 'Lucas Taylor',
      job: 'Network Engineer',
      img: 'https://randomuser.me/api/portraits/men/17.jpg',
      text: 'Lucas is a network engineer with expertise in designing, implementing, and maintaining network infrastructures for organizations.',
    },
    {
      id: 18,
      name: 'Mia Robinson',
      job: 'Social Media Manager',
      img: 'https://randomuser.me/api/portraits/women/18.jpg',
      text: 'Mia is a social media manager who creates and curates content that engages audiences and builds brand presence on social media platforms.',
    },
    {
      id: 19,
      name: 'Ethan Walker',
      job: 'Full Stack Developer',
      img: 'https://randomuser.me/api/portraits/men/19.jpg',
      text: 'Ethan is a full stack developer who is proficient in both front-end and back-end technologies, delivering complete web solutions.',
    },
    {
      id: 20,
      name: 'Isabella Harris',
      job: 'Technical Writer',
      img: 'https://randomuser.me/api/portraits/women/20.jpg',
      text: 'Isabella is a technical writer who excels in translating complex technical concepts into clear and concise documentation.',
    },
    {
      id: 21,
      name: 'Henry Allen',
      job: 'Quality Assurance Engineer',
      img: 'https://randomuser.me/api/portraits/men/21.jpg',
      text: 'Henry is a quality assurance engineer dedicated to ensuring the highest level of software quality through rigorous testing and validation.',
    },
    {
      id: 22,
      name: 'Lily Young',
      job: 'Customer Support Specialist',
      img: 'https://randomuser.me/api/portraits/women/22.jpg',
      text: 'Lily is a customer support specialist who excels in resolving customer issues promptly and ensuring high levels of customer satisfaction.',
    },
    {
      id: 23,
      name: 'Alexander Scott',
      job: 'IT Support Technician',
      img: 'https://randomuser.me/api/portraits/men/23.jpg',
      text: 'Alexander is an IT support technician with a knack for troubleshooting and resolving technical issues quickly and efficiently.',
    },
    {
      id: 24,
      name: 'Chloe Adams',
      job: 'Digital Marketer',
      img: 'https://randomuser.me/api/portraits/women/24.jpg',
      text: 'Chloe is a digital marketer with expertise in PPC, SEO, and content marketing, helping businesses grow their online presence.',
    },
    {
      id: 25,
      name: 'Matthew Nelson',
      job: 'Database Administrator',
      img: 'https://randomuser.me/api/portraits/men/25.jpg',
      text: 'Matthew is a database administrator who ensures the integrity and availability of data through careful management and optimization.',
    },
    {
      id: 26,
      name: 'Amelia Campbell',
      job: 'Event Coordinator',
      img: 'https://randomuser.me/api/portraits/women/26.jpg',
      text: 'Amelia is an event coordinator who excels in planning and executing successful events that meet client objectives and exceed expectations.',
    },
    {
      id: 27,
      name: 'Benjamin Clark',
      job: 'Sales Manager',
      img: 'https://randomuser.me/api/portraits/men/27.jpg',
      text: 'Benjamin is a sales manager with a talent for building strong client relationships and driving sales growth through strategic planning.',
    },
    {
      id: 28,
      name: 'Zoe Lewis',
      job: 'Recruitment Specialist',
      img: 'https://randomuser.me/api/portraits/women/28.jpg',
      text: 'Zoe is a recruitment specialist who excels in identifying and attracting top talent, ensuring the best fit for both candidates and organizations.',
    },
    {
      id: 29,
      name: 'Jack Lee',
      job: 'Accountant',
      img: 'https://randomuser.me/api/portraits/men/29.jpg',
      text: 'Jack is an accountant with a meticulous eye for detail, ensuring accurate financial reporting and compliance with regulations.',
    }];
  

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


// set starting item;

let currentItem = 0;


// load initial item

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(Person){
    const item = reviews[Person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person 

nextbtn.addEventListener('click', function(){
    if(currentItem==reviews.length-1) currentItem = 0;
    else currentItem++;
    showPerson(currentItem);
})

// show previous person 
prevBtn.addEventListener('click', function(){
    if(currentItem==0) currentItem = reviews.length - 1;
    else currentItem--;
    showPerson(currentItem);
})

// show random person
randomBtn.addEventListener('click', function(){
    const random = Math.floor(Math.random()*reviews.length);
    currentItem=random;
    console.log(random)
    showPerson(currentItem);
})





