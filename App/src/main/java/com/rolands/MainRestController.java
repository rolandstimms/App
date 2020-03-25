package com.rolands;


import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.rolands.service.calc.CalcService;

@RestController
public class MainRestController {

    @RequestMapping(value = "/calc/parse", method = RequestMethod.POST)
    public String getString(@RequestBody String payload) throws Exception {

        CalcService cs = new CalcService();
        String response = cs.calculate(payload);
        return response;
    }
//    @PostMapping(
//            value = "/createPerson", consumes = "application/json", produces = "application/json")
//    public Person createPerson(@RequestBody Person person) {
//        return personService.saveUpdatePerson(person);
//    }
}
