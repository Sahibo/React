import "./styles/MyBag.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  decreaseQuantity,
  increaseQuantity,
  clearBasket,
} from "../store/reducer";
import { Modal, Button, Input, Typography, Form } from "antd";

const { Item } = Form;
const { Text } = Typography;

export function MyBag() {
  const dispatch = useDispatch();
  const basketArr = useSelector((state) => state.products.basketArr);
  const [submitFormIsVisible, setSubmitFormIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const [nameValidation, setNameValidation] = useState("");
  const [lastNameValidation, setLastNameValidation] = useState("");
  const [phoneNumberValidation, setPhoneNumberValidation] = useState("");
  const [addressValidation, setAddressValidation] = useState("");

  useEffect(() => {
    handleTotalPriceChange();
  }, [basketArr]);

  const handleTotalPriceChange = () => {
    let newTotalPrice = 0;
    basketArr.forEach((product) => {
      newTotalPrice += product.price * product.quantity;
    });

    setTotalPrice(newTotalPrice);
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const handleBuyProduct = () => {
    let isValid = true;

    if (!name) {
      setNameValidation("Name is required");
      isValid = false;
    } else {
      setNameValidation("");
    }

    if (!lastName) {
      setLastNameValidation("Last Name is required");
      isValid = false;
    } else {
      setLastNameValidation("");
    }

    if (!phoneNumber) {
      setPhoneNumberValidation("Phone Number is required");
      isValid = false;
    } else {
      setPhoneNumberValidation("");
    }

    if (!address) {
      setAddressValidation("Address is required");
      isValid = false;
    } else {
      setAddressValidation("");
    }

    if (isValid) {
      setOrderSuccess(true);
    }
  };

  const handleCancel = () => {
    setName("");
    setLastName("");
    setPhoneNumber("");
    setAddress("");
    setNameValidation("");
    setLastNameValidation("");
    setPhoneNumberValidation("");
    setAddressValidation("");
    setSubmitFormIsVisible(false);
  };

  const handleSuccessSubmit = () => {
    dispatch(clearBasket());
    handleCancel();
  };

  const showSubmitForm = () => {
    setSubmitFormIsVisible(true);
  };
  return (
    <div className="myBag-container">
      <div className="list-container">
        {Array.isArray(basketArr) && basketArr.length > 0 ? (
          <>
            <div className="products-sort header">
              <span>{basketArr.length} products</span>
            <button className="buy-button" type="primary" onClick={showSubmitForm}>
              Buy
            </button>
            </div>

            <div className="myBag-products-list">
              {basketArr.map((product, index) => (
                <div key={index} className="myBag-product-item">
                  <div className="myBag-product-info-container">
                    <div className="product-img-container">
                      <img
                        src="https://cdn2.jysk.com/getimage/wd2.medium/202326"
                        className="product-img"
                        alt="Product"
                      />
                    </div>

                    <div className="myBag-product-text-container">
                      <div className="myBag-product-text">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span>
                          Total price: {(product.price * product.quantity).toFixed(2)}$
                        </span>
                      </div>

                      <div className="product-actions-container">
                        <div className="product-quantity-actions-container">
                          <span>
                            Quantity
                          </span>
                          <div className="quantity-container">
                            <span>{product.quantity}</span>
                            <div className="quantity-buttons">
                              <button onClick={() => handleIncreaseQuantity(product)}>
                                &#8249;
                              </button>
                              <button onClick={() => handleDecreaseQuantity(product)}>
                                &#8250;
                              </button>
                            </div>
                          </div>
                        </div>
                        <a
                          onClick={() => handleRemoveProduct(product)}
                          className="delete-product">
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Your bag is empty</p>
        )}
      </div>

      <Modal
        visible={submitFormIsVisible}
        onCancel={handleCancel}
        title="Checkout"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleBuyProduct}>
            Submit
          </Button>,
        ]}
      >
        <Form
          name="checkoutForm"
          initialValues={{ remember: true }}
          onFinish={() => {}}
        >
          <Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameValidation("");
              }}
            />
            <Text type="danger">{nameValidation}</Text>
          </Item>

          <Item
            name="lastName"
            label="Last Name"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setLastNameValidation("");
              }}
            />
            <Text type="danger">{lastNameValidation}</Text>
          </Item>

          <Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please enter your phone number!",
              },
            ]}
          >
            <Input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setPhoneNumberValidation("");
              }}
            />
            <Text type="danger">{phoneNumberValidation}</Text>
          </Item>

          <Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter your address!" }]}
          >
            <Input
              placeholder="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setAddressValidation("");
              }}
            />
            <Text type="danger">{addressValidation}</Text>
          </Item>
        </Form>

        <Typography.Title level={3}>
          Total Amount: ${totalPrice.toFixed(2)}
        </Typography.Title>
      </Modal>

      <Modal
        visible={orderSuccess}
        onOk={handleSuccessSubmit}
        onCancel={handleCancel}
        title="Order Successfully Placed"
        footer={[
          <Button key="ok" type="primary" onClick={handleSuccessSubmit}>
            OK
          </Button>,
        ]}
      >
        Your order has been successfully placed!
      </Modal>
    </div>
  );
}
