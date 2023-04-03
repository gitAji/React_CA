import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {userSchema} from './Schema';
import { Form, Input, Button,Error,Right,Left,Heading,Paragraph,Image,Location } from './styles';
import { Row, Col } from 'antd';
import Img from './office.jpg';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Row>
    <Col xs={24} sm={12}>
        <Left>
<Heading>Contact Us</Heading>

<Paragraph>
  <Image>  <img  src={Img} alt=''/>
</Image>
<Location>
  <div>
    <h3>Our Location</h3><hr/>
    <address>
        1 HM mart road <br/>
        Bergen<br/>
        5000  
    </address>
    </div>
   <div><h3>Our Phone</h3><hr/>
    <p>02081236458</p></div>
    
    </Location>
    
  
</Paragraph>
        </Left>
        </Col>
        <Col xs={24} sm={12}>
        <Right>
        <Heading>Drop us a message!</Heading>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="full-name">Full name</label>
      <Input {...register('fullName')} />
      <Error>{errors.fullName?.message} </Error>
      <label htmlFor="email">Email</label>
      <Input {...register('email')} />
      <Error>{errors.email?.message} </Error>
      <label htmlFor="subject">Subject</label>
      <Input {...register('subject')} />
      <Error>{errors.subject?.message} </Error>
      <label htmlFor="body">Message</label>
      <Input as="textarea" {...register('body')} />
      <Error>{errors.body?.message}</Error>
      <Button type="submit">Submit</Button>
    </Form>
    </Right>
    </Col>
   </Row>
  );
}

export default Contact;
