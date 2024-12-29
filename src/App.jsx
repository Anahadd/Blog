import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'
import gradImg from './assets/grad.jpg'
import waterloo from './assets/waterloo.jpg'
import winterBreak from './assets/winter-break.jpg'
import montreal1 from './assets/IMG_0663.jpg'
import montreal2 from './assets/IMG_0772.jpeg'
import montreal3 from './assets/IMG_5933.jpg'
import montreal4 from './assets/IMG_5966.jpg'
import montreal5 from './assets/IMG_0721.jpeg'
import montreal6 from './assets/IMG_0754.jpg'
import montreal7 from './assets/IMG_0757.jpeg'
import montreal8 from './assets/IMG_5944.jpg'
import uni3 from './assets/meme.jpg';
import uni1 from './assets/a.jpg';
import uni2 from './assets/b.jpg';
import uni4 from './assets/c.jpg';



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #000000;
    color: #ffffff;
  }
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  border-bottom: 1px solid #262626;
`

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: normal;
  margin: 0;
`

const HeaderLink = styled.a`
  color: #737373;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
`

const BlogTitle = styled.h1`
  font-size: 3.75rem;
  font-weight: bold;
  margin-bottom: 4rem;
  color: #4ade80;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`

const BlogSubtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
`

const Card = styled(motion.div)`
  background-color: #000000;
  border: 1px solid #262626;
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-0.25rem);
      border-color: #262626;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                  0 8px 10px -6px rgba(0, 0, 0, 0.1);
    }
  }
`

const CardImage = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: #1a1a1a;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @media (hover: hover) and (pointer: fine) {
    ${Card}:hover & {
      transform: scale(1.1);
    }
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s;

  @media (hover: hover) and (pointer: fine) {
    ${Card}:hover & {
      opacity: 1;
    }
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: normal;
  margin: 0 0 0.5rem 0;
  color: #ffffff;
  transition: color 0.3s;

  @media (hover: hover) and (pointer: fine) {
    ${Card}:hover & {
      color: #4ade80;
    }
  }
`

const CardDescription = styled.p`
  color: #737373;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const CardFooter = styled.div`
  padding: 0 1.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  background-color: #262626;
  color: #a3a3a3;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.3s;

  @media (hover: hover) and (pointer: fine) {
    ${Card}:hover & {
      background-color: rgba(74, 222, 128, 0.1);
      color: #4ade80;
    }
  }
`

const CardDate = styled.span`
  font-size: 0.875rem;
  color: #525252;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;

  svg {
    transition: transform 0.3s;
  }

  @media (hover: hover) and (pointer: fine) {
    ${Card}:hover & {
      color: #4ade80;

      svg {
        transform: translateX(0.25rem);
      }
    }
  }
`

const Footer = styled.footer`
  border-top: 1px solid #262626;
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #737373;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const FooterLink = styled.a`
  color: #737373;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`

const BackLink = styled(Link)`
  color: #4ade80;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`

const BlogPostContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const BlogPostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const BlogPostContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #111111;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  p {
    color: #a3a3a3;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    color: #a3a3a3;

    li {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
`

const BlogSection = styled.section`
  margin-bottom: 2rem;
`

const BlogH2 = styled.h2`
  font-size: 2rem;
  color: #4ade80;
  margin: 2.5rem 0 1.5rem;
  border-bottom: 2px solid #4ade80;
  padding-bottom: 0.5rem;
`

const BlogH3 = styled.h3`
  font-size: 1.6rem;
  color: #ffffff;
  margin: 2rem 0 1rem;
  background-color: rgba(74, 222, 128, 0.1);
  padding: 0.5rem;
  border-radius: 0.25rem;
`

const BlogParagraph = styled.p`
  color: #a3a3a3;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`

const BlogList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 1rem 0 1.5rem;
  color: #a3a3a3;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`

const GradeTable = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 0.5rem;

  p {
    margin: 0.5rem 0;
    color: #a3a3a3;
  }
`

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
`

const CourseDescription = styled.div`
  background-color: #1a1a1a;
  border-left: 4px solid #4ade80;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0 0.25rem 0.25rem 0;
`

const HighlightBox = styled.div`
  background-color: rgba(74, 222, 128, 0.1);
  border: 1px solid #4ade80;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1.5rem 0;
`

const blogPosts = [
  {
      id: 1,
      title: "Winter Break",
      description: "OG Fortnite. Sleep. Chill. Rediscovering the simple joys of gaming and relaxation during the much-needed winter break.",
      image: winterBreak,
      date: "Last Updated: Dec 28, 2023",
      tags: ["Having", "Fun"],
      slug: "blog3",
      content: {
        intro: "OG Fortnite. Sleep. Chill. A much-needed break from the academic grind, returning to the simple joys of gaming and relaxation.",
        fullContent: true,
        body: `
          Another day, another victory for the OG taking down the sweats. This winter break was a much-needed rest. I watched a ton of shows (shoutout to *Suits*), played a bunch of games, and stayed up ridiculously late. In fact, as I’m writing this, it’s 3 AM. It’s pretty wild because I feel like the past four months didn’t even happen now that I’m chilling during the break. That’s both good and bad. Good because I get to recharge, bad because I forgot everything I learned—just kidding. 😉
  

          PRODUCTIVE STUFF

          I spent most of this break working on productive stuff like making my personal website, creating this blog, and updating my LinkedIn/resume in preparation for 1B, which is when the job search starts. I’m making my life easier by doing all of this now, and I highly recommend this strategy to any Stream 8 student at Waterloo. I’ve also been grinding LeetCode to prepare for job interviews, and fingers crossed I actually land something considering today’s job market. 🤞
  

          SKATING

          In between all the hustle, I did some skating too—even though I’m still learning how to skate. Gotta say, falling is part of the charm, right? Oh, and I also bought a PS5! It’s been awesome catching up on all the games I missed. I’m hoping GTA 6 comes out sooner rather than later so I can give it a test run on my PS5 before co-op.
  

          FINAL WORDS

          I’m feeling much better prepared for 1B than I was for 1A. Let’s just hope I pass. Stay tuned for the next set of blogs because I’ve kept this one short—but you never know, the fun stuff is just getting started!
        `
      }
  },
  {
    id: 2,
    title: "First Semester of University",
    description: "Here's what to expect in Waterloo Computer Engineering 1A - the raw, unfiltered truth. From intense academics to newfound independence, this is the real first-year experience.",
    image: waterloo,
    date: "Last Updated: Dec 28, 2023",
    tags: ["Uni", "Social Life"],
    slug: "blog2",
    content: {
      intro: "Here's what to expect in Waterloo Computer Engineering 1A - the unfiltered truth. From intense coursework to newfound independence, this is the real first-year experience.",
      fullContent: true,
      body: `
        Now 1A is finally done, and I can give you tips and tricks. To be frank, I’m still learning how to adapt to university life since it’s only been four months, and 1A is usually one of the lighter semesters. Here’s a breakdown of the courses I took:

        ENGINEERING PROFESSION (ECE 190)
        This course was straightforward. We had a cheat sheet for both the midterm and final. Honestly, just write down everything from the slides, and you’ll be fine. I recommend attending lectures and taking notes since it’s easier than cramming the cheat sheet the night before (which I did, and it took me five hours to write everything—my hand cramped like crazy). Also, make sure to put your name on the attendance photos for deliverables.

        PROJECT STUDIO (ECE 198)
        This is a project course where you use two STM32 boards to create something. Tip: For meetings, copy-paste the rubric and follow each part meticulously. The course depends heavily on your TA—some are very nice, while others can be challenging. Start your project early; my group crammed everything three days before the deadline.

        ENGLISH (ENGL 192)
        This course can either be a communication or English credit. I got an English credit and wasn’t thrilled. Our focus was on AI, and assignments included presentations, memos, and reading circles. There were no exams, but the workload heavily depends on your professor.

        CALCULUS 1 (MATH 117)
        A standard calculus class. The first half is a review, and the second half focuses on integration methods. Do the problem sets and old exams from EngSoc. The final was slightly harder than the midterm but manageable.

        FUNDAMENTALS OF PROGRAMMING (ECE 150)
        If you’ve programmed before, this course will feel like a review. Otherwise, practice algorithms and start leetcoding. The midterm had a 35% fail rate, but the final was easier. Attend lectures or watch Prof. Douglas Harder’s YouTube series.

        LINEAR ALGEBRA (MATH 115)
        This course has been simplified over the years. While theory-heavy, you don’t need to know much abstract theory to do well. Use the textbook and study the basics.

        PHYSICS (ECE 105)
        This was the toughest course. My professor wasn’t great, so I attended lectures from another cohort. For the midterm, spam old exams—they’re often reused. The final, however, was entirely new, which made it challenging. You need at least 50% on the final to pass the course, even if your overall mark is above 50%.

        That’s my general overview of 1A. It was a chill term overall. Make friends, go out, and join a design team. Everything will work out in the end.

        [UNI_IMAGES]
      `
    }
  },
  {
    id: 3,
    title: "The Journey of Grade 12",
    description: "The year that everyone locks in. The highs, the lows, everything in between. From university applications to final exams, this is the story of the most pivotal year.",
    image: gradImg,
    date: "Last Updated: Dec 28, 2023",
    tags: ["School", "Grades"],
    slug: "blog1",
    content: {
      intro: "The year that everyone locks in. The highs, the lows, and everything in between. A personal reflection on the most transformative year of high school.",
      fullContent: true,
      body: `
        Alright. It's finally the big leagues, the peak year of high school known as the infamous senior year. Honestly, this year came by faster than I expected; it genuinely felt like I was in Grade 9 just a couple of days ago. The big subject of this year is university applications. Almost everyone begins setting up their account on OUAC at the start of the year and *starting* their applications as soon as they open (definitely didn't follow this one). Here's some advice from someone who thinks they've played the admissions game quite well (except for CS at Waterloo 😭). This advice is tailored specifically for Waterloo but can also be applied to UofT.

        UNIVERSITY APPLICATIONS
        Now, I won't lie to you. Grades matter—but only to a certain threshold, at least for the schools I applied to, which were primarily Waterloo and UofT. I also applied to some backup schools. Your grades don't necessarily have to be stellar for these schools, but you do need strong extracurriculars. Having a 90+ average is good enough depending on the program you're applying to (obviously, Tier 1 programs might require higher averages). Waterloo, in particular, calculates this through a combination of GPA - Adjustment Factor + AIF/Video. They're looking for well-rounded applicants who have not just good grades but also experience in clubs, work, or hackathons.

        Personally, I had a 98.3% average for engineering and a 98.6% average for CS. However, I didn't have much experience in hackathons or competitions, which is why I believe balance is more important than sky-high grades. I know friends with much lower averages (e.g., low 90s) but with impressive extracurriculars who got into Waterloo. For hackathons, I recommend attending hackathons like Hack the North, Hack the Valley, and Hack Western (just look at https://mlh.io/ for a list of hackathons).

        Here's a general list of extracurriculars you should consider in high school:
        - Co-lead/lead a club
        - Attend hackathons
        - Participate in competitions (e.g., DECA, HOSA, CSMC, etc.)
        - Volunteer with non-profits
        - Write research papers
        - Be competitive in a sport

        These activities help boost your AIF score, which is out of 5 (last I checked). There's also a video interview component, but during our admissions round, Dr. William Bishop, the head of admissions, mentioned that they didn't have time to review interviews for early admissions. My admission was based solely on grades and AIF. Admissions ultimately come down to character, fit, and employability. Do your research about the school; I believe Waterloo has updated the AIF process, which might make it slightly tougher.

        I got in during the early round, so they didn't see my semester 2 grades. This saved me since my English mark was slightly lower than in Grade 11, and I started slacking off significantly.

        BALANCING ACADEMICS AND SOCIAL LIFE IN GRADE 12
        In Grade 12, academics are on everyone's mind since your marks matter. Universities typically see your final grades for semester 1 and midterm grades for semester 2. Academically, I recommend attending class (I skipped about 30% of classes in Grade 12—insane, I know), keeping up with homework, and studying for tests religiously. High school exams are MUCH easier than university midterms/exams and often reuse test or homework questions.

        Here's my admitted average for clarity. Keep in mind I attended an AP school in Brampton, which had an average adjusment factor (probably going to be higher now considering how our grades are looking). This includes my Grade 11 marks since I got in during the early round and they didn't have access to my semester 2 grades:
        - Grade 11 Physics: 96%
        - Grade 12 AP Chemistry: 100%
        - Grade 12 AP Calculus and Vectors: 100%
        - Grade 12 AP Advanced Functions: 96%
        - Grade 12 English: 98%
        - Grade 11 Accounting: 100%

        This average was for engineering. I highly recommend taking bird courses (e.g. Accounting, Business, etc.) as they're easier than regular courses and can help boost your average. Universities don't care about your bird courses, so it's a good way to boost your average without much effort.

        Tips for getting high grades:
        1. Stay consistent with studying and assignments
        2. Ask teachers for feedback to improve
        3. Review past tests and exams for patterns
        4. Use reliable study resources and form study groups

        Honestly, social life was a bit dim during the first semester of Grade 12. After semester 2 midterms, honestly, no one showed up to class. I spent most days playing basketball or soccer with friends. At one point, I thought I might get kicked out because of my attendance and had to confirm with my principal that skipping this much wouldn't be an issue. Despite everything, the latter part of Grade 12 is all about fun. It's heartwarming to see everyone, despite their differences, come together to enjoy the last few months of high school.

        SUMMER BREAK
        This summer was the most chill, anxious, and fun summer I've had. It was chill because we visited so many cool places, anxious because I didn't know what to expect from university, and fun because I went on a grad trip to Montreal with the boys. Here are some highlights:

        [MONTREAL_IMAGES]

        The journey of Grade 12 is a rollercoaster, but it's one you'll never forget. I wish you all the best of luck!
      `
    }
  }
]

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(post => post.slug === slug)

  if (!post) {
    return (
      <BlogPostContainer>
        <BackLink to="/">← Back to Blog</BackLink>
        <BlogPostTitle>Blog post not found</BlogPostTitle>
      </BlogPostContainer>
    )
  }

  const sections = post.content.body?.split('\n\n').filter(Boolean) || []

  return (
    <BlogPostContainer>
      <BlogPostContent>
        <BackLink to="/">← Back to Blog</BackLink>
        <BlogPostTitle>{post.title}</BlogPostTitle>
        <BlogParagraph>{post.content.intro}</BlogParagraph>

        {post.content.fullContent ? (
          sections.map((section, index) => {
            if (section.trim().startsWith('UNIVERSITY APPLICATIONS') ||
                section.trim().startsWith('BALANCING ACADEMICS') ||
                section.trim().startsWith('SUMMER BREAK') ||
                section.trim().startsWith('PRODUCTIVE STUFF') ||
                section.trim().startsWith('SKATING') ||
                section.trim().startsWith('FINAL WORDS') ||
                section.trim().startsWith('That\'s my general overview of 1A')) {
              return (
                <BlogSection key={index}>
                  <BlogH2>{section.split('\n')[0]}</BlogH2>
                  <BlogParagraph>{section.split('\n').slice(1).join('\n')}</BlogParagraph>
                </BlogSection>
              )
            }

            if (section.includes('Tips for getting high grades:')) {
              return (
                <BlogSection key={index}>
                  <BlogH3>Tips for getting high grades:</BlogH3>
                  <BlogList>
                    {section.split('\n').slice(1).map((tip, i) => (
                      <li key={i}>{tip.replace(/^\d\.\s/, '')}</li>
                    ))}
                  </BlogList>
                </BlogSection>
              )
            }

            if (section.includes("Here's my admitted average")) {
              return (
                <GradeTable key={index}>
                  {section.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </GradeTable>
              )
            }

            if (section.startsWith("Here's a general list")) {
              return (
                <BlogSection key={index}>
                  <BlogParagraph>{section.split('\n')[0]}</BlogParagraph>
                  <BlogList>
                    {section.split('\n').slice(1).map((item, i) => (
                      <li key={i}>{item.replace(/^-\s/, '')}</li>
                    ))}
                  </BlogList>
                </BlogSection>
              )
            }

            if (section.includes('[MONTREAL_IMAGES]')) {
              return (
                <BlogSection key={index}>
                  <BlogParagraph>{section.split('[MONTREAL_IMAGES]')[0]}</BlogParagraph>
                  <ImageGallery>
                    <GalleryImage src={montreal1} alt="Montreal trip highlight 1" />
                    <GalleryImage src={montreal2} alt="Montreal trip highlight 2" />
                    <GalleryImage src={montreal3} alt="Montreal trip highlight 3" />
                    <GalleryImage src={montreal4} alt="Montreal trip highlight 4" />
                    <GalleryImage src={montreal5} alt="Montreal trip highlight 5" />
                    <GalleryImage src={montreal6} alt="Montreal trip highlight 6" />
                    <GalleryImage src={montreal7} alt="Montreal trip highlight 7" />
                    <GalleryImage src={montreal8} alt="Montreal trip highlight 8" />
                  </ImageGallery>
                  <BlogParagraph>{section.split('[MONTREAL_IMAGES]')[1]}</BlogParagraph>
                </BlogSection>
              )
            }

            if (section.includes('[UNI_IMAGES]')) {
              return (
                <BlogSection key={index}>
                  <BlogParagraph>{section.split('[UNI_IMAGES]')[0]}</BlogParagraph>
                  <ImageGallery>
                    <GalleryImage src={uni1} alt="University experience 1" />
                    <GalleryImage src={uni2} alt="University experience 2" />
                    <GalleryImage src={uni3} alt="University experience 3" />
                    <GalleryImage src={uni4} alt="University experience 4" />
                  </ImageGallery>
                  <BlogParagraph>{section.split('[UNI_IMAGES]')[1]}</BlogParagraph>
                </BlogSection>
              )
            }
            if (section.trim().startsWith('ENGINEERING PROFESSION') ||
                section.trim().startsWith('PROJECT STUDIO') ||
                section.trim().startsWith('ENGLISH') ||
                section.trim().startsWith('CALCULUS 1') ||
                section.trim().startsWith('FUNDAMENTALS OF PROGRAMMING') ||
                section.trim().startsWith('LINEAR ALGEBRA') ||
                section.trim().startsWith('PHYSICS')) {
              return (
                <CourseDescription key={index}>
                  <BlogH3>{section.split('\n')[0]}</BlogH3>
                  <BlogParagraph>{section.split('\n').slice(1).join('\n')}</BlogParagraph>
                </CourseDescription>
              )
            }
            return <BlogParagraph key={index}>{section}</BlogParagraph>
          })
        ) : (
          <>
            <p>What we'll cover:</p>
            <ul>
              {post.content.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <p>Full post coming soon!</p>
          </>
        )}
      </BlogPostContent>
    </BlogPostContainer>
  )
}

function Home() {
  return (
    <>
      <Header>
        <HeaderContent>
          <HeaderTitle>Anahad Dhaliwal</HeaderTitle>
          <HeaderLink href="https://www.anahadd.com">Back to anahadd.com</HeaderLink>
        </HeaderContent>
      </Header>

      <Main>
        <BlogTitle>THE BLOG</BlogTitle>
        <BlogSubtitle>Recent blog posts</BlogSubtitle>
        <BlogGrid>
          {blogPosts.map((post, index) => (
            <StyledLink to={`/blog/${post.slug}`} key={post.id}>
              <Card
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardImage>
                  <Image src={post.image} alt={post.title} />
                  <ImageOverlay />
                </CardImage>
                <CardContent>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <TagContainer>
                    {post.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagContainer>
                  <CardDate>
                    {post.date}
                    <ArrowRight size={16} />
                  </CardDate>
                </CardFooter>
              </Card>
            </StyledLink>
          ))}
        </BlogGrid>
      </Main>

      <Footer>
        <FooterContent>
          <div>© {new Date().getFullYear()} Anahad Dhaliwal</div>
          <FooterLinks>
            <FooterLink href="https://www.linkedin.com/in/anahad/">LinkedIn</FooterLink>
            <FooterLink href="https://github.com/Anahadd">GitHub</FooterLink>
            <FooterLink href="mailto:addhaliw@uwaterloo.ca">Email</FooterLink>
            <FooterLink href="https://devpost.com/Anahad06">Devpost</FooterLink>
          </FooterLinks>
        </FooterContent>
      </Footer>
    </>
  )
}

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App

