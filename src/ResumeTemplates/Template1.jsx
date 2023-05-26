import React from "react";
import { Document, Page, StyleSheet, Text, Font } from "@react-pdf/renderer";
import { Image } from "@react-pdf/renderer";
import raleway from "../assets/fonts/Raleway-Regular.ttf";
Font.register({
  family: "raleway",
  src: raleway,
});

         /*Template1 Desigin CSS Code Start here */
const styles = StyleSheet.create({
  header: {
    paddingBottom: "18px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "18px",
    fontFamily: "raleway",
    borderBottom: "2px solid #00b4d8",
  },
  name: {
    color: "#00b4d8",
    fontSize: 25,
  },
  role: {
    fontSize: "14px",
  },
  contact: {
    marginLeft: "auto",
    color: "#00b4d8",
    fontSize: 11,
    lineHeight: "1.3px",
  },
  page: {
    padding: 10,
    flexDirection: "column",
    backgroundColor: "white",
    lineHeight: 1.5,
    fontFamily: "raleway",
  },
  Resumh: {
    marginTop: 0,
    width: "70px",
    height: "70px",
  },
  text: {
    fontSize: 12,
    lineHeight: "1.5px",
    fontFamily: "raleway",
  },
  subtitle: {
    fontSize: 16,
    color: "#00b4d8",
    margin: "5px 0",
  },
  years: {
    fontSize: 15,
    display: "flex",
    gap: "7px",
    flexDirection: "column",
  },
  res: {
    display: "flex",
    flexDirection: "row",
    gap: "3px",
    fontSize: "12px",
  },
});
                   /*Template1 Desigin CSS Code Endhere */

const Template1 = (props) => {
  const personaldata = props.personaldata;
  const workExp = props.workExp;
  const education = props.education;
  const keySkills = props.keySkills;
  const rolesArray = workExp.map((value, Index) => {
    const roles = value.Role.map((role, Index) => {
      return (
        <div key={Index}>
          <div
            style={{
              display: "flex",
              gap: "3px",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>{Index + 1}. </Text>
            <Text>{role}</Text>
          </div>
        </div>
      );
    });

    return (
      <div key={Index}>
        <Text>
          {Index + 1 + " "}. {value.jobTitle}, {value.companyName} -{" "}
          {value.start} to {value.end}
        </Text>
        <Text style={{ fontSize: 15, color: "#00b4d8", marginTop: 7 }}>
          Key Roles:
        </Text>
        <div style={styles.res}>
          <div>{roles}</div>
        </div>
      </div>
    );
  });

  const roles = rolesArray.map((value, Index) => {
    return (
      <div style={styles.res} key={Index}>
        <Text>{Index + 1}.</Text>
        <Text> {`${value}`}</Text>
      </div>
    );
  });

  return (
    <Document>
      <Page style={styles.page}>
        <div style={styles.header}>
          <ImageComponent
            firstName={personaldata.firstName}
            lastName={personaldata.lastName}
            profilePic={personaldata.profilePic}
            color = {'#00b4d8'}
          />
          <div>
            <Text
              style={styles.name}
            >{`${personaldata.firstName} ${personaldata.lastName}`}</Text>
            <Text style={styles.role}>{personaldata.professionalTitle}</Text>
          </div>
          <div style={styles.contact}>
            <Text>{personaldata.address}</Text>
            <Text>{personaldata.city}</Text>
            <Text>{personaldata.state}</Text>
            <Text>{personaldata.mobileNo}</Text>
            <Text>{personaldata.email}</Text>
          </div>
        </div>
        <div
          style={{ borderBottom: "6px solid #00b4d8", paddingBottom: "10px" }}
        >
          <Text style={styles.subtitle}>Summary:</Text>
          <Text style={styles.text}>{personaldata.Objective}</Text>
        </div>

        <div style={{ borderBottom: "6px solid #00b4d8", padding: 10 }}>
          <Text style={styles.subtitle}>Professional Experience:</Text>
          <div style={styles.years}>{rolesArray}</div>
        </div>
        <div>
          <Text style={styles.subtitle}>Education: </Text>
          <div style={{ borderBottom: "6px solid #00b4d8", paddingBottom: 7 }}>
            <Text style={{ fontSize: 15 }}>
              {education.university} - {education.startYear} to{" "}
              {education.endYear}
            </Text>
            <Text style={{ fontSize: 12, marginTop: 5 }}>
              {education.type}, {education.degree}
            </Text>
          </div>
          <div>
            <Text style={styles.subtitle}>Key Kills: </Text>
            <Text style={{ fontSize: 12 }}>{keySkills.join(", ")},</Text>
          </div>
        </div>
      </Page>
    </Document>
  );
};

export const ImageComponent = (props) => {
  const ResumhByName = () => {
    return (
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '50%', 
          borderColor: props.color,
          padding: '14px',
          fontSize: 38,
          display: 'flex',
          flexDirection:'row',
          alignItems: 'center'
        }}
      >
        <Text style={{marginTop: 10, color: props.color,}}>{`${props.firstName[0]}${props.lastName[0]}`}</Text>
      </div>
    );
  };
  return (
    <>
      {props.profilePic === "/broken-image.jpg" ? (
        <ResumhByName />
      ) : (
        <Image src={props.profilePic} style={styles.Resumh} />
      )}
    </>
  );
};

export default Template1;
