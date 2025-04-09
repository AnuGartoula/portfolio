import React from "react";
import { useParams } from "react-router-dom";
import './BlogsDescription.css';
// Example JSON data with title and description
const blogData = {
    blogs: [
        {
            "id": 1,
            "title": "The Moon's Honest Opinion About Being Photographed Constantly",
            "description": "What pops up in your head when you hear the word 'celebrity'? Kim Kardashian? Taylor Swift? Jim Carrey? I reckon the biggest celebrity in this world is the Moon. The celestial body which never seems to be devoid of the attention and constant camera flashing towards it all night long.\n\nDo you think any Instagram influencer stands a chance against the attention that the moon captures every night? I don't think so. Check your camera phone. How many blurry pictures of the moon do you have? How many times a year do your Google photos make collages titled 'Cinematic nights' of that blurry moon?\n\nLet's really discuss what the moon really thinks about these amateur photographers. She is perhaps tired of being the subject of an unrecognizable white smudge. She’s shouting at you for your incompetent photography skills. 'Must you make me look like a streetlamp, James,' she exclaims exasperatedly. When someone takes out their latest iPhone, she grumbles, 'Can't you just enjoy the view instead?' Great, now he’s thinking about some cheesy and predictable captions to post on Instagram. She reminisces about the old times before cameras were invented, when she was not perceived as a model who should be posed all night long.\n\nAs a couple sits together stargazing on the grassy field, one says to another, 'Your beauty is nothing compared to the moon and the stars.' Every time the moon hears such cheesy and corny sentences, she scoffs in disgust. 'How could a human have the audacity to compare me with any other human being? Even my lunar dust is prettier than you.' The psychological trauma of the moon seeing itself represented as pixelated blobs across social media every night is incomprehensible.\n\nIt is impossible to capture the moon's beauty with mere smartphones. The moon resents any mobile phone brand that advertises 'Amazing night mode capabilities' and shows professionally edited moon pictures. 'I’ll be damned if those are the pictures from THAT smartphone,' the moon says in resentment. Please lower your goddamn exposure. Don’t zoom in on me, I'll look worse. Oh sweet mother of Luna, now they are putting filters on that,' she screams every night.\n\nWhen other planets in the solar system look at humans and their celestial celebrity, the moon, perhaps they get thundered by jealousy and envy. As humans are only obsessed with the moon, the only other planet that may be a competitor to the moon is Saturn because of its 'showoff rings'. Which is just the dust, by the way, even the moon has it.\n\nWhile those meteoroids, the small pieces of space debris that get burned in the earth's atmosphere known as shooting stars, get a brief amount of fame, the fame of the moon lasts forever until another big bang were to occur."
          },
          
      
    ]
  };

function BlogsDescription() {
  const { id } = useParams(); // Get the blog id from the URL parameter
  const blog = blogData.blogs.find((b) => b.id === parseInt(id)); // Find the blog by id

  return (
    <div className="details_container">
       
      {blog ? (
        <>
         <div className="first_container">
        <h1>{blog.title}</h1>
        </div>
        <div className=" second_container">

        
          <p>{blog.description}</p>
          </div>
        </>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
}

export default BlogsDescription;
