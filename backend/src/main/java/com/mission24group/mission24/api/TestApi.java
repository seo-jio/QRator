package com.mission24group.mission24.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestApi {
    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }

}
