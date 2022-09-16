$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/PlaceValidation.feature");
formatter.feature({
  "name": "Validating Place API\u0027s",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if place is being successfully added  using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddPlace"
    }
  ]
});
formatter.step({
  "name": "Add Place Payload \"\u003cname\u003e\"\t\"\u003clanguage\u003e\"\t\"\u003caddress\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify place_Id created maps to \"\u003cname\u003e\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "language",
        "address"
      ]
    },
    {
      "cells": [
        "AAhouse",
        "English",
        "World cross center"
      ]
    },
    {
      "cells": [
        "BBhouse",
        "Spanish",
        "Sea cross center"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if place is being successfully added  using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddPlace"
    }
  ]
});
formatter.step({
  "name": "Add Place Payload \"AAhouse\"\t\"English\"\t\"World cross center\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.add_Place_Payload(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_Post_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify place_Id created maps to \"AAhouse\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_place_Id_created_maps_to_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if place is being successfully added  using AddPlaceAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddPlace"
    }
  ]
});
formatter.step({
  "name": "Add Place Payload \"BBhouse\"\t\"Spanish\"\t\"Sea cross center\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.add_Place_Payload(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"AddPlaceAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_Post_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify place_Id created maps to \"BBhouse\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.verify_place_Id_created_maps_to_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if delete place functionality is working",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeletePlace"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "DeletePlace Payload",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.deleteplace_Payload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"deletePlaceAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_Post_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
});