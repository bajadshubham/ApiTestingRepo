package stepDefinations;

import java.io.IOException;

import io.cucumber.java.Before;

public class Hooks {
	
	
	
	// hooks is use to mention precondition or post condition methods
	@Before("@DeletePlace")
	public void beforeScenario() throws IOException {
		// write a code to create place id
		// write a code to extract place id
		
		StepDefination m = new StepDefination();
		if(StepDefination.place_id==null) {
		m.add_Place_Payload("shetty", "french", "Asia");
		m.user_calls_with_Post_http_request("AddPlaceAPI","Post");
		m.verify_place_Id_created_maps_to_using("shetty","getPlaceAPI");
		}
	}

}
