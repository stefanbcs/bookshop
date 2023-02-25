import React, { useContext } from "react";
import {
  Accordion,
  Button,
  Card,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";

function ContextAwareToggle({ eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Button 
      onClick={decoratedOnClick} 
      variant="outline-dark" 
      className="btn-collapse collapsed" 
      type="button" data-bs-toggle="collapse" 
      aria-expanded="false" 
      aria-controls="collapseExample"
      >
      {isCurrentEventKey ? (
        <i className="fas fa-chevron-circle-up"></i>
      ) : (
        <i className="fas fa-chevron-circle-down"></i>
      )}
    </Button>
  );
}
export default function Order({
  id,
  order,
  email,
  phone,
  date,
  total,
  deliveryAddress,
  billingAddress
}) {
  let count = 1;
  let dateTransformed = new Date(date);
  let dateParsed =
    dateTransformed.getDate() +
    "/" +
    (dateTransformed.getMonth() + 1) +
    "/" +
    dateTransformed.getFullYear() +
    " " +
    dateTransformed.getHours() +
    ":" +
    dateTransformed.getMinutes() +
    ":" +
    dateTransformed.getSeconds();

  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header>
          <p className="fw-bold">
            Order
            <span className="text-success"> {id}</span>
          </p>
          <ContextAwareToggle eventKey="0"></ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h6>
              Email: <span className="fw-light fst-italic">{email}</span>
            </h6>
            <h6>
              Phone: <span className="fw-light fst-italic">{phone}</span>
            </h6>
            <h6>
              Delivery Address:
              <span className="fw-light fst-italic">
                {" "}
                {deliveryAddress.street} street, {deliveryAddress.suite},{" "}
                {deliveryAddress.zipcode}, {deliveryAddress.city}
              </span>
            </h6>
            <h6>
              Billing Address:
              <span className="fw-light fst-italic">
                {" "}
                {billingAddress.street} street, {billingAddress.suite},{" "}
                {billingAddress.zipcode}, {billingAddress.city}
              </span>
            </h6>
            <h6>
              Ordered on:
              <span className="fw-light fst-italic"> {dateParsed}</span>
            </h6>
            <h6>Order:</h6>
            {order.order.map((order) => (
              <div className="d-flex justify-content-between" key={count++}>
                <div className="order-name">- {order.name}</div>
                <div className="order-name">Price:{order.price} RON</div>
                <div className="order-name">Qty: {order.quantity}</div>
              </div>
            ))}
            <br />
            <h6>Total price: {total} RON</h6>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
