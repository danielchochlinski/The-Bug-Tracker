import classes from "./PersonnelCard.module.css";
import Image from "next/image";
import Card from "../ui/Card";

function PersonnelCard(props) {
  return (
    <Card key={props.id}>
      <div className={classes.personnelCard}>
        <div className={classes.backgroundImg}>
          <Image
            src="/background.jpg"
            alt="background"
            width="320"
            height="140"
          />
        </div>
        <div className={classes.personnelImgDiv}>
          <Image
            className={classes.personnelImg}
            src="/daniel.jpg"
            alt="profile"
            width="120"
            height="120"
          />
        </div>
        <div>
          <h1>{props.name}</h1>
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
        <div>
          <h2>Tech</h2>
          {/* <Image src="/react.svg" width="20" height="20"  /> */}
          {/* {props.languages.map((language) => ( */}
          {/* <ul key={language}> */}
          {/* <li key={language}>{language}</li> */}
          <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default PersonnelCard;
