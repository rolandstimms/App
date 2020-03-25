package com.rolands;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@Controller
@RequestMapping("/db")
public class dbController {

//    @Autowired
//    DataSource dataSource;
//    @RequestMapping("/db")
//    String getEvents(ModelMap model) {
//        String name = null;
//        try {
//
//
//            Connection connection = dataSource.getConnection();
//            Statement statement = connection.createStatement();
//            ResultSet resultSet = statement.executeQuery("Select  * from Events");
//            while (resultSet.next()) {
//                name = resultSet.getString("evName");
//            }
//            connection.close();
//        } catch (SQLException e) {
//
//            e.printStackTrace();
//        }
//        model.addAttribute("name", name);
//        return "Competition/competition";
//
//    }

}
