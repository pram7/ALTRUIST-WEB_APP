import styled from "styled-components";
import {connect} from "react-redux";
import {signInAPI} from "../actions";

const Login = (props) => {
    return(
        <div className="login">
            <div class="login-logo">
              <Container>
                        <Nav>
                            <a href="./">
                                <img src="./images/Title.png" alt="" />
                            </a>
                            <div>
                                <Join>Join Now</Join>
                                <SignIn>SignIn</SignIn>
                            </div>
                        </Nav>
                        <Section>
                            <Hero>
                                <h1>Live..Let Live!!</h1>
                                <img src="/images/LoginImage.jpg" alt="" />
                            </Hero>
                            <Form>
                            <Google onClick={() => props.SignIn}>
                                <img src="/images/google.png" alt="" />
                                Sign in with Google
                            </Google>
                            </Form>
                    </Section>
                    </Container>  
            </div>
        </div>
    );
};

const Container = styled.div`
padding: 0px;
height:500px;
`;

const Nav = styled.nav`
max-width:1128px;
margin: auto;
padding: 12px 0px 16px;
display:flex;
align-items:center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;

& > a{
    width: 350px;
    height: 34px;
    @media (max-width:768px) {
        padding: 0 5px;
    }
}
`;


const Join = styled.a`
    font-size:16px;
    padding: 10px 12px;
    border-radius:4px;
    box-shadow: inset 0 0 0 1px #0a66c2;
    text-decoration: none;
    color:#0a66c2;
    margin-right:20px;
    &:hover{
        background-color:rgba(112,181,249,0.15);
        text-decoration:none;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius:24px;
    transition-duration:167ms;
    font-size: 16px;
    font-weight:400;
    margin-left:20px;
    margin-right:20px;
    line-height:40px;
    padding:10px 24px;
    text-align:center;
    background-color:rgba(0,0,0,0);
    &:hover{
        background-color:rgba(112,181,249,0.15);
    }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 200px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 10px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; */
    width: 400px;
    height: 400px;
    position: absolute;
    top: 30px;
    right: -50px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      margin:auto;
      /* padding-left:120px; */
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  img {
      width:50px;
      height:50px;
  }
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    img{
       opacity:0.4; 
    }
  }
`;

const mapStateToProps = (state) => {
    return{};
};
const mapDispatchToprops = (dispatch) => ({
  signIn:() => dispatch(signInAPI()),
});
export default connect(mapStateToProps, mapDispatchToprops)(Login);
