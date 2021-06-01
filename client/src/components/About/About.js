import React from 'react';
import { Button, Divider, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';

import useStyles from './styles';

const About = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{ paddingLeft: 15, paddingBottom: 5 }}>
        <Typography className={classes.headers}>HOW TO CREATE A POST +</Typography>
        <Typography className={classes.regular}>
          To make a post, click the “CREATE A POST” button in the upper right-hand corner of this webpage, and enter the proper information where prompted. To ensure that your information is stored in the right place, see the naming convention below when crafting your submission. A link to the UCLA course descriptions is referenced below: 
        </Typography>
        <Button className={classes.linkButton}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://registrar.ucla.edu/academics/course-descriptions');
            }}>
          COURSE CATALOG
        </Button>
        
      </div>


      <div style={{ paddingLeft: 75, paddingRight: 385, paddingTop: 5, paddingBottom: 5 }}>
        <Typography className={classes.miniHeaders}>FEATURED CONCEPTS</Typography>
        <Typography className={classes.regular}>
          Users may add the concepts that are discussed in their uploaded notes. Separate these concepts with just a comma, no space.
        </Typography>
      </div>
      <div style={{ paddingLeft: 75, paddingRight: 385, paddingTop: 5, paddingBottom: 5 }}>
        <Typography className={classes.miniHeaders}>SUBJECT</Typography>
        <Typography className={classes.regular}>
          On the UCLA Course Descriptions site, locate your subject area. Enter this subject in ALL CAPS into the “Subject” box of the submission form.
        </Typography>
      </div>
      <div style={{ paddingLeft: 75, paddingRight: 385, paddingTop: 5, paddingBottom: 5 }}>
        <Typography className={classes.miniHeaders}>CLASS</Typography>
        <Typography className={classes.regular}>
          After clicking on a subject in the Course Catalog, you will see a list of classes that start with a short numerical (and sometimes alphabetical) code. Enter this short code into the “Class” box of the submission form, with the letters in ALL CAPS.
        </Typography>
      </div>
      <div style={{ paddingLeft: 75, paddingRight: 385, paddingTop: 5, paddingBottom: 5 }}>
        <Typography className={classes.miniHeaders}>YEAR AND QUARTER</Typography>
        <Typography className={classes.regular}>
          For the "Year" box, enter the 4-digit year you took the class. For the "Quarter" box, enter the UCLA quarter you took the class in ALL CAPS: FALL, WINTER, SPRING, or SUMMER.
        </Typography>
      </div>
      <div style={{ paddingLeft: 75, paddingRight: 385, paddingTop: 5, paddingBottom: 30 }}>
        <Typography className={classes.miniHeaders}>UPLOAD A FILE</Typography>
        <Typography className={classes.regular}>
          At the bottom of the form, click “Choose File” to upload a PDF file of your notes.
        </Typography>
      </div>

      <Divider />

      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <Typography className={classes.headers}>LIKING POSTS <ThumbUpAltIcon fontSize="medium" /> </Typography> 
        <Typography className={classes.regular}>
          Users have the ability to like others’ posts using the Thumbs-Up icon.
        </Typography>
      </div>

      <Divider />

      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <Typography 
          className={classes.headers}>VIEW AND DOWNLOAD FROM OTHER POSTS <VisibilityIcon fontSize="medium" /> 
        </Typography>
        <Typography className={classes.regular}>
          Next to the Eye icon is the “View PDF” button, where your browser will navigate you to an outside page to preview and download the selected PDF.
        </Typography>
      </div>

      <Divider />

    </>
  );
};

export default About;