import { EmailOutlined, Facebook, Instagram, LinkedIn, Phone, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
display : flex ;
${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
flex : 1 ;
display : flex ;
flex-direction :column ;
padding : 20px ;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin : 20px 0px ;
`;
const SocialContainer = styled.div`
display : flex ;
${mobile({ justifyContent: "center" })}
`;
const SocialIcon = styled.div`
width : 40px ;
height : 40px ;
border-radius : 50% ;
color : white ;
background-color : #${props => props.color} ;
display : flex ;
align-items : center ;
justify-content : center ;
margin-right : 20px ;
`;
const Center = styled.div`
flex : 1 ;
padding : 20px ;
${mobile({ display: "none" })}
`;
const Title = styled.h3`
margin-bottom : 30px ;
`;
const List = styled.ul`
margin  :0px ;
padding : 0px ;
list-style : none ;
display : flex ;
flex-wrap : wrap ;
`;
const ListItem = styled.li`
width : 50% ;
margin-bottom : 10px ;
`;
const Right = styled.div`
flex : 1 ;
padding  :20px ;
${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
margin-bottom : 20px ;
display : flex ;
align-items : center ;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Buy & Sell</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque numquam architecto molestiae, ea, placeat esse nostrum amet voluptas nulla cumque soluta recusandae dolore dolores. Explicabo alias labore nisi a?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="0077B5">
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Kid Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking </ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} /> Chandni Chowk , New Delhi , India - 110044</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} /> +91 9999999999</ContactItem>
                <ContactItem><EmailOutlined style={{ marginRight: "10px" }} /> contact@gmail.com</ContactItem>

            </Right>
        </Container>
    );
};

export default Footer;