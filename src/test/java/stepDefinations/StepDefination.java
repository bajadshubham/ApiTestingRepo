package stepDefinations;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.*;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import pojo.AddPlace;
import pojo.Location;
import resources.APIResources;
import resources.TestDataBuild;
import resources.Utils;

public class StepDefination extends Utils {

	RequestSpecification requestInfo;
	ResponseSpecification response;
	Response responseInfo;
	TestDataBuild data = new TestDataBuild();
	static String place_id;

	@Given("Add Place Payload {string}	{string}	{string}")
	public void add_Place_Payload(String name, String language, String address) throws IOException {

		// build() is use to create a request based on pass params

		requestInfo = given().spec(requestSpecification()).body(data.addPlacePayload(name, language, address));
	}

	@When("user calls {string} with {string} http request")
	public void user_calls_with_Post_http_request(String resource, String method) {

		APIResources resourceAPI = APIResources.valueOf(resource);
		System.out.println(resourceAPI.getResource());

		response = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();

		if (method.equalsIgnoreCase("Post")) {
			responseInfo = requestInfo.when().post(resourceAPI.getResource());

		} else if (method.equalsIgnoreCase("Get")) {
			responseInfo = requestInfo.when().get(resourceAPI.getResource());
		}
	}

	@Then("the API call is success with status code {int}")
	public void the_API_call_is_success_with_status_code(int expectedStatus) {
		assertEquals(responseInfo.getStatusCode(), expectedStatus);
	}

	@Then("{string} in response body is {string}")
	public void in_response_body_is(String key, String Expectedvalue) {
		assertEquals(getJsonPath(responseInfo, key), Expectedvalue);
	}

	@Then("verify place_Id created maps to {string} using {string}")
	public void verify_place_Id_created_maps_to_using(String expectedName, String resource) throws IOException {
		place_id = getJsonPath(responseInfo, "place_id");
		requestInfo = given().spec(requestSpecification()).queryParam("place_id", place_id);
		user_calls_with_Post_http_request(resource, "GET");
		String actualName = getJsonPath(responseInfo, "name");
		assertEquals(actualName, expectedName);
	}
	
	@Given("DeletePlace Payload")
	public void deleteplace_Payload() throws IOException {
		requestInfo = given().spec(requestSpecification()).body(data.deletePlacePayload(place_id));
	}
}
