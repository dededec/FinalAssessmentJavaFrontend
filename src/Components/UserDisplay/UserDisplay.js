import Card from "../Card/Card";
import UserDisplayRow from "./UserDisplayRow";

function UserDisplay() {
    return (
        <Card>
            <div class="container">
                <UserDisplayRow/>
                <UserDisplayRow/>
                <UserDisplayRow/>
                <UserDisplayRow/>
            </div>
        </Card>
    );
}

export default UserDisplay;