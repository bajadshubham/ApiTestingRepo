Feature: Validating Place API's

@AddPlace
Scenario Outline: Verify if place is being successfully added  using AddPlaceAPI
	Given Add Place Payload "<name>"	"<language>"	"<address>"
	When user calls "AddPlaceAPI" with "Post" http request
	Then the API call is success with status code 200
	And "status" in response body is "OK"
	And "scope" in response body is "APP"
	And verify place_Id created maps to "<name>" using "getPlaceAPI"
	
Examples:
	|name 	 | language | address			 |
	|AAhouse | English  | World cross center |
	|BBhouse | Spanish  | Sea cross center   |

@DeletePlace	
Scenario: Verify if delete place functionality is working
	Given DeletePlace Payload
	When user calls "deletePlaceAPI" with "Post" http request
	Then the API call is success with status code 200
	And "status" in response body is "OK"