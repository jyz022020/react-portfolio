import React from 'react';
import coverImage from '../../assets/projects/self.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
        <img src={coverImage} className="my-2" alt="cover" width="500" height="500" />
      <div className="my-2">
        <p>
          I am Yunzhu Jin. I have some basic coding knowlwdge, and still learning. I wish
          I could write features that really useful in the future.
        </p>
      </div>
    </section>
  );
}

export default About;
