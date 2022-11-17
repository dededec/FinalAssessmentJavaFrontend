import Card from "../Card/Card";

function Form() {
	return (
		<Card>
			<div>
				<div class="mb-3 row">
					<label for="inputFirstName" class="col-sm-2 col-form-label">
						First Name
					</label>
					<div class="col-sm-10">
						<input name="firstName" class="form-control" id="inputFirstName" />
					</div>
				</div>
				<div class="mb-3 row">
					<label for="inputLastName" class="col-sm-2 col-form-label">
						Last Name
					</label>
					<div class="col-sm-10">
						<input name="lastName" class="form-control" id="inputPassword" />
					</div>
				</div>
			</div>
		</Card>
	);
}

export default Form;
