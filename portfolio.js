document.addEventListener('DOMContentLoaded', function() {
    function showContent(section) {
        let content = '';

        switch (section) {
            case 'profile':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Profile Summary</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>Energetic and versatile Computer Science Engineering (CSE) student with a passion for programming, web development, content creation, photography, and editing.<br>
                    Experienced Salesforce Developer Intern adept at developing and implementing solutions.<br>
                    Proven track record as a collaborative team member in initiatives like 'Socio Impact' and 'Talkspiration'.<br>
                    Currently driving community engagement and social services as Co-Convener at Social Innovation.<br>
                    Dedicated to leveraging technical skills and creative talents to drive innovation and make a positive difference.</b></p>
                `;
                break;
            case 'education':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Education</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>B.Tech/B.E.<br>
                    2022-2026<br>
                    SRM University AP<br>
                    Grade - 7.44/10</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Intermediate<br>
                    2020-2022<br>
                    Sri Chaitanya Junior College<br>
                    Andhra Pradesh, English<br>
                    Grade - 79.7%</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>10th Grade<br>
                    Sri Chaitanya E.M High School<br>
                    Andhra Pradesh, English<br>
                    Grade - 100%</b></p>
                `;
                break;
            case 'contact':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Contact Details</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>PHONE: (+91) 7386571807</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>EMAIL: prudhvinaidu_thota@srmap.edu.in</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>LOCATION: Eluru, India</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>LINKEDIN: <a href="https://www.linkedin.com/in/prudhvi-naidu-thota-a2b226257" target="_blank">Prudhvi Naidu Thota</a></b></p>
                `;
                break;
            case 'skills':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Key Skills</b></h2>
                    <ul style="text-align: center; font-size: 1.1em; list-style: none; padding: 0;">
                        <li><b>Programming</b></li>
                        <li><b>Prompt Engineering</b></li>
                        <li><b>Communication Skills</b></li>
                        <li><b>Community Development</b></li>
                        <li><b>Photo Editing</b></li>
                    </ul>
                `;
                break;
            case 'workExperience':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Work Experience</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>Front End Developer<br>
                    Edunet Foundation · Internship<br>
                    Jun 2024 - Present · 2 months<br>
                    Remote</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Campus Ambassador<br>
                    PW (PhysicsWallah) · Internship<br>
                    Apr 2024 - Present · 4 months<br>
                    Remote</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Co-convener at Social Innovation Chapter<br>
                    SRM University, AP · Part-time<br>
                    Nov 2023 - Present · 9 mos<br>
                    Mangalagiri, Andhra Pradesh, India</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Internshala Student Partner<br>
                    Internshala · Part-time<br>
                    May 2024 - Jun 2024 · 2 months<br>
                    Remote</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Student Ambassador<br>
                    LetsUpgrade · Part-time<br>
                    May 2024 - May 2024 · 1 month<br>
                    Remote</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Salesforce Developer<br>
                    Salesforce · Internship<br>
                    Nov 2023 - Jan 2024 · 3 months<br>
                    Remote</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Directorate of Innovation and Entrepreneurship(SRM University AP)<br>
                    Part-time<br>
                    Team member - Socio Impacto<br>
                    Dec 2022 - Mar 2023 · 4 months</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Directorate of Innovation and Entrepreneurship(SRM University AP)<br>
                    Part-time<br>
                    Team member - Talkspiration<br>
                    Mar 2022 - Dec 2022 · 10 months</b></p>
                `;
                break;
            case 'projects':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Projects</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>Atlas: The Collective AI Tools(Web Technology)<br>
                    Developed a comprehensive web application using HTML, CSS, React JS, PHP, and MySQL to provide easy access to top, free AI tools.<br>
                    The purpose of the website is to consolidate various AI tools, such as photo generators, text generators, PPT makers, AI Website builders, Marketing, Audio, Video and photo editors, into a single platform.<br>
                    This project aims to make AI tools more accessible to users, addressing the issue of many AI tools being paid services.<br>
                    The platform allows users to efficiently find and utilize free AI resources in one convenient location.</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Wedding Management System(MYSQL)<br>
                    Developed a comprehensive Wedding Management System using MySQL to streamline the planning and management of wedding events.<br>
                    This system allows users to efficiently handle various aspects of wedding planning, including guest lists, venue bookings, vendor coordination, and budget management.<br>
                    By centralizing all necessary information and providing user-friendly interfaces, the system simplifies the complex process of organizing a wedding, ensuring a seamless and stress-free experience for users.<br>
                    The database-driven approach ensures data integrity and facilitates easy retrieval and updating of information, making it a robust solution for wedding planners and individuals alike.</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Tic Tac Toe Game<br>
                    Developed a Tic Tac Toe game utilizing principles from Design and Analysis of Algorithms.<br>
                    The project involved implementing efficient algorithms to ensure optimal gameplay and strategy.<br>
                    The game features a user-friendly interface, enabling players to engage in a classic Tic Tac Toe match.<br>
                    By leveraging algorithmic design techniques, the game provides an intelligent opponent, enhancing the challenge and overall user experience.<br>
                    This project demonstrates proficiency in algorithm design, problem-solving, and application development.</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Hotel Management System(OOPS with C++)<br>
                    Developed a Hotel Management System using Object-Oriented Programming (OOP) principles in C++.<br>
                    This system streamlines hotel operations by managing room bookings, guest check-ins and check-outs, billing, and staff assignments.<br>
                    The project leverages OOP concepts such as classes, inheritance, and polymorphism to create a modular and maintainable codebase.<br>
                    The system ensures efficient data handling and enhances the overall user experience by providing a comprehensive and easy-to-use interface for hotel management.</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Hangman Game(Data Structures)<br>
                    Developed a Hangman game using Data Structures to enhance skills in data structure implementation and algorithm design.<br>
                    The project features a user-friendly interface where players can guess letters to complete words within a limited number of attempts.<br>
                    By utilizing data structures such as arrays and linked lists, the game efficiently manages word storage, user input validation, and game progress tracking.<br>
                    This project demonstrates proficiency in data structure manipulation, algorithmic problem-solving, and interactive application development.</b></p>
                `;
                break;
            case 'certifications':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Certifications</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>Certificate of Participation in Quiz 1 of Quizbotics Season 2 - by Phoenix(The Robotics Club of LNMIIT)</b><br><br>
                    <b>Certificate of Participation in Quiz 2 of Quizbotics Season 2 - by Phoenix(The Robotics Club of LNMIIT)</b><br><br>
                    <b>Certificate of Participation in Puzzler's Pursuit by Indian Institute of Management</b><br><br>
                    <b>The Cybersecurity Threat Landscape by LinkedIn</b><br><br>
                    <b>Certificate Of Participation In KalilO Tech Quiz Challenge</b><br><br>
                    <b>Online Communication In Digital Age By NPTEL</b><br><br>
                    <b>Introduction To Prompt Engineering For Generative AI by LinkedIn</b><br><br>
                    <b>National Financial Literacy Test By NISM</b><br><br>
                    <b>Time Management Fundamentals By LinkedIn</b><br><br>
                    <b>Employability Skills: Advanced By Wadhwani Foundation</b><br><br>
                    <b>Career Essentials In Software Development By Microsoft And LinkedIn</b><br><br>
                    <b>Programming Foundations: Beyond The Fundamentals by LinkedIn</b><br><br>
                    <b>Microsoft AI Skills Challenge</b><br><br>
                    <b>Programming Foundations: Fundamentals by LinkedIn</b><br><br>
                    <b>Certificate Of Participation In Online Aptitude Assessment Of L'Oreal Sustainability Challenge 2023</b><br><br>
                    <b>E-Business By NPTEL</b><br><br>
                    <b>Introduction To Career Skills In Software Development By LinkedIn</b><br><br>
                    <b>Career Essentials In Generative AI By Microsoft And LinkedIn</b><br><br>
                    <b>Introduction To Artificial Intelligence By LinkedIn</b><br><br>
                    <b>How To Write And Publish Research Article By SRM University AP</b><br><br>
                    <b>Small Business Marketing By LinkedIn</b><br><br>
                    <b>Fundamentals Of Digital Marketing By Google</b><br><br>
                    <b>Art Of Storytelling Workshop By SRM University AP</b><br><br>
                    <b>App Design And Development Workshop By SRM University AP</b><br><br>
                    <b>Communicating With Confidence By LinkedIn</b><br><br>
                    <b>Communicating With Emotional Intelligence By LinkedIn</b><br><br>
                    <b>Promoting Research Excellence Academics By Elsevier</b><br><br>
                    <b>Hands On Blockchain Workshop By SRM University AP</b><br><br>
                    <b>3D Printing Workshop By SRM University AP</b></p>
                `;
                break;
            case 'extraCurricular':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Extra Curricular Activities</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>Martial Arts Training (Karate, Weapon training, Self Defence)<br>
                    Dedicated nine years to the rigorous practice and training of Karate, Weapon training, Seld Defence, achieving the prestigious rank of Black Belt (Dan1). Actively participated in local, regional, and national level competitions, earning numerous certificates and medals for exemplary performance. Developed discipline, focus, and physical fitness through regular training sessions, enhancing overall well-being and personal growth.</b></p>
                `;
                break;
            case 'awards':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Awards and Honors</b></h2>
                    <div style="text-align: center;">
                        <img src="1715777899201.jpg" alt="Award Image" style="max-width: 100%; height: auto;">
                    </div>
                    <p style="text-align: center; font-size: 1.1em;"><b>🎉 Grateful and Honored! 🎉<br>
                    A heartfelt thank you to SRM University AP for recognizing my efforts with the Certificate in Leadership in Community Engagement and Social Responsibility.<br>
                    As a student passionate about driving positive change, this recognition truly means a lot to me.<br>
                    Leading initiatives that address social issues and promote sustainable solutions has been an incredibly rewarding journey.<br>
                    It has not only enhanced my leadership skills but also deepened my commitment to community service and collective action.<br>
                    A special thanks to my mentors, team members, and everyone who supported me throughout this journey.<br>
                    I am excited to continue working towards making a meaningful impact in our community.<br>
                    Here’s to more opportunities for growth and service!<br>
                    #Leadership #CommunityEngagement #SocialResponsibility #SRMUniversityAP #MakingADifference</b></p>
                `;
                break;
        }

        // Display the content in the 'content' div
        document.getElementById('content').innerHTML = content;
    }

    window.showContent = showContent;
});
