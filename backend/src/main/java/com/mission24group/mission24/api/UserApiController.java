package com.mission24group.mission24.api;

import com.mission24group.mission24.auth.PrincipalDetails;
import com.mission24group.mission24.domain.Role;
import com.mission24group.mission24.domain.User;
import com.mission24group.mission24.dto.UserJoinDto;
import com.mission24group.mission24.repository.ClubRepository;
import com.mission24group.mission24.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserApiController {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ClubRepository clubRepository;


    @PostMapping("/api/join")
    public Long join(@RequestBody UserJoinDto userJoinDto) {
        User user = new User(userJoinDto.getEmail(), userJoinDto.getPassword(), userJoinDto.getUsername());
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setPassword(encPassword);
        user.setRole(Role.ROLE_USER);
        userRepository.save(user);
        return user.getId();
    }

    @GetMapping("/api/user")
    public Map<String, Object> userInfo(@AuthenticationPrincipal PrincipalDetails principalDetails){
        System.out.println("principalDetails = " + principalDetails); // 소셜로그인 or 일반로그인을 해도 출력됨.
        // 일반로그인시: principalDetails = PrincipalDetails(user=User(id=3, username=ko2), attributes=null)
        User user = principalDetails.getUser();
        String username = user.getUsername();
        String email = user.getEmail();
        String name = user.getUsername();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("username", username);
        map.put("email", email);
        System.out.println("map = " + map); // map = {email=ko2@naver.com, username=ko2}
        return map;
    }
}
