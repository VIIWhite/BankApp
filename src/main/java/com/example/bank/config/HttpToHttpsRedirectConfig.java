//package com.example.bank.config;
//
//import org.springframework.boot.web.server.ConfigurableWebServerFactory;
//import org.springframework.boot.web.server.WebServerFactoryCustomizer;
//import org.springframework.context.annotation.Configuration;
//
//import javax.servlet.*;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Configuration
//public class HttpToHttpsRedirectConfig implements WebServerFactoryCustomizer<ConfigurableWebServerFactory>, Filter {
//
//    @Override
//    public void customize(ConfigurableWebServerFactory factory) {
//        factory.setPort(8080); // HTTP port for redirection
//    }
//
//    @Override
//    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
//        HttpServletRequest request = (HttpServletRequest) req;
//        HttpServletResponse response = (HttpServletResponse) res;
//
//        if (request.getScheme().equals("http")) {
//            String secureUrl = "https://" + request.getServerName() + request.getRequestURI();
//            if (request.getQueryString() != null) {
//                secureUrl += "?" + request.getQueryString();
//            }
//            response.sendRedirect(secureUrl);
//        } else {
//            chain.doFilter(req, res);
//        }
//    }
//
//    @Override
//    public void init(FilterConfig filterConfig) throws ServletException {
//    }
//
//    @Override
//    public void destroy() {
//    }
//}
