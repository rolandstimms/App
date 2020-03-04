package com.rolands;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

    @RequestMapping("/add")
    public ModelAndView addedView(HttpServletRequest request, HttpServletResponse response) { // add() calls action related page
        int i = Integer.parseInt(request.getParameter("t1"));
        int j = Integer.parseInt(request.getParameter("t2"));
        int k = i + j;

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

}
