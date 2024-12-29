import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'

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
`

const BlogSubtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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

  &:hover {
    transform: translateY(-0.25rem);
    border-color: #262626;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 8px 10px -6px rgba(0, 0, 0, 0.1);
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

  ${Card}:hover & {
    transform: scale(1.1);
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s;

  ${Card}:hover & {
    opacity: 1;
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

  ${Card}:hover & {
    color: #4ade80;
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
`

const Tag = styled.span`
  background-color: #262626;
  color: #a3a3a3;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.3s;

  ${Card}:hover & {
    background-color: rgba(74, 222, 128, 0.1);
    color: #4ade80;
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

  ${Card}:hover & {
    color: #4ade80;

    svg {
      transform: translateX(0.25rem);
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
`

const BlogPostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

const BlogPostContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  p {
    color: #a3a3a3;
    line-height: 1.6;
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
`

const blogPosts = [
  {
    id: 1,
    title: "Winter Break",
    description: "OG Fortnite. Sleep. Chill. Rediscovering the simple joys of gaming and relaxation during the much-needed winter break.",
    image: "https://via.placeholder.com/600x400",
    date: "Last Updated: Dec 28, 2023",
    tags: ["Having", "Fun"],
    slug: "blog3",
    content: {
      intro: "OG Fortnite. Sleep. Chill. A much-needed break from the academic grind, returning to the simple joys of gaming and relaxation.",
      topics: [
        "Rediscovering old games",
        "Quality time with friends",
        "Recharging for next semester",
        "Finding the perfect balance"
      ]
    }
  },
  {
    id: 2,
    title: "First Semester of University",
    description: "Here's what to expect in Waterloo Computer Engineering 1A - the raw, unfiltered truth. From intense academics to newfound independence, this is the real first-year experience.",
    image: "https://via.placeholder.com/600x400",
    date: "Last Updated: Dec 28, 2023",
    tags: ["Uni", "Social Life"],
    slug: "blog2",
    content: {
      intro: "Here's what to expect in Waterloo Computer Engineering 1A - the unfiltered truth. From intense coursework to newfound independence, this is the real first-year experience.",
      topics: [
        "Adjusting to university life",
        "Managing the academic workload",
        "Building new friendships",
        "Surviving your first midterms"
      ]
    }
  },
  {
    id: 3,
    title: "The Journey of Grade 12",
    description: "The year that everyone locks in. The highs, the lows, everything in between. From university applications to final exams, this is the story of the most pivotal year.",
    image: "https://via.placeholder.com/600x400",
    date: "Last Updated: Dec 28, 2023",
    tags: ["School", "Grades"],
    slug: "blog1",
    content: {
      intro: "The year that everyone locks in. The highs, the lows, everything in between. A personal reflection on the most transformative year of high school.",
      topics: [
        "The pressure of university applications",
        "Balancing academics and social life",
        "Making lasting memories",
        "Preparing for the next chapter"
      ]
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

  return (
    <BlogPostContainer>
      <BlogPostContent>
        <BackLink to="/">← Back to Blog</BackLink>
        <BlogPostTitle>{post.title}</BlogPostTitle>
        <div className="space-y-4">
          <p>{post.content.intro}</p>
          <p>What we'll cover:</p>
          <ul>
            {post.content.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <p>Full post coming soon!</p>
        </div>
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

