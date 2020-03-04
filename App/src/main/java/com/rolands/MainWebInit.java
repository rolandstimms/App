package com.rolands;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class MainWebInit extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses(){
            return null;
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {

        return new Class[] {MainConfig.class};
    }
    @Override
    protected String[] getServletMappings() {

        return new String[] {"/"};
    }

}
