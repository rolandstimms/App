package com.rolands;


import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MainRestController {

    @RequestMapping(value = "/calc/parse", method = RequestMethod.POST)
    public String getString(@RequestBody String payload) throws Exception {

        System.out.println(payload);
        JSONObject root = new JSONObject(payload);

        double one = root.getDouble("num_one");
        double two = root.getDouble("num_two");
        String op = root.getString("operation");
        String hist = root.getString("history");

        double result = 0;
        String sign = "";

        if (op.equals("add")) {

            result = one + two;
            sign = "+";
        } else if (op.equals("sub")) {

            result = one - two;
            sign = "-";
        } else if (op.equals("mul")) {

            result = one * two;
            sign = "*";
        } else if (op.equals("div")) {

            result = one / two;
            sign = "/";
        }




        String newHist = "";
        if (hist.length() < 1) { newHist = one + " " + sign + " " + two; }
        else { newHist = hist + " " + sign + " " + two;}


        //root.getJSONArray();
//        String message;
//        JSONObject json = new JSONObject();
//        json.put("name", "student");
//
//        JSONArray array = new JSONArray();
//        JSONObject item = new JSONObject();
//        item.put("information", "test");
//        item.put("id", 3);
//        item.put("name", "course1");
//        array.put(item);
//        json.put("course", array);
//        message = json.toString();

        JSONObject responseJSON = new JSONObject();
        responseJSON.put("result", result);
        responseJSON.put("history", newHist);
        String response = responseJSON.toString();

        return response;
    }
//    @PostMapping(
//            value = "/createPerson", consumes = "application/json", produces = "application/json")
//    public Person createPerson(@RequestBody Person person) {
//        return personService.saveUpdatePerson(person);
//    }
}
