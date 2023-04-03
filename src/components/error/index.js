import {Link} from 'react-router-dom'
import {Typography,Button,Row,Col} from 'antd'
import { Container } from '../contact/styles';
const { Title } = Typography;
const Error = () => {
  return (
   <>
   <Container> <Row> <Col xs={24} sm={24}><Title level={1}>Oops!</Title>
 <p>Page not found! </p>
<Button><Link to='/'>Go Home</Link></Button></Col></Row></Container>
  

   </>
  )
}

export default Error;