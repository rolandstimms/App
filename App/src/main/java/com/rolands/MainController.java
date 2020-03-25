package com.rolands;

import com.rolands.service.calc.AddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@Controller
public class MainController {

    @RequestMapping("")
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response) {

        ModelAndView mv = new ModelAndView();
        mv.setViewName("index");
        return mv;
    }


    @RequestMapping("/adding")
    public ModelAndView adding() { // add() calls action related page
        ModelAndView mv = new ModelAndView();
        mv.setViewName("Calculate/adding");
        return mv;
    }

    @RequestMapping("/calc")
    public ModelAndView calc() { // add() calls action related page
        ModelAndView mv = new ModelAndView();
        mv.setViewName("Calculate/calculator");
        return mv;
    }

    @RequestMapping("/add")
    public ModelAndView addedView(HttpServletRequest request, HttpServletResponse response) { // add() calls action related page
        int i = Integer.parseInt(request.getParameter("t1"));
        int j = Integer.parseInt(request.getParameter("t2"));
        AddService as = new AddService();
        int k = as.add(i, j);

        ModelAndView mv = new ModelAndView();
        mv.setViewName("Calculate/display");
        mv.addObject("result", k);
        return mv;

    }

    @RequestMapping(value = "/hello", method= RequestMethod.GET)
    public String helloView(ModelMap model, HttpServletResponse response) {

        model.addAttribute("message", "Hello Roland! It Works SomeWhat");

        return  "Hello/hello";
    }

    @RequestMapping("/swag")
    public ModelAndView swaggerView() { // add() calls action related page
        ModelAndView mv = new ModelAndView();
        mv.setViewName("Swagger/mainSwagger");
        return mv;
    }

    @RequestMapping("/competition")
    public ModelAndView competitionView() { // add() calls action related page
        ModelAndView mv = new ModelAndView();
        mv.setViewName("Competition/competition");
        return mv;
    }
    @RequestMapping("/create_event")
    public ModelAndView createCompetitionView() { // add() calls action related page
        ModelAndView mv = new ModelAndView();
        mv.setViewName("Competition/competition");
        return mv;
    }
    @RequestMapping("/browse_event")
    public ModelAndView ompetitionView() { // add() calls action related page
        ModelAndView mv = new ModelAndView();
        mv.setViewName("Competition/competition");
        return mv;
    }

}
