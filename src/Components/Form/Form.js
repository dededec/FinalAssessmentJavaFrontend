import Card from "../Card/Card";
import Input from "./Input";

function Form() {
    return (
        <Card>
            <div>
                <div className="card-header">New User Form</div>
                <div className="card-body">
                    <Input id="inputFirstName" var="firstName" name="First Name"/>
                    <Input id="inputLastName" var="lastName" name="Last Name"/>
                    <Input id="inputPhoneNumber" var="phoneNumber" name="Phone number"/>
                    <Input id="inputEmail" var="email" name="Email"/>
                </div>
            </div>
        </Card>
    );
}

export default Form;