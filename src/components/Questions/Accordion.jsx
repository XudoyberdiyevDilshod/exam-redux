import Accordion from "react-bootstrap/Accordion";
import "./Questions.css";
function Accordions() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong className="accordion">01</strong>Какой состав сока Alatoo?
        </Accordion.Header>
        <Accordion.Body>
          Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и
          сок горького арбуза. В свою очередь эти два компонента включают в себя
          множество полезных ферментов, микроэлементов и витаминов, таких как
          органические кислоты, витамин с, витамин b1, витамин d, а также
          фермент папаин.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <strong className="accordion">02</strong>
          Сколько стоит Алатоо и сколько стоит доставка?
        </Accordion.Header>
        <Accordion.Body>
          Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и
          сок горького арбуза. В свою очередь эти два компонента включают в себя
          множество полезных ферментов, микроэлементов и витаминов, таких как
          органические кислоты, витамин с, витамин b1, витамин d, а также
          фермент папаин.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <strong className="accordion">03</strong>
          Здравствуйте, аллергия часто на этот сок?
        </Accordion.Header>
        <Accordion.Body>
          Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и
          сок горького арбуза. В свою очередь эти два компонента включают в себя
          множество полезных ферментов, микроэлементов и витаминов, таких как
          органические кислоты, витамин с, витамин b1, витамин d, а также
          фермент папаин.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <strong className="accordion">04</strong>
          Эффективен ли сок Алатоо при часто рецидивирующем герпесе?
        </Accordion.Header>
        <Accordion.Body>
          Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и
          сок горького арбуза. В свою очередь эти два компонента включают в себя
          множество полезных ферментов, микроэлементов и витаминов, таких как
          органические кислоты, витамин с, витамин b1, витамин d, а также
          фермент папаин.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <strong className="accordion">05</strong>
          Здравствуйте, можно ли принимать при полипе в жёлчном пузыре?
        </Accordion.Header>
        <Accordion.Body>
          Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и
          сок горького арбуза. В свою очередь эти два компонента включают в себя
          множество полезных ферментов, микроэлементов и витаминов, таких как
          органические кислоты, витамин с, витамин b1, витамин d, а также
          фермент папаин.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordions;
