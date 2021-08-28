import React, { useState } from 'react';

import envelope from '../../assets/envelope.svg';
import emailjs from 'emailjs-com';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useAlert } from 'react-alert';

import {
    Container,
    Content,
    Box,
    ImgWrapper,
    Image,
    Text,
    Form,
    Header,
    FormContent,
    FormInput,
    Title,
    Img,
    TextArea,
    SendButton
} from './ContactElements';

const Contact = () => {
    const alert = useAlert();

    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs.sendForm('service_xpd9mpt', 'template_ejseag7', e.target, 'user_pWM86RlMMJjP8L8QMIWOd')
            .then((result) => {
                setLoading(false);
                alert.success(result.text);
                setTimeout(() => window.location.reload(), 1500);
            }, (error) => {
                setLoading(false);
                alert.error(error.text);
                setTimeout(() => window.location.reload(), 1500);
            });
    }

    return (
        <>
            <Container id="contact">
                <Content>
                    <Box>
                        <ImgWrapper>
                            <Image>
                                <Img src={envelope} />
                                <Text>If you have questions or just want to contact us, use the form. We look forward to hearing from you!</Text>
                            </Image>
                        </ImgWrapper>
                        <Form onSubmit={handleSubmit}>
                            <Header>
                                <Title>Contact Us</Title>
                            </Header>
                            <FormContent>
                                <FormInput name="contact-name" required type="text" autoComplete="off" placeholder="Your Name" />
                                <FormInput name="contact-email" required type="email" autoComplete="off" placeholder="Your Email" />
                                {/* <FormInput message={true} type="text" autoComplete="off" onChange={(e) => setMessage(e.value)} placeholder="Message" value={message} /> */}
                                <TextArea name="contact-message" required placeholder="Message" />
                                {
                                    !isLoading ? (
                                        <>
                                            <div className="g-recaptcha" data-sitekey="6Le3rQ0cAAAAANF2raJz0atVwX6wMaFEo3v3NF2d" />
                                            <SendButton type="submit" value="Send" />
                                        </>
                                    ) : <CircularProgress />
                                }
                            </FormContent>
                        </Form>
                    </Box>
                </Content>
            </Container>
        </>
    )
}

export default Contact;