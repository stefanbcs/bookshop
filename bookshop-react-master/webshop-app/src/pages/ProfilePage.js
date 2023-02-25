import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import EditProfileModal from "../components/EditProfileModal";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../css/ProfilePage.css";
import { BASE_URL } from "../Constants";

function ProfilePage() {
    const [modalShow, setModalShow] = useState(false);
    const [user, setUser] = useState(null);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);

    let logged_in = false;
    let user_id = localStorage.getItem("user_id");

    if (user_id) {
        logged_in = true;
    }

    useEffect(() => {
        if (user_id && logged_in) {
            getProfile();
        }

        const cartItems = JSON.parse(localStorage.getItem("items"));
        let counter = 0;
        if (cartItems) {
            for (let i = 0; i < cartItems.length; i++) {
                counter = counter + cartItems[i].quantity;
            }
            setCartItemsNumber(counter);
        }
    }, []);

    const getProfile = () => {
        fetch(`${BASE_URL}/users/${user_id}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            });
    };

    return (
        <>
            <NavbarComponent cartItemsNumber={cartItemsNumber} />
            <>
                <div
                    className="container d-flex flex-column align-items-center mt-5 pt-5"
                    id="container"
                >
                    {logged_in && user ? (
                        <>
                            <h3 className="main-title">
                                <u>Your Profile</u>
                            </h3>
                            <dl className="profile mt-3">
                                <dt>
                                    <strong>Name: </strong>
                                </dt>
                                <dd>{user.name}</dd>
                                <dt>
                                    <strong>Email: </strong>
                                </dt>
                                <dd>{user.email}</dd>
                                {user.address.street ? (
                                    <>
                                        <dt>
                                            <strong>Address: </strong>
                                        </dt>
                                        <dd>
                                            {user.address.street + " street"},{" "}
                                            {user.address.suite},
                                            {user.address.zipcode},{" "}
                                            {user.address.city}
                                        </dd>
                                    </>
                                ) : (
                                    <>
                                        <dt>
                                            <strong>Address: </strong>
                                        </dt>
                                        <dd>
                                            You didn't saved an address yet.
                                        </dd>
                                    </>
                                )}
                                {user.phone ? (
                                    <>
                                        <dt>
                                            <strong>Phone number: </strong>
                                        </dt>
                                        <dd>{user.phone}</dd>
                                    </>
                                ) : (
                                    <>
                                        <dt>
                                            <strong>Phone number: </strong>
                                        </dt>
                                        <dd>
                                            You didn't saved a phone number yet.
                                        </dd>
                                    </>
                                )}
                            </dl>

                            <Button
                                variant="outline-danger"
                                onClick={() => setModalShow(true)}
                            >
                                Edit Profile
                            </Button>
                            <EditProfileModal
                                id={user_id}
                                name={user.name}
                                username={user.username}
                                email={user.email}
                                password={user.password}
                                role={user.role}
                                street={user.address.street}
                                suite={user.address.suite}
                                city={user.address.city}
                                zipcode={user.address.zipcode}
                                phone={user.phone}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                getProfile={getProfile}
                            />
                        </>
                    ) : (
                        <>
                            <h3 className="main-title">
                                You are not logged in.
                            </h3>
                            <a href="/auth/login">Go to Login page</a>
                        </>
                    )}
                </div>
                <div className="profile-footer">
                    <FooterComponent />
                </div>
            </>
        </>
    );
}

export default ProfilePage;
