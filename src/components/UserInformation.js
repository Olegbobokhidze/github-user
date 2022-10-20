import React from "react";
import styled from "styled-components";
import Location from "../svg/Location";
import Twitter from "../svg/Twitter";
import Company from "../svg/Company";
import Blog from "../svg/Blog";
const UserBox = styled.div`
  font-family: "Space Mono", monospace;
  width: 327px;
  height: 517px;
  margin-top: 23px;
  background-color: #fefefe;
  background-color: ${(props) => props.light.color};
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 30px -10px #4660bb;
  box-shadow: ${(props) => props.light.boxShadow};
  @media screen and (min-width: 768px) {
    width: 573px;
    height: 481px;
  }
  @media screen and (min-width: 1440px) {
    width: 730px;
    height: 419px;
    display: flex;
  }
`;
const UserName = styled.h1`
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  font-weight: 700;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;
const UserPage = styled.a`
  color: #0079ff;
  text-decoration: none;
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;
const UserJoin = styled.p`
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
const DisplayHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 120px;
  }
`;
const DisplayHeader = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-around;
  padding-top: 32px;
  @media screen and (min-width: 768px) {
    justify-content: left;
    padding-left: 25px;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    align-items: center;
    padding-left: 10px;
  }
`;
const UserText = styled.p`
  font-weight: 400;
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  line-height: 20px;
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
const UserTextParent = styled.div`
  display: block;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  padding: 25px;
  @media screen and (min-width: 768px) {
    padding-left: 25px;
  }
`;
const UserConnections = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #f6f8ff;
  background-color: ${(props) => props.light.userConnect};
  border-radius: 10px;
  width: 279px;
  height: 85px;
  margin-left: 25px;
  margin-right: 25px;
  @media screen and (min-width: 768px) {
    width: 493px;
  }
`;
const Repos = styled.p`
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  font-size: 11px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;
const Followers = styled.p`
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  font-size: 11px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;
const Following = styled.p`
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  font-size: 11px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;
const NumberRepos = styled.p`
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  font-size: 16px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
const NumberFollowers = styled.p`
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  font-size: 16px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
const NumberFollowing = styled.p`
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  font-size: 16px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
const SvgDiv = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  text-align: center;
  margin-left: 25px;
`;
const SvgP = styled.p`
  color: #4b6a9b;
  color: ${(props) => props.light.svgColor};
  font-size: 15px;
  font-weight: 400;
  margin-left: 20px;
`;
const SvgA = styled.a`
  color: #4b6a9b;
  color: ${(props) => props.light.textColor};
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
const SvgDivParent = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto auto;
  }
`;
const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  @media screen and (min-width: 768px) {
    width: 117px;
    height: 117px;
    border-radius: 56px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
const UserImageDesktop = styled.img`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    width: 117px;
    height: 117px;
    border-radius: 56px;
    margin-left: 20px;
    margin-top: 25px;
  }
`;
const TextHolderDesktop = styled.div``;
const UserJoinDesktop = styled.p`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    margin-top: 7px;
    align-self: flex-start;
    color: #4b6a9b;
    color: ${(props) => props.light.textColor};
    font-size: 16px;
    font-weight: 400;
  }
`;
export default function UserInformation({ light, user }) {
  function locationSvg() {
    if (user.location === null) {
      return "#697C9A";
    } else if (user.location !== null) {
      return light.svgColor;
    }
  }
  function twitterSvg() {
    if (user.twitter_username === null) {
      return "#697C9A";
    } else if (user.twitter_username !== null) {
      return light.svgColor;
    }
  }
  function companySvg() {
    if (user.company === null) {
      return "#697C9A";
    } else if (user.company !== null) {
      return light.svgColor;
    }
  }
  function blogSvg() {
    if (user.blog === "") {
      return "#697C9A";
    } else if (user.blog !== "") {
      return light.svgColor;
    }
  }
  function date() {
    if (user) {
      let joined = new Date(user.created_at);
      let date =
        joined.getDate() +
        ", " +
        joined.toLocaleString("en-us", { month: "short" }) +
        " " +
        joined.getFullYear();
      return <UserJoin light={light}>Joined {date}</UserJoin>;
    }
  }

  function date1() {
    if (user) {
      let joined = new Date(user.created_at);
      let date =
        joined.getDate() +
        ", " +
        joined.toLocaleString("en-us", { month: "short" }) +
        " " +
        joined.getFullYear();
      return <UserJoinDesktop light={light}>Joined {date}</UserJoinDesktop>;
    }
  }
  return (
    <>
      {user ? (
        <UserBox light={light}>
          <UserImageDesktop src={user.avatar_url} alt="testimg" />
          <TextHolderDesktop>
            <DisplayHeader>
              <UserImage src={user.avatar_url} alt="testimg" />
              <DisplayHeaderText>
                <UserName light={light}>{user.login}</UserName>
                <UserPage href={user.html_url}>@{user.login}</UserPage>
                {date()}
              </DisplayHeaderText>
              {date1()}
            </DisplayHeader>
            <UserTextParent>
              <UserText light={light}>
                {user.bio === null ? "Bio is not available" : user.bio}
              </UserText>
            </UserTextParent>
            <UserConnections light={light}>
              <Repos light={light}>Repos</Repos>
              <Followers light={light}>Followers</Followers>
              <Following light={light}>Following</Following>
              <NumberRepos light={light}>{user.public_repos}</NumberRepos>
              <NumberFollowers light={light}>{user.followers}</NumberFollowers>
              <NumberFollowing light={light}>{user.following}</NumberFollowing>
            </UserConnections>
            <SvgDivParent>
              <SvgDiv>
                <Location fill={locationSvg()} />
                <SvgP light={light}>
                  {user.location === null ? "Not available" : user.location}
                </SvgP>
              </SvgDiv>
              <SvgDiv>
                <Blog fill={blogSvg()} />
                <SvgA light={light} href={user.blog === "" ? "#" : user.blog}>
                  {user.blog === "" ? "Not available" : user.blog}
                </SvgA>
              </SvgDiv>
              <SvgDiv>
                <Twitter fill={twitterSvg()} />
                <SvgP light={light}>
                  {user.twitter_username === null
                    ? "Not available"
                    : user.twitter_username}
                </SvgP>
              </SvgDiv>
              <SvgDiv>
                <Company fill={companySvg()} />
                <SvgP light={light}>
                  {user.company === null ? "Not available" : user.company}
                </SvgP>
              </SvgDiv>
            </SvgDivParent>
          </TextHolderDesktop>
        </UserBox>
      ) : (
        <UserBox light={light}>
          <UserImageDesktop
            src="https://avatars.githubusercontent.com/u/105369627?v=4"
            alt="testimg"
          />
          <TextHolderDesktop>
            <DisplayHeader>
              <UserImage
                src="https://avatars.githubusercontent.com/u/105369627?v=4"
                alt="testimg"
              />
              <DisplayHeaderText>
                <UserName light={light}>Olegbobokhidze</UserName>
                <UserPage href="https://github.com/Olegbobokhidze">
                  @Olegbobokhidze
                </UserPage>
                <UserJoin light={light}>Joined 11, May 2022</UserJoin>
              </DisplayHeaderText>
              <UserJoinDesktop light={light}>
                Joined 11, May 2022
              </UserJoinDesktop>
            </DisplayHeader>
            <UserTextParent>
              <UserText light={light}>
                I am a student of Full Stack Web Development at 'Oto's
                Bootcamp'.
              </UserText>
            </UserTextParent>
            <UserConnections light={light}>
              <Repos light={light}>Repos</Repos>
              <Followers light={light}>Followers</Followers>
              <Following light={light}>Following</Following>
              <NumberRepos light={light}>26</NumberRepos>
              <NumberFollowers light={light}>1</NumberFollowers>
              <NumberFollowing light={light}>2</NumberFollowing>
            </UserConnections>
            <SvgDivParent>
              <SvgDiv>
                <Location fill={"#4B6A9B"} />
                <SvgP light={light}>Tbilisi</SvgP>
              </SvgDiv>
              <SvgDiv>
                <Blog fill={"#697C9A"} />
                <SvgA light={light} href="#">
                  Not available
                </SvgA>
              </SvgDiv>
              <SvgDiv>
                <Twitter fill={"#697C9A"} />
                <SvgP light={light}>Not available</SvgP>
              </SvgDiv>
              <SvgDiv>
                <Company fill={"#4B6A9B"} />
                <SvgP light={light}>Bitcamp</SvgP>
              </SvgDiv>
            </SvgDivParent>
          </TextHolderDesktop>
        </UserBox>
      )}
    </>
  );
}
