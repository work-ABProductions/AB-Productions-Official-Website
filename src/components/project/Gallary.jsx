import React, { useState } from "react";
import styles from "../../styles/project/Gallary.module.css";

import project_img from "../../assets/projects/fenton_website_ui.webp";
import project_img_demo from "../../assets/projects/demo_website.png";

const projects = [
  { id: 1, title: "Fenton Chemicals", category: "Technology", img: project_img },
  { id: 2, title: "Demo Website", category: "Graphics", img: project_img_demo },
  { id: 3, title: "Sample Video Project", category: "Video Editing", img: project_img },
  { id: 4, title: "Brand Identity", category: "Branding", img: project_img_demo },
];

const categories = ["All Projects", "Technology", "Graphics", "Video Editing", "Branding"];

function Gallary() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section>
      <div className={styles.navbar_ctr}>
        <ul className={styles.navbar}>
          {categories.map((category) => (
            <li key={category}>
              <a
                className={activeCategory === category ? styles.active : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.project_cards_ctr}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.project_card}>
            <div className={styles.project_txt}>
              <h3 className={styles.project_heading}>{project.title}</h3>
              <p className={styles.about_project}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra fermentum ante vitae convallis.
              </p>
            </div>
            <ul className={styles.jelly_tags}>
              <li>{project.category}</li>
            </ul>
            <div className={styles.project_bg_img_ctr}>
              <img className={styles.project_bg_img} src={project.img} alt="project image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallary;
